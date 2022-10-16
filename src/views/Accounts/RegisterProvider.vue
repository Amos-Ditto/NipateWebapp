<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentications from '../../store/authentications';
import { County } from '../../Types/GeneralTypes';

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter()
const userauth = useAuthentications();

const openselect = ref<boolean>(false);
const counties = ref<County[]>([]);
const retryfetch = ref<boolean>(false);
const validcounty = ref<boolean>(true);

const selectedcounty = ref<County>({
    Name: 'Select Region', id: 0
})

// Check If user is suppose to be here
onMounted(() => {
    if(userauth.UserDetails.Provider) {
        router.push({ name: 'Provider-Home' });
    }
})

const submitting = ref<boolean>(false);

const toggleSelect = (): void => {
    openselect.value = !openselect.value;
    validcounty.value = true;
}

const selectCounty = (county: County): void => {
    selectedcounty.value = county;
    toggleSelect();
}

const submitCreateAccount = async (): Promise<void> => {
    if(selectedcounty.value.id === 0) {
        validcounty.value = false; return;
    }
    submitting.value = true;

    await fetch(`${base_url}provider/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":  userauth.User.Auth_token || ""
        },
        body: JSON.stringify({CountyID: selectedcounty.value.id})
    })
    .then(async response => {

        setTimeout(() => {
            submitting.value = false;
        }, 400);
        if(response.status === 201) {
            userauth.updateUserDetails(await response.json());
            router.push({ name: 'Provider-Home' });
        }
    })
    .catch(error => {
        setTimeout(() => {
            submitting.value = false;
        }, 400);
    })


    userauth.updateProvider(true);
}

const fetchCounties = async(): Promise<void> => {
    retryfetch.value = false;
    let response = await fetch(`${base_url}location/counties`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if(response.ok) {
        counties.value = await response.json();
    } else {
        retryfetch.value = true;
    }
}

fetchCounties();

</script>

<template>
    <section class="w-full flex flex-col items-center justify-center px-1 xs:px-[14px] lg:px-[78px] py-16 xs:py-12 gap-y-16">
        <div class="title w-full md:w-[650px] flex items-center justify-start px-4 sm:px-20">
            <h3 class="text-3xl font-light tracking-wide">Register as Provider</h3>
        </div>
        <div class="form md:w-[650px] flex flex-col pb-6 px-4 sm:px-8 gap-y-10">
            <div class="input-field w-full flex flex-col gap-y-3">
                <label for="region" class="text-sm tracking-wide">Where will you be offering services from?</label>
                <div class="input flex flex-col w-full relative">
                    <button id="region" @click="toggleSelect"
                        class="py-2 w-full sm:w-3/4 flex flex-row items-center justify-between font-light px-4 border focus:border-slate-400 rounded capitalize text-base tracking-wide"
                        :class="validcounty ? 'border-gray-300' : 'border-tomato'"
                    >
                        {{ selectedcounty.Name }}
                        <div class="i-mdi-chevron-down"></div>
                    </button>
                    <Transition name="popup">
                        <div v-if="openselect"
                            class="drop-down absolute py-2 flex flex-col gap-y-1 -top-1/4 left-1/3 sm:left-1/4 right-2 sm:right-1/4 min-h-[6rem] max-h-[12rem] shadow-lg rounded z-30 bg-white"
                        >
                            <div class="close absolute top-1 right-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center" @click="toggleSelect">
                                <div class="i-mdi-close"></div>
                            </div>
                            <ul class="flex flex-col gap-y-0.5 overflow-y-auto">
                                <div class="retry py-5 w-full flex items-center justify-center" v-if="retryfetch">
                                    <button @click="fetchCounties" class="text-base tracking-wide hover:bg-steelblue py-1 px-3 bg-dodgerblue text-slate-100 capitalize rounded">retry</button>
                                </div>
                                <li @click="selectCounty(county)" v-for="county in counties" :key="county.id" v-else>
                                    <div class="i-mdi-tick text-green-500 text-base" :class="selectedcounty.id === county.id ? 'block' : 'hidden'"></div>
                                    {{ county.Name }}
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="accept-terms flex flex-row items-center gap-x-2 w-full sm:w-3/4 pt-8">
                <p class="text-sm font-light text-slate-600">
                    By registering, you agree to the Nipate's <span class="text-base font-bold">Terms of Conditions</span> and <span class="text-base font-bold">Privacy Policy</span>
                </p>
            </div>
            <div class="submit-btn w-full flex flex-col">
                <button @click="submitCreateAccount"
                    class="flex flex-row items-center justify-center bg-slate-700 hover:bg-slate-800 w-full sm:w-3/4 rounded shadow text-slate-100 text-lg uppercase tracking-wide py-3 px-4 transition-colors duration-300"
                >
                <Transition mode="out-in">
                    <span class="loader" v-if="submitting"></span>
                    <span v-else>Create Account</span>
                </Transition>
            </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

.drop-down ul li {
    @apply text-base xs:text-sm py-2 px-3 flex flex-row items-center gap-x-1.5 hover:bg-gray-100 cursor-pointer;
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
  background: #555;
}
</style>