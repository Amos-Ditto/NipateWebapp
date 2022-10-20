<script setup lang="ts">
import { ref } from 'vue';
import { ServiceList } from '../../Types/ServiceTypes';
const props = defineProps<{
    service: ServiceList,
}>()

const requestdelete = ref<boolean>(false);

const executeDelete = (): void => {
    requestdelete.value = true;
}

</script>
<template>
    <div
        class="service-container py-0 w-full flex flex-col border border-slate-300 rounded relative text-[#346974]"
    >

        <div class="w-full px-3 sm:px-4 py-5 flex flex-row items-center justify-between border-b border-gray-300">
            <h3 class="text-xl font-bold capitalize text-[#346974] tracking-wide text-ellipsis overflow-hidden truncate">{{props.service.ServiceTitle}}</h3>
            <div class="edit-icons flex flex-row items-center gap-x-4 relative justify-end sm:justify-center">
                <button class="border border-gray-200 rounded px-4 py-1 text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300">Edit</button>
                <button
                    class="border border-gray-200 rounded px-4 py-1 text-sm hover:text-tomato hover:border-tomato transition-colors duration-300"
                    @click="executeDelete" :class="requestdelete && 'border-tomato text-tomato'"
                >
                    Delete
                </button>
                <Transition name="popup">
                    <div class="modal-delete absolute right-0 top-[120%] w-[150%] sm:w-[160%] min-h-[4rem] rounded bg-gray-50 shadow-lg flex flex-col px-1.5 py-2 gap-y-1" v-if="requestdelete">
                        <div class="flex flex-col gap-y-0.5">
                            <small class="text-xs text-slate-500">This action will delete "{{props.service.ServiceTitle}}" from all of your Services.</small>
                            <small class="text-xs text-slate-500">Are you sure you want to delete this service?</small>
                        </div>
                        <button @click="requestdelete = !requestdelete"
                            class="border border-steelblue rounded text-steelblue w-full py-1 text-sm font-light hover:bg-steelblue hover:text-slate-100 tracking-wide transition-colors duration-300"
                        >Decline</button>
                        <button @click="requestdelete = !requestdelete"
                            class="border border-tomato rounded text-tomato w-full py-1 text-sm font-light capitalize hover:bg-tomato hover:text-slate-100 tracking-wide transition-colors duration-300"
                        >yes</button>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-x-3">
            <div class="list-details flex flex-col">

                <div class="service w-full flex flex-col gap-y-4 gap-x-2 items-start px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light">Service:</small>
                    <button class="px-4 py-1 rounded font-serif bg-gray-100 text-sm">{{props.service.Service.Name}}</button>
                </div>
                <div class="loc w-full flex flex-col gap-y-4 gap-x-2 flex-wrap px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light">Located at:</small>
                    <p class="text-sm">{{props.service.Location.DisplayName}}</p>
                </div>
                <div class="days-work w-full flex flex-col gap-y-4 items-start gap-x-2 flex-wrap px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light">Available Days:</small>
                    <div class="days flex flex-row gap-x-2 gap-y-1 items-center">
                        <button class="px-3 py-1 font-serif rounded bg-gray-100 text-sm">Mon</button>
                        <button class="px-3 py-1 font-serif rounded bg-gray-100 text-sm">Tue</button>
                        <button class="px-3 py-1 font-serif rounded bg-gray-100 text-sm">Wed</button>
                        <button class="px-3 py-1 font-serif rounded bg-gray-100 text-sm">Thur</button>
                        <button class="px-3 py-1 font-serif rounded bg-gray-100 text-sm">Fri</button>
                    </div>
                    <!-- <p class="text-xs truncate">Mon , Tue , Wed , Thur , Fri</p> -->
                </div>

                <!-- <div class="days-work w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold">Age Range:</small>
                    <p class="text-xs truncate">All</p>
                </div> -->
            </div>
            <div class="description-details flex flex-col gap-y-4 py-3 sm:py-4 px-3 sm:px-4">
                <p>
                    <small class="text-base font-light">Description:</small>
                    <p class="text-sm font-extralight">{{props.service.ServiceDescription}}</p>
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

/* .modal-delete {

} */

</style>