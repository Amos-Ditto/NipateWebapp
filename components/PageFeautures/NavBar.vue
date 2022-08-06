<script setup lang="ts">

const openauthdropdown = ref<boolean>(false);

const openAuthDropDown = ():void => {
    openauthdropdown.value = !openauthdropdown.value;
}
</script>

<template>
    <nav class=" w-full flex items-center flex-row justify-between px-4 sm:px-8">
        <div class="logo flex h-full items-center">
            <img src="@/assets/img/Logo/Decoupled.svg" alt="nipate">
        </div>
        <div class="right-auth xs:flex text-neutral-600 hidden flex-row gap-1 xs:gap-3">
            <button><NuxtLink to="/auth" class="block w-full h-full">Login</NuxtLink></button>
            <button>Register</button>
        </div>
        <div class="auth-user relative flex xs:hidden items-center justify-center">
            <div class="user-icon" @click="openAuthDropDown">
                <div class="i-mdi-account scale-125"></div>
                <div class="i-mdi-menu-down text-lg scale-125" :class="openauthdropdown && 'rotate-180'"></div>
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
    </nav>
</template>

<style scoped>

.logo img {
    @apply w-[7.5rem] sm:w-[9rem] h-[3.4rem];
    transition: width 300ms;
}
.right-auth button {
    @apply px-3 xs:px-4 py-1 text-sm xs:text-base sm:text-lg font-bold;
    @apply first:border-2 border-slate-100 rounded-md hover:border-neutral-600;
    @apply last:bg-orange-500 last:text-slate-100 hover:last:bg-orange-600;
    transition: border 300ms , background-color 300ms;
}
.user-icon {
    @apply w-[45px] h-[35px] rounded-full flex items-center justify-center bg-gray-200 text-neutral-500 cursor-pointer;
    @apply hover:bg-gray-300;
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
</style>