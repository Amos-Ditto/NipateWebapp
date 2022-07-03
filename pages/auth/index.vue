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
    authError.value = false;
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
            return;
        }
        return response.json();
    })
    .then(data => {
        fetching.value = false;
        if (authError.value === true) {
            console.log(data);
            
        }
        if (authError.value === false) {
            dataResponse.value.authtoken = data;
            router.push('/');
        }
    })
    .catch((error) => {
        console.log("retry");
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
    <div class="container w-[280px] md:w-[320px] lg:w-[400px] min-h-[40%] absolute top-[6%] flex items-center justify-center flex-col">
        <div class="logo w-full h-[3.5rem] flex justify-center items-center">
            <img src="@/assets/img/logo-img-removebg-preview.png" alt="logo" class="w-[3.4rem] h-[3rem]">
        </div>
        <div class="title w-full h-[2rem] flex items-center justify-center text-xl font-semibold mt-1">
            <h3>Login to Nipate</h3>
        </div>
        <transition name="error-popup">
            <div 
                class="error-container w-[300px] md:w-[320px] max-h-0 lg:w-[400px] rounded border border-red-400 mt-1
                    flex items-center justify-center flex-row gap-3 overflow-hidden" 
                v-if="authError"
                :class="authError && 'max-h-[3rem] py-4'"
            >
                <h3 class="text-sm italic text-red-500">you entered incorrect number or password</h3>
                <div class="i-mdi-close cursor-pointer hover:scale-125" @click="closeErrorModal" />
            </div>
        </transition>
        <div class="input-fields mt-4 w-[300px] md:w-[320px] lg:w-[400px] min-h-[5rem] gap-2 rounded flex flex-col border border-neutral-200 p-3">
            <div class="input-field">
                <label for="number">Mobile number</label>
                <input type="text" id="number" :class="valid_no ? 'border-zinc-300' : 'border-red-400'" v-model="formData.MobileNumber">
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input type="password" id="password" :class="valid_pass ? 'border-zinc-300' : 'border-red-400'" v-model="formData.password">
            </div>
            <div class="btn-field flex items-center justify-center w-full mt-4">
                <button 
                    class="bg-orange-500 text-white w-[98%] hover:bg-orange-600 hover:scale-x-100 relative flex items-center justify-center py-2 rounded-md text-base font-bold"
                    :class="fetching && 'skeleton-loading cursor-not-allowed'" @click="submitForm"
                >
                    Log In
                    <UtilsLoadingSpinner class=" scale-50 absolute top-[20%] right-[15%] w-1 h-1" :class="!fetching && 'hidden'" />
                </button>
            </div>
        </div>
        <div class="register-container">
            <h3>New to Nipate?</h3>
            <NuxtLink to="/auth/register" class="text-blue-500 font-bold">Create account.</NuxtLink>
        </div>
    </div>
</template>

<style scoped>


.error-popup-enter-active , .error-popup-leave-active {
    opacity: 1;
    transition: height 300ms ease, opacity 200ms ease, padding 300ms ease;
}
.error-popup-enter-from , .error-popup-leave-to {
    opacity: 0;
    padding: 0px 0px;
    height: 0px;
}

.error-container {
    line-height: 3rem;
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
.container .register-container {
    @apply w-[300px] md:w-[320px] lg:w-[400px] rounded border border-neutral-200 min-h-[3rem] mt-8;
    @apply text-sm tracking-wide p-3 flex items-center justify-center gap-1;
}
.skeleton-loading {
    animation: skeleton 1s linear infinite alternate;
}
@keyframes skeleton {
    to {
        @apply bg-orange-300;
    }
}

.input-fields .btn-field button {
    transition: background-color 200ms ease;
}

</style>