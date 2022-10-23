<script setup lang="ts">
import { ref } from 'vue';
import { ServiceList } from '../../Types/ServiceTypes';


defineProps<{
    service: ServiceList
}>();

const openrequestform = ref<boolean>(false);

</script>

<template>
    <div class="service-card w-full min-h-[8rem] border-b border-gray-200 flex flex-col gap-y-4 px-2 sm:px-6 py-6">
        <div class="card-header">
            <h3 class="text-lg font-bold tracking-wider capitalize">{{ service.ServiceTitle }}</h3>
        </div>
        <div class="card-description w-full">
            <p class="text-sm tracking-wide block line-clamp-3 sm:line-clamp-2">{{ service.ServiceDescription }}.</p>
        </div>
        <div class="card-details flex flex-col gap-y-4">
            <div class="body-details flex flex-col sm:flex-row gap-x-4 gap-y-4 item-center">
                <div class="service-details flex flex-row items-center">
                    <button class="px-4 py-1 bg-gray-100 rounded text-sm tracking-wider text-slate-500">{{ service.Service.Name }}</button>
                </div>
                <div class="loc-details flex flex-row items-center gap-x-1 text-slate-500">
                    <div class="i-mdi-map-marker text-lg"></div>
                    <small class="text-sm font-light">{{ service.Location.DisplayName }}</small>
                </div>
            </div>
        </div>
        <div class="card-footer flex flex-row items-center justify-between sm:justify-start gap-x-6 pt-2.5">
            <button @click="openrequestform = !openrequestform"
                class="px-4 py-1 border border-dodgerblue text-dodgerblue hover:bg-steelblue focus:bg-steelblue hover:text-slate-100 focus:text-slate-100 text-sm tracking-wide capitalize rounded-sm transition-colors"
            >send request</button>
        </div>

        <Transition name="pop-up">
            <div v-if="openrequestform"
                class="send-request-form fixed z-40 py-16 px-1 sm:px-[8px] lg:px-[50px] xl:px-[90px] 2xl:px-[115px] left-2 sm:left-4 right-2 sm:right-4 top-4 bottom-0 bg-gray-100 overflow-y-auto flex flex-col gap-y-4"
            >
                <div class="close p-3 hover:bg-gray-300 rounded-md fixed top-6 right-4 sm:right-6 cursor-pointer" @click="openrequestform = !openrequestform">
                    <div class="i-mdi-close text-2xl"></div>
                </div>
                <!-- <div class="container flex flex-col gap-y-4 h-full w-full overflow-y-auto"> -->

                    <div class="service-container bg-gray-50 border border-gray-300 rounded-sm text-[#346974] flex flex-col gap-y-2">
                        <div class="request-title w-full py-4 px-6 border-b border-gray-200">
                            <h3 class="text-xl tracking-wide font-bold">Service Details</h3>
                        </div>
                        <div class="details flex flex-col gap-y-5 py-4 px-6">
                            <div class="service-title">
                                <h3 class="text-lg tracking-wide capitalize">{{ service.ServiceTitle }}</h3>
                            </div>
                            <div class="service">
                                <button class="px-4 py-1 text-sm bg-gray-200 tracking-wider rounded">{{ service.Service.Name }}</button>
                            </div>
                            <div class="description">
                                <p class="text-sm tracking-wide line-clamp-2 sm:line-clamp-3">{{ service.ServiceDescription }}.</p>
                            </div>
                            <div class="location flex flex-col justify-start items-start gap-y-3 border-t border-gray-200 py-4">
                                <span class="text-lg font-light italic">Located at:</span>
                                <button class="px-4 py-1 text-xs sm:text-sm bg-gray-200 tracking-wider rounded">{{ service.Location.DisplayName }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-container bg-gray-50 border border-gray-300 rounded-sm text-[#346974] flex flex-col gap-y-2">
                        <div class="request-title w-full py-4 px-6 border-b border-gray-200">
                            <h3 class="text-xl tracking-wide font-bold capitalize">Request Service</h3>
                        </div>
                        <div class="form flex flex-col gap-y-8 py-4 px-6">
                            <div class="description gap-y-2 flex flex-col">
                                <label for="description" class="text-sm font-semibold">Request Text</label>
                                <textarea name="description" id="description" cols="30" rows="4" class=" outline-none border border-gray-200 rounded hover:border-gray-300 focus:border-gray-300 text-sm tracking-wider px-3 py-2"></textarea>
                            </div>
                            <div class="location flex flex-col items-start gap-y-2">
                                <label for="center" class="text-sm font-semibold capitalize">Attach your location</label>
                                <button class="border border-gray-200 hover:border-gray-300 focus:border-gray-300 rounded-md text-sm tracking-wide px-6 py-2">Click to find your location </button>
                            </div>
                            <div class="submit flex flex-col items-start gap-y-2 w-full pt-4">
                                <button class="w-1/2 sm:w-1/4 py-2 text-base rounded tracking-wide bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 text-slate-100 capitalize transition-colors duration-200">Send a request</button>
                            </div>
                        </div>
                    </div>

                <!-- </div> -->
            </div>
        </Transition>

    </div>
</template>

<style scoped>

.pop-up-enter-from , .pop-up-leave-to {
    @apply translate-y-full opacity-0;
}
.pop-up-enter-active {
    transition: opacity 200ms ease, transform 300ms ease;
}
.pop-up-leave-active {
    transition: opacity 200ms ease, transform 500ms ease;
}

::-webkit-scrollbar {
    width: 4px;
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
    @apply bg-gray-400;
}

</style>