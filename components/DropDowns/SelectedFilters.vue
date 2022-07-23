<script setup lang="ts">
import {Locations, Categories} from '~~/types/LocationTypes';

defineProps<{
    locationtags: Locations[];
    producttags: Categories[];
}>();

const emit = defineEmits<{
    (event: 'popFilterTag', payload: Locations['id'])
}>();

const popFilterTag = (payload: Locations['id']):void => {
    emit('popFilterTag', payload);
}
</script>
<template>
    <div class="mobile-filter-tags w-full text-neutral-600 flex flex-row flex-nowrap gap-2 items-center py-2">
        <button
            v-for="(locationtag, index) in locationtags" :key="index"
            @click="popFilterTag(locationtag.id)"
        ><span>{{locationtag.Name}}</span></button>
        <button
            v-for="(producttag, index) in producttags" :key="index"
            @click="popFilterTag(producttag.id)"
        ><span>{{producttag.Name}}</span></button>
    </div>
</template>

<style scoped>

.search-btn {
    transition: background-color 300ms ease;
}
.mobile-filter-tags button {
    @apply flex items-center;
    @apply bg-zinc-100 rounded-lg px-3 py-2 text-xs tracking-wide italic hover:bg-slate-200;
}
.mobile-filter-tags button span {
    @apply flex whitespace-nowrap;
}
</style>