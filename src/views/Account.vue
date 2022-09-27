<script setup lang="ts">
import AccountTopBar from '../components/Layouts/AccountTopBar.vue';


</script>

<template>
    <main class="w-full flex flex-col">
        <account-top-bar />
        <router-view ></router-view>
    </main>
</template>