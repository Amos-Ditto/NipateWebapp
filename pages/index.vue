<template>
    <NuxtLayout>
        <main class="w-full px-2 text-neutral-500 flex items-center flex-col gap-4">
            <div class="header-container w-full px-4 sm:px-12 gap-2 flex flex-col pt-4">
                <h3 class="font-bold text-xl sm:text-3xl tracking-tight">Service Categories</h3>
                <div class="categories flex flex-row gap-4 py-2 w-full overflow-x-auto">
                    <button>All</button>
                    <button>Housing</button>
                    <button>Transport</button>
                    <button>Transport</button>
                    <button>Transport</button>
                </div>
            </div>
            <div class="hero-container">
                <div class="hero-text">
                    <h3 class="text-[2.8rem] font-bold leading-[40px]">Find the best people <br> to serve you</h3>
                </div>
                <div class="search-bar">
                    <div class="input-field">
                        <input type="search">
                        <div class="i-md-magnify"></div>
                    </div>
                    <button><div class="i-mdi-mapmaker"></div></button>
                    <button>Search</button>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<style scoped>

.categories button {
    @apply px-2 sm:px-4 py-1  rounded-lg hover:bg-gray-200;
    @apply text-base sm:text-lg first:bg-gray-200;
    transition: background-color 300ms;
}
.header-container {
    transition: padding 300ms;
}
.hero-container {
    @apply w-full sm:w-[90%] text-neutral-500 px-4 sm:px-12 min-h-[8rem];
    @apply flex items-center;
}
/* .hero-container .hero-text , .header-container h3 {
    font-family: "Roboto";
} */

.search-bar {
    @apply flex flex-row gap-2 items-center;
}
</style>