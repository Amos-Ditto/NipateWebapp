<script setup lang="ts">
import { ref } from 'vue';
import ClientNoResponse from '../../../components/Cards/Requests/ClientNoResponse.vue';
import ClientResponse from '../../../components/Cards/Requests/ClientResponse.vue';
import NoRequests from '../../../components/Cards/Requests/NoRequests.vue';

const requestempty = ref<boolean>(false);

</script>
<template>
    <section class="w-full px-1 flex flex-col gap-y-10">
        <div class="with-response flex flex-col gap-y-4">
            <div class="top-nav flex flex-col sm:flex-row justify-between items-start w-full px-2.5 gap-y-8">
                <div class="title">
                    <h3 class="text-xl font-bold tracking-wide text-[#346974]">Accepted Service Requests</h3>
                </div>
            </div>
            <div class="body-container w-full flex flex-col gap-y-3 px-1 sm:px-4 text-[#346974]">
                <ClientResponse />
            </div>
        </div>
        <div class="no-response flex flex-col gap-y-4">
            
            <div class="top-nav flex flex-col sm:flex-row justify-between items-start w-full px-2.5 gap-y-8">
                <div class="title">
                    <h3 class="text-xl font-bold tracking-wide text-[#346974]">Service Requests</h3>
                </div>
            </div>
            <div class="body-container w-full flex flex-col gap-y-3 px-1 sm:px-4 text-[#346974]">
                <NoRequests v-if="requestempty" />
                <ClientNoResponse v-else />
                
            </div>
        </div>
    </section>
</template>