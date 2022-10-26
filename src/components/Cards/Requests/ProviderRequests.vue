<script setup lang="ts">
import { Request } from '../../../Types/Requests';
import { estimateDuration } from '../../../composables/estimateDuration';
import { ref } from 'vue';

defineProps<{
    request: Request
}>();

const openresponseform = ref<boolean>(false);

const responsetext = ref<string>("");
const valid_description = ref<boolean>(true);

const submitResponse = async (): Promise<void> => {

    console.log("Submitted");
}
</script>

<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="text-lg font-semibold tracking-wide">{{ request.Service.ServiceTitle }}</h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-4">
            <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                <small class="text-slate-500 text-xs">{{ request.Service.Service.Name }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ request.User.FirstName }} {{ request.User.SurName }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ request.CenterLocation.DisplayName }}</small>
                <small class="text-xs text-slate-400 italic">{{ estimateDuration(request.TimeStamp) }} ago.</small>
            </div>
            <div class="description w-full px-1 sm:px-3">
                <p class="text-base line-clamp-3">{{ request.RequestText }}</p>
            </div>
        </div>
        <div class="card-footer w-full px-1 sm:px-3">
            <div class="response w-full flex flex-row">
                <button @click="openresponseform = !openresponseform"
                    class="text-sm tracking-wide border border-gray-300 px-4 py-1 rounded hover:border-slate-500 transition-colors duration-300 text-slate-600 hover:text-slate-700">Accept</button>
            </div>
        </div>

        <Transition name="pop-up">
            <div v-if="openresponseform"
                class="accept-container fixed z-40 py-16 px-1 sm:px-[8px] lg:px-[50px] xl:px-[90px] 2xl:px-[115px] left-2 sm:left-4 right-2 sm:right-4 top-4 bottom-0 bg-gray-100 overflow-y-auto flex flex-col gap-y-4">
                <div class="close p-3 hover:bg-gray-300 rounded-md fixed top-6 right-4 sm:right-6 cursor-pointer"
                    @click="openresponseform = !openresponseform"
                >
                    <div class="i-mdi-close text-2xl"></div>
                </div>

                <div
                    class="request-container bg-gray-50 border border-gray-300 rounded-sm text-[#346974] flex flex-col gap-y-2">
                    <div class="request-title w-full py-4 px-6 border-b border-gray-200">
                        <h3 class="text-xl tracking-wide font-bold">Request Details</h3>
                    </div>
                    <div class="details flex flex-col gap-y-5 py-4 px-6">
                        <div class="service-title">
                            <h3 class="text-lg tracking-wide capitalize">{{ request.Service.ServiceTitle }}</h3>
                        </div>
                        <div class="service">
                            <button class="px-4 py-1 text-sm bg-gray-200 tracking-wider rounded">{{ request.Service.Service.Name
                            }}</button>
                        </div>
                        <div class="description">
                            <p class="text-sm tracking-wide line-clamp-2 sm:line-clamp-3">{{ request.RequestText }}.</p>
                        </div>
                        <div
                            class="location flex flex-col justify-start items-start gap-y-3 border-t border-gray-200 py-4">
                            <span class="text-lg font-light italic">Located at:</span>
                            <button class="px-4 py-1 text-xs sm:text-sm bg-gray-200 tracking-wider rounded">
                                {{ request.CenterLocation.DisplayName }}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="form-container bg-gray-50 border border-gray-300 rounded-sm text-[#346974] flex flex-col gap-y-2">
                    <div class="request-title w-full py-4 px-6 border-b border-gray-200">
                        <h3 class="text-xl tracking-wide font-bold capitalize">Accept Request</h3>
                    </div>
                    <div class="form flex flex-col gap-y-8 py-4 px-6">
                        <div class="description gap-y-2 flex flex-col">
                            <label for="description" class="text-sm font-semibold">Response Text</label>
                            <textarea @focus="valid_description = true"
                                name="description" id="description" cols="30" rows="4" v-model="responsetext"
                                class=" outline-none border rounded hover:border-gray-300 focus:border-gray-300 text-sm tracking-wider px-3 py-2"
                                :class="valid_description ? 'border-gray-200' : 'border-tomato'"
                            ></textarea>
                        </div>

                        <div class="submit flex flex-col items-start gap-y-2 w-full pt-4">
                            <button @click="submitResponse"
                                class="w-1/2 sm:w-1/4 py-2 text-base rounded tracking-wide bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 text-slate-100 capitalize transition-colors duration-200"
                            >Send a response</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.pop-up-enter-from,
.pop-up-leave-to {
    @apply translate-y-full opacity-0;
}

.pop-up-enter-active {
    transition: opacity 200ms ease, transform 350ms ease;
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