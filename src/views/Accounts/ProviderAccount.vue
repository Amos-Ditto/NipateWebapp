<script setup lang="ts">
import ServicesCard from '../../components/Cards/ServicesCard.vue';
import AdvertCard from '../../components/Cards/AdvertCard.vue';
    
    
</script>
<template>
    <section class="flex flex-col w-full gap-y-2 sm:gap-y-8">
        <div class="top-section w-full flex flex-row justify-between gap-y-6">

            <div class="user-container w-full px-0 sm:px-3 pb-12 flex flex-col">
                <div class="user-details flex flex-row gap-x-3 ">
                    <div class="user-icon p-1 xs:p-1.5 sm:p-2 rounded-xl border border-gray-300 flex items-center justify-center">
                        <div class="i-mdi-account-outline text-3xl xs:text-4xl sm:text-5xl text-slate-400"></div>
                    </div>
                    <div class="user-details-list flex flex-col gap-y-1.5 sm:gap-y-3">
                        <small class="text-base xs:text-lg sm:text-xl font-light">Amos Kipyegon</small>
                        <div class="location flex flex-row items-center gap-x-0.5 xs:gap-x-1 sm:gap-x-2">
                            <div class="i-mdi-map-marker text-slate-500 text-sm sm:text-base"></div>
                            <small class="text-slate-500 text-xs">Nakuru, Kenya</small>
                        </div>
                    </div>
                    <div class="edit p-1 w-6 h-6 hidden xs:flex items-center justify-center cursor-pointer hover:border border-gray-300 rounded-lg">
                        <div class="i-mdi-pencil-outline text-slate-400 text-sm"></div>
                    </div>
                </div>
            </div>
            <div class="other-links">
                <button class="py-2 px-3 rounded-3xl bg-slate-700 hover:bg-slate-800 truncate text-xs sm:text-sm font-sans text-slate-100 transition-colors sm:tracking-wide">
                    Register to offer Services
                </button>
            </div>
        </div>
        <div class="w-full px-3 flex flex-col gap-y-4 border-gray-300 py-2 rounded-lg">
            <div
            class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
                <h3 class="text-lg capitalize font-bold">Services request</h3>
                <button class="button-more items-center justify-center flex rounded-md py-0.5 px-1.5 hover:bg-gray-300 transition-colors duration-300 relative">
                    <div class="i-mdi-dots-horizontal text-xl sm:text-2xl font-light text-slate-400"></div>
                    <span class="py-0.5 px-2 bg-gray-300 rounded-md text-xs absolute top-[130%] capitalize z-10 text-slate-500 hidden items-center justify-center italic">
                        <span class="w-2 h-2 bg-inherit absolute -top-1 rotate-45"></span>
                        more
                    </span>
                </button>
            </div>
            <div class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-2 lg:gap-x-6 gap-y-2 transition-pad duration-300">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
            <!-- <div class="list-all w-full flex items-center justify-end px-1">
                        <small class="text-base text-green-500 hover:text-orange-500 font-bold italic transition-colors cursor-pointer underline">view all</small>
                    </div> -->
        </div>
        <div class="w-full px-3 flex flex-col gap-y-4">
            <div
                class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
                <h3 class="text-lg capitalize font-bold">your adverts</h3>
                <button class="button-more items-center justify-center flex rounded-lg py-0.5 px-1.5 hover:bg-gray-300 transition-colors duration-300 relative">
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
<style scoped>

.button-more:hover span {
    @apply flex;
}
</style>