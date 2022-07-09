<script setup lang="ts">
const searchfilter = ref<boolean>(false);

interface Filters {
    name: string;
    link: string;
};

const filters: Filters[] = [
    {
        name: "Search for Products",
        link: "/products"
    },
    {
        name: "Search for Providers",
        link: "/providers"
    },
    {
        name: "Search for Products in location",
        link: "/products"
    }
]
const selectedfilter = ref<Filters>();

// Methods
const onSelect = (index: number): void => {
    selectedfilter.value = filters[index];
    searchfilter.value = !searchfilter.value;
};
const onSearch = (): void => {
    if (selectedfilter.value === undefined) {
        searchfilter.value = true;
    }
};
</script>
<template>
    <div class="search mt-2 md:mt-0 h-full w-[96%] md:w-[80%] flex flex-row items-center justify-center relative">
        <div class="input w-full h-full ml-2 relative flex items-center tracking-widest text-neutral-600 text-2xl">
            <div class="i-mdi-filter-variant absolute left-4 md:left-6 hover:text-orange-400 cursor-pointer" />
            <input type="text" placeholder="search for products or services" @click="onSearch" class=" disabled:cursor-not-allowed">
            <div class="i-mdi-magnify absolute right-4 md:right-7 hover:text-orange-400 cursor-pointer" />
        </div>
        <transition name="fade">
            <div class="filters absolute bottom-0 left-0 w-[80%] min-h-[8rem] bg-white rounded translate-y-[105%] translate-x-[5%] z-[10] shadow-md" v-if="searchfilter">
                <ul class="w-full flex flex-col gap-2 py-1">
                    <li v-for="(filter, index) in filters" :key="index" @click="onSelect(index)">{{ filter.name }}</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<style scoped>

.fade-enter-from , .fade-leave-to {
    opacity: 0;
}
.fade-enter-active , .fade-leave-active {
    transition: opacity 300ms ease;
}
.search {
    transition: width 300ms ease;
}
.input input {
    letter-spacing: 1.5px;
    @apply w-full h-full px-12 outline-none bg-inherit placeholder:italic lg:placeholder:text-base placeholder:text-base italic text-lg;
    @apply rounded-3xl border border-neutral-300 focus:border-orange-400;
    transition: border 300ms ease;
}
.filters ul li {
    @apply w-full py-2 px-3 text-neutral-500 text-base font-semibold border-b border-neutral-300;
    @apply hover:bg-slate-100 cursor-pointer;
    transition: background-color 300ms ease-out;
}
</style>