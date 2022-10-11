<script setup lang="ts">
import { ref } from 'vue';


const openselect = ref<boolean>(false);

const toggleSelect = (): void => {
    openselect.value = !openselect.value;
}
</script>
<template>
    <div class="register-provider flex flex-col gap-y-8 px-6 border border-gray-300 rounded-md py-4">
        <div class="form-title">
            <h3 class="text-lg font-light tracking-wide">Register to provide Services.</h3>
        </div>
        <div class="input-field flex flex-col gap-y-2">
            <label for="select-loc" class="text-xs font-bold">Current county:</label>
            <div class="input flex items-start flex-col relative">
                <transition name="popup">
                    <div v-if="openselect"
                        class="select py-1.5 absolute z-30 -top-full left-1/2 sm:left-1/4 right-0 sm:right-1/2 min-h-[8rem] max-h-[13rem] bg-gray-50 rounded overflow-y-auto"
                    >
                        <div class="close absolute z-40 top-2 right-2 cursor-pointer hover:bg-gray-300 p-2 rounded-full bg-gray-200" @click="toggleSelect">
                            <div class="i-mdi-close"></div>
                        </div>
                        <ul class="flex flex-col">
                            <li>Nakuru</li>
                            <li>Nairobi</li>
                            <li>Baringo</li>
                            <li>Kericho</li>
                            <li>Nakuru</li>
                            <li>Nairobi</li>
                            <li>Baringo</li>
                            <li>Kericho</li>
                        </ul>
                    </div>
                </transition>
                <button type="button" id="select-loc" @click="toggleSelect"
                    class="flex flex-row items-center justify-between gap-x-8 min-w-[60%] sm:min-w-[30%] px-4 py-2.5 rounded border border-gray-300">
                    <small class="font-sans text-sm tracking-wide">select</small>
                    <div class="i-mdi-chevron-down"></div>
                </button>
            </div>
        </div>
        <div class="accept-terms flex flex-row gap-x-2">
            <input type="checkbox" name="terms" id="terms" class="w-4 h-4">
            <label class="text-xs" for="terms">By registering, you agree to the Terms of Service and Privacy
                Policy.</label>
        </div>
        <div class="submit-provider">
            <button type="button"
                class="bg-slate-600 hover:bg-slate-700 capitalize transition-colors duration-300 rounded-sm px-10 sm:px-8 py-1.5 text-slate-100 text-sm">Submit</button>
        </div>
    </div>
</template>

<style scoped>

.select {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.select ul li {
    @apply w-full py-2 px-3 text-sm text-slate-600 tracking-wide hover:bg-gray-200 cursor-pointer transition-colors duration-200;
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