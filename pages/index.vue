<script setup lang="ts">
import {useAuthStore} from '~/stores/authentications';

// const userauthenticated = ref<boolean>(true);

const userauthenticated = useAuthStore();
const opensearch = ref<boolean>(false);

const toggleOpenSearchField = ():void => {
    opensearch.value = !opensearch.value;
}

</script>
<template>
    <NuxtLayout>
        <main class="w-full px-0 xs:px-2 text-neutral-500 flex items-center flex-col gap-0">
            <div class="hero-option">
                <div class="hero-title">
                    <h3>Find the best people <br> to serve you</h3>
                </div>
                <div class="hero-search">
                    <div class="input-field-search relative">
                        <input type="search" id="search" placeholder="search services based on locations ...">
                        <button class="h-full px-6 rounded-full absolute right-0"><div class="i-mdi-arrow-right text-neutral-500 scale-125"></div></button>
                    </div>
                </div>
            </div>
            <div class="body-content w-full py-1">
                <NuxtPage />
            </div>
        </main>
    </NuxtLayout>
</template>

<style scoped>

/* Test hero */

.hero-option {
    @apply mt-4 w-full min-h-[8rem] py-4 px-2 flex flex-col gap-8 md:gap-11;
}
.hero-option .hero-title {
    @apply text-start xs:text-center pl-2 w-full flex xs:justify-center;
    transition: text-align 300ms;
}
.hero-option .hero-title h3 {
    @apply leading-8 xs:leading-none text-[1.6rem] xs:text-4xl sm:text-5xl md:text-6xl font-bold text-slate-600;
    transition: font 300ms;
}
.hero-option .hero-search {
    @apply w-full px-2 flex items-center xs:justify-center flex-row gap-0;
}
.hero-option .input-field-search {
    @apply relative flex items-center justify-start w-[85%] xs:w-[80%] md:w-[70%] lg:w-[60%];
    transition: width 300ms;
}
.hero-option .hero-search input {
    @apply w-full pl-3 sm:pl-8 pr-14 text-base xs:text-lg sm:text-2xl tracking-wider outline-none border-y border border-gray-300 rounded-md xs:rounded-full;
    @apply placeholder:text-base placeholder:xs:text-lg placeholder:sm:text-2xl placeholder:italic bg-gray-100;
}
.hero-option .hero-search button {
    transition: background-color 300ms;
}
.hero-option .hero-search button .i-mdi-arrow-right {
    transition: transform 300ms , color 300ms;
}
.hero-option .hero-search button:hover .i-mdi-arrow-right {
    @apply translate-x-[50%] text-orange-400;
}
.hero-option .hero-search input , .hero-option .hero-search button {
    @apply h-[2.6rem] xs:h-[3.2rem] md:h-[3.6rem];
}
</style>