<script setup lang="ts">
// const router = useRoute();
// console.log(router.name);


</script>
<template>
    <main class="w-full text-2xl px-2 xs:px-4 sm:px-12 pt-2 xs:pt-8 flex flex-col gap-2 xs:gap-4 sm:gap-6">
        <div class="hero-container font-bold text-lg xs:text-xl sm:text-2xl w-full px-2">
            <h3 class="tracking-tight text-slate-600">Services Near you</h3>
        </div>
        <div class="services-container">
            <div class="horizontal-container scroll-smooth w-full overflow-x-auto flex flex-col gap-4 xs:gap-8 py-1 xs:py-2 px-1">
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
    @apply flex items-center gap-2 xs:gap-3 w-full py-2 overflow-y-hidden;
}
.horizontal-container::-webkit-scrollbar {
    width: 2px;
    display: none;
}
 
.horizontal-container::-webkit-scrollbar-track {
    @apply bg-gray-100;
    border-radius: 10px;
}
 
.horizontal-container::-webkit-scrollbar-thumb {
    @apply bg-gray-200;
    border-radius: 4px;
}
.horizontal-container::-webkit-scrollbar-thumb:hover{
    border: 0;
}

</style>