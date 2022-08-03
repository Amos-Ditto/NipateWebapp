<script setup lang="ts">
const router = useRoute();
console.log(router.name);

const userauthenticated = ref<boolean>(false);

</script>
<template>
    <NuxtLayout>
        <main class="w-full px-0 xs:px-2 text-neutral-500 flex items-center flex-col gap-4">
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
                    <div class="input-field w-[80%] md:w-[60%] lg:w-[50%] flex items-center relative">
                        <input type="search" placeholder="Search for service">
                        <div class="i-mdi-filter-variant absolute left-0 z-[2] translate-x-[80%] text-xl text-neutral-400"></div>
                    </div>
                    <button class="loc-btn bg-white border border-neutral-300 focus:border-orange-300 hover:border-orange-200 hover:bg-gray-200">
                        <div class="i-mdi-google-maps text-xl xs:text-2xl"></div>
                    </button>
                    <button class="search-btn px-20 xs:w-[20%] lg:w-[9%]">
                        <span class="hidden xs:block">Search</span>
                        <div class="i-mdi-magnify block xs:hidden text-xl scale-125"></div>
                    </button>
                </div>
            </div>
            <div class="search-bar-auth" v-if="userauthenticated">
                <div class="search-content w-full capitalize text-sm md:text-lg italic px-4">
                    <h3 class="hidden xs:block">search for services at certain 'location':</h3>
                </div>
                <div class="search-bar">
                    <div class="input-field w-[80%] md:w-[60%] lg:w-[50%] flex items-center relative">
                        <input type="search" placeholder="Search for service">
                        <div class="i-mdi-filter-variant absolute left-0 z-[2] translate-x-[80%] text-xl text-neutral-400"></div>
                    </div>
                    <button class="loc-btn bg-white border border-neutral-300 focus:border-orange-300 hover:border-orange-200 hover:bg-gray-200">
                        <div class="i-mdi-google-maps text-xl xs:text-2xl"></div>
                    </button>
                    <button class="search-btn px-20 xs:w-[20%] lg:w-[9%]">
                        <span class="hidden xs:block">Search</span>
                        <div class="i-mdi-magnify block xs:hidden text-xl scale-125"></div>
                    </button>
                </div>
            </div>
            <div class="body-content w-full py-1">
                <NuxtPage />
            </div>
        </main>
    </NuxtLayout>
</template>

<style scoped>

.categories::-webkit-scrollbar {
    width: 0px;
    display: none;
}
 
.categories::-webkit-scrollbar-track {
    @apply bg-gray-100;
    border-radius: 10px;
}
 
.categories::-webkit-scrollbar-thumb {
    @apply bg-gray-200;
    border-radius: 2px;
}

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
    @apply w-full outline-none bg-white h-[2.4rem] xs:h-[2.8rem] sm:h-[3.6rem] border border-neutral-300 rounded-l-xl;
    @apply pl-11 text-sm xs:text-lg tracking-widest focus:border-orange-200;
    transition: height 300ms;
}
.search-bar button {
    @apply h-[2.4rem] xs:h-[2.8rem] sm:h-[3.6rem] px-4;
    transition: height 300ms;
}
.search-bar .search-btn {
    @apply rounded-r-xl text-sm sm:text-lg px-4 bg-orange-500 hover:bg-orange-600 text-slate-100 font-bold;
    transition: background-color 300ms;
}
.search-bar .loc-btn {
    transition: background-color 300ms;
}
.search-bar-auth {
    @apply  w-full items-center gap-1 flex justify-center flex-col px-2 xs:px-5 sm:px-20;
}
</style>