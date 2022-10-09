<template>
    <div class="w-full px-1 grid grid-cols-2 gap-x-4 sm:gap-x-8">
        <div class="services-links flex flex-col gap-y-3">
            <div class="title w-full flex flex-row items-center gap-x-1">
                <h3 class="hover:text-steelblue text-sm sm:text-lg font-bold tracking-wide transition-colors duration-300 cursor-pointer">Services</h3>
                <div class="i-mdi-chevron-down"></div>
            </div>
        </div>
        <div class="regions-links flex flex-col gap-y-3">
            <div class="title w-full flex flex-row items-center gap-x-1">
                <h3 class="hover:text-steelblue text-sm sm:text-lg font-bold tracking-wide transition-colors duration-300 cursor-pointer">Regions</h3>
                <div class="i-mdi-chevron-down"></div>
            </div>
        </div>
        <!-- <div class="account-links flex flex-col gap-y-3">
            <div class="title w-full flex flex-row items-center gap-x-1">
                <h3 class="hover:text-steelblue text-lg font-bold tracking-wide transition-colors duration-300 hover:underline cursor-pointer">Services</h3>
                <div class="i-mdi-chevron-down"></div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
.services-links ul li,
.other-links ul li {
    @apply text-sm sm:text-base font-extralight hover:underline cursor-pointer tracking-wide;
}
</style>