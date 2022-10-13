<script setup lang="ts">
import type { ServicesEntity } from '../../Types/GeneralTypes'
defineProps<{
    services: ServicesEntity[];
}>();

const emits = defineEmits<{
    (e: 'CloseServiceList'):void
    (e: 'chooseService', payload: ServicesEntity, toggle: boolean):void
}>();


const CloseServiceList = ():void => {
    emits('CloseServiceList');
}

const chooseService = (payload: ServicesEntity): void => {
    emits('chooseService', payload, false);
}
</script>

<template>
    <div class="services w-full flex flex-col gap-y-1 py-1 max-h-[12rem] overflow-y-auto">
        <div class="nav flex flex-row justify-between items-center px-2 py-1 border-b border-gray-200 bg-gray-50 sticky top-0">
            <div class="back p-2 hover:bg-gray-200 transition-colors duration-200 rounded-full cursor-pointer" @click="CloseServiceList">
                <div class="i-mdi-arrow-left scale-110"></div>
            </div>
        </div>
        <ul class="flex flex-col w-full">
            <li v-for="service in services" @click="chooseService(service)">{{ service.Name }}</li>
        </ul>
    </div>
</template>

<style scoped>

li {
    @apply w-full py-1.5 px-3 hover:bg-gray-200 transition-colors duration-200 text-sm tracking-wide cursor-pointer;
}
</style>