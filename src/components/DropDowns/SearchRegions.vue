<script setup lang="ts">

defineProps<{
    toggleregions: boolean;
}>();

</script>

<template>
    <ul class="flex flex-col gap-y-1 max-h-[15rem] overflow-y-auto" v-if="toggleregions">
        <li>Nakuru</li>
        <li>Nairobi</li>
        <li>Baringo</li>
        <li>Kiambu</li>
        <li>Nakuru</li>
        <li>Nairobi</li>
        <li>Baringo</li>
        <li>Kiambu</li>
        <li>Nakuru</li>
        <li>Nairobi</li>
        <li>Baringo</li>
        <li>Kiambu</li>
        <li>Nakuru</li>
        <li>Nairobi</li>
        <li>Baringo</li>
        <li>Kiambu</li>
    </ul>
</template>

<style scoped>

li {
    @apply text-sm tracking-wide font-light px-4 py-2 border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer;
}

::-webkit-scrollbar {
    width: 4px;
    height: 1px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-400;
}
</style>