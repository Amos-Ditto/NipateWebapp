<script setup lang="ts">
import Locations from '~~/types/LocationTypes';

// Emits
const emit = defineEmits<{
  (event: 'selectTownId', id: number, Name: string): void
}>();

// Methods
const selectId = (id: number, Name: string): void => {
    emit("selectTownId", id, Name);
};

const props = defineProps<{
  locations?: Locations[];
}>();
</script>

<template>
    <ul class="w-full flex flex-col items-center gap-2 h-[7.5rem] sm:h-[11.5rem] p-2 overflow-y-auto">
        <li
            v-for="location in props.locations" :key="location.id"
            @click="selectId(location.id, location.Name)"
        >{{location.Name}}</li>
    </ul>
</template>

<style scoped>
ul li {
    @apply w-[80%] cursor-pointer pl-3 py-2 bg-inherit bg-slate-100 hover:bg-slate-200 rounded text-xs sm:text-sm font-semibold tracking-wider;
}
</style>