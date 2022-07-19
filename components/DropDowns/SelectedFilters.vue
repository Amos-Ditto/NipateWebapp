<template>
    <div class="mobile-filter-tags w-full flex flex-col items-start justify-around px-1 gap-1">
        <div class="filter-tags w-full text-neutral-600 overflow-x-auto flex flex-row flex-nowrap gap-2 items-center py-2">
            <button><span>Kabarak</span></button>
            <button><span>Kabarak</span></button>
            <button><span>Kabarak</span></button>
            <button><span>Boda boda</span></button>
            <button><span>Movers</span></button>
            <button><span>Kabarak</span></button>
            <button><span>Kabarak</span></button>
            <button><span>Kabarak</span></button>
            <button><span>Boda boda</span></button>
            <button><span>Movers</span></button>
        </div>
        <div class="search-div w-full flex justify-end items-center pt-2">
            <button class="search-btn bg-orange-300 hover:bg-orange-500 px-3 py-1 rounded-lg text-white font-bold flex items-center">search</button>
        </div>
    </div>
</template>

<style scoped>

.search-btn {
    transition: background-color 300ms ease;
}
.filter-tags button {
    @apply flex items-center;
    @apply bg-zinc-200 rounded-lg px-3 py-2 text-xs tracking-wide italic hover:bg-slate-300;
}
.filter-tags button span {
    @apply flex whitespace-nowrap;
}
</style>