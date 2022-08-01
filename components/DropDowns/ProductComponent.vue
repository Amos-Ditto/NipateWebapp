<script setup lang="ts">

</script>
<template>
    <main class="w-full p-2 flex flex-col gap-4">
        <div class="search-product w-full flex-row flex items-center text-neutral-500 relative">
            <input type="search" id="search" placeholder="search for product">
            <button class="absolute right-[25%]"><div class="i-mdi-magnify text-lg"></div></button>
        </div>
        <!-- <hr> -->
        <div class="product-group flex-col w-full text-neutral-500 px-2">
            <h3 class="text-sm underline decoration-neutral-400">your product category</h3>
            <div class="products w-full flex flex-col gap-2 pr-6 pt-4">
                <div class="product flex flex-col gap-1">
                    <DropDownsProductMiniComponent />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.search-product input {
    @apply w-[80%] border border-gray-300 rounded outline-none h-[2.5rem];
    @apply pl-4 pr-12 text-base;
}
.products .product .select-btn {
    @apply  w-full flex flex-row items-center justify-between hover:bg-gray-200;
    @apply px-4 py-3 relative cursor-pointer;
    transition: background-color 300ms ease;
}
</style>