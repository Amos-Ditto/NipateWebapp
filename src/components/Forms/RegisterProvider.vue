<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import { County } from '../../Types/GeneralTypes';

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const useauth = useAuthentications();

const openselect = ref<boolean>(false);
const counties = ref<County[]>([]);
const formdata = ref<County>({
    Name: "Select", id: 0
});
const validformdata = ref<boolean>(true);
const retryfetch = ref<boolean>(false);
const submitloading = ref<boolean>(false);
const toggleSelect = (): void => {
    openselect.value = !openselect.value;
}

const fetchCounties = async(): Promise<void> => {
    retryfetch.value = !retryfetch.value;
    await fetch(`${base_url}location/counties`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => {
        return res.json()
    })
    .then(response => {
        counties.value = response;
    })
    .catch(error => {
        retryfetch.value = true;
    })
}
// Fetch Location list
fetchCounties();

const selectLocation = (payload: County) => {
    formdata.value = payload;
    toggleSelect();
    validformdata.value = true;
}

const createProviderAccount = async (): Promise<void> => {
    if(formdata.value.id === 0) {
        validformdata.value = false;
        return;
    }
    console.log(formdata.value);
    submitloading.value = true;
    await fetch(`${base_url}provider/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token f9696bf31cf74c12b58c3cd115799190416b2cca"
        },
        body: JSON.stringify({CountyID: formdata.value.id})
    })
    .then(res => {
        return res.json()
    })
    .then(response => {
        router.push({ name: "Provider-Home" });
        useauth.updateProvider(true);
        submitloading.value = false;
        console.log(response)
    })
    .catch(error => {
        console.log(error);
        submitloading.value = false;
    })
}
</script>
<template>
    <div class="register-provider flex flex-col gap-y-8 px-6 border border-gray-300 rounded-md py-6">
        <div class="form-title">
            <h3 class="text-xl tracking-wide">Register to provide Services.</h3>
        </div>
        <div class="input-field flex flex-col gap-y-2 pt-5">
            <label for="select-loc" class="text-xs font-bold">Current county:</label>
            <div class="input flex items-start flex-col relative">
                <transition name="popup">
                    <div v-if="openselect"
                        class="select py-1.5 absolute z-30 -top-full left-1/2 md:left-1/4 right-0 md:right-1/4 lg:right-1/2 min-h-[8rem] max-h-[13rem] bg-gray-50 rounded overflow-y-auto"
                    >
                        <div class="close absolute z-40 top-2 right-2 cursor-pointer hover:bg-gray-300 p-2 rounded-full bg-gray-200" @click="toggleSelect">
                            <div class="i-mdi-close"></div>
                        </div>
                        <div class="retry w-full min-h-[7rem] flex items-center justify-center" v-if="!retryfetch" @click="fetchCounties">
                            <button class="border border-steelblue hover:bg-dodgerblue px-3 py-1 capitalize font-light text-sm text-steelblue hover:text-slate-100 transition-colors rounded tracking-wide" @click="fetchCounties">retry</button>
                        </div>
                        <ul class="flex flex-col w-full" v-if="retryfetch">
                            <li v-for="county in counties" @click="selectLocation(county)">{{ county.Name }}</li>
                        </ul>
                    </div>
                </transition>
                <button type="button" id="select-loc" @click="toggleSelect"
                    class="flex flex-row items-center justify-between gap-x-8 min-w-[60%] md:min-w-[30%] px-4 py-2.5 rounded border" :class="validformdata ? 'border-gray-300' : 'border-tomato'">
                    <small class="font-sans text-sm tracking-wide capitalize">{{ formdata.Name }}</small>
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
            <button type="button" @click="createProviderAccount"
                class="bg-slate-600 hover:bg-slate-700 capitalize transition-colors duration-300 rounded-sm min-w-[9.3rem] px-10 sm:px-8 py-1.5 text-slate-100 flex flex-row gap-x-2 justify-center items-center">
                <span class="text-base" v-if="!submitloading">Submit</span>
                <span class="loader" v-else="submitloading"></span>
            </button>
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
.loader {
    @apply border-b-gray-400 border-4 border-slate-100 w-6 h-6;
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
</style>