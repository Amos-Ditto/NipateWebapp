<script setup lang="ts">
import ServicesCard from '../../components/Cards/ServicesCard.vue';
import AdvertCard from '../../components/Cards/AdvertCard.vue';
import UserAccountDetails from '../../components/Heroes/UserAccountDetails.vue';


</script>
<template>
    <section class="flex flex-col w-full gap-y-4 sm:gap-y-8">
        <div class="top-section w-full flex flex-row justify-between gap-y-6">

            <div class="user-container w-full px-0 sm:px-3 pb-12 flex flex-col">
                <UserAccountDetails />
            </div>
            <div class="other-links flex flex-row items-start">
                <button class="py-1.5 px-3 rounded-3xl truncate bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1">
                    Register to offer Services
                </button>
                <!-- <button class="py-2 px-3 rounded-3xl bg-slate-700 hover:bg-slate-800 tracking-wider truncate text-xs sm:text-sm text-slate-100 transition-colors sm:tracking-wide">
                    Register to offer Services
                </button> -->
            </div>
        </div>
        <div class="w-full px-3 flex flex-col gap-y-4 border-gray-300 py-2 rounded-lg">
            <div
            class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
                <h3 class="text-lg capitalize font-bold">Services request</h3>
                <RouterLink :to="{ name: 'Service-Requests' }" class="button-more items-center justify-center flex rounded-md py-0.5 px-1.5 hover:bg-gray-300 transition-colors duration-300 relative">
                    <div class="i-mdi-dots-horizontal text-xl sm:text-2xl font-light text-slate-400"></div>
                    <span class="py-0.5 px-2 bg-gray-300 rounded-md text-xs absolute top-[130%] capitalize z-10 text-slate-500 hidden items-center justify-center italic">
                        <span class="w-2 h-2 bg-inherit absolute -top-1 rotate-45"></span>
                        more
                    </span>
                </RouterLink>
            </div>
            <div class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-2 lg:gap-x-6 gap-y-2 transition-pad duration-300">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
        </div>
        <div class="w-full px-3 flex flex-col gap-y-4 pt-12 sm:pt-0">
            <div
                class="nav-section-title flex items-center justify-between px-6 lg:pr-10 py-3 rounded-md border border-gray-300">
                <h3 class="text-lg capitalize font-bold">your adverts</h3>
                <RouterLink :to="{ name: 'User-Adverts' }" class="button-more items-center justify-center flex rounded-lg py-0.5 px-1.5 hover:bg-gray-300 transition-colors duration-300 relative">
                    <div class="i-mdi-dots-horizontal text-xl sm:text-2xl font-light text-slate-400"></div>
                    <span
                        class="py-0.5 px-2 capitalize bg-gray-300 rounded-md text-xs absolute top-[130%] z-10 text-slate-500 hidden items-center justify-center italic">
                        <span class="w-2 h-2 bg-inherit absolute -top-1 rotate-45"></span>
                        more
                    </span>
                </RouterLink>
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