<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
    <div
        class="flex flex-col pt-12 pb-4 gap-y-3 border border-gray-300 rounded items-center justify-center w-full"
    >
        <h3 class="text-xl tracking-wide">
            You have not requested any services yet.
        </h3>
        <p class="text-sm">Search to find best person to serve you.</p>
        <button
            class="border border-gray-200 hover:border-gray-300 focus:border-gray-300 rounded px-4 py-1 text-sm tracking-wide"
            @click="router.push({ name: 'Search-Home' })"
        >
            Search here
        </button>
    </div>
</template>
