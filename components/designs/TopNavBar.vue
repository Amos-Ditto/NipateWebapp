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
    <div class="nav w-full flex flex-row h-full items-center justify-between relative z-[999] px-4 text-slate-800">
        <div class="left h-full flex items-center justify-evenly gap-6 md:gap-8">
            <img src="@/assets/img/logo-removebg.png" alt="logo" class="w-[6rem] sm:w-[8.4rem] h-[60%] sm:h-[65%]">
        </div>

        <div class="w-links sm:flex h-full items-center gap-2 pt-2 md:gap-7 hidden">
            <div class="w-link text-sm md:text-base px-3 pt-2 flex items-center h-full hover:border-orange-500 border-b-2 hover:text-orange-500">
                <a href="#" class="block">Services</a>
            </div>
            <div class="w-link text-sm md:text-base px-3 pt-2 flex items-center h-full hover:border-orange-500 border-b-2 hover:text-orange-500">
                <a href="#" class="">Contact Us</a>
            </div>
        </div>

        <div class="right lex items-center flex-row h-full">
            <div class="wide-screen hidden sm:flex flex-row gap-3 md:gap-4 ml-4 h-full items-center pt-3">
                <div class="auth-btns flex flex-row py-2 gap-4 text-base h-full items-center">
                    <button class="w-login border-blue-200 border hover:border-blue-600 text-zinc-600"><NuxtLink to="/auth" class="block">Log In</NuxtLink></button>
                    <button class="w-register bg-blue-500 hover:bg-blue-800 text-white"><NuxtLink to="/auth/register" class="block">Register</NuxtLink></button>
                </div>
            </div>

            <!-- mobile navbar toggle -->
            <div class="menu-button text-4xl sm:hidden cursor-pointer h-full flex items-center">
                <div class="i-mdi-menu p-1 text-black" v-if="!mobilenavbar" @click="openMobileNavbar" />
                <div class="i-mdi-close" v-if="mobilenavbar" @click="openMobileNavbar" />
            </div>

        </div>

        <!-- This for mobile view -->
        <transition name="shownav">
            <div class="mobile-nav sm:hidden absolute mt-[2.9rem] p-4 w-full min-h-[4vh] z-[-2] top-0 left-0 flex justify-center" v-if="shownav">
                <div class="container w-full flex flex-col gap-2 items-center p-1 bg-slate-100 shadow">
                    <div class="links flex justify-center items-center flex-col w-full gap-2 mb-2 p-2">
                        <div class="link">Services</div>
                        <div class="link">Contact Us</div>

                    </div>
                    <button class="login border-blue-500 border"><NuxtLink to="/auth" class="block">Log In</NuxtLink></button>
                    <button class="register bg-blue-500 text-white mb-2"><NuxtLink to="/auth/register" class="block">Register</NuxtLink></button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>

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
    .container .links .link {
        @apply flex justify-center w-[80%] py-2 font-bold tracking-wider pl-4;
        @apply hover:bg-slate-200 rounded cursor-pointer;
        transition: background-color 200ms ease;
    }
    .container button {
        @apply block w-[80%] py-2 px-4 outline-none rounded text-base font-extrabold hover:scale-x-[1.04];
        transition: transform 300ms ease;
    }
    .wide-screen .auth-btns button {
        @apply block py-1 md:py-2 px-3 md:px-6 rounded-md font-bold h-[2.4rem];
    }
}
.auth-btns .w-register {
    transition: background-color 300ms ease;
}

.auth-btns .w-login {
    transition: border 300ms ease;
}
.w-link {
    cursor: pointer;
    transition: border 300ms ease, color 300ms ease;
}
.w-links a {
    transition: border 200ms ease;
}
</style>