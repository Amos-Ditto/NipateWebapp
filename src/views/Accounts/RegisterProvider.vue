<script setup lang="ts">
import { ref } from 'vue';


const openselect = ref<boolean>(false);

const toggleSelect = (): void => {
    openselect.value = !openselect.value;
}
</script>

<template>
    <section class="w-full flex flex-col items-center justify-center px-1 xs:px-[14px] lg:px-[78px] py-12 gap-y-16">
        <div class="title w-full md:w-[650px] flex items-center justify-start px-4 sm:px-20">
            <h3 class="text-3xl font-light tracking-wide">Register as Provider</h3>
        </div>
        <div class="form md:w-[650px] flex flex-col pb-6 px-4 sm:px-8 gap-y-10">
            <div class="input-field w-full flex flex-col gap-y-3">
                <label for="region" class="text-sm tracking-wide">Where will you be offering services from?</label>
                <div class="input flex flex-col w-full relative">
                    <button id="region" @click="toggleSelect"
                        class="py-2 w-full sm:w-3/4 flex flex-row items-center justify-between font-light px-4 border border-gray-300 focus:border-slate-400 rounded capitalize text-base tracking-wide"
                    >
                        select region
                        <div class="i-mdi-chevron-down"></div>
                    </button>
                    <Transition name="popup">
                        <div v-if="openselect"
                            class="drop-down absolute py-2 flex flex-col gap-y-1 -top-1/4 left-1/3 sm:left-1/4 right-2 sm:right-1/4 min-h-[6rem] max-h-[12rem] shadow-lg rounded z-30 bg-white"
                        >
                            <div class="close absolute top-1 right-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center" @click="toggleSelect">
                                <div class="i-mdi-close"></div>
                            </div>
                            <ul class="flex flex-col gap-y-1 overflow-y-auto">
                                <li>Nairobi</li>
                                <li>Nakuru</li>
                                <li>Baringo</li>
                                <li>Kericho</li>
                                <li>Kiambu</li>
                            </ul>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="accept-terms flex flex-row items-center gap-x-2 w-full sm:w-3/4 pt-8">
                <p class="text-sm font-light text-slate-600">
                    By registering, you agree to the Nipate's <span class="text-base font-bold">Terms of Conditions</span> and <span class="text-base font-bold">Privacy Policy</span>
                </p>
            </div>
            <div class="submit-btn w-full flex flex-col">
                <button
                    class="bg-slate-700 hover:bg-slate-800 w-full sm:w-3/4 rounded shadow text-slate-100 text-lg uppercase tracking-wide py-2 sm:py-3 px-4 transition-colors duration-300"
                >Create Account</button>
            </div>
        </div>
    </section>
</template>

<style scoped>

.drop-down ul li {
    @apply text-sm py-1.5 px-3 hover:bg-gray-100 cursor-pointer;
}

.popup-enter-from {
    @apply w-1/4 h-1/4 opacity-0 translate-x-0;
}
.popup-leave-to {
    @apply opacity-0;
}
.popup-enter-active, .popup-leave-active {
    transition: opacity 200ms ease, transform 300ms ease, width 300ms ease, height 300ms ease;
}

::-webkit-scrollbar {
    width: 2px;
    height: 1px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>