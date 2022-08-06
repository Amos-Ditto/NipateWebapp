<script setup lang="ts">

const openauthdropdown = ref<boolean>(false);

const openAuthDropDown = ():void => {
    openauthdropdown.value = !openauthdropdown.value;
}
</script>

<template>
    <nav class=" w-full md:w-[80%] flex flex-col gap-4 xs:gap-2 md:gap-6 justify-center items-center">
        <div class="top-nav w-full flex items-center flex-row justify-between px-4 sm:px-8">
            <div class="logo flex h-full items-center">
                <img src="@/assets/img/Logo/Decoupled.svg" alt="nipate">
            </div>
            <div class="right-auth xs:flex text-neutral-600 hidden flex-row gap-1 xs:gap-3">
                <button><NuxtLink to="/auth" class="block w-full h-full">Login</NuxtLink></button>
                <button>Register</button>
                <!-- <div class="mobile-menu-btn">
                    <div class="menu-icon"> 
                        <div class="i-mdi-dots-vertical scale-150"></div>
                    </div>
                </div> -->
            </div>
            <div class="auth-user relative flex xs:hidden items-center justify-center">
                <!-- <div class="user-icon" @click="openAuthDropDown">
                    <div class="i-mdi-account scale-125"></div>
                    <div class="i-mdi-menu-down text-lg scale-125" :class="openauthdropdown && 'rotate-180'"></div>
                </div> -->
                <div class="mobile-menu-btn">
                    <div class="menu-icon"> 
                        <div class="i-mdi-dots-vertical scale-150"></div>
                    </div>
                </div>
                <div class="user-drop-down" v-if="openauthdropdown">
                    <div class="drop-down-bg z-20 fixed right-0 w-screen h-[70vh] bg-transparent translate-x-[12%] top-0" @click="openAuthDropDown"></div>
                    <div class="drop-down-context">
                        <button class="auth-btn text-neutral-600">
                            <NuxtLink to="/auth" class="block w-full h-full text-left">Login</NuxtLink>
                        </button>
                        <button class="auth-btn ">Register</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="features-nav w-full md:w-[90%] shadow-sm">
            <div class="service-list flex flex-col gap-1 w-full">
                <!-- <h3 class="font-bold text-slate-200 px-4">Services</h3>
                <hr> -->
                <!-- <hr class=" bg-orange-300"> -->
                <ul class="flex flex-row justify-evenly xs:justify-start gap-x-2 py-[1px] px-2 xs:px-4 text-sm text-neutral-200 font-bold w-full">
                    <li class="text-slate-50">All</li>
                    <li>Boda</li>
                    <li>Housing</li>
                    <li>Garage</li>
                    <li>
                        More
                        <div class="i-mdi-chevron-down"></div>
                        <div class="list-drop-drown">
                            <ul>
                                <li>Plumbers</li>
                                <li>Electrician</li>
                                <li>Carpenters</li>
                                <li>Chefs</li>
                                <li>Find out more
                                    <div class="i-mdi-arrow-right ml-1"></div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- <li>Catering</li> -->
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
    @apply w-[7.5rem] sm:w-[9rem] h-[3.4rem];
    transition: width 300ms;
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
    @apply px-3 xs:px-4 py-2 cursor-pointer text-sm xs:text-base md:text-lg border-b-2 xs:border-b-4 border-transparent hover:border-slate-50;
    @apply first:border-slate-50 hover:text-white flex flex-row items-center justify-center relative;
    transition: background-color 300ms , border 300ms , color 300ms;
}
.service-list ul li .i-mdi-chevron-down {
    transition: transform 300ms ease;
}
.service-list ul li:hover .i-mdi-chevron-down {
    @apply rotate-180;
    transition: transform 300ms ease;
}
.mobile-menu-btn .menu-icon {
    @apply  w-[2.4rem] h-[2.4rem] rounded-full hover:bg-orange-300 flex flex-col text-white text-xl items-center justify-center px-2 py-2;
    @apply cursor-pointer;
    transition: background-color 300ms;
}
.list-drop-drown {
    @apply absolute bottom-0 right-0 xs:right-auto translate-y-[105%] w-[9rem] xs:w-[12rem] min-h-[6rem] bg-gray-50;
}
.list-drop-drown ul {
    @apply w-full flex flex-col gap-1;
}
.list-drop-drown ul li {
    @apply text-slate-600 w-full flex justify-start;
    @apply hover:bg-gray-200 hover:text-slate-600;
}
.list-drop-drown ul li .i-mdi-arrow-right {
    transition: transform 300ms;
}
.list-drop-drown ul li:hover:last-of-type .i-mdi-arrow-right {
    @apply translate-x-[40%];
}
</style>