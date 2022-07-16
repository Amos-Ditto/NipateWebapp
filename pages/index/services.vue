<script setup lang="ts">
import ServicesList from "../../components/context/ServicesList.vue";

const selectservices = ref<boolean>(false);

</script>
<template>
    <main class="w-full flex flex-col py-1 gap-2 overflow-y-auto relative min-h-[80vh]">
        <div class="navigation-bar w-full flex flex-row justify-end md:justify-start">
            <div class="links flex flex-row gap-2 md:gap-8">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <section class="w-full flex flex-row justify-evenly">
            
            <section class="flex flex-row gap-4 w-full md:w-[75%]">
                <div class="services-list w-full">
                    <ServicesList />
                </div>
            </section>
            <div class="filters-tags hidden md:flex flex-col w-[20%] py-3">
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
</style>