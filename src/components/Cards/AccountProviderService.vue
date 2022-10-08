<script setup lang="ts">
import { ref } from 'vue';


const requestdelete = ref<boolean>(false);

const executeDelete = (): void => {
    requestdelete.value = true;
}

</script>
<template>
    <div
        class="service-container py-3 w-full flex flex-col gap-y-6 sm:gap-y-8 border border-slate-300 rounded-md sm:rounded-xl relative">
        <div class="w-full px-3 sm:px-4 py-3 flex flex-row items-center justify-between">
            <h3 class="text-lg font-semibold tracking-wide">Rafiki Cafe</h3>
            <div class="edit-icons flex flex-row items-center gap-x-4 relative justify-end sm:justify-center">
                <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300">Edit</button>
                <button
                    class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm hover:text-tomato hover:border-tomato transition-colors duration-300"
                    @click="executeDelete" :class="requestdelete && 'border-tomato text-tomato'"
                >
                    Delete
                </button>
                <Transition name="popup">
                    <div class="modal-delete absolute  top-[120%] w-[150%] sm:w-[110%] min-h-[4rem] rounded bg-gray-50 shadow-md flex flex-col px-1.5 py-2 gap-y-1" v-if="requestdelete">
                        <div class="flex flex-col gap-y-0.5">
                            <small class="text-xs text-slate-500">This action will delete "Rafiki Cafe" from all of your Services.</small>
                            <small class="text-xs text-slate-500">Are you sure you want to delete this service?</small>
                        </div>
                        <button class="border border-steelblue rounded text-steelblue w-full py-1 text-sm font-light hover:bg-steelblue hover:text-slate-100 tracking-wide transition-colors duration-300" @click="requestdelete = !requestdelete">Decline</button>
                        <button class="border border-tomato rounded text-tomato w-full py-1 text-sm font-light hover:bg-tomato hover:text-slate-100 tracking-wide transition-colors duration-300" @click="requestdelete = !requestdelete">Accept</button>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-y-4 gap-x-3">
            <div
                class="list-details px-3 sm:px-4 flex flex-col gap-y-3">

                <div class="service w-full flex flex-row items-center gap-x-2 flex-wrap">
                    <small class="text-sm font-bold">Service:</small>
                    <p class="text-xs truncate">Boda Boda</p>
                </div>
                <div class="loc w-full flex flex-row items-center gap-x-2 flex-wrap">
                    <small class="text-sm font-bold">Located at:</small>
                    <p class="text-xs truncate">Shoppers Paradise Plaza, Kenyatta Avenue, Nakuru CBD, Biashara, Nakuru,
                        Kenya</p>
                </div>
                <div class="days-work w-full flex flex-row items-center gap-x-2 flex-wrap">
                    <small class="text-sm font-bold">Available Days:</small>
                    <p class="text-xs truncate">Mon , Tue , Wed , Thur , Fri</p>
                </div>

                <div class="days-work w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold">Age Range:</small>
                    <p class="text-xs truncate">All</p>
                </div>
            </div>
            <div class="description-details flex flex-col py-1 px-3 sm:px-4">
                <p>
                    <small class="text-sm font-semibold">Description:</small>
                    <p class="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem
                    voluptatibus laudantium expedita illum blanditiis minima id porro.</p>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.popup-enter-from , .popup-leave-to {
    @apply opacity-0 -translate-y-2;
}
.popup-enter-active , .popup-leave-active {
    transition: opacity 300ms ease , transform 300ms ease;
}

</style>