<template>
    <div class="w-full px-1 grid grid-cols-2 gap-x-4 sm:gap-x-8">
        <div class="services-links flex flex-col gap-y-3 relative">
            <div class="title py-0.5 w-full flex flex-row items-center gap-x-1 cursor-pointer">
                <h3 class="text-sm sm:text-base font-light tracking-wide transition-colors duration-300 cursor-pointer">Services</h3>
                <div class="i-mdi-chevron-down transition-transform duration-300"></div>
            </div>
            <div class="services-drop-down hidden flex-col gap-y-1 absolute py-2 top-[106%] -left-1 w-[12rem] min-h-[6rem] rounded shadow bg-white">
                <div class="service-list">
                    <small>Cleaning & Laundry</small>
                </div>
                <div class="service-list">
                    <small>Food & Catering</small>
                </div>
                <div class="service-list">
                    <small>Transport & Taxis</small>
                </div>
                <div class="more-services flex flex-row items-center justify-between pl-2 pr-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <small class="text-sm font-light tracking-wider">More</small>
                    <div class="i-mdi-arrow-top-right-bold-box-outline"></div>
                </div>
            </div>
        </div>
        <div class="regions-links py-0.5 flex flex-col gap-y-3 relative">
            <div class="title w-full flex flex-row items-center gap-x-1 cursor-pointer">
                <h3 class="text-sm sm:text-base font-light tracking-wide transition-colors duration-300 cursor-pointer">Regions</h3>
                <div class="i-mdi-chevron-down transition-transform duration-300"></div>
            </div>
            <div class="region-drop-down absolute w-[11rem] min-h-[4rem] rounded bg-white shadow-md hidden flex-col py-2 gap-y-1 -left-2 top-[104%]">
                <div class="region-list">
                    <small>Nairobi</small>
                </div>
                <div class="region-list">
                    <small>Nakuru</small>
                </div>
                <div class="region-list">
                    <small>Baringo</small>
                </div>
                <div class="region-list">
                    <small>Kericho</small>
                </div>
                <div class="more-services flex flex-row items-center justify-between pl-2 pr-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <small class="text-sm font-light tracking-wider">More</small>
                    <div class="i-mdi-arrow-top-right-bold-box-outline"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.title:hover h3 {
    @apply text-steelblue;
}
.services-links:hover .i-mdi-chevron-down {
    @apply rotate-180;
}

.services-links:hover .services-drop-down {
    @apply flex;
}
.services-drop-down .service-list {
    @apply px-2 py-1 hover:bg-gray-100 cursor-pointer;
}
.services-drop-down .service-list small {
    @apply text-sm tracking-wide;
}

.region-drop-down .region-list {
    @apply py-1 px-2 hover:bg-gray-100 cursor-pointer;
}
.region-drop-down .region-list small {
    @apply text-sm tracking-wide;
}

.regions-links:hover .region-drop-down {
    @apply flex
}
.regions-links:hover .i-mdi-chevron-down {
    @apply rotate-180;
}
</style>