<script setup lang="ts">
import { ref } from 'vue';


const opensearch = ref<boolean>(false);
const searchvalue = ref<string>('');

const toggleOpenSearch = (): void => { opensearch.value = true }
const toggleCloseSearch = (): void => { opensearch.value = false }
const toggleOpenCloseSearch = (): void => { opensearch.value = !opensearch.value }

const onInputKeyDown = (e: Event): void => {
    console.log(searchvalue.value);
    if(searchvalue.value.trim().length >= 3) {toggleOpenSearch()}
}
</script>
<template>
    <div class="w-full py-2 sm:py-5 flex flex-col justify-center items-center gap-y-10 sm:gap-y-16">
        <div class="hero-title flex w-full justify-center items-center">
            <h3
                class="text-center leading-[1.25] text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[#014451] font-bold tracking-wide transition-font duration-300"
            >Find the best people <br class="" /> to serve you.</h3>
        </div>
        <div class="serch-container grid grid-cols-3 sm:grid-cols-4 gap-x-2 sm:gap-x-5 w-[84%] sm:w-[65%] lg:w-[50%]">
            <div class="search-input col-span-2 sm:col-span-3 relative flex items-center justify-center">
                <input type="text" placeholder="Search for service...">
                <div class="i-mdi-magnify absolute left-3 scale-125 text-base text-slate-500"></div>
            </div>
            <div class="search-btn">
                <button
                    class="capitalize shadow-md rounded-lg py-2 sm:py-2.5 px-4 sm:px-8 bg-orange-400 hover:bg-orange-500 text-slate-100 text-base sm:text-lg font-light tracking-wider transition-colors duration-300"
                >search</button>
            </div>
        </div>
        <!-- <div class="search-bar flex flex-col justify-center items-center pt-3 sm:pt-4 md:pt-8 w-[94%] md:w-[75%] lg:w-[70%] xl:w-[60%] relative transition-all duration-300">
            <input type="text" placeholder="search data e.g Housing, Kabarak" v-model="searchvalue" @input="onInputKeyDown" @focusout="toggleCloseSearch">
            <div class="i-mdi-menu-down absolute right-4 text-2xl cursor-pointer transition-transform duration-300" :class="opensearch && 'rotate-180'" @click="toggleOpenCloseSearch"></div>
            <transition name="fade">
                <div class="browse-by w-full absolute bottom-0 translate-y-[104%] bg-gray-200 py-1 min-h-[3rem] flex flex-col gap-1 shadow" v-if="opensearch">

                    <div class="w-full flex items-center justify-center py-1 gap-2">
                        <small class="text-xs sm:text-sm">Browse by</small>
                        <button class="text-xs sm:text-sm">Services</button>
                        <small>or</small>
                        <button class="text-xs sm:text-sm">Location</button>
                    </div>
                </div>
            </transition>
        </div>
        <div class="hero-browse-by w-[94%] md:w-[70%] lg:w-[60%] transition-width duration-300 flex items-center justify-center py-1 gap-2">
            <small class="text-xs sm:text-sm">Browse by</small>
            <button>Services</button>
            <small>or</small>
            <button>Location</button>
        </div> -->
    </div>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.search-bar input {
    @apply bg-gray-50 py-2.5 sm:py-2 rounded-sm sm:rounded-md border border-gray-300 w-full outline-none px-4 tracking-wider text-sm sm:text-lg text-slate-600 font-serif placeholder:text-sm sm:placeholder:text-base;
}
.browse-by small , .hero-browse-by small {
    @apply text-[#014451];
}
.hero-browse-by button,
.browse-by button {
    @apply border  border-orange-200 py-1 px-2 hover:bg-orange-300 rounded text-slate-700 font-serif text-xs sm:text-sm transition-colors duration-300;
}


.search-input input {
    @apply w-full pl-8 md:pl-10 pr-4 py-2 sm:py-2.5 shadow-sm xs:shadow text-base sm:text-lg font-light tracking-wider border border-gray-300 rounded-lg outline-none;
    @apply transition-all duration-300;
}
</style>