<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import MainDropDown from './MainDropDown.vue';


const router = useRouter();
const storeauth = useAuthentications();
const opendropdown = ref<boolean>(false);

const reDirectToUserAccount = (): void => {
    if(storeauth.Authenticated) {
        router.push({ name: 'User' });
    } else {
        router.push({name: 'Login', query: { redirect: '/account/user/home' }});
    }
}

</script>
<template>
    <header class="w-full h-full flex flex-col bg-gray-100 relative">
        <div class="top-nav">
            <div class="top-left-nav">
                <img src="../../assets/Logo/Vector.svg" alt="logo">
                <img src="../../assets/Logo/Nipate.svg" alt="logo">
            </div>
            <div class="top-right-nav">
                <!-- <small>New to this site?</small> -->
                <Transition name="slide" mode="out-in">
                    <div v-if="storeauth.Authenticated">
                        <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                            Logout
                            <!-- <router-link class="block" :to="{name: 'Login'}" >Logout</router-link> -->
                        </button>
                    </div>
                    <div v-else="storeauth.Authenticated" class="flex flex-row items-center gap-1.5 sm:gap-3 transition-pad">
                        <button class="bg-orange-400 text-slate-100 font-serif hover:bg-orange-500">
                            <router-link class="block" :to="{name: 'Register'}" >Register</router-link>
                        </button>
                        <small>or</small>
                        <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                            <router-link class="block" :to="{name: 'Login'}" >Login</router-link>
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="bottom-nav relative">
            <div class="bottom-left-nav px-1 flex items-center flex-row">
                <MainDropDown />
                <!-- <button class="px-1 py-0.5 border border-gray-300 rounded hover:bg-gray-200" @click="opendropdown = !opendropdown">
                    <div class="i-mdi-menu text-slate-600 text-2xl" v-if="!opendropdown"></div>
                    <div class="i-mdi-close text-slate-600 text-2xl" v-else="opendropdown"></div>
                </button> -->
            </div>
            <div class="bottom-left-nav flex flex-row gap-x-6 items-center justify-between">
                <!-- <MainDropDown /> -->
                <ul class="flex flex-row items-center gap-4">
                    <li @click="reDirectToUserAccount">
                        <small class="text-sm sm:text-base font-bold hover:text-steelblue">My Account</small>
                        <div class="user-avatar ml-2 p-0.5 sm:p-1 rounded-md bg-gray-200">
                            <div class="i-mdi-account-outline text-2xl text-slate-500"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>

.top-nav {
    @apply py-2 sm:py-2 flex flex-row justify-between w-full border-b border-gray-200 px-[8px] lg:px-[78px] transition-all duration-300;
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
    @apply py-4 flex flex-row items-center justify-between shadow-sm px-[10px] lg:px-[78px];
    transition: padding 300ms ease;
}
.bottom-nav button {
    transition: background-color 300ms ease;
}
.bottom-left-nav li {
    @apply text-[#014451] px-1 text-base font-bold hover:text-steelblue cursor-pointer;
    @apply flex items-center flex-row truncate gap-1 transition-colors duration-200;
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