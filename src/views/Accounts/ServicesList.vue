<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AccountProviderService from '../../components/Cards/AccountProviderService.vue';
import useAuthentications from '../../store/authentications';
import type { ServiceList } from '../../Types/ServiceTypes';
import AccountProviderServiceSuspense from '../../components/Cards/LoadingSuspense/AccountProviderServiceSuspense.vue';

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const useauth = useAuthentications();

const servicelist = ref<ServiceList[]>([]);
const loadingservices = ref<boolean>(false);

// onMounted(() => {
//     if(useauth.getUser.Auth_token === null) {
//         router.push({name: 'Login', query: { redirect: '/account/me/provider/services' }});
//     }
// });

const fetchServices = async (): Promise<void> => {
    loadingservices.value = true;
    await fetch(`${base_url}provider/service`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": useauth.User.Auth_token || ""
        }
    })
    .then(async response => {
        setTimeout(() => {
            loadingservices.value = false;
        }, 1000);
        if(response.status === 200) {
            servicelist.value = await response.json();
            console.log(servicelist.value);
            
        } else {
            router.push({name: 'Login', query: { redirect: '/account/me/provider/services' }});
        }
    })
    .catch(error => {
        console.log(error);
        setTimeout(() => {
            loadingservices.value = false;
        }, 1000);
    })
}

// on this page created fetch services
fetchServices();

const redirectNewServices = () => {
    router.push({ name: 'Provider-Services-New' });
}

</script>
<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-8 px-1 sm:px-4 lg:px-12">
        <nav class="w-full flex flex-row items-center justify-between">
            <div class="left flex items-center">
                <h3 class="text-2xl font-bold uppercase tracking-wide">My Services</h3>
            </div>
            <div class="right-nav">
                <button class="bg-slate-700 hover:bg-slate-800 flex flex-row items-center gap-x-1.5 transition-colors capitalize text-slate-100 text-xs xs:text-sm font-light py-2 px-3 xs:px-4 rounded-2xl" @click="redirectNewServices">
                    <div class="i-mdi-plus text-base"></div>
                    add new Service
                </button>
            </div>
        </nav>
        <div class="body-container w-full py-2 px-0 flex flex-col gap-y-8 text-[#346974]">
            <AccountProviderServiceSuspense v-if="loadingservices" />
            <div class="services-list w-full py-2 px-0 flex flex-col gap-y-8" v-else>
                <AccountProviderService v-for="service in servicelist" :service="service" />
            </div>
            
            <div class="new-service w-full flex flex-col rounded-sm py-4 px-4 gap-y-8 justify-center items-center border border-gray-300">
                <div class="new-nav w-full flex flex-row justify-between items-center">
                    <h3 class="text-xl font-bold tracking-wide">New Service</h3>
                    <div class="new-icon-link p-2 rounded-full border border-gray-300 hover:bg-gray-300 cursor-pointer transition-colors duration-300">
                        <div class="i-mdi-plus text-xl text-gray-500"></div>
                    </div>
                </div>
                <div class="new-icon px-1 py-1">
                    <img src="../../assets/bgImg/undraw_subscribe_vspl.svg" alt="img" class="w-[9rem] h-[4rem]">
                </div>
                <div class="new-text flex flex-col items-center justify-center gap-y-4">
                    <h3 class="text-base font-light">Add a Service to offer.</h3>
                    <RouterLink
                        :to="{name: 'Provider-Services-New'}" class="uppercase border border-slate-400 hover:bg-slate-700 transition-colors duration-300 text-slate-600 hover:text-slate-100 font-light px-4 py-2 rounded-sm text-xs"
                    >New Service</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>