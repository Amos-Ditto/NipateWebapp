<template>
    <div class="search mt-2 md:mt-0 h-full w-full md:w-[80%] flex flex-row items-center">
        <div class="input w-full h-full ml-2 relative flex items-center tracking-widest text-neutral-600 text-2xl">
            <div class="i-mdi-filter-variant absolute left-4 md:left-6" />
            <input type="text" placeholder="search for products or services">
            <div class="i-mdi-magnify absolute right-4 md:right-7" />
        </div>
    </div>
</template>

<style scoped>
.search {
    transition: width 300ms ease;
}
.input input {
    letter-spacing: 1.5px;
    @apply w-full h-full px-14 outline-none bg-inherit placeholder:italic lg:placeholder:text-base placeholder:text-base italic text-lg;
    @apply rounded-3xl border border-neutral-300 focus:border-orange-400;
    transition: border 300ms ease;
}
</style>