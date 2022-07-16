<script setup lang="ts">
import ServicesList from "../../components/context/ServicesList.vue";

const findlocation = ref<boolean>(false);
const findservices = ref<boolean>(false);

// Methods
const filterLocation = ():void => {
    if (findservices.value == true) {
        findservices.value = false;
    };
    setTimeout(() => {
        findlocation.value = !findlocation.value;
    }, 200);
}
const filterServices = ():void => {
    if (findlocation.value == true) {
        findlocation.value = false;
    };
    setTimeout(() => {
        findservices.value = !findservices.value;
    }, 200);
}
const closeServiceSearch = ():void => {
    findservices.value = false;
};
const closeLocationSearch = ():void => {
    findlocation.value = false;
}
</script>
<template>
    <main class="w-full flex flex-col py-1 gap-2 overflow-y-auto relative min-h-[80vh]">
        <div class="navigation-bar w-full flex flex-row justify-between">
            <div class="filters flex items-center">
                <button class="flex flex-row items-center text-neutral-600 text-sm gap-2 px-2 font-bold hover:text-green-600">
                    Find by <div class="i-mdi-filter-variant" />
                </button>
            </div>
            <div class="links flex flex-row gap-2 md:gap-8">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <div class="filter-btns flex flex-row px-3 gap-3 w-full md:w-auto">
            <div class="relative filter-btn">
                <button
                    @click="filterLocation"
                    :class="findlocation ? 'border-green-500 text-green-500' : 'text-neutral-500 border-neutral-300'"
                >
                    Location <div class="i-mdi-map-marker" />
                </button>
                <DropdownsMenuDropDown v-if="findlocation" @close-location-search="closeLocationSearch" />
            </div>
            <div class="relative filter-btn">
                <button
                    :class="findservices ? 'border-green-500 text-green-500' : 'text-neutral-500 border-neutral-300'"
                    @click="filterServices"
                >
                    services <div class="i-mdi-account-wrench" /></button>
                <DropdownsServicesDropDown v-if="findservices" @close-service-search="closeServiceSearch" />
            </div>
        </div>
        <section class="pt-3 md:pt-4 flex w-full flex-row gap-4">
            <div class="services-list w-full sm:w-[80%] md:w-[60%]">
                <ServicesList />
            </div>
            <div class="request-stats hidden sm:block w-[30%]">

            </div>
        </section>
    </main>
</template>

<style scoped>
.navigation-bar {
    @apply pr-2 md:pr-16 pt-3 md:pt-0;
}
.filters , .filter-btns button , .navigation-bar .links button{
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}

.navigation-bar .links button {
    @apply px-2 text-neutral-600 text-sm sm:text-base md:text-lg font-bold tracking-wide hover:text-green-500;
    transition: color 250ms ease;
}
.filter-btns button {
    @apply flex flex-row items-center gap-1.5 text-sm md:text-base border px-2 md:px-4 py-1 rounded;
    @apply hover:border-green-500 hover:text-green-500;
    transition: border 300ms ease , color 300ms ease;
}
.filter-btns {
    @apply md:absolute md:top-0 md:translate-x-[40%];
}
/* .filter-btn .dropdown {
    @apply absolute bottom-0 translate-y-[110%] min-w-[200px] min-h-[150px] bg-slate-100 rounded border border-neutral-300;
} */
</style>