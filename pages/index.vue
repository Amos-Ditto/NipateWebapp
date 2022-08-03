<script setup lang="ts">
const router = useRoute();
console.log(router.name);


</script>
<template>
    <NuxtLayout>
        <main class="w-full px-2 text-neutral-500 flex items-center flex-col gap-4">
            <div class="header-container w-full px-4 sm:px-12 gap-2 flex flex-col pt-4">
                <h3 class="font-bold text-xl sm:text-3xl tracking-tight">Service Categories</h3>
                <div class="categories flex flex-row gap-4 py-2 w-full overflow-x-auto">
                    <button>All</button>
                    <button><NuxtLink to="/">Housing</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-categories'}">Transport</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-groups'}">Catering</NuxtLink></button>
                    <button>Transport</button>
                    <button><NuxtLink to="/">Housing</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-categories'}">Transport</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-groups'}">Catering</NuxtLink></button>
                    <button>Transport</button>
                    <button><NuxtLink to="/">Housing</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-categories'}">Transport</NuxtLink></button>
                    <button><NuxtLink :to="{name: 'index-groups'}">Catering</NuxtLink></button>
                    <button>Transport</button>
                </div>
            </div>
            <div class="hero-container gap-4">
                <div class="hero-text">
                    <h3 class="text-2xl sm:text-4xl md:text-[2.8rem] font-bold sm:leading-[40px]">Find the best people <br class="hidden sm:block"> to serve you</h3>
                </div>
                <div class="search-bar">
                    <div class="input-field w-[80%] flex items-center relative">
                        <input type="search" placeholder="search for service">
                        <div class="i-mdi-magnify absolute left-0 z-[2] translate-x-[80%] text-xl text-neutral-400"></div>
                    </div>
                    <button class="loc-btn bg-white border border-neutral-300 hover:bg-gray-200">
                        <div class="i-mdi-google-maps text-2xl"></div>
                    </button>
                    <button class="search-btn">Search</button>
                </div>
            </div>
            <div class="body-content w-full">
                <NuxtPage />
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
    @apply w-full sm:w-[90%] text-neutral-500 px-4 min-h-[8rem];
    @apply grid grid-cols-1 lg:grid-cols-2 items-center;
}
.hero-container .hero-text h3 {
    transition: font 300ms;
}

.search-bar {
    @apply flex flex-row gap-x-1 items-center w-full;
}
.search-bar .input-field input {
    @apply w-full outline-none bg-white h-[2.8rem] sm:h-[3.6rem] border border-neutral-300 rounded-l-xl;
    @apply pl-11 text-lg tracking-widest;
    transition: height 300ms;
}
.search-bar button {
    @apply h-[2.8rem] sm:h-[3.6rem] px-4;
    transition: height 300ms;
}
.search-bar .search-btn {
    @apply rounded-r-xl text-sm sm:text-lg px-4 bg-orange-500 hover:bg-orange-600 text-slate-100 font-bold;
    transition: background-color 300ms;
}
.search-bar .loc-btn {
    transition: background-color 300ms;
}
</style>