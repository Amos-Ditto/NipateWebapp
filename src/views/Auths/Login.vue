<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import type UserTokenDetails from '../../Types/UserFetch';



const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const route = useRoute();
const storeauth = useAuthentications();

interface FormData {
    MobileNumber: string
    password: string
}
const login_formdata = ref<FormData>({
    MobileNumber: '', password: ''
})

interface Error {
    error?: string[]
    MobileNumber?: string[]
    password?: string[]
}

const userfetcheddata = ref<UserTokenDetails>({
    MobileNumber: '', FirstName: '', LastName: '', Auth_token: ''
});

const errors = ref<Error>();
// Conditional errors
const validno = ref<boolean>(false);
const validpass = ref<boolean>(false);
const submitstatus = ref<boolean>(false);

const see_password = ref<boolean>(false);

const mobilenumber_errormsg = ref<string>('Please enter a valid Mobile Number');
const password_errormsg = ref<string>('Invalid user creditentials');

const formLoginSubmit = async (type: void) => {
    if(login_formdata.value.MobileNumber.length !== 10) {
        mobilenumber_errormsg.value = 'Please enter a valid Mobile Number';
        validno.value = true;
        return;
    }
    submitstatus.value = true;
    const response = await fetch(`${base_url}auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            MobileNumber: '254' + login_formdata.value.MobileNumber.slice(1),
            password: login_formdata.value.password
        })
    })
    submitstatus.value = false;
    if(response.ok) {
        userfetcheddata.value = await response.json();
        storeauth.updateUser(userfetcheddata.value);
        // Save User to LocalStorage
        localStorage.setItem("Nipate_user_data", JSON.stringify(userfetcheddata.value));
        checkUserDetails(userfetcheddata.value.Auth_token);
        router.push(route.query.redirect as string || { name: 'Dashboard' })
        
    } else {
        errors.value = await response.json();
        if(errors.value?.error) {
            validno.value = true; validpass.value = true;
            password_errormsg.value = errors.value.error[0];
            mobilenumber_errormsg.value = errors.value.error[0]
        }
    }
    
}

const checkUserDetails = async (auth_token: string): Promise<void> => {
  await fetch(`${base_url}provider/status`, {
    method: 'GET',
    headers: {
      "Authorization": auth_token || ""
    }
  })
  .then(async response => {
    storeauth.updateAuthentication(true);
    storeauth.updateUserDetails(await response.json());
    
  })
  .catch(error => { console.log(error) })
}

</script>
<template>
    <section class="w-full flex items-center justify-center flex-col px-2 sm:px-8 transition-pad duration-300">
        <form @submit.prevent="formLoginSubmit()" class="w-full md:w-[600px] px-2 pt-16 sm:pt-8 pb-4 flex flex-col items-center justify-center">
            <h3 class="text-[#346974] text-3xl sm:text-2xl font-light transition-font duration-300">Login to your Account</h3>
            <div class="input-fields flex flex-col justify-center items-center w-full gap-y-8 pt-16">
                <div class="input-field w-[94%] sm:w-[75%] flex flex-col justify-start gap-y-1.5 transition-width duration-300">
                    <label for="phone" class="text-[#346974] text-sm font-semibold">Mobile Number</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <div class="phone-icon-label px-2 py-2 bg-slate-50 border border-gray-300 w-[20%] rounded-l flex flex-row items-center justify-center gap-x-1 opacity-90">
                            <img src="../../assets/bgImg/Flag-of-Kenya.svg" alt="ke" class="w-[1.2rem] h-[1rem]">
                            <small class="tracking-wide text-sm text-slate-700 font-serif">+254</small>
                        </div>
                        <input type="text" name="phone" id="phone" required
                            class="w-[80%] rounded-r placeholder:text-slate-500" placeholder="eg 0712345678"
                            v-model="login_formdata.MobileNumber" @input="validno = false"
                        >
                    </div>
                    <div class="error-status w-full px-0.5 flex flex-row justify-start items-center gap-x-2" v-if="validno">
                        <div class="i-mdi-alert-outline text-orange-400 text-lg"></div>
                        <small class="text-sm text-orange-400">{{mobilenumber_errormsg}}</small>
                    </div>
                </div>
                <div class="input-field w-[94%] sm:w-[75%] flex flex-col justify-start gap-y-1.5 transition-width duration-300">
                    <label for="password" class="text-[#346974] text-sm font-semibold">Password</label>
                    <div class="input w-full relative flex items-center">
                        <input :type="see_password ? 'text' : 'password'" id="password" class="w-full rounded" required v-model="login_formdata.password" @input="validpass = false">
                        <div class="show-password absolute right-2 p-4 sm:py-3 cursor-pointer" @click="see_password = !see_password">
                            <Transition name="slide" mode="out-in">
                                <div class="i-mdi-eye-off text-slate-600" v-if="see_password"></div>
                                <div class="i-mdi-eye text-slate-600" v-else="see_password"></div>
                            </Transition>
                        </div>
                    </div>
                    <div class="error-status w-full px-0.5 flex flex-row justify-start items-center gap-x-2" v-if="validpass">
                        <div class="i-mdi-alert-outline text-orange-400 text-lg"></div>
                        <small class="text-sm text-orange-400">{{password_errormsg}}</small>
                    </div>
                </div>
            </div>
            <div class="submit-btn w-[94%] sm:w-[75%] pt-8 pb-4 flex items-center transition-width duration-300">
                <button type="submit"
                    class="min-w-[9.2rem] px-12 py-2 text-lg font-bold tracking-wide text-slate-100 bg-orange-600 rounded \
                     hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center"
                >
                    <Transition name="slide" mode="out-in">
                        <span v-if="!submitstatus">Login</span>
                        <span class="loader" v-else="submitstatus" ></span>
                    </Transition>
                </button>
            </div>
            <div class="create-new w-[94%] sm:w-[75%] pt-6 sm:pt-4 pb-2 flex flex-row gap-x-2 items-center transition-width duration-300">
                <span class="text-[#346974] text-sm">Don't have an account?</span>
                <router-link :to="{name: 'Register'}" class="text-[#346974] font-bold font-sans hover:text-orange-500 transition-colors duration-300">Create Now</router-link>
            </div>
        </form>
    </section>
</template>

<style scoped>

input {
    @apply py-2 bg-gray-100 border border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}

.loader {
    width: 28px;
    height: 28px;
    /* border: 3px solid #FFF;
    border-bottom-color: #abc; */
    @apply border-[5px] border-slate-100 border-b-gray-400;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>