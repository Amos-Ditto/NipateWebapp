<script setup lang="ts">
import UserAccountDetails from "../../components/Heroes/UserAccountDetails.vue";
import ClientDashboardRequestsEmpty from "../../components/Cards/Empty/ClientDashboardRequestsEmpty.vue";
import ClientDashboardAdvertsEmpty from "../../components/Cards/Empty/ClientDashboardAdvertsEmpty.vue";
</script>
<template>
    <section class="flex flex-col w-full gap-y-4 sm:gap-y-8">
        <div class="top-section w-full flex flex-row justify-between gap-y-6">
            <div class="user-container w-full px-3 pb-10 flex flex-col">
                <UserAccountDetails />
            </div>
        </div>
        <div class="body-section w-full flex flex-col gap-y-12 px-1 sm:px-4">
            <div class="other-section flex flex-col gap-y-10 w-full">
                <div class="requests-dummy w-full flex flex-col gap-y-3">
                    <div
                        class="request-title flex flex-row items-center justify-between w-full"
                    >
                        <h3 class="font-bold text-lg">Requested Services</h3>
                        <button
                            class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
                        >
                            <span>view more</span>
                            <div class="i-mdi-arrow-right"></div>
                        </button>
                    </div>
                    <ClientDashboardRequestsEmpty />
                </div>
                <div class="ad-dummy w-full flex flex-col gap-y-3">
                    <div
                        class="ad-title flex flex-row items-center justify-between w-full"
                    >
                        <h3 class="font-bold text-lg">My Advertisements</h3>
                        <button
                            class="more py-1.5 px-4 rounded-lg capitalize flex flex-row gap-x-4 items-center justify-between text-sm border border-gray-200"
                        >
                            <span>view more</span>
                            <div class="i-mdi-arrow-right"></div>
                        </button>
                    </div>
                    <ClientDashboardAdvertsEmpty />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
button.more:hover,
button.more:focus {
    @apply border-gray-300 gap-x-6;
}
button.more {
    @apply transition-all duration-200;
}
</style>
