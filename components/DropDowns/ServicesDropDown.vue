<script setup lang="ts">

interface Location {
    name: string;
}
const counties: Location[] = [
    {name: 'Nakuru'}, {name: 'Nairobi'}, {name: 'Baringo'}, {name:'Kericho'}
]
</script>
<template>
    <div class="drop-down">
        <div class="location-group w-full py-2 flex flex-col gap-2">
            <div class="search-group w-full h-[15%] flex items-center px-4 relative">
                <input type="text" class="outline-none rounded border border-neutral-300 bg-transparent tracking-widest px-8 py-1.5 italic w-full text-neutral-500 text-sm">
                <div class="i-mdi-magnify absolute left-0 translate-x-[150%] translate-y-[10%]" />
            </div>
            <div class="group-btn flex flex-wrap items-center w-full max-h-[160px] gap-4 px-4 py-4 overflow-y-auto">
                <button v-for="(county, index) in counties">{{county.name}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.drop-down {
    @apply w-[250px] h-[220px] shadow bg-slate-50 absolute bottom-0 translate-y-[104%] z-40;
}
.drop-down button {
    @apply text-xs border border-neutral-300 rounded-lg px-2 py-1 hover:border-orange-500 hover:text-orange-500;
    transition: border 300ms ease, color 300ms ease;
}
</style>