<script setup lang="ts">
import { Locations } from '~~/types/LocationTypes';

defineProps<{
    apicounties: Locations[];
}>();

const counties = ref<Locations[]>([
    {'Name': 'Nakuru', 'id': 1}, {'Name': 'Nairobi', 'id': 2}, {'Name': 'Baringo', 'id': 3}
])
</script>

<template>
    <main class="w-full flex flex-col px-1 py-1">
        <div class="header w-full text-neutral-500 text-sm py-2 px-2 relative flex items-center">
            <!-- <h3>pick your location</h3> -->
            <input type="search" name="" id="search-location" placeholder="search for location">
            <div class="i-mdi-magnify absolute left-0 translate-x-[100%] translate-y-[10%] text-neutral-400 text-xl" />
        </div>
        <hr>
        <ul class="list-counties w-full px-2 py-1 flex flex-col gap-1 text-neutral-500">
            <li v-for="(county, index) in apicounties" :key="index">
                {{county.Name}}
            </li>
        </ul>
    </main>
</template>

<style scoped>
.header input {
    @apply w-[80%] h-[2.2rem] pl-9 pr-2 bg-gray-100 border border-zinc-200 rounded;
    @apply outline-none tracking-wide placeholder:text-neutral-400 text-sm;
    @apply hover:border-orange-300 focus:border-orange-300;
}
.list-counties li {
    @apply w-full py-1 text-sm px-4 tracking-wider cursor-pointer hover:bg-zinc-100;
}
</style>