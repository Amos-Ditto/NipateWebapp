<script setup lang="ts">
import { ref, watch } from 'vue';
import ProviderNoRequest from '../../../components/Cards/Requests/ProviderNoRequest.vue';
import ProviderRequests from '../../../components/Cards/Requests/ProviderRequests.vue';
import ProviderResponses from '../../../components/Cards/Requests/ProviderResponses.vue';
import useAuthentications from '../../../store/authentications';
import { Request, Response } from '../../../Types/Requests';


const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();

const notacceptedrequests = ref<Request[]>([]);
const acceptedrequests = ref<Response[]>([]);
const emptyrequests = ref<boolean>(false);

const fetchNotAcceptedRequests = async (): Promise<void> => {
    await fetch(`${base_url}service/not-accepted/request/provider`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": useauth.User.Auth_token || ""
        }
    })
    .then(async response => {
        if(response.status === 200) {
            notacceptedrequests.value = await response.json();
        } else {
            console.log(await response.json());
        }
    })
    .catch(error => console.log(error))
}

const fetchAcceptedRequests = async (): Promise<void> => {
    await fetch(`${base_url}service/accepted-requests/provider`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": useauth.User.Auth_token || ""
        }
    })
    .then(async response => {
        if(response.status === 200) {
            acceptedrequests.value = await response.json();
            console.log(acceptedrequests.value)
        } else {
            console.log(await response.json());
        }
    })
    .catch(error => console.log(error))
}

fetchNotAcceptedRequests();
fetchAcceptedRequests();

watch(notacceptedrequests, (newNotAcceptedRequests) => {
    if (notacceptedrequests.value.length === 0) {
        emptyrequests.value = true;
    } else {
        emptyrequests.value = false;
    }
});


</script>

<template>
    <section class="w-full px-1 flex flex-col gap-y-10">

        <div class="no-response flex flex-col gap-y-5 px-1 sm:px-4">

            <div class="title">
                <h3 class="text-xl font-bold">Service Requests</h3>
            </div>
            <div class="flex flex-col text-[#346974] w-full" v-if="emptyrequests">
                <ProviderNoRequest />
            </div>
            <div class="body-container w-full flex flex-col gap-y-4 text-[#346974]" v-else>
                
                <ProviderRequests v-for="request in notacceptedrequests" :request="request" />
    
            </div>
            
        </div>

        <div class="responses flex flex-col gap-y-5 px-1 sm:px-4">
            <div class="title">
                <h3 class="text-xl font-bold">Service Responses</h3>
            </div>
            <div class="body-container w-full flex flex-col gap-y-4 text-[#346974]">
                
                <ProviderResponses v-for="response in acceptedrequests" :response="response" :key="response.id"/>
    
            </div>
        </div>
    </section>
</template>