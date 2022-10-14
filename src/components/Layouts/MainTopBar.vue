<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import MainDropDown from './MainDropDown.vue';


const router = useRouter();
const storeauth = useAuthentications();
const { Authenticated } = storeToRefs(storeauth);

// Condition data
const dropdownaccount = ref<boolean>(false);

const toggleDropDownAccount = (): void => {
    dropdownaccount.value = !dropdownaccount.value;
}

const reDirectToUserAccount = (): void => {
    if(Authenticated.value) {
        router.push({ name: 'User' });
    } else {
        router.push({name: 'Login', query: { redirect: '/account/me' }});
    }
}

const logoutUser = (): void => {
    console.log("Auth status:", storeauth.Authenticated);
    
    storeauth.updateUser({
        MobileNumber: null, FirstName: null, Auth_token: null,
        LastName: null
    })
    // Authenticated.value = false;
    localStorage.removeItem("Nipate_user_data");
    console.log("Auth status 2nd:", storeauth.Authenticated);
    window.location.reload();   
}

</script>
<template>
    <header class="w-full h-full flex flex-col bg-gray-50 relative">
        <div class="top-nav">
            <div class="top-left-nav">
                <img src="../../assets/Logo/Vector.svg" alt="logo">
                <img src="../../assets/Logo/Nipate.svg" alt="logo">
            </div>
            <div class="top-right-nav">
                <!-- <small>New to this site?</small> -->
                <Transition name="slide" mode="out-in">
                    <div v-if="!Authenticated" class="flex flex-row items-center gap-1.5 sm:gap-3 transition-pad">
                        <button class="bg-orange-400 text-slate-100 font-serif hover:bg-orange-500">
                            <router-link class="block" :to="{name: 'Register'}" >Register</router-link>
                        </button>
                        <small>or</small>
                        <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                            <router-link class="block" :to="{name: 'Login'}" >Login</router-link>
                        </button>
                    </div>
                    <div v-else>
                        <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800" @click="logoutUser">
                            Logout
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="bottom-nav relative">
            <div class="bottom-left-nav px-1 flex items-center flex-row">
                <MainDropDown />
            </div>
            <div class="bottom-right-nav flex flex-row gap-x-6 items-center justify-between">
                <!-- <MainDropDown /> -->
                <div class="account relative">
                    <div class="account-btn flex flex-row items-center gap-x-0.5 relative cursor-pointer" @click="toggleDropDownAccount">
                        <small class="text-sm sm:text-base font-light">My Account</small>
                        <div class="user-avatar ml-2 p-0.5 sm:p-1 rounded-md bg-gray-200">
                            <div class="i-mdi-account-outline text-2xl text-slate-500"></div>
                        </div>
                    </div>
                    <Transition name="pop-up">
                        <div v-if="dropdownaccount"
                            class="account-drop-down flex flex-col gap-y-2.5 py-2 absolute top-[145%] right-0 min-h-[4rem] w-[15rem] xs:w-[18rem] shadow-md bg-gray-50 rounded"
                        >
                            <div class="top-drop-down absolute shadow-lg -z-10 right-3 -top-2 w-4 h-4 rotate-45 bg-gray-200"></div>
                            <div class="user-client flex flex-row items-center gap-x-3 py-1.5 px-2 hover:bg-gray-100 cursor-pointer">
                                <div class="user-avatar p-1.5 rounded-md bg-gray-200">
                                    <div class="i-mdi-account-outline text-2xl text-slate-500"></div>
                                </div>
                                <div class="user-details flex flex-col gap-y-0">
                                    <small class="text-sm text-slate-600">Amos Kipyegon</small>
                                    <small class="text-slate-600 text-xs">provider</small>
                                </div>
                            </div>
                            <div class="register-provider text-slate-600 flex flex-row items-center gap-x-3 py-2 px-2 hover:bg-gray-100 cursor-pointer">
                                <div class="i-mdi-sign-in text-xl"></div>
                                <small class="text-base tracking-wide font-light">Register as User</small>
                            </div>
                            <div class="register-provider text-slate-600 flex flex-row items-center gap-x-3 py-2 px-2 hover:bg-gray-100 cursor-pointer">
                                <div class="i-mdi-tools text-xl"></div>
                                <small class="text-base tracking-wide font-light">Register as Provider</small>
                            </div>
                        </div>
                    </Transition>
                </div>
                <ul class="flex flex-row items-center gap-4">
                    <li @click="reDirectToUserAccount">
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>

.top-nav {
    @apply py-2.5 sm:py-2 flex flex-row justify-between w-full border-b border-gray-200 px-[8px] lg:px-[78px] transition-all duration-300;
}
.top-nav .top-left-nav {
    @apply flex items-center flex-row py-0.5;
}
.top-nav .top-left-nav img {
    @apply max-w-[4.8rem] sm:max-w-[5.8rem] min-w-[3rem] sm:min-w-[3.5rem] h-[2rem] sm:h-[2.5rem] last:mt-1 transition-all duration-300;
}

.top-nav .top-right-nav {
    @apply py-0.5 flex flex-row items-center gap-1.5 sm:gap-3;
    transition: padding 300ms ease , gap 300ms ease;
}
.top-nav .top-right-nav small {
    @apply text-slate-400 text-xs tracking-wide;
}
.top-nav .top-right-nav button {
    @apply py-1 px-3 border rounded text-base;
    transition: background-color 300ms ease, border 300ms ease;
}

.bottom-nav {
    @apply py-4 flex flex-row items-center justify-between shadow-sm px-1 sm:px-[10px] lg:px-[78px];
    transition: padding 300ms ease;
}
.bottom-nav button {
    transition: background-color 300ms ease;
}
.bottom-left-nav li {
    @apply text-[#014451] px-1 text-base font-bold hover:text-steelblue cursor-pointer;
    @apply flex items-center flex-row truncate gap-1 transition-colors duration-200;
}


.account-btn:hover small , .account-btn:hover .i-mdi-account-outline {
    @apply text-steelblue
}

.pop-up-enter-from {
    @apply -translate-y-2 opacity-5;
}
.pop-up-enter-active {
    transition: opacity 200ms ease , transform 300ms ease;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}
</style>