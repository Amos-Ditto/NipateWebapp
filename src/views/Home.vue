<script setup lang="ts">
import MainTopBar from '../components/Layouts/MainTopBar.vue';
import MainFooter from '../components/Layouts/MainFooter.vue';

</script>
<template>
    <main>
        <MainTopBar class="sticky top-0 z-30" />
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <MainFooter />
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