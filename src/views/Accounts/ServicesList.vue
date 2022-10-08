<script setup lang="ts">
import { useRouter } from 'vue-router';
import AccountProviderService from '../../components/Cards/AccountProviderService.vue';

const router = useRouter();

const redirectNewServices = () => {
    router.push({ name: 'Provider-Services-New' });
}

</script>
<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-8 sm:px-4 lg:px-0 pb-[32vh]">
        <nav class="w-full flex flex-row items-center justify-between px-3.5">
            <div class="left flex items-center">
                <h3 class="text-2xl font-semibold tracking-tight">My Services</h3>
            </div>
            <div class="right-nav">
                <button class="bg-slate-700 hover:bg-slate-800 flex flex-row items-center gap-x-1.5 transition-colors capitalize text-slate-100 text-sm font-light py-1.5 px-4 rounded-2xl" @click="redirectNewServices">
                    <div class="i-mdi-plus text-base"></div>
                    add new Service
                </button>
            </div>
        </nav>
        <div class="body-container w-full py-2 px-1 sm:px-4 flex flex-col gap-y-10">
            
            <AccountProviderService />
            <AccountProviderService />
            <div class="new-service w-full flex flex-col rounded-xl py-4 px-4 gap-y-8 justify-center items-center border border-gray-300">
                <div class="new-nav w-full flex flex-row justify-between items-center">
                    <h3 class="text-base font-bold">New Service</h3>
                    <div class="new-icon-link p-2 rounded-full border border-gray-300 hover:bg-gray-300 cursor-pointer transition-colors duration-300">
                        <div class="i-mdi-plus text-xl text-gray-500"></div>
                    </div>
                </div>
                <div class="new-icon px-1 py-1">
                    <img src="../../assets/bgImg/undraw_subscribe_vspl.svg" alt="img" class="w-[9rem] h-[4rem]">
                </div>
                <div class="new-text flex flex-col items-center justify-center gap-y-2">
                    <p class="text-sm text-slate-500">Add a new Service to offer.</p>
                    <RouterLink :to="{name: 'Provider-Services-New'}" class="text-steelblue font-bold hover:underline text-sm" >New Service</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>