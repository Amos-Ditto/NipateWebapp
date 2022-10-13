<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SelectService from '../../components/Cards/SelectService.vue';
import type { ServicesCategoryEntity, CreateServiceForm, ServicesEntity } from '../../Types/GeneralTypes';


const router = useRouter();

const toggleservices = ref<boolean>(true);
const openselect = ref<boolean>(false);

const servicecatgories = ref<ServicesCategoryEntity[]>([
    {
        "id": 3,
        "Name": "Building & Construction",
        "services": [
            {
            "id": 0,
            "Name": "Plumbing"
            }
        ]
    },
    {
        "id": 1,
        "Name": "Automobile & Mechanics",
        "services": [
            {
            "id": 0,
            "Name": "Garage"
            }
        ]
    },
    {
        "id": 2,
        "Name": "Cleaning & Laundry",
        "services": [
            {
            "id": 0,
            "Name": "Mama fua"
            }
        ]
    }
]);
const selectedcategory = ref<ServicesCategoryEntity>(
    {
        "id": 0,
        "Name": "",
        "services": [
            {
            "id": 0,
            "Name": ""
            }
        ]
    },
);

const formdata = ref<CreateServiceForm>({
    title: "", description: "",
    service: {id: 0, Name: 'select category'}
})

const chooseServiceCategory = (data: ServicesCategoryEntity): void => {
    selectedcategory.value = data;
    toggleservices.value = !toggleservices.value;
}

const chooseService = (payload: ServicesEntity, toggle: boolean): void => {
    formdata.value.service = payload;
    openselect.value = toggle;
    toggleservices.value = true;
}

const submitDetails = (): void => {
    console.log("Details");
    
}
</script>
<template>
    <section class="w-full flex flex-col px-2 gap-y-10 sm:gap-y-12">
        <div class="nav-header flex flex-row justify-between w-full">
            <h3 class="text-xl xs:text-2xl capitalize tracking-wide sm:text-2xl font-bold text-[#014451]">Create New Service</h3>
            <div class="nav-links flex flex-row gap-x-2 items-center">
                <button @click="router.back()"
                    class="bg-slate-700 hover:bg-slate-800 transition-colors uppercase text-slate-100 text-xs xs:text-sm font-light py-1.5 px-5 tracking-wider rounded-3xl"
                >
                    back
                </button>
            </div>
        </div>
        <div class="service-details flex flex-col w-full border border-gray-300 rounded py-4 gap-y-8 sm:gap-y-12 px-5">
            <div class="service-details-header text-start w-full px-1 sm:px-2">
                <h3 class="text-lg sm:text-xl font-light">Service Details</h3>
            </div>
            <form @submit.prevent="submitDetails" class="px-1 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 xs:gap-y-6 sm:gap-y-8 gap-x-8">
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="service-name" class="text-sm capitalize font-bold tracking-wide">Service title:</label>
                    <div class="input w-full flex flex-col">
                        <input
                            type="text" id="service-name" placeholder="title" v-model="formdata.title"
                            class=" py-2.5 rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50"
                        >
                        <div class="error-status w-full flex flex-row items-center py-2 px-1 gap-x-2">
                            <div class="i-mdi-alert-outline text-tomato text-lg"></div>
                            <small class="text-sm text-tomato">Enter title</small>
                        </div>
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2 relative">
                    <label for="service-select" class="text-sm font-bold tracking-wide">Select Service type:</label>
                    <div class="input w-full flex flex-col">
                        <button
                            type="button" id="service-select" @click="openselect = !openselect"
                            class=" relative h-[2.8rem] rounded outline-none px-3 tracking-wide text-slate-500 border border-gray-300 bg-gray-50 flex items-center"
                        >
                            <span>{{ formdata.service.Name }}</span>
                            <div class="i-mdi-chevron-down text-lg scale-125 absolute right-[5%]"></div>
                        </button>
                        <div class="error-status w-full flex flex-row items-center py-2 px-1 gap-x-2">
                            <div class="i-mdi-alert-outline text-tomato text-lg"></div>
                            <small class="text-sm text-tomato">Enter service type</small>
                        </div>
                    </div>
                    <div
                        v-if="openselect"
                        class="selection absolute left-1.5 top-full min-h-[5rem] bg-gray-50 rounded border border-gray-200 flex flex-col transition-all duration-200"
                        :class="toggleservices ? 'right-1.5' : 'right-0 xs:right-1/2 md:right-0 lg:right-1/2'"
                    >
                        <ul class="categories py-1 w-full flex flex-col max-h-[10rem] overflow-y-auto" v-if="toggleservices">
                            <li v-for="service in servicecatgories" @click="chooseServiceCategory(service)">
                                <div class="i-mdi-tick text-green-500 text-base" :class="selectedcategory.id === service.id ? 'block' : 'hidden'"></div>
                                {{ service.Name }}
                            </li>
                        </ul>
                        <SelectService
                            :services="selectedcategory.services" @choose-service="chooseService"
                            @close-service-list="toggleservices = !toggleservices" v-else
                        />
                    </div>
                </div>
                <div class="description md:col-span-2 py-4 flex flex-col gap-y-2">
                    <label for="description" class="text-sm capitalize font-bold tracking-wide">Service description:</label>
                    <div class="input w-full flex flex-col">
                        <textarea
                            name="description" id="description" cols="30" rows="4" placeholder="description"
                            class="py-2.5 rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50"
                            v-model="formdata.description"
                        ></textarea>
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <button class="bg-slate-600 hover:bg-slate-800 text-slate-100 transition-colors duration-300 w-full md:w-[50%] py-2 font-light uppercase tracking-wide text-lg rounded">Submit</button>
                </div>
            </form>
        </div>
        <div class="location-details pointer-events-none flex flex-col w-full border border-gray-300 rounded py-4 gap-y-10 px-5">
            <div class="service-details-header w-full items-center flex">
                <h3 class="text-lg sm:text-xl font-light">Where you offer services?</h3>
            </div>
            <div class="choose-loc py-2 w-full flex flex-col gap-y-6 items-center justify-center">
                <div class="loc-logo flex items-center w-full justify-center">
                    <img src="../../assets/bgImg/undraw_my_location_re_r52x.svg" alt="img" class="w-[6rem] h-[4.5rem]">
                </div>
                <button class="flex fle-row items-center gap-x-3 border border-gray-300 rounded-md py-2 px-4">
                    <div class="i-mdi-map-marker text-xl"></div>
                    <span class="text-base font-light tracking-wide">Click to select your Location</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

.selection {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.selection .categories li {
    @apply tracking-wide text-sm px-3 py-1.5 hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex flex-row items-center gap-x-2;
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