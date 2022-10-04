<script setup lang="ts">
import { ref } from 'vue';
import useAuthentications from '../../store/authentications';

const opendropdown = ref<boolean>(false);

const storeauth = useAuthentications();

</script>
<template>
    <nav class="w-full flex flex-row items-center justify-between py-5 sm:py-5 px-[10px] lg:px-[75px] bg-gray-100 shadow-sm transition-pad duration-300">
        <div class="left-side flex items-center flex-row gap-x-8 px-4 sm:px-0">
            <button class="sm:hidden px-1 py-0.5 border border-gray-300 rounded hover:bg-gray-200" @click="opendropdown = !opendropdown">
                <div class="i-mdi-menu text-slate-600 text-2xl" v-if="!opendropdown"></div>
                <div class="i-mdi-close text-slate-600 text-2xl" v-else="opendropdown"></div>
            </button>
            <router-link :to="{ name: 'Dashboard' }" class="flex flex-row items-center gap-x-3.5">
                <img src="../../assets/Logo/Vector.svg" alt="logo" class="w-[2.3rem] sm:w-[2.9rem] h-[2.4rem] sm:h-[2.8rem]">
                <img src="../../assets/Logo/Nipate.svg" alt="" class="w-[4.4rem] sm:w-[6rem] h-[2.3rem] sm:h-[2.8rem]">
            </router-link>
        </div>
        <div class="right-nav flex flex-row items-center gap-x-6 sm:gap-x-12 transition-pad duration-300">
            <div class="account flex flex-row items-center gap-x-1 cursor-pointer">
                <div class="account-icon bg-gray-200 ml-2 p-2 sm:p-2.5 rounded-full">
                    <div class="i-mdi-account text-[#346974] text-lg sm:text-xl"></div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

a img {
    @apply transition-all duration-300;
}
</style>