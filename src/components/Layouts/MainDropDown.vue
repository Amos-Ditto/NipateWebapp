<template>
    <div class="w-full px-1 grid grid-cols-2 gap-x-4 sm:gap-x-8">
        <div class="services-links flex flex-col gap-y-3">
            <div class="title w-full flex flex-row items-center gap-x-1">
                <h3 class="text-sm sm:text-lg font-bold tracking-wide transition-colors duration-300 cursor-pointer">Services</h3>
                <div class="i-mdi-chevron-down transition-transform duration-300"></div>
            </div>
        </div>
        <div class="regions-links flex flex-col gap-y-3">
            <div class="title w-full flex flex-row items-center gap-x-1">
                <h3 class="text-sm sm:text-lg font-bold tracking-wide transition-colors duration-300 cursor-pointer">Regions</h3>
                <div class="i-mdi-chevron-down transition-transform duration-300"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.services-links ul li,
.other-links ul li {
    @apply text-sm sm:text-base font-extralight hover:underline cursor-pointer tracking-wide;
}
.title:hover h3 {
    @apply text-steelblue;
}
.title:hover .i-mdi-chevron-down {
    @apply rotate-180;
}
</style>