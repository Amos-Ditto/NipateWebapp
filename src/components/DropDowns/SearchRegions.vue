<script setup lang="ts">

defineProps<{
    toggleregions: boolean;
}>();

</script>

<template>
    <Transition name="drop-down">
        <ul class="flex flex-col gap-y-1 overflow-y-auto max-h-[12rem]" v-if="toggleregions">
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
    </Transition>
</template>

<style scoped>

li {
    @apply text-sm tracking-wide font-light px-8 sm:px-4 py-2 border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer;
}

.drop-down-enter-from {
    @apply opacity-0 max-h-0 -z-10;
}
.drop-down-leave-to {
    @apply opacity-0 max-h-0;
}
.drop-down-enter-active , .drop-down-leave-active {
    transition: opacity 200ms ease, transform 300ms ease, height 300ms ease;
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