<script setup lang="ts">
import { Request } from "../../../../Types/Requests";
import { estimateDuration } from "../../../../composables/estimateDuration";

defineProps<{
    request: Request;
}>();
</script>
<template>
    <div
        class="ad-card min-h-[10rem] bg-gray-50 sm:rounded-md border border-gray-300 py-3 flex flex-col gap-y-1 relative text-[#346974]"
    >
        <div
            class="card-title py-2 sm:py-3 flex items-center px-2 sm:px-4 w-full"
        >
            <h3 class="text-lg font-semibold capitalize">
                {{ request.Service.ServiceTitle }}
            </h3>
        </div>
        <div class="card-body py-1 flex flex-col gap-y-4 w-full px-2 sm:px-4">
            <div class="flex flex-row w-full py-1 items-center gap-x-2">
                <small class="text-sm"
                    >{{ request.Service.Provider.User.FirstName }}
                    {{ request.Service.Provider.User.SurName }}</small
                >
                <small>-</small>
                <small class="text-sm">{{
                    request.Service.Location.DisplayName
                }}</small>
                <small>-</small>
                <p class="text-sm italic">
                    {{ estimateDuration(request.TimeStamp) }} ago.
                </p>
            </div>
            <div class="pt-3">
                <p class="text-base line-clamp-3">
                    {{ request.Service.ServiceDescription }}
                </p>
            </div>
        </div>
    </div>
</template>
