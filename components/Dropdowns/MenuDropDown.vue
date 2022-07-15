<template>
    <main class="absolute bottom-0 translate-y-[105%] min-w-[260px] min-h-[150px] bg-slate-100 rounded border border-neutral-300 z-10 px-0 py-1 shadow">
        <div class="title w-full flex flex-row items-center justify-between px-2">
            <h3 class="font-bold text-lg text-neutral-600">Locations</h3>
            <h3 class="text-xs font-semibold text-blue-500 capitalize">save search</h3>
        </div>
        <div class="search-form w-full flex items-center justify-center relative text-neutral-500 px-2">
            <input
                type="text" placeholder="type your location"
                class="w-[92%] pl-2 pr-6 py-1 outline-none border border-neutral-300 rounded text-base tracking-wider bg-inherit placeholder:text-sm focus:border-blue-500"
            >
            <div class="i-mdi-magnify absolute right-0 translate-x-[-160%] translate-y-[10%]" />
        </div>
        <div class="saved-search w-full"></div>
        <h3 class="tag w-full flex flex-row items-center font-semibold text-sm font-serif text-neutral-500 gap-1 bg-slate-50 px-2 py-2 shadow-inner tracking-wide">
            Regions <div class="i-mdi-chevron-down text-base" />
        </h3>
        <div class="regions w-full flex flex-col gap-1">
            <LazyDropdownsRegionDropDown />
            <LazyDropdownsRegionDropDown />
            <LazyDropdownsRegionDropDown />
        </div>
    </main>
</template>

<style scoped>
main {
    @apply flex flex-col gap-2;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}
.search-form:focus-within .i-mdi-magnify {
    @apply text-blue-500;
}
</style>