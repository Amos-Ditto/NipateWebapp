<script setup lang="ts">
import AccountTopBar from '../components/Layouts/AccountTopBar.vue';
import MainFooter from '../components/Layouts/MainFooter.vue';

const base_url = import.meta.env.VITE_BASE_URL;

</script>

<template>
    <main class="w-full flex flex-col bg-gray-50 relative pb-[280px]">
        <account-top-bar class="sticky top-0 z-20" />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <main-footer class="absolute bottom-0" />
    </main>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>