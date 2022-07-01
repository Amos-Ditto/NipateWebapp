<script setup lang="ts">

// transition data
const mobilenavbar = ref<boolean>(false);
const shownav = ref<boolean>(false);

// transition methods
const openMobileNavbar = ():void => {
    mobilenavbar.value = !mobilenavbar.value;
    shownav.value = !shownav.value;
};
</script>

<template>
    <div class="nav">
        <div class="left">
            <img src="@/assets/img/logo-removebg.png" alt="logo">

            <!-- wide screenlinks -->
            <div class="w-links">
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <div class="right">
            <div class="wide-screen">
                <div class="auth-btns">
                    <button class="w-login"><NuxtLink to="/auth">Log In</NuxtLink></button>
                    <button class="w-register"><NuxtLink to="/auth/register">Register</NuxtLink></button>
                </div>
            </div>

            <!-- mobile navbar toggle -->
            <div class="menu-button text-4xl sm:hidden cursor-pointer">
                <div class="i-mdi-menu" v-if="!mobilenavbar" @click="openMobileNavbar" />
                <div class="i-mdi-close" v-if="mobilenavbar" @click="openMobileNavbar" />
            </div>

        </div>

        <!-- This for mobile view -->
        <transition name="shownav">
            <div class="mobile-nav sm:hidden" v-if="shownav">
                <div class="container">
                    <div class="links">
                        <div class="link">Services</div>
                        <div class="link">Contact Us</div>

                    </div>
                    <button class="login"><NuxtLink to="/auth">Log In</NuxtLink></button>
                    <button class="register"><NuxtLink to="/auth/register">Register</NuxtLink></button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style>

.shownav-enter-from , .shownav-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
.shownav-enter-active, .shownav-leave-active {
    transition: transform 300ms ease, opacity 300ms ease;
}

@tailwind components;
@tailwind utilities;

@layer components {
    .nav {
        @apply w-full flex flex-row h-full items-center justify-between relative z-[999] px-4 text-slate-800;
    }
    .left {
        @apply h-full flex items-center gap-6 md:gap-8;
    }
    .left img {
        @apply w-[6rem] sm:w-[8.4rem] h-[60%] sm:h-[80%];
    }
    .mobile-nav {
        @apply absolute mt-[3.8rem] p-4 w-full min-h-[4vh] z-[-2] top-0 left-0 flex justify-center;
    }
    .mobile-nav .container {
        @apply w-full flex flex-col gap-2 items-center p-1 bg-slate-100 shadow;
    }
    .container .links {
        @apply flex justify-center items-center flex-col w-full gap-2 mb-2 p-2;
    }
    .container .links .link {
        @apply flex justify-center w-[80%] py-2 font-bold tracking-wider pl-4;
        @apply hover:bg-slate-200 rounded cursor-pointer;
        transition: background-color 200ms ease;
    }
    .container button {
        @apply w-[80%] py-2 px-4 outline-none rounded text-base font-extrabold hover:scale-x-[1.04];
        transition: transform 300ms ease;
    }
    .login {
        @apply border-blue-500 border;
    }
    .register {
        @apply bg-blue-500 text-white mb-2;
    }
    .right {
        @apply flex items-center flex-row h-full;
    }

    /* Wide screen styles */

    .right .wide-screen {
        @apply hidden sm:flex flex-row h-full;
    }
    .wide-screen .auth-btns {
        @apply flex flex-row py-2 gap-4 text-base h-full items-center;
    }
    .wide-screen .auth-btns button {
        @apply py-1 md:py-2 px-3 md:px-6 rounded font-bold h-[2.4rem];
    }
    .auth-btns .w-register {
        @apply bg-blue-500 hover:bg-blue-800 text-white;
        transition: background-color 300ms ease;
    }
    .auth-btns .w-login {
        @apply border-blue-200 border hover:border-blue-600;
        transition: border 300ms ease;
    }
    .w-links {
        @apply hidden sm:flex flex-row gap-3 md:gap-4 ml-4 h-full items-center pt-3;
    }
    .w-links a {
        @apply h-full pt-2 flex items-center font-semibold text-sm relative hover:border-b-[0.124rem] border-orange-500;
        transition: border 200ms ease;
    }
}

</style>