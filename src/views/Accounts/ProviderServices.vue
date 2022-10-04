<script setup lang="ts">
import AccountProviderService from '../../components/Cards/AccountProviderService.vue';


</script>
<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-8 sm:px-4 lg:px-0 pb-[32vh]">
        <nav class="w-full flex flex-row items-center justify-between px-3.5">
            <div class="left flex items-center">
                <h3 class="text-2xl font-semibold tracking-tight">My Services</h3>
            </div>
            <div class="right-nav">
                <button class="bg-neutral-600 hover:bg-neutral-700 transition-colors capitalize text-slate-100 text-sm font-light py-1.5 px-4 rounded-2xl">add new Service</button>
            </div>
        </nav>
        <div class="body-container w-full py-2 px-1 sm:px-4 flex flex-col gap-y-10">
            
            <AccountProviderService />
            <AccountProviderService />

        </div>
    </section>
</template>