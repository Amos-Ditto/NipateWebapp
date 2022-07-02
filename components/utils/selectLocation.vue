<template>
    <div class="locations w-full py-3 px-2 overflow-y-hidden">
        <div class="search w-full p-2 flex justify-center relative bg-slate-100 rounded">
            <input type="text" class=" w-[84%] h-8 sm:h-9 rounded outline-none border border-neutral-400 bg-inherit pl-[14%] pr-2 tracking-wider">
            <div class="i-mdi-magnify absolute leading-10 top-0 sm:top-1 translate-y-full left-[15%] flex items-center" />
        </div>
        <div class="places w-full mt-2">
            <LazyUtilsLocationList />
        </div>
    </div>
</template>

<style scoped>

input:focus {
    @apply border-blue-500 border-2;
    transition: border 300ms ease;
}
</style>