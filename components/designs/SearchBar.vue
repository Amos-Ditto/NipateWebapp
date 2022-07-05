<template>
    <div class="search h-[4rem] w-full flex flex-row items-center px-6 text-xl text-neutral-500">
        <div class="filter-by">
            <div class="i-mdi-filter" />
        </div>
        <div class="input w-[60%] ml-2 relative flex items-center tracking-widest">
            <input type="text" placeholder="search by ...">
            <div class="i-mdi-magnify absolute right-1" />
        </div>
    </div>
</template>

<style scoped>

.input input {
    letter-spacing: 1.5px;
    @apply w-full py-1 outline-none border-b border-neutral-500 bg-inherit placeholder:italic lg:placeholder:text-base placeholder:text-base italic px-3 text-sm;
}
</style>