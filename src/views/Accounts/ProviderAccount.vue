<script setup lang="ts">
import ServicesCard from '../../components/Cards/ServicesCard.vue';
import AdvertCard from '../../components/Cards/AdvertCard.vue';
    
    
</script>
<template>
    <section class="flex flex-col w-full gap-y-8">
        <div class="w-full px-3 flex flex-col gap-y-4 border border-gray-300 py-2 rounded-lg">
            <div
                class="nav-section-title px-2 flex items-center justify-between lg:pr-10 py-2 border-b border-gray-300">
                <h3 class="text-lg capitalize font-bold">Services request</h3>
                <button
                    class="button-more items-center justify-center flex border border-slate-500 rounded-full hover:bg-gray-300 transition-colors duration-300 relative">
                    <div class="i-mdi-dots-horizontal text-xl sm:text-2xl font-light text-slate-400"></div>
                    <span
                        class="py-0.5 px-2 bg-gray-300 rounded-md text-xs absolute top-[130%] capitalize z-10 text-slate-500 hidden items-center justify-center italic">
                        <span class="w-2 h-2 bg-inherit absolute -top-1 rotate-45"></span>
                        more
                    </span>
                </button>
            </div>
            <div
                class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-2 lg:gap-x-6 gap-y-2 transition-pad duration-300">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
            <!-- <div class="list-all w-full flex items-center justify-end px-1">
                        <small class="text-base text-green-500 hover:text-orange-500 font-bold italic transition-colors cursor-pointer underline">view all</small>
                    </div> -->
        </div>
        <div class="w-full flex flex-col gap-y-4 px-3 border border-gray-300 py-3 rounded-lg">
            <!-- <h3 class="text-lg capitalize font-bold">your adverts</h3> -->
            <div
                class="nav-section-title flex items-center justify-between px-3 lg:pr-10 py-2 border-b border-gray-300">
                <h3 class="text-lg capitalize font-bold">your adverts</h3>
                <button
                    class="button-more items-center justify-center flex border border-slate-500 rounded-full hover:bg-gray-300 transition-colors duration-300 relative">
                    <div class="i-mdi-dots-horizontal text-xl sm:text-2xl font-light text-slate-400"></div>
                    <span
                        class="py-0.5 px-2 capitalize bg-gray-300 rounded-md text-xs absolute top-[130%] z-10 text-slate-500 hidden items-center justify-center italic">
                        <span class="w-2 h-2 bg-inherit absolute -top-1 rotate-45"></span>
                        more
                    </span>
                </button>
            </div>
            <div class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2">
                <AdvertCard />
                <AdvertCard />
                <AdvertCard />
            </div>
        </div>
    </section>
</template>