<script setup lang="ts">
const router = useRouter();
const baseUrl = ref<string>('http://127.0.0.1:8000');

interface FormData {
    MobileNumber: string;
    password: string;
}
const formData = ref<FormData>({
    MobileNumber: '',
    password: ''
});

//  Condition data
const valid_no = ref<boolean>(true);
const valid_pass = ref<boolean>(true);
const fetching = ref<boolean>(false);
const authError = ref<boolean>(false);

interface AuthApiRes {
    authtoken?: string;
    non_field_errors?: string[];
}

const dataResponse = ref<AuthApiRes>({
    authtoken: '',
    non_field_errors: []
})

const fetchToken = async () => {
    fetching.value = true;
    const formdata: FormData = {
        MobileNumber: formData.value.MobileNumber,
        password: formData.value.password
    }
    valid_no.value = true;
    valid_pass.value = true;
    await fetch(`${baseUrl.value}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formdata),
    })
    .then((response) => {
        if (response.status !== 200) {
            authError.value = true;
        }
        return response.json();
    })
    .then(data => {
        dataResponse.value.authtoken = data;
        fetching.value = false;
        router.push('/');
    })
    .catch((error) => {
        dataResponse.value.non_field_errors = error;
        fetching.value = false;
    })
}

const submitForm = (): void | undefined => {
    if (formData.value.MobileNumber.trim().length === 0) {
        valid_no.value = false;
        return;
    }
    if (formData.value.password.trim().length === 0) {
        valid_pass.value = false;
        return;
    }
    fetchToken();
}

const closeErrorModal = (): void => {
    authError.value = !authError.value;
}

</script>

<template>
    <div class="container">
        <div class="logo">
            <img src="@/assets/img/logo-img-removebg-preview.png" alt="">
        </div>
        <div class="title">
            <h3>Login to Nipate</h3>
        </div>
        <transition name="error-popup">
            <div class="error-container" v-if="authError">
                <h3>you entered incorrect number or password</h3>
                <div class="i-mdi-close cursor-pointer hover:scale-125" @click="closeErrorModal" />
            </div>
        </transition>
        <div class="input-fields cursor-not-allowed">
            <div class="input-field">
                <label for="number">Mobile number</label>
                <input type="text" id="number" :class="valid_no ? 'border-zinc-300' : 'border-red-400'" v-model="formData.MobileNumber">
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" :class="valid_pass ? 'border-zinc-300' : 'border-red-400'" v-model="formData.password">
            </div>
            <div class="btn-field">
                <button :class="fetching && 'skeleton-loading'" @click="submitForm">Log In</button>
            </div>
        </div>
        <div class="register-container">
            <h3>New to Nipate?</h3>
            <a href="#">Create account.</a>
        </div>
    </div>
</template>

<style>

.error-popup-enter-from{
  opacity: 0;
  transform: translateY(-10px);
}

.error-popup-enter-active , .error-popup-leave-active {
  transition: all 0.4s;
}
.error-popup-enter , .error-popup-leave-to {
  opacity: 0;
}

@tailwind components;
@tailwind utilities;

@layer components {
    .container {
        @apply w-[280px] md:w-[320px] lg:w-[400px] min-h-[40%] absolute top-[6%] flex items-center flex-col;
    }
    .container .logo {
        @apply w-full h-[3.5rem] flex justify-center items-center;
    }
    .container .logo img {
        @apply w-[3.4rem] h-[3rem];
    }
    .container .title {
        @apply w-full h-[2rem] flex items-center justify-center text-xl font-semibold mt-1;
    }
    .container .input-fields {
        @apply mt-4 w-[300px] md:w-[320px] lg:w-[400px] min-h-[5rem] gap-2 rounded flex flex-col border border-neutral-200 p-3;
    }
    .container .input-fields .input-field {
        @apply w-full flex flex-col gap-1;
    }
    .input-fields .input-field label {
        @apply text-[0.95rem] italic md:ml-3;
    }
    .input-fields .input-field input {
        @apply w-full h-[2.1rem] border-2 outline-none rounded px-2 text-blue-900 tracking-wider bg-slate-50;
        transition: border 200ms ease;
    }
    .input-fields .input-field input:focus {
        @apply border-green-300;
    }
    .input-fields .btn-field {
        @apply flex items-center justify-center w-full mt-4;
    }
    .input-fields .btn-field button {
        @apply bg-orange-500 text-white w-[98%] hover:bg-orange-600 hover:scale-x-100;
        transition: background-color 200ms ease;
    }
    .container .register-container {
        @apply w-[300px] md:w-[320px] lg:w-[400px] rounded border border-neutral-200 min-h-[3rem] mt-8;
        @apply text-sm tracking-wide p-3 flex items-center justify-center gap-1;
    }
    .container .register-container a {
        @apply text-blue-500 font-bold;
    }
    .skeleton-loading {
        animation: skeleton 1s linear infinite alternate;
    }
    @keyframes skeleton {
        to {
            @apply bg-orange-300;
        }
        
    }
    .error-container {
        @apply w-[300px] md:w-[320px] lg:w-[400px] h-[3.4rem] rounded border border-red-400 mt-1;
        @apply flex items-center justify-center flex-row gap-3;
    }
    .error-container h3 {
        @apply text-sm italic text-red-500;
    }
}


</style>