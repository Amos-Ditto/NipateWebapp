<script setup lang="ts">
import AccountTopBar from '../components/Layouts/AccountTopBar.vue';
import MainFooter from '../components/Layouts/MainFooter.vue';


</script>

<template>
    <main class="w-full flex flex-col">
        <account-top-bar class="sticky top-0 z-20" />
        <router-view ></router-view>
        <main-footer />
    </main>
</template>