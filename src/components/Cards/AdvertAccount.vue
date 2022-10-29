<script setup lang="ts">
import { ref } from "vue";
import { Advert } from "../../Types/Adverts";

defineProps<{
    advert: Advert;
}>();

const requestdelete = ref<boolean>(false);

const executeDelete = (): void => {
    requestdelete.value = true;
};
</script>

<template>
    <div
        class="advert bg-gray-50 rounded-md border border-gray-300 px-3 lg:px-8 py-3 flex flex-col gap-y-6"
    >
        <div class="advert-top flex flex-row justify-between">
            <h3 class="text-lg font-bold">{{ advert.ADTitle }}</h3>
            <div
                class="right-top flex flex-row items-center gap-x-4 relative justify-end sm:justify-center"
            >
                <button
                    class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300"
                >
                    Edit
                </button>
                <button
                    class="border border-gray-200 capitalize rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-tomato hover:border-tomato transition-colors duration-300"
                    @click="executeDelete"
                >
                    delete
                </button>
                <Transition name="popup">
                    <div
                        class="modal-delete absolute z-30 right-0 top-[120%] w-[150%] sm:w-[160%] min-h-[4rem] rounded bg-gray-50 shadow-md flex flex-col px-1.5 py-2 gap-y-4"
                        v-if="requestdelete"
                    >
                        <div class="flex flex-col gap-y-0.5">
                            <small class="text-xs text-slate-500"
                                >This action will delete "{{ advert.ADTitle }}"
                                from all of your Adverts.</small
                            >
                            <small class="text-xs text-slate-500"
                                >Are you sure you want to delete this Ad?</small
                            >
                        </div>
                        <div class="actions w-full grid grid-cols-2 gap-x-4">
                            <button
                                class="border border-steelblue rounded text-steelblue w-full py-1 text-sm font-light hover:bg-steelblue hover:text-slate-100 tracking-wide transition-colors duration-300"
                                @click="requestdelete = !requestdelete"
                            >
                                Decline
                            </button>
                            <button
                                class="border border-tomato rounded text-tomato w-full py-1 text-sm font-light hover:bg-tomato hover:text-slate-100 tracking-wide transition-colors duration-300"
                                @click="requestdelete = !requestdelete"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="advert-body w-full flex flex-col gap-y-5">
            <div class="ad-details flex flex-col gap-y-2">
                <div
                    class="ad-location flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                >
                    <div class="i-mdi-map-marker-outline text-slate-500"></div>
                    <small>-</small>
                    <small class="text-slate-500 text-xs">{{
                        advert.Location.Name
                    }}</small>
                </div>
                <div
                    class="ad-time flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                >
                    <div
                        class="i-mdi-clock-outline text-sm text-slate-500"
                    ></div>
                    <small>-</small>
                    <small class="text-slate-500 text-xs"
                        >From: {{ advert.StartDate }}</small
                    >
                    <small>-</small>
                    <small class="text-slate-500 text-xs"
                        >To: {{ advert.ExpiryDate }}</small
                    >
                </div>
            </div>
            <div class="description">
                <p class="text-sm line-clamp-3">{{ advert.AdDescription }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup-enter-from,
.popup-leave-to {
    @apply opacity-0 -translate-y-2;
}
.popup-enter-active,
.popup-leave-active {
    transition: opacity 300ms ease, transform 300ms ease;
}
</style>
