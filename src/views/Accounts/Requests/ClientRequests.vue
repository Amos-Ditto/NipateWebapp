<script setup lang="ts">
import { ref, watch } from 'vue';
import ClientResponseSuspense from '../../../components/Cards/LoadingSuspense/ClientResponseSuspense.vue';
import ClientNoResponse from '../../../components/Cards/Requests/ClientNoResponse.vue';
import ClientResponse from '../../../components/Cards/Requests/ClientResponse.vue';
import NoRequests from '../../../components/Cards/Requests/NoRequests.vue';
import useAuthentications from '../../../store/authentications';
import { Request, Response } from '../../../Types/Requests';


const base_url = import.meta.env.VITE_BASE_URL;
const useauth = useAuthentications();

const respondedservices = ref<Response[]>([]);
const unrespondedservices = ref<Request[]>([]);
const requestempty = ref<boolean>(false);
const responseempty = ref<boolean>(false);

const loadingfetch = ref<boolean>(false);

const fetchUnrepondedRequests = async (): Promise<void> => {
    await fetch(`${base_url}service/not-accepted/request/client`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": useauth.User.Auth_token || ""
        }
    })
    .then(async response => {
        if(response.status === 200) {
            unrespondedservices.value = await response.json();
            if(unrespondedservices.value.length === 0) {
                requestempty.value = true;
            }
        } else {
            console.log(await response.json());
        }
    })
    .catch(error => console.log(error))
}

// Watch Reactive data
watch(unrespondedservices, (newUnRespondedServices) => {
    if(unrespondedservices.value.length === 0) {
        requestempty.value = true;
    } else {
        console.log(unrespondedservices.value);
        requestempty.value = false;
    }
})

watch(respondedservices, (newRespondedServices) => {
    if(respondedservices.value.length === 0) {
        responseempty.value = false;
    } else {
        responseempty.value = true;
    }
})

const fechResponses = async (): Promise<void> => {
    loadingfetch.value = true;
    await fetch(`${base_url}service/accepted-requests/client`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": useauth.User.Auth_token || ""
        }
    })
    .then(async response => {
        if(response.status === 200) {
            respondedservices.value = await response.json();
            console.log(respondedservices.value);
        } else {
            console.log(await response.json());
        }
        setTimeout(() => {
            loadingfetch.value = false;
        }, 400);
    })
    .catch(error => {
        console.log(error);
        setTimeout(() => {
            loadingfetch.value = false;
        }, 400);
    });
}

fechResponses();
fetchUnrepondedRequests();


</script>
<template>
    <section class="w-full px-1 flex flex-col gap-y-10">
        <Transition name="fade-loading" mode="out-in">
            <div class="load-suspense w-full flex flex-col gap-y-3 px-1 sm:px-4" v-if="loadingfetch">
                <ClientResponseSuspense />
                <ClientResponseSuspense />
            </div>
            <div class="w-full flex flex-col gap-y-10" v-else>

                <div class="with-response flex flex-col gap-y-4" v-if="responseempty">
                    <div class="title px-1 sm:px-4">
                        <h3 class="text-xl font-bold tracking-wide text-[#346974]">Accepted Service Requests</h3>
                    </div>
        
                    <div class="body-container w-full flex flex-col gap-y-3 px-1 sm:px-4 text-[#346974]">
                        <ClientResponse v-for="response in respondedservices" :response="response"/>
                    </div>
                </div>
                <div class="no-response flex flex-col gap-y-4">
                    <div class="title px-1 sm:px-4">
                        <h3 class="text-xl font-bold tracking-wide text-[#346974]">Service Requests</h3>
                    </div>
        
                    <div class="body-container w-full flex flex-col gap-y-3 px-1 sm:px-4 text-[#346974]">
                        <NoRequests v-if="requestempty" />
                        <ClientNoResponse v-else v-for="service in unrespondedservices" :request="service" />
                        
                    </div>
                </div>
            </div>
        </Transition>
    </section>
</template>

<style scoped>

.fade-loading-enter-from {
    @apply opacity-0;
}
.fade-loading-enter-active , .fade-loading-leave-active{
    transition: opacity 200ms ease;
}
</style>