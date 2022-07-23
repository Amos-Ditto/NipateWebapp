<script setup lang="ts">
import {Locations, Categories} from '~~/types/LocationTypes';
const config = useRuntimeConfig();
const apierror = ref<boolean>(false);
const instantloading = ref<boolean>(false);

const openfiltercounter = ref<boolean>(false);
const filterlocationtags = ref<Locations[]>([]);
const filtercategorytags = ref<Categories[]>([]);

const apicounties = ref<Locations[]>([]);
const apicategories = ref<Categories[]>([]);

const searchlocationmobile = ref<boolean>(false);
const searchservicesmobile = ref<boolean>(false);


// Methods
const searchLocationMobile = ():void => {
    searchservicesmobile.value = false;
    searchlocationmobile.value = !searchlocationmobile.value;
};
const searchServicesMobile = ():void => {
    searchlocationmobile.value = false;
    searchservicesmobile.value = !searchservicesmobile.value;
}

const fetchCountyLocations = async (type:void) => {
    await fetch(`${config.base_Url}/location/counties/`)
    .then((res) => {
        if (res.status !== 200) {
            apierror.value = true;
            return;
        }
        return res.json();
    })
    .then(response => {
        apicounties.value = response;
    })
    .catch(error => {
        apierror.value = true;
        console.log(error);
    })
};
const fetchServiceCategories = async (type:void) => {
    await fetch(`${config.base_Url}/service/category/`)
    .then((res) => {
        if (res.status !== 200) {
            apierror.value = true;
            return;
        }
        return res.json();
    })
    .then(response => {
        apicategories.value = response;
    })
    .catch(error => {
        apierror.value = true;
        console.log(error);
    })
};
const initialApiRequest = async(type: void) => {
    instantloading.value = true;
    await fetchCountyLocations();
    console.log('fetching from another api');
    
    await fetchServiceCategories();
    instantloading.value = false;
};
initialApiRequest();


const enter = (el: HTMLElement): void => {
    el.style.height = "auto";
    let height = getComputedStyle(el).height;
    el.style.height = '0';
    getComputedStyle(el);
    setTimeout(() => {el.style.height = height});

};

const afterEnter = (el: HTMLElement): void => {
    el.style.height = "auto";
};

const leave = (el: HTMLElement): void => {
    el.style.height = getComputedStyle(el).height;
    getComputedStyle(el);
    setTimeout(() => {el.style.height = '0'});
};

// Receive emits methods
const selectLocationFilterTag = (event: Locations): void => {
    if (filterlocationtags.value.length > 0) {
        for(let i=0; i < filterlocationtags.value.length; i++) {
            if (filterlocationtags.value[i]['id'] === event['id']) {
                return;
            }
        }
    }
    filterlocationtags.value.push(event);
    openfiltercounter.value = true;
};
const selectCategoryFilterTag = (event: Categories): void => {
    if (filtercategorytags.value.length > 0) {
        for(let i=0; i < filtercategorytags.value.length; i++) {
            if (filtercategorytags.value[i]['id'] === event['id']) {
                return;
            }
        }
    }
    filtercategorytags.value.push(event);
    openfiltercounter.value = true;
}
const popFilterTag = (event: Locations['id']): void => {
    for(let i=0; i < filterlocationtags.value.length; i++) {
        if (filterlocationtags.value[i]['id'] === event) {

            // Edit this delete item
            // filterlocationtags.value.slice
            if(filterlocationtags.value.length === 0 && filtercategorytags.value.length === 0) {
                openfiltercounter.value = false;
            }
            break;
        }
    }
};
</script>
<template>
    <main class="w-full flex flex-col py-1 gap-2 overflow-y-auto relative min-h-[80vh]">
        <div class="navigation-bar w-full flex flex-row justify-between lg:md:justify-start items-center">
            <div class="mobile-search-btn lg:hidden text-neutral-500 px-4">
                <button class="py-1">Find by <div class="i-mdi-filter-variant text-base" /></button>
            </div>
            <div class="links flex flex-row md:gap-8">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <section class="w-full lg:hidden flex flex-row gap-4 px-6 relative">
            <div class="mobile-view-filter text-neutral-500 relative">
                <button
                    class="btn-location" :class="searchlocationmobile ? 'border-green-500 text-green-500' : 'border-neutral-300'"
                    @click="searchLocationMobile"
                >
                    <div class="i-mdi-map-marker" /> Location</button>
                <Transition name="drop-down">
                    <LazyDropDownsLocationDropDown
                        v-if="searchlocationmobile" :counties="apicounties"
                        :instantloading="instantloading" @select-location-filter-tag="selectLocationFilterTag" />
                </Transition>
            </div>
            <div class="mobile-view-filter text-neutral-500 relative flex items-center justify-center">
                <button
                    @click="searchServicesMobile"
                    class="btn-location" :class="searchservicesmobile ? 'border-green-500 text-green-500' : 'border-neutral-300'"
                ><div class="i-mdi-account-wrench" /> Services</button>
                <Transition name="drop-down">
                    <LazyDropDownsServicesDropDown
                        v-if="searchservicesmobile" :apicategories="apicategories"
                        :instantloading="instantloading" @select-category-filter-tag="selectCategoryFilterTag" />
                </Transition>
            </div>
            <Transition name="drop-down">
                <div class="mobile-search-btn absolute right-0 flex items-center h-full" v-if="openfiltercounter">
                    <button class="text-xs bg-orange-400 hover:bg-orange-500 tracking-wider rounded p-1.5 text-white font-bold">search</button>
                </div>
            </Transition>
        </section>
        <section class="filter-container w-full px-2 lg:hidden py-0 shadow border-t border-neutral-200">
            <Transition name="menu-mobile" @enter="enter" @after-enter="afterEnter" @leave="leave">
                <div class="filter-container-counter w-full flex flex-row items-center overflow-x-auto" v-if="openfiltercounter">
                    <div class="filter-text flex flex-row items-center text-neutral-400 text-sm italic tracking-wide">
                        <h3>filters</h3>
                        <div class="i-mdi-chevron-right text-lg" />
                    </div>
                    <DropDownsSelectedFilters
                        :locationtags="filterlocationtags" @pop-filter-tag="popFilterTag"
                        :producttags="filtercategorytags"
                    />
                </div>
            </Transition>
        </section>
        <section class="w-full flex flex-row justify-evenly">
            
            <section class="service-requests flex flex-row gap-4 w-full lg:w-[75%]">
                <div class="services-list w-full pt-1">
                    <h3 class="text-neutral-500 font-bold tracking-wide px-4">Services Requested:</h3>
                    <LazyContextServicesList />
                </div>
            </section>
            <div class="filters-tags hidden lg:flex flex-col w-[20%] py-3">
                <button class="flex flex-row items-center text-neutral-600 text-lg italic gap-3 px-2 font-bold hover:text-green-600">
                    Find by <div class="i-mdi-filter-variant" />
                </button>
                <div class="filter-tags-group flex flex-col w-full pt-4 px-4 gap-2">
                    <LazyFiltersLocationFilter />
                    <LazyFiltersServiceFilters />
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

/* Transitions */
.drop-down-enter-from , .drop-down-leave-to {
    opacity: 0;
}
.drop-down-enter-active , .drop-down-leave-active {
    transition: opacity 400ms ease;
}
.menu-mobile-enter-active, .menu-mobile-leave-active {
    transition: height 250ms ease-in-out;
    overflow: hidden;
}
.navigation-bar {
    @apply pr-2 md:pr-16 pt-3 md:pt-0;
}
.filters-tags , .navigation-bar .links button{
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}

.navigation-bar .links button {
    @apply px-2 text-neutral-600 text-sm sm:text-base md:text-lg font-bold tracking-wide hover:text-green-500;
    transition: color 250ms ease;
}
.tag-values label {
    @apply w-full flex flex-row items-center text-neutral-500;
    @apply text-sm tracking-wide hover:bg-slate-100 px-2 py-2 cursor-pointer;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}
.tag-values button {
    @apply w-full flex items-center text-start text-neutral-500;
    @apply text-base hover:bg-slate-100 py-2 px-2 cursor-pointer;
}
.tag-values label input {
    @apply w-[1rem] h-[1rem];
}
.search-btn button {
    @apply bg-blue-400 text-white font-bold px-8 tracking-wide rounded hover:bg-blue-600;
    transition: background-color 300ms ease;
}
.service-requests {
    transition: width 300ms ease;
}

/* Mobile styles */
.mobile-search-btn button {
    transition: border 300ms ease , color 300ms ease;
    @apply flex flex-row items-center text-xs font-semibold italic px-3 tracking-wider gap-1.5;
}
.mobile-view-filter .btn-location {
    @apply px-2.5 border py-1.5 flex flex-row items-center gap-1 text-sm rounded;
    @apply hover:text-green-500 hover:border-green-500;
    transition: color 300ms ease , border 300ms ease;
}
.mobile-filter-tags .filters-tags button {
    transition: background-color 300ms ease;
}
.filter-container {
    transition: height 300ms ease;
}
</style>