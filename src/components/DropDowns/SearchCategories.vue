<script setup lang="ts">
import { Category } from '../../Types/ServiceTypes';


defineProps<{
    togglecategories: boolean;
    servicecategories: Category[];
}>();

const emits = defineEmits<{
    (e: 'selectCategory', payload: Category): void
}>();

const selectCategory = (payload: Category): void => {
    console.log("Select: ", payload);
    emits('selectCategory', payload);
}

</script>

<template>
    <Transition name="drop-down">
        <ul class="w-full flex flex-col gap-y-1 max-h-[12rem] overflow-y-auto" v-if="togglecategories">
            <li 
                class="text-ellipsis overflow-hidden truncate"
                v-for="service in servicecategories" :key="service.id"
                @click="selectCategory(service)"
            >{{ service.Name }}</li>
        </ul>
    </Transition>
</template>

<style scoped>

li {
    @apply text-sm tracking-wide font-light px-8 sm:px-4 py-2 border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer;
}

li span {
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