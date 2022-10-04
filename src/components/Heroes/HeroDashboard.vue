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
    <div class="w-full flex flex-col justify-center items-center gap-y-1">
        <h3 class="text-xl sm:text-2xl md:text-3xl text-[#014451] font-[600] transition-font duration-300">Find the best people to serve you</h3>
        <div class="search-bar flex flex-col justify-center items-center pt-3 sm:pt-4 md:pt-8 w-[90%] md:w-[75%] lg:w-[70%] xl:w-[60%] relative transition-all duration-300">
            <input type="text" placeholder="search data e.g Housing, Kabarak" v-model="searchvalue" @input="onInputKeyDown" @focusout="toggleCloseSearch">
            <div class="i-mdi-menu-down absolute right-4 text-2xl cursor-pointer transition-transform duration-300" :class="opensearch && 'rotate-180'" @click="toggleOpenCloseSearch"></div>
            <transition name="fade">
                <div class="browse-by w-full absolute bottom-0 translate-y-[104%] bg-gray-200 py-1 min-h-[3rem] flex flex-col gap-1 shadow" v-if="opensearch">
                    <!-- <div class="search-data w-full border-b border-gray-300 min-h-[2rem]">

                    </div> -->
                    <div class="w-full flex items-center justify-center py-1 gap-2">
                        <small>Browse by</small>
                        <button>Services</button>
                        <small>or</small>
                        <button>Location</button>
                    </div>
                </div>
            </transition>
        </div>
        <div class="hero-browse-by w-[90%] md:w-[70%] lg:w-[60%] transition-width duration-300 flex items-center justify-center py-1 gap-2">
            <small>Browse by</small>
            <button>Services</button>
            <small>or</small>
            <button>Location</button>
        </div>
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
    @apply bg-gray-100 py-2 rounded-md border border-gray-300 w-full outline-none px-4 tracking-wider text-lg text-slate-600 font-serif placeholder:text-base;
}
.browse-by small , .hero-browse-by small {
    @apply text-[#014451];
}
.hero-browse-by button,
.browse-by button {
    @apply border  border-orange-200 py-1 px-2 hover:bg-orange-300 rounded text-slate-700 font-serif text-base transition-colors duration-300;
}
</style>