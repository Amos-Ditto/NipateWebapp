<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useLayouts } from '../../store/layouts';


const userlayout = useLayouts();
const { userdashboard } = storeToRefs(userlayout);

const updateSideBar = ():void => {
    userlayout.updateUserDashboard();
}
</script>
<template>
    <div class="w-full">
        <nav class="w-full grid grid-cols-3 gap-x-1 z-30 py-5 px-1 sm:px-2 lg:px-[75px] bg-gray-50 shadow-sm transition-pad duration-300">
            <div class="left-side col-span-2 flex items-center flex-row justify-between px-4 sm:px-0">
                <button class="sm:hidden px-1 py-0.5 border border-gray-300 rounded hover:bg-gray-200" @click="updateSideBar">
                    <div class="i-mdi-menu text-slate-600 text-2xl" v-if="!userdashboard"></div>
                    <div class="i-mdi-close text-slate-600 text-2xl" v-else="userdashboard"></div>
                </button>
                <router-link :to="{ name: 'Dashboard' }" class="flex flex-row items-center gap-x-3.5">
                    <img src="../../assets/Logo/Vector.svg" alt="logo" class="w-[2.3rem] sm:w-[2.9rem] h-[2.4rem] sm:h-[2.8rem]">
                    <img src="../../assets/Logo/Nipate.svg" alt="" class="w-[4.4rem] sm:w-[6rem] h-[2.3rem] sm:h-[2.8rem]">
                </router-link>
            </div>
            <div class="right-nav flex flex-row items-center justify-end gap-x-6 sm:gap-x-12 transition-pad duration-300 px-3">
                <div class="account flex flex-row items-center gap-x-1 cursor-pointer">
                    <div class="account-icon bg-gray-200 ml-2 p-2 sm:p-2.5 rounded-lg">
                        <div class="i-mdi-account text-[#346974] text-lg sm:text-xl"></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

a img {
    @apply transition-all duration-300;
}
</style>