<script setup lang="ts">
import { Request } from '../../../Types/Requests';




defineProps<{
    request: Request
}>();


const estimateDuration = (timestamp: string): string => {
    let now = new Date();
    let then = new Date(timestamp);
    
    let diff = now.getHours() - then.getHours();

    if(diff < 1) {
        return (diff * 60).toString() + "mins";
    } else if(diff < 24) {
        return diff.toString() + "hrs";
    } else {
        return (diff / 24).toString() + "days";
    }
}

</script>

<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="text-lg font-semibold tracking-wide capitalize">{{ request.Service.ServiceTitle }}</h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-4">
            <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                <small class="text-slate-500 text-xs">{{ request.Service.Service.Name }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ request.Service.Provider.User.FirstName }} {{ request.Service.Provider.User.SurName }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ request.Service.Location.DisplayName }}</small>
                <small class="text-xs text-slate-400 italic">{{ estimateDuration(request.TimeStamp) }} ago</small>
            </div>
            <div class="description w-full px-1 sm:px-3">
                <p class="text-base line-clamp-3">{{ request.Service.ServiceDescription }}.</p>
            </div>
        </div>
        <div class="card-footer w-full px-1 sm:px-3">
            <div class="response w-full flex flex-row">
                <button
                    class="text-sm border border-gray-300 px-4 py-1 rounded text-slate-600"
                >No response yet</button>
            </div>
        </div>
    </div>
</template>