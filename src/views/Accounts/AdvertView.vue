<script setup lang="ts">
import AdvertAccount from "../../components/Cards/AdvertAccount.vue";

</script>
<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-14">
        <div class="top-nav flex flex-row justify-between px-1">
            <div class="left-nav">
                <h3 class="text-2xl font-light">Adverts</h3>
            </div>
            <div class="right-nav pr-1">
                <button class="px-4 py-1.5 rounded-2xl bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1">
                    <div class="i-mdi-plus text-slate-100 text-base"></div>
                    New Advert
                </button>
            </div>
        </div>
        <div class="body-section flex flex-col gap-y-2 sm:px-8">
            
            <AdvertAccount />
            <AdvertAccount />
            <AdvertAccount />
        </div>
    </section>
</template>

<style scoped>

.popup-enter-from , .popup-leave-to {
    @apply opacity-0 -translate-y-2;
}
.popup-enter-active , .popup-leave-active {
    transition: opacity 300ms ease , transform 300ms ease;
}

</style>