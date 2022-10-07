<script setup lang="ts">
import HeroDashboard from '../../components/Heroes/HeroDashboard.vue';
import RecentServiceData from '../../components/Cards/RecentServiceData.vue';

</script>
<template>
    <main class="w-full pt-8 pb-8 md:pb-24 px-[8px] lg:px-[80px] xl:px-[90px] 2xl:px-[130px] transition-pad duration-300 flex flex-col gap-y-12">
        <section class="w-full">
            <HeroDashboard />
        </section>
        <section class="w-full flex flex-col gap-4 pb-8 pt-1 sm:pt-3 transition-pad duration-300">
            <div class="recent-services flex flex-col gap-y-2 w-full">
                <div class="recent-title w-full px-4">
                    <h3 class="text-xl text-slate-700 uppercase">Most Recent</h3>
                </div>
                <div class="recent-services grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 transition-all sm:gap-y-4 gap-x-2 lg:gap-x-5 px-4">
                    <RecentServiceData />
                    <RecentServiceData />
                    <RecentServiceData />
                    <RecentServiceData />
                    <!-- <RecentServiceData />
                    <RecentServiceData /> -->
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

main {
    transition: padding 300ms ease;
}
</style>