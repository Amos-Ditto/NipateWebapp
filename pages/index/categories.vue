<script setup lang="ts">
// const router = useRoute();
// console.log(router.name);


</script>
<template>
    <main class="w-full text-2xl px-4 sm:px-12 pt-8 flex flex-col gap-4 sm:gap-6">
        <div class="hero-container font-bold text-xl sm:text-3xl tracking-tight">
            <h3 class="tracking-tight">Services Near you</h3>
        </div>
        <div class="services-container">
            <div class="horizontal-container w-full overflow-x-auto flex flex-row items-center gap-3">
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
                <PageFeauturesServiceCard />
            </div>
        </div>
    </main>
</template>

<style scoped>

.services-container {
    @apply flex items-center gap-3 w-full;
}
</style>