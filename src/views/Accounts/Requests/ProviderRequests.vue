<script setup lang="ts">
import { ref } from 'vue';
import ProviderNoRequest from '../../../components/Cards/Requests/ProviderNoRequest.vue';
import ProviderRequests from '../../../components/Cards/Requests/ProviderRequests.vue';
import ProviderResponses from '../../../components/Cards/Requests/ProviderResponses.vue';
import useAuthentications from '../../../store/authentications';
import { Request } from '../../../Types/Requests';


const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();

const notacceptedreguests = ref<Request[]>([]);

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
            notacceptedreguests.value = await response.json();
            console.log(notacceptedreguests.value)
        } else {
            console.log(await response.json());
        }
    })
    .catch(error => console.log(error))
}

fetchNotAcceptedRequests();


</script>

<template>
    <section class="w-full px-1 flex flex-col gap-y-10">

        <div class="no-response flex flex-col gap-y-5 px-1 sm:px-4">

            <div class="title">
                <h3 class="text-xl font-bold">Service Requests</h3>
            </div>
            <div class="flex flex-col text-[#346974] w-full">
                <ProviderNoRequest />
            </div>
            <div class="body-container w-full flex flex-col gap-y-4 text-[#346974]">
                
                <ProviderRequests v-for="request in notacceptedreguests" :request="request" />
    
            </div>
            
        </div>

        <div class="responses flex flex-col gap-y-5 px-1 sm:px-4">
            <div class="title">
                <h3 class="text-xl font-bold">Service Responses</h3>
            </div>
            <div class="body-container w-full flex flex-col gap-y-4 text-[#346974]">
                
                <ProviderResponses />
    
            </div>
        </div>
    </section>
</template>