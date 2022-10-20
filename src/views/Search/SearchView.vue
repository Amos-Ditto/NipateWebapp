<script setup lang="ts">
import SearchServicesCard from '../../components/Cards/SearchServicesCard.vue';

</script>

<template>
    <section class="w-full pt-8 pb-12 md:pb-28 px-1 sm:px-[8px] lg:px-[80px] xl:px-[90px] 2xl:px-[115px] transition-pad duration-300">
       <main class="w-full grid grid-cols-5 grid-flow-row row-auto gap-x-3">
        <nav class="hidden sm:flex col-span-1 bg-gray-100 py-2 flex-col gap-y-3">
            <div class="filter-title px-2 py-1">
                <h3 class="font-bold text-xl">Find by</h3>
            </div>
            <ul class="nav-list flex flex-col gap-y-4 text-[#346974]">
                <li>
                    <button>
                        Categories
                        <div class="i-mdi-chevron-down"></div>
                    </button>
                    <ul class="w-full flex flex-col gap-y-1 border-b border-gray-200">
                        <li>Food & Catering</li>
                        <li>Building & Construction</li>
                    </ul>
                </li>
                <li>
                    <button>
                        Region
                        <div class="i-mdi-chevron-down"></div>
                    </button>
                    <ul class="w-full flex flex-col gap-y-1 border-b border-gray-200">
                        <li>Nakuru</li>
                        <li>Nairobi</li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="body col-span-5 row-auto sm:col-span-4 rounded-t flex flex-col pb-8 gap-y-8 text-[#346974]">
            <div class="hero-search flex flex-col gap-y-5 px-2.5 sm:px-5 py-0 rounded">
                <div class="search-bar flex flex-row w-full">
                    <button class="px-2 border border-gray-200 mr-1 rounded-md sm:hidden flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200">
                        <div class="i-mdi-filter-outline text-slate-400 scale-125"></div>
                    </button>
                    <input type="text" placeholder="Search for services or location">
                    <button
                        class="py-1.5 sm:py-2.5 px-3 sm:px-5 tracking-wider text-sm sm:text-base bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 text-slate-100 rounded-r-md sm:rounded-r font-bold capitalize"
                    >
                        <!-- search -->
                        <div class="i-mdi-magnify scale-125"></div>
                    </button>
                </div>
                <div class="search-filter w-full sm:w-[90%] flex flex-col gap-y-1">
                    <div class="search-actions py-1 sm:py-1.5 w-full flex items-center justify-between gap-x-8 relative">
                        <h3 class="font-light sm:font-bold capitalize">searched for</h3>
                    </div>
                    <div class="filter-container w-full py-1.5 px-0 gap-x-4 flex flex-row">
                        <button class="py-1 sm:py-1.5 px-3 sm:px-5 tracking-wider flex flex-row items-center gap-x-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded capitalize">
                            none
                            <div class="i-mdi-close hidden"></div>
                        </button>
                        <button class="py-1 sm:py-1.5 px-3 sm:px-5 tracking-wider flex flex-row items-center gap-x-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded capitalize">
                            Food & Catering
                            <div class="i-mdi-close hidden"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="body-data w-full sm:w-[98%] lg:w-[90%] px-1 sm:px-5 flex flex-col gap-y-3">
                <!-- <div class="body-title">
                    <h3 class="text-lg font-bold tracking-wider">Found:</h3>
                </div> -->
                <div class="services-card-body flex flex-col border border-gray-300 rounded-sm">
                    
                    <SearchServicesCard />
                    <SearchServicesCard />
                    <SearchServicesCard />
                </div>
            </div>
        </div>
       </main>
    </section>
</template>

<style scoped>

section {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.search-bar input {
    @apply py-2.5 sm:py-2 px-4 w-[80%] border-gray-200 border border-r-0 rounded-l tracking-wider text-sm sm:text-base font-light bg-gray-50 outline-none focus:border-gray-300;
}

ul.nav-list li {
    @apply flex flex-col;
}

ul.nav-list li button {
    @apply border-b border-gray-200 py-3  px-2 text-base font-bold tracking-wide flex flex-row justify-between items-center w-full;
}
ul.nav-list li .i-mdi-chevron-down {
    @apply text-xl;
}

ul.nav-list li ul li {
    @apply text-sm px-4 py-2 border-b last:border-b-0 border-gray-200 cursor-pointer hover:bg-gray-200 tracking-wide;
}

.filter-container button:hover .i-mdi-close {
    @apply flex
}
</style>