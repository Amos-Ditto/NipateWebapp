<script setup lang="ts">
import HeroDashboard from '../../components/Heroes/HeroDashboard.vue';
import RecentServiceData from '../../components/Cards/RecentServiceData.vue';

</script>
<template>
    <main class="w-full pt-8 lg:px-[160px] flex flex-col gap-y-8">
        <section class="w-full">
            <HeroDashboard />
        </section>
        <section class="w-full flex flex-col gap-4 pb-8 pt-8">
            <div class="recent-services grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 px-4">
                <RecentServiceData />
                <RecentServiceData />
                <RecentServiceData />
                <RecentServiceData />
            </div>
        </section>
    </main>
</template>

<style scoped>

main {
    transition: padding 300ms ease;
}
</style>