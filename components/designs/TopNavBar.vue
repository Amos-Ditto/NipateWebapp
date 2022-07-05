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
        <div class="left pl-4 md:pl-8">
            <img src="@/assets/img/logo-removebg.png" alt="logo" class="w-[6rem] md:w-[8.4rem] h-[60%] md:h-[65%]">
        </div>
        <div class="right h-full flex items-center gap-2">
            <div class="search-bar h-full flex items-center gap-0 relative text-base w-[10rem] md:w-[12rem]">
                <div class="i-mdi-chevron-down absolute left-1" />
                <input type="text" placeholder="search for services ..." class="w-full h-[72%] bg-slate-100 rounded-l-md pl-5 pr-2 outline-none italic tracking-wider text-slate-500">
                <button class="h-[72%] px-3 bg-orange-300 rounded-r-md text-white font-bold text-2xl"><div class="i-mdi-magnify" /></button>
            </div>
            <div class="links flex flex-row gap-2 text-sm tracking-normal px-3 md:px-6">
                <div class="link relative px-2 py-2">
                    <a href="#">Services</a>
                </div>
                <div class="link relative px-2 py-2">
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div class="auth-btn text-sm md:text-base tracking-tight flex gap-2 md:gap-4 pr-4">
                <button class=" py-2"><NuxtLink to="/auth" class="block">Log In</NuxtLink></button>
                <button class=""><NuxtLink to="/auth/register" class="h-full w-full flex justify-center items-center">Join</NuxtLink></button>
            </div>

        </div>

    </div>
</template>

<style scoped>

.auth-btn button:nth-child(2) {
    @apply border border-neutral-400 outline-none rounded-md px-5 block;
    transition: color 300ms ease, border 300ms ease;
}
.auth-btn button {
    @apply hover:border-blue-600 hover:text-blue-500 text-zinc-600;
    transition: color 300ms ease, border 300ms ease;
}
.right .links .link {
    @apply hover:text-orange-500 text-zinc-600;
    transition: color 300ms ease;
}
.search-bar button , .search-bar input {
    @apply border-y border-neutral-400;
}
.search-bar button {
    @apply border-r hover:bg-orange-500;
    transition: background-color 300ms ease;
}
.search-bar input {
    @apply border-l focus:border-green-500 placeholder:text-neutral-500 placeholder:text-xs;
}
.search-bar {
    transition: width 300ms ease;
}
.search-bar:focus-within {
    @apply w-[13rem] md:w-[18rem];
}
.i-mdi-chevron-down {
    transition: transform 300ms ease;
}
.search-bar:focus-within .i-mdi-chevron-down {
    @apply -rotate-180;
}
</style>