<script setup lang="ts">
import { Response } from '../../../Types/Requests';
import { estimateDuration } from '../../../composables/estimateDuration';


defineProps<{
    response: Response
}>();


</script>

<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="text-lg font-semibold tracking-wide capitalize">{{ response.Request.Service.ServiceTitle }}</h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-4">
            <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                <small class="text-slate-500 text-xs">{{ response.Request.Service.Service.Name }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ response.Request.User.FirstName }} {{ response.Request.User.SurName }}</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">{{ response.Request.CenterLocation.DisplayName }}</small>
                <small class="text-xs text-slate-400 italic">{{ estimateDuration(response.Request.TimeStamp) }} ago.</small>
            </div>
            <div class="description w-full px-1 sm:px-3">
                <p class="text-base line-clamp-3">{{ response.Request.RequestText }}</p>
            </div>
        </div>
        <div class="card-footer w-full px-1 sm:px-3 py-3 border-t border-gray-200 flex flex-col gap-y-2">
            <div class="title">
                <h3>Response</h3>
            </div>
            <div class="duration">
                <small>{{ estimateDuration(response.TimeStamp) }} ago</small>
            </div>
            <div class="response-text">
                <p>{{ response.ResponseText }}</p>
            </div>
        </div>
    </div>
</template>