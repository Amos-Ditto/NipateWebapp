<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuthentications from "../../store/authentications";
import { County } from "../../Types/ServiceTypes";

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const useauth = useAuthentications();

const toggleregionselect = ref<boolean>(false);
const regions = ref<County[]>([]);
const region_select_id = ref<number>(0);

const fetchRegions = async (): Promise<void> => {
    await fetch(`${base_url}location/counties`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(async (response) => {
            regions.value = await response.json();
        })
        .catch((error) => console.log(error));
};

fetchRegions();

const selectRegion = (region: County): void => {
    region_select_id.value = region.id;
    selectedregion.value = region;
    toggleregionselect.value = false;
};

interface FormData {
    title: string;
    description: string;
    startdate: Date | null;
    expirydate: Date | null;
}
interface ValidFormData {
    title: boolean;
    description: boolean;
    startdate: boolean;
    expirydate: boolean;
    county: boolean;
}
const formdata = ref<FormData>({
    title: "",
    description: "",
    startdate: null,
    expirydate: null,
});

const valid_form = ref<ValidFormData>({
    title: true,
    description: true,
    startdate: true,
    expirydate: true,
    county: true,
});

const selectedregion = ref<County>({ id: 0, Name: "select" });

const createNewAd = async (): Promise<void> => {
    if (formdata.value.title === "") {
        valid_form.value.title = false;
        return;
    }
    if (selectedregion.value.id === 0) {
        valid_form.value.county = false;
        return;
    }
    if (formdata.value.description === "") {
        valid_form.value.description = false;
        return;
    }
    if (formdata.value.expirydate === null) {
        valid_form.value.expirydate = false;
        return;
    }

    console.log("Submitted", "Expiry: ", formdata.value.expirydate);
    await fetch(`${base_url}service/advert`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: useauth.User.Auth_token || "",
        },
        body: JSON.stringify({
            ADTitle: formdata.value.title,
            ServiceID: [],
            LocationID: selectedregion.value.id,
            AdDescription: formdata.value.description,
            StartDate: formdata.value.startdate,
            ExpiryDate: formdata.value.expirydate,
        }),
    })
        .then(async (response) => {
            console.log(await response.json());
            router.push({ name: "User-Adverts" });
        })
        .catch((error) => console.log(error));
};
</script>

<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-10">
        <div class="top-nav flex flex-row justify-between sm:px-8">
            <div class="left-nav">
                <h3 class="text-2xl font-bold">Create Advert</h3>
            </div>
            <div class="right-nav pr-1">
                <button
                    @click="router.push({ name: 'User-Adverts' })"
                    class="px-4 py-1.5 rounded-2xl bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1"
                >
                    <div class="i-mdi-plus text-slate-100 text-base"></div>
                    Back
                </button>
            </div>
        </div>

        <div
            class="body-section flex flex-col gap-y-12 px-4 sm:px-8 text-[#346974] md:border border-gray-300 py-8 rounded"
        >
            <div class="input-field flex flex-col w-full gap-y-2">
                <label for="title" class="text-sm font-semibold tracking-wide"
                    >Ad Title</label
                >
                <input
                    v-model="formdata.title"
                    @focus="valid_form.title = true"
                    type="text"
                    id="title"
                    class="outline-none py-2 px-4 w-full md:w-2/3 lg:w-1/2 border rounded tracking-wide"
                    :class="
                        valid_form.title ? 'border-gray-200' : 'border-tomato'
                    "
                />
            </div>
            <div class="input-field flex flex-col gap-y-2 w-full relative">
                <label
                    for="LocationID"
                    class="text-sm font-semibold tracking-wide"
                    >Region/County</label
                >
                <button
                    @click="toggleregionselect = !toggleregionselect"
                    @focus="valid_form.county = true"
                    class="py-2 text-base border rounded tracking-wide w-full md:w-2/3 lg:w-1/2 capitalize text-start px-4 relative flex items-center"
                    :class="
                        valid_form.county ? 'border-gray-200' : 'border-tomato'
                    "
                >
                    {{ selectedregion.Name }}
                    <div
                        class="i-mdi-chevron-down right-4 absolute text-lg"
                    ></div>
                </button>
                <Transition name="popup">
                    <div
                        v-if="toggleregionselect"
                        class="drop-down absolute top-1/2 left-0 flex flex-col gap-y-1 w-full md:w-2/3 lg:w-1/2 bg-white rounded"
                    >
                        <div
                            @click="toggleregionselect = !toggleregionselect"
                            class="close absolute right-2 top-2 p-2 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                        >
                            <div class="i-mdi-close text-xl"></div>
                        </div>
                        <ul
                            class="flex flex-col gap-y-1 py-2 min-h-[2rem] max-h-[14rem] overflow-y-auto"
                        >
                            <li
                                v-for="county in regions"
                                :key="county.id"
                                @click="selectRegion(county)"
                                :class="
                                    region_select_id === county.id &&
                                    'bg-gray-100'
                                "
                            >
                                {{ county.Name }}
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
            <div class="input-field flex flex-col gap-y-2 w-full">
                <label for="desc" class="text-sm font-semibold tracking-wide"
                    >Ad Description</label
                >
                <textarea
                    v-model="formdata.description"
                    @focus="valid_form.description = true"
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="5"
                    class="outline-none py-2 px-4 w-full border rounded tracking-wide"
                    :class="
                        valid_form.description
                            ? 'border-gray-200'
                            : 'border-tomato'
                    "
                ></textarea>
            </div>
            <div class="input-fields grid grid-cols-2 gap-x-4 w-full">
                <div class="input-field flex flex-col gap-y-2">
                    <label for="start">Start Date</label>
                    <input
                        v-model="formdata.startdate"
                        @focus="valid_form.startdate = true"
                        type="date"
                        name="start"
                        id="start"
                        class="outline-none py-2 px-4 w-full md:w-3/4 border rounded tracking-wide"
                        :class="
                            valid_form.startdate
                                ? 'border-gray-200'
                                : 'border-tomato'
                        "
                    />
                </div>

                <div class="input-field flex flex-col gap-y-2">
                    <label for="end">Expiry Date</label>
                    <input
                        v-model="formdata.expirydate"
                        @focus="valid_form.expirydate = true"
                        type="date"
                        name="end"
                        id="end"
                        class="outline-none py-2 px-4 w-full md:w-3/4 border rounded tracking-wide"
                        :class="
                            valid_form.expirydate
                                ? 'border-gray-200'
                                : 'border-tomato'
                        "
                    />
                </div>
            </div>
            <div class="submit w-full flex flex-col pt-8">
                <button
                    @click="createNewAd"
                    class="py-3 bg-slate-600 rounded text-slate-100 tracking-wide text-base sm:text-lg uppercase hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-200"
                >
                    Create
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.drop-down {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.drop-down ul li {
    @apply py-2 px-4 text-base tracking-wide hover:bg-gray-100 transition-colors duration-200 cursor-pointer;
}

.popup-enter-from {
    @apply h-1/4 opacity-0 translate-x-0;
}
.popup-leave-to {
    @apply opacity-0;
}
.popup-enter-active,
.popup-leave-active {
    transition: opacity 200ms ease, transform 300ms ease, width 300ms ease,
        height 300ms ease;
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
