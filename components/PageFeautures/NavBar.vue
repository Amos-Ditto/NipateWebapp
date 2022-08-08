<script setup lang="ts">

const openauthdropdown = ref<boolean>(false);
const showmoreservices = ref<boolean>(false);
const hidetopnav = ref<boolean>(false);

const emit = defineEmits<{
    (event: 'toggleMenuVisibility')
}>();
const openAuthDropDown = ():void => {
    openauthdropdown.value = !openauthdropdown.value;
}

const showMoreServices = ():void => {
    console.log("Open");
    
    showmoreservices.value = !showmoreservices.value;
}

const toggleMenuVisibility = ():void => {
    emit("toggleMenuVisibility");
}

// Transition Methods
const enter = (el: HTMLElement): void => {
    el.style.height = "auto";
    let height = getComputedStyle(el).height;
    el.style.height = '0';
    getComputedStyle(el);
    setTimeout(() => {el.style.height = height});
};
const afterEnter = (el: HTMLElement): void => {
    el.style.height = "auto";
};
const leave = (el: HTMLElement): void => {
    el.style.height = getComputedStyle(el).height;
    getComputedStyle(el);
    setTimeout(() => {el.style.height = '0'});
};

</script>

<template>
    <nav class=" w-full lg:w-[80%] flex flex-col gap-4 xs:gap-2 md:gap-6 justify-center items-center" :class="hidetopnav && 'fixed top-0 left-0 right-0 bg-orange-400 z-40'">
        <div class="top-nav w-full flex items-center flex-row justify-between px-4 sm:px-8" v-if="!hidetopnav">
            <div class="logo flex h-full items-center">
                <img src="@/assets/img/Logo/Decoupled.svg" alt="nipate">
            </div>
            <div class="auth-user relative flex md:hidden items-center justify-center">
                <div class="mobile-menu-btn">
                    <div class="menu-icon" @click="toggleMenuVisibility"> 
                        <div class="i-mdi-dots-vertical scale-150"></div>
                    </div>
                </div>
                <div class="user-drop-down" v-if="openauthdropdown">
                    <div class="drop-down-bg z-20 fixed right-0 w-screen h-[70vh] bg-transparent translate-x-[12%] top-0" @click="openAuthDropDown"></div>
                    <div class="drop-down-context">
                        <button class="auth-btn text-neutral-600">
                            <NuxtLink :to="{name: 'auth-login'}" class="block w-full h-full text-left">Login</NuxtLink>
                        </button>
                        <button class="auth-btn ">
                            <NuxtLink :to="{name: 'auth-login'}" class="w-full block h-full">Register</NuxtLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="features-nav w-full md:w-[90%] flex flex-row shadow-sm pr-4" :class="hidetopnav && 'pt-2 flex items-center'">
            <div class="service-list flex flex-col gap-1 w-full">
                <ul class="flex flex-row justify-evenly xs:justify-start gap-x-2 py-[1px] px-2 xs:px-4 text-sm text-neutral-200 font-bold w-full">
                    <li class="text-slate-50">All</li>
                    <li>Boda</li>
                    <li>Plumbers</li>
                    <li @click="showMoreServices" :class="showmoreservices && 'bg-orange-500 text-white'">
                        More
                        <div class="i-mdi-chevron-down" :class="showmoreservices && 'rotate-180'"></div>
                        <transition name="show-service-menu" @enter="enter" @after-enter="afterEnter" @leave="leave">
                            <div class="list-drop-drown" v-if="showmoreservices">
                                <ul>
                                    <li>Garage</li>
                                    <li>Electrician</li>
                                    <li>Carpenters</li>
                                    <li>Chefs</li>
                                    <li>Find out more
                                        <div class="i-mdi-arrow-right ml-1"></div>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </li>
                </ul>
            </div>
            <div class="nav-links">
                <ul class="flex flex-row items-center gap-2">
                    <li class="hidden xs:flex">My Account</li>
                    <li class="hidden md:block"><NuxtLink :to="{name: 'auth-register'}" class="w-full block h-full">Register</NuxtLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

nav {
    transition: width 300ms;
}
.logo img {
    @apply w-[7.5rem] sm:w-[9rem] h-[3.4rem] md:scale-110;
    transition: width 300ms, transform 300ms;
}
.right-auth button {
    @apply px-3 xs:px-4 py-1 text-sm xs:text-base sm:text-lg font-bold;
    @apply first:border-2 border-slate-200 rounded-md hover:border-slate-50;
    @apply last:bg-orange-500 last:text-slate-100 hover:last:bg-orange-600;
    transition: border 300ms , background-color 300ms;
}
.user-icon {
    @apply w-[45px] h-[35px] rounded-full flex items-center justify-center bg-orange-200 text-neutral-500 cursor-pointer;
    @apply hover:bg-orange-300;
    transition: background-color 300ms;
}
.user-drop-down {
    @apply absolute bottom-0 translate-y-[105%] flex justify-end items-end;
    @apply rounded-md z-30;
}
.auth-user .drop-down-context {
    @apply absolute right-0 top-1.5 translate-x-[20%] w-[10rem] min-h-[8rem] bg-gray-200 z-30;
    @apply rounded-md flex justify-start items-start flex-col px-2 py-2 gap-2;
}
.drop-down-context button.auth-btn {
    @apply w-full flex items-center justify-start rounded-md tracking-wider;
    @apply font-bold px-2 py-1 hover:bg-orange-500 hover:text-slate-100 text-neutral-500;
    transition: background-color 300ms , color 300ms;
}

.service-list ul li {
    @apply px-3 xs:px-4 py-2 cursor-pointer text-sm xs:text-lg md:text-xl border-b-2 xs:border-b-4 border-transparent hover:border-slate-50;
    @apply first:border-slate-50 hover:text-white flex flex-row items-center justify-center relative;
    transition: background-color 300ms , border 300ms , color 300ms;
}
.service-list ul li .i-mdi-chevron-down {
    transition: transform 300ms ease;
}
.mobile-menu-btn .menu-icon {
    @apply  w-[2.4rem] h-[2.4rem] rounded-full hover:bg-orange-300 flex flex-col text-white text-xl items-center justify-center px-2 py-2;
    @apply cursor-pointer;
    transition: background-color 300ms;
}
.list-drop-drown {
    @apply absolute bottom-0 right-0 xs:right-auto translate-y-[105%] w-[9rem] xs:w-[12rem] min-h-[6rem] bg-gray-50 z-20;
}
.list-drop-drown ul {
    @apply w-full flex flex-col gap-1;
}
.list-drop-drown ul li {
    @apply text-slate-600 w-full flex justify-start z-0;
    @apply hover:bg-gray-200 hover:text-slate-600;
}
.list-drop-drown ul li .i-mdi-arrow-right {
    transition: transform 300ms;
}
.list-drop-drown ul li:hover:last-of-type .i-mdi-arrow-right {
    @apply translate-x-[40%];
}

/* service menu transition */
.show-service-menu-enter-from {
    @apply translate-y-[80%] opacity-0 -z-10;
}
.show-service-menu-enter-active {
    transition: height 250ms ease-in-out , opacity 400ms , transform 250ms;
    overflow: hidden;
}

.features-nav .nav-links ul li {
    @apply text-slate-200 text-lg md:text-xl font-bold whitespace-nowrap px-1.5 md:px-3 py-1.5 border-2 border-slate-200 rounded-md;
    @apply cursor-pointer hover:border-slate-50 hover:text-slate-50;
    transition: border 300ms , color 300ms;
}
</style>