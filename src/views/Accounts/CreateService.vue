<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import SelectService from "../../components/Cards/SelectService.vue";
import useAuthentications from "../../store/authentications";
import type {
    ServicesCategoryEntity,
    ServicesEntity,
    CreateService,
    CenterLocation,
} from "../../Types/GeneralTypes";

const router = useRouter();
const useauth = useAuthentications();
const base_url = import.meta.env.VITE_BASE_URL;

const toggleservices = ref<boolean>(true);
const openselect = ref<boolean>(false);

const fetchServices = async (): Promise<ServicesCategoryEntity[]> => {
    let response = await fetch(`${base_url}service/allservices`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
};

// Fetch services from API
onMounted(async () => {
    servicecategories.value = await fetchServices();
});

const servicecategories = ref<ServicesCategoryEntity[]>([]);
const selectedcategory = ref<ServicesCategoryEntity>({
    id: 0,
    Name: "",
    services: [
        {
            id: 0,
            Name: "",
        },
    ],
});
const centerlocation = ref<CenterLocation>({
    id: 0,
    DisplayName: "",
    State: "",
    Town: "",
    Suburb: "",
    Road: "",
    Landmark: "",
    CenterBlock: "",
});

// Create services form data
const longitude = ref<string>("");
const latitude = ref<string>("");
const toastmessage = ref<string>("");
const succesfuldetails = ref<boolean>(false);
const formdatasubmitted = ref<boolean>(true);

// Loaders var
const submittinglocation = ref<boolean>(false);
const submittingform = ref<boolean>(false);

// Form Validation
const valid_form = ref<{
    valid_title: boolean;
    valid_product: boolean;
    coords: boolean;
}>({ valid_title: false, valid_product: false, coords: false });

const createservicesformdata = ref<CreateService>({
    ServiceTitle: "",
    ProductID: 0,
    ServiceDescription: "",
    CenterLocationID: 0,
    Longitude: "",
    Lattitude: "",
});
const serviceproduct = ref<ServicesEntity>({
    id: 0,
    Name: "select category",
});

// List items selection
const chooseServiceCategory = (data: ServicesCategoryEntity): void => {
    selectedcategory.value = data;
    toggleservices.value = !toggleservices.value;
};
const updateProduct = (payload: ServicesEntity, toggle: boolean): void => {
    serviceproduct.value = payload;
    openselect.value = toggle;
    toggleservices.value = true;
};

watch([latitude, longitude], async ([newLatitude, newLongitude]) => {
    submittinglocation.value = true;
    await fetch(`${base_url}provider/search-location`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Longitude: longitude.value,
            Lattitude: latitude.value,
        }),
    })
        .then(async (response) => {
            centerlocation.value = await response.json();
            setTimeout(() => {
                submittinglocation.value = false;
            }, 400);
        })
        .catch((error) => {
            console.log(error);
            setTimeout(() => {
                submittinglocation.value = false;
            }, 400);
        });
});

// Get Coords func
const getCurrentLoc = (): void => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Current");

                latitude.value = position.coords.latitude.toString();
                longitude.value = position.coords.longitude.toString();
            },
            (error) => {
                alert("Need access to get location: ");
            }
        );
    }
};

const createService = async (): Promise<void> => {
    valid_form.value = {
        coords: false,
        valid_product: false,
        valid_title: false,
    };

    if (createservicesformdata.value.ServiceTitle === "") {
        valid_form.value.valid_title = true;
        formdatasubmitted.value = false;
        let scrollinto = document.getElementById("details-form") as HTMLElement;
        scrollinto.scrollIntoView({ block: "end", behavior: "smooth" });
        setTimeout(() => {
            formdatasubmitted.value = true;
        }, 1000);
        return;
    }
    if (serviceproduct.value.id === 0) {
        valid_form.value.valid_product = true;
        formdatasubmitted.value = false;
        let scrollinto = document.getElementById("details-form") as HTMLElement;
        scrollinto.scrollIntoView({ block: "end", behavior: "smooth" });
        setTimeout(() => {
            formdatasubmitted.value = true;
        }, 1000);
        return;
    }
    if (longitude.value === "" && latitude.value === "") {
        valid_form.value.coords = true;
        let scrollinto = document.getElementById(
            "location-details"
        ) as HTMLElement;
        scrollinto.scrollIntoView({ block: "start", behavior: "smooth" });
        setTimeout(() => {
            valid_form.value.coords = false;
        }, 1500);
        return;
    }
    submittingform.value = true;
    console.log("Auth token: ", useauth.User.Auth_token);

    let data_form = {
        ServiceTitle: createservicesformdata.value.ServiceTitle,
        ProductID: serviceproduct.value.id,
        ServiceDescription: createservicesformdata.value.ServiceDescription,
        Longitude: longitude.value,
        Lattitude: latitude.value,
        CenterLocationID: centerlocation.value.id,
    };
    await fetch(`${base_url}provider/service`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: useauth.User.Auth_token || "",
        },
        body: JSON.stringify(data_form),
    })
        .then((response) => {
            setTimeout(() => {
                submittingform.value = false;
            }, 300);
            if (response.status === 201) {
                toastmessage.value = "Succesfully created service to offer";
                succesfuldetails.value = true;
                setTimeout(() => {
                    succesfuldetails.value = false;
                    router.push({ name: "Provider-Services-List" });
                }, 2000);
            } else {
                console.log(response.json());
            }
        })
        .catch((error) => {
            setTimeout(() => {
                submittingform.value = false;
            }, 300);
            console.log(error);
        });
};
</script>
<template>
    <section class="w-full flex flex-col px-2 xs:px-4 md:px-8 gap-y-6 relative">
        <div class="nav-header flex flex-row justify-between w-full">
            <h3
                class="text-xl xs:text-2xl capitalize tracking-wide sm:text-2xl font-bold text-[#014451]"
            >
                Create New Service
            </h3>
            <div class="nav-links flex flex-row gap-x-2 items-center">
                <button
                    @click="router.back()"
                    class="bg-slate-700 hover:bg-slate-800 transition-colors uppercase text-slate-100 text-xs xs:text-sm font-light py-1.5 px-5 tracking-wider rounded-3xl"
                >
                    back
                </button>
            </div>
        </div>
        <Transition name="toast">
            <div
                v-if="succesfuldetails"
                class="toast fixed z-40 right-2 top-24 w-[14rem] min-h-[3rem] bg-gray-50 px-2 py-1.5 border border-green-500 rounded flex flex-row items-center gap-x-3"
            >
                <div
                    class="status-ico rounded-full flex items-center justify-center p-1 md:p-3 bg-gray-200"
                >
                    <div class="i-mdi-tick text-green-500 text-2xl"></div>
                </div>
                <small class="text-xs md:text-sm">{{ toastmessage }}</small>
            </div>
        </Transition>

        <div
            class="service-details mt-4 flex flex-col w-full border border-gray-300 rounded py-4 gap-y-8 sm:gap-y-10 px-5"
            :class="formdatasubmitted ? 'border-gray-300' : 'border-tomato'"
        >
            <div class="service-details-header text-start w-full px-1 sm:px-2">
                <h3 class="text-lg sm:text-xl font-light">Service Details</h3>
            </div>
            <div
                id="details-form"
                class="px-1 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-y-3.5 xs:gap-y-6 sm:gap-y-8 gap-x-8"
            >
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label
                        for="service-name"
                        class="text-sm capitalize font-bold tracking-wide"
                        >Service title:</label
                    >
                    <div class="input w-full flex flex-col">
                        <input
                            type="text"
                            id="service-name"
                            placeholder="title"
                            v-model="createservicesformdata.ServiceTitle"
                            class="py-2.5 rounded outline-none px-3 capitalize tracking-wide text-slate-600 border border-gray-300 bg-gray-50"
                            :class="
                                valid_form.valid_title
                                    ? 'border-tomato'
                                    : 'border-gray-300'
                            "
                        />
                        <div
                            class="error-status w-full flex flex-row items-center py-2 px-1 gap-x-2"
                            v-if="valid_form.valid_title"
                        >
                            <div
                                class="i-mdi-alert-outline text-tomato text-lg"
                            ></div>
                            <small class="text-sm text-tomato"
                                >Enter title</small
                            >
                        </div>
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2 relative">
                    <label
                        for="service-select"
                        class="text-sm font-bold tracking-wide"
                        >Select Service type:</label
                    >
                    <div class="input w-full flex flex-col">
                        <button
                            type="button"
                            id="service-select"
                            @click="
                                openselect = !openselect;
                                valid_form.valid_product = false;
                            "
                            class="relative h-[2.8rem] rounded outline-none px-3 tracking-wide text-slate-500 border border-gray-300 bg-gray-50 flex items-center"
                            :class="
                                valid_form.valid_product
                                    ? 'border-tomato'
                                    : 'border-gray-300'
                            "
                        >
                            <span>{{ serviceproduct.Name }}</span>
                            <div
                                class="i-mdi-chevron-down text-lg scale-125 absolute right-[5%]"
                            ></div>
                        </button>
                        <div
                            class="error-status w-full flex flex-row items-center py-2 px-1 gap-x-2"
                            v-if="valid_form.valid_product"
                        >
                            <div
                                class="i-mdi-alert-outline text-tomato text-lg"
                            ></div>
                            <small class="text-sm text-tomato"
                                >Enter service type</small
                            >
                        </div>
                    </div>
                    <div
                        v-if="openselect"
                        class="selection absolute right-1.5 left-1.5 top-full min-h-[5rem] bg-gray-50 rounded border border-gray-200 flex flex-col transition-all duration-200"
                    >
                        <ul
                            class="categories py-1 w-full flex flex-col max-h-[10rem] overflow-y-auto"
                            v-if="toggleservices"
                        >
                            <li
                                v-for="service in servicecategories"
                                @click="chooseServiceCategory(service)"
                            >
                                <div
                                    class="i-mdi-tick text-green-500 text-base"
                                    :class="
                                        selectedcategory.id === service.id
                                            ? 'block'
                                            : 'hidden'
                                    "
                                ></div>
                                {{ service.Name }}
                            </li>
                        </ul>
                        <SelectService
                            :services="selectedcategory.services"
                            @choose-service="updateProduct"
                            @close-service-list="
                                toggleservices = !toggleservices
                            "
                            v-else
                        />
                    </div>
                </div>
                <div
                    class="description md:col-span-2 py-4 flex flex-col gap-y-2"
                >
                    <label
                        for="description"
                        class="text-sm capitalize font-bold tracking-wide"
                        >Service description:</label
                    >
                    <div class="input w-full flex flex-col">
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="4"
                            placeholder="description"
                            class="py-2.5 rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50"
                            v-model="createservicesformdata.ServiceDescription"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="location-details"
            :class="valid_form.coords ? 'border-tomato' : 'border-gray-300'"
            class="location-details flex flex-col w-full border rounded py-4 gap-y-10 px-5"
        >
            <div class="service-details-header w-full items-center flex">
                <h3 class="text-lg sm:text-xl font-light">
                    Where you offer this service?
                </h3>
            </div>
            <div
                class="choose-loc py-2 w-full flex flex-col gap-y-6 items-center justify-center"
            >
                <div
                    class="loc-logo flex items-center w-full justify-center relative"
                >
                    <img
                        src="../../assets/bgImg/undraw_my_location_re_r52x.svg"
                        alt="img"
                        class="w-[6rem] h-[4.5rem]"
                    />
                    <span
                        class="loader-location absolute"
                        v-if="submittinglocation"
                    ></span>
                </div>
                <div class="loc">
                    <p>{{ centerlocation?.DisplayName }}</p>
                </div>
                <button
                    @click="getCurrentLoc"
                    class="flex fle-row items-center gap-x-3 border border-gray-300 hover:bg-slate-600 hover:text-slate-100 transition-colors duration-200 rounded py-2 px-4"
                >
                    <div class="i-mdi-map-marker text-xl"></div>
                    <span class="text-base font-light tracking-wide"
                        >Click to select your Location</span
                    >
                </button>
            </div>
        </div>
        <div
            class="complete w-full flex flex-col items-start px-0 pt-4 sm:pt-10"
        >
            <button
                @click="createService"
                class="text-xl bg-slate-600 w-full hover:bg-slate-700 rounded text-slate-100 tracking-wide px-4 py-3 uppercase flex flex-row items-center gap-x-4 justify-center relative transition-colors duration-200"
            >
                <Transition mode="out-in">
                    <span class="loader" v-if="submittingform"></span>
                    <span v-else>Submit</span>
                </Transition>
            </button>
        </div>
    </section>
</template>

<style scoped>
.toast-enter-from {
    @apply translate-x-full opacity-0;
}
.toast-leave-to {
    @apply opacity-0;
}
.toast-enter-active {
    transition: opacity 150ms ease, transform 500ms ease;
}
.toast-leave-active {
    transition: opacity 300ms ease;
}
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

.loader {
    @apply border-b-gray-400 border-4 border-slate-100 w-7 h-7;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loader-location {
    @apply border-b-slate-400 border-[6px] border-slate-200 w-20 h-20;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1100ms linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
