<script setup lang="ts">
const config = useRuntimeConfig();
const apierror = ref<boolean>(false);
const instantloading = ref<boolean>(false);

interface ApiCounties {
    id: Number;
    Name: String;
}
const apicounties = ref<ApiCounties[]>();

const searchlocationmobile = ref<boolean>(false);


// Methods
const searchLocationMobile = ():void => {
    searchlocationmobile.value = !searchlocationmobile.value;
};

const fetchCountyLocations = async (type:void) => {
    await fetch(`${config.base_Url}/location/counties/`)
    .then((res) => {
        if (res.status !== 200) {
            apierror.value = true;
            return;
        }else {
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
const initialApiRequest = async(type: void) => {
    instantloading.value = true;
    await fetchCountyLocations();
    instantloading.value = false;
};
initialApiRequest();
</script>
<template>
    <main class="w-full flex flex-col py-1 gap-2 overflow-y-auto relative min-h-[80vh]">
        <div class="navigation-bar w-full flex flex-row justify-between lg:md:justify-start items-center">
            <div class="mobile-search-btn lg:hidden text-neutral-500 px-4">
                <button>Find by <div class="i-mdi-filter-variant text-base" /></button>
            </div>
            <div class="links flex flex-row md:gap-8">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <section class="w-full lg:hidden flex flex-row gap-4 px-6">
            <div class="mobile-view-filter text-neutral-500 relative">
                <button class="btn-location" @click="searchLocationMobile">Location <div class="i-mdi-map-marker" /></button>
                <Transition name="drop-down">
                    <LazyDropDownsLocationDropDown v-if="searchlocationmobile" :counties="apicounties" :instantloading="instantloading" />
                </Transition>
            </div>
            <div class="mobile-view-filter text-neutral-500 relative flex items-center justify-center">
                <button class="btn-location">Services <div class="i-mdi-account-wrench" /></button>
                <!-- <LazyDropDownsServicesDropDown /> -->
            </div>
        </section>
        <section class="w-full px-4">
            <div class="mobile-filter-tags border border-neutral-300 py-1 rounded-lg w-full flex flex-row items-center justify-between px-4">
                <div class="filter-tags w-[80%] text-neutral-600 flex flex-wrap gap-2">
                    <button class="bg-zinc-200 rounded px-3 py-1 text-xs tracking-wide italic">Kabarak</button>
                    <button class="bg-zinc-200 rounded px-3 py-1 text-xs tracking-wide italic">Kabarak</button>
                    <button class="bg-zinc-200 rounded px-3 py-1 text-xs tracking-wide italic">Kabarak</button>
                </div>
                <button class="bg-orange-300 px-3 py-1 rounded-lg text-white font-bold">search</button>
            </div>
        </section>
        <section class="w-full flex flex-row justify-evenly">
            
            <section class="service-requests flex flex-row gap-4 w-full lg:w-[75%]">
                <div class="services-list w-full">
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
    @apply px-2 border border-neutral-300 py-1 flex flex-row items-center gap-1 text-sm rounded;
    @apply hover:text-green-500;
    transition: color 300ms ease , border 300ms ease;
}
</style>