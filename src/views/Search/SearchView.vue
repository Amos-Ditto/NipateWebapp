<script setup lang="ts">
import { ref } from 'vue';
import SearchServicesCard from '../../components/Cards/SearchServicesCard.vue';
import SearchCategories from '../../components/DropDowns/SearchCategories.vue';
import SearchRegions from '../../components/DropDowns/SearchRegions.vue';
import DaysOfWeek from '../../components/Heroes/DaysOfWeek.vue';
import { Category, County } from '../../Types/ServiceTypes';
import SearchingSuspense from '../../components/Cards/LoadingSuspense/SearchingSuspense.vue';

const base_url = import.meta.env.VITE_BASE_URL;

const opencategories = ref<boolean>(true);
const openregions = ref<boolean>(true);
const openmobilenav = ref<boolean>(false);

// Search data
const servicecategories = ref<Category[]>([]);
const counties = ref<County[]>([]);


interface SearchData {
    category: Category
    county: County
}

const usesearchdata = ref<SearchData>({
    category: {
        id: 0, Name: "All Categories"
    },
    county: {
        id: 0, Name: "All Regions"
    }
});

const fetchCategories = async (): Promise<void> => {
    await fetch(`${base_url}service/category`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(async response => {
        servicecategories.value = await response.json();
    })
    .catch(error => console.log(error))
}

const fetchCounties = async(): Promise<void> => {
    await fetch(`${base_url}location/counties`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(async response => {
        counties.value = await response.json();
    })
    .catch(error => console.log(error))
}


// Onload fetch data
fetchCategories();
fetchCounties();

// Selection data Func
const selectCategory = (payload: Category): void => {
    usesearchdata.value.category = payload;
}

const selectRegion = (payload: County): void => {
    usesearchdata.value.county = payload;
}

</script>

<template>
    <section class="w-full pt-8 pb-12 md:pb-28 px-1 sm:px-[8px] lg:px-[50px] xl:px-[90px] 2xl:px-[115px] transition-pad duration-300">
       <main class="w-full grid grid-cols-5 grid-flow-row row-auto gap-x-3">
        <nav class="hidden md:flex col-span-1 bg-gray-100 pt-2 pb-8 sm:pb-2 flex-col gap-y-6">
            <div class="filter-title px-4 sm:px-2 py-1">
                <h3 class="font-bold text-xl">Find by</h3>
            </div>
            <ul class="nav-list flex flex-col gap-y-3 text-[#346974]">
                <li>
                    <button @click="opencategories = !opencategories">
                        <span class="text-ellipsis overflow-hidden truncate">Categories</span>
                        <div class="i-mdi-chevron-down" :class="opencategories && 'rotate-180'"></div>
                    </button>
                    <SearchCategories
                        :togglecategories="opencategories" :servicecategories="servicecategories"
                        @select-category="selectCategory"
                    />
                </li>
                <li>
                    <button @click="openregions = !openregions">
                        <span class="text-ellipsis overflow-hidden truncate">Region</span>
                        <div class="i-mdi-chevron-down" :class="openregions && 'rotate-180'"></div>
                    </button>
                    
                    <SearchRegions
                        :toggleregions="openregions" :counties="counties"
                        @select-region="selectRegion" 
                    />
                </li>
                <li>
                    <button>
                        <span class="text-ellipsis overflow-hidden truncate">Days of the Week</span>
                        <!-- <div class="i-mdi-chevron-down"></div> -->
                    </button>
                    <DaysOfWeek />
                </li>
            </ul>
        </nav>

        <!-- Mobile Responsive -->
        <Transition name="pop-up">
            <nav class="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto z-30 sm:hidden flex bg-gray-100 pt-2 pb-8 sm:pb-2 flex-col gap-y-3" v-if="openmobilenav">
                <div class="filter-title px-4 sm:px-2 py-1 flex flex-row justify-between items-center">
                    <h3 class="font-bold text-xl">Find by</h3>
                    <button class="close p-2 hover:bg-gray-300 focus:bg-gray-300 rounded-md" @click="openmobilenav = !openmobilenav">
                        <div class="i-mdi-close text-xl"></div>
                    </button>
                </div>
                <ul class="nav-list flex flex-col gap-y-3 text-[#346974]">
                    <li>
                        <button @click="opencategories = !opencategories">
                            Categories
                            <div class="i-mdi-chevron-down" :class="opencategories && 'rotate-180'"></div>
                        </button>
                        <SearchCategories
                            :togglecategories="opencategories"  :servicecategories="servicecategories"
                            @select-category="selectCategory"
                        />
                    </li>
                    <li>
                        <button @click="openregions = !openregions">
                            Region
                            <div class="i-mdi-chevron-down" :class="openregions && 'rotate-180'"></div>
                        </button>
                        
                        <SearchRegions
                            :toggleregions="openregions" :counties="counties"
                            @select-region="selectRegion"
                        />
                    </li>
                    <li>
                        <button>
                            Days of the Week
                            <div class="i-mdi-chevron-down"></div>
                        </button>
                        <DaysOfWeek />
                    </li>
                </ul>
            </nav>
        </Transition>

        <div class="body col-span-5 row-auto md:col-span-4 rounded-t flex flex-col pb-8 gap-y-8 text-[#346974]">
            <div class="hero-search flex flex-col gap-y-5 px-2.5 sm:px-5 py-0 rounded">
                <div class="search-bar flex flex-row w-full">
                    <button @click="openmobilenav = !openmobilenav"
                        class="px-3 border border-gray-200 mr-1 rounded-l-md md:hidden flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200"
                    >
                        <div class="i-mdi-filter-outline text-slate-400 scale-125"></div>
                    </button>
                    <input type="text" placeholder="Search for services or location">
                    <button
                        class="py-1.5 sm:py-2.5 px-5 sm:px-5 tracking-wider text-sm sm:text-base bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 text-slate-100 rounded-r-md sm:rounded-r font-bold capitalize"
                    >
                        <!-- search -->
                        <div class="i-mdi-magnify text-lg sm:text-xl scale-125"></div>
                    </button>
                </div>
                <div class="search-filter w-full xl:w-[84%] flex flex-col gap-y-1">
                    <div class="search-actions py-1 sm:py-1.5 w-full flex items-center justify-between gap-x-8 relative">
                        <h3 class="font-light sm:font-bold capitalize">searched for</h3>
                    </div>
                    <div class="filter-container w-full py-1.5 px-0 gap-x-4 flex flex-row">
                        <button class="py-1 sm:py-1.5 px-3 sm:px-5 tracking-wider flex flex-row items-center gap-x-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded capitalize">
                            {{ usesearchdata?.category.Name }}
                            <div class="i-mdi-close hidden"></div>
                        </button>
                        <button class="py-1 sm:py-1.5 px-3 sm:px-5 tracking-wider flex flex-row items-center gap-x-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded capitalize">
                            {{ usesearchdata?.county.Name }}
                            <div class="i-mdi-close hidden"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="body-data w-full xl:w-[94%] px-1 sm:px-5 flex flex-col gap-y-3">
                <!-- <div class="body-title">
                    <h3 class="text-lg font-bold tracking-wider">Found:</h3>
                </div> -->
                <div class="services-card-body flex flex-col border border-gray-300 rounded-sm">
                    <div class="w-full flex flex-col">
                        <SearchingSuspense />
                        <SearchingSuspense />
                    </div>
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

.pop-up-enter-from , .pop-up-leave-to {
    @apply translate-y-full opacity-0;
}
.pop-up-enter-active {
    transition: opacity 200ms ease, transform 300ms ease;
}
.pop-up-leave-active {
    transition: opacity 200ms ease, transform 500ms ease;
}
section {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.search-bar input {
    @apply py-2.5 sm:py-2.5 px-4 w-full xl:w-[80%] border-gray-200 border border-r-0 md:rounded-l tracking-wider text-sm sm:text-lg font-light bg-gray-50 outline-none focus:border-gray-300;
}

ul.nav-list li {
    @apply flex flex-col;
}

ul.nav-list li button {
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
    @apply border-y border-gray-300 py-3 px-5 sm:px-2 text-base font-bold tracking-wide flex flex-row justify-between items-center w-full;
}
ul.nav-list li .i-mdi-chevron-down {
    @apply text-xl transition-transform duration-300;
}


.filter-container button:hover .i-mdi-close {
    @apply flex
}

::-webkit-scrollbar {
    width: 6px;
    height: 1px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-400;
}
</style>