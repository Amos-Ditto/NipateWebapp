<script setup lang="ts">
// const router = useRoute();
// console.log(router.name);


</script>
<template>
    <main class="w-full text-2xl px-2 xs:px-4 sm:px-12 pt-2 xs:pt-8 flex flex-col gap-2 xs:gap-4 sm:gap-6">
       <div class="services">
            <div class="header">
                <h3>Services Around your Area</h3>
            </div>
            <div class="service-list">
                <PageFeauturesServiceListCard />
                <PageFeauturesServiceListCard />
                <PageFeauturesServiceListCard />
                <PageFeauturesServiceListCard />
            </div>
       </div>
    </main>
</template>

<style scoped>

.services {
    @apply w-full flex flex-col gap-2 md:gap-4;
    transition: gap 300ms;
}
.services .header {
    @apply w-full items-center md:px-4;
    transition: padding 300ms;
}
.services .header h3 {
    @apply font-bold text-xl md:text-2xl text-slate-600;
    transition: font-size 300ms;
}
.services .service-list {
    @apply w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-8 px-1 gap-y-2 md:gap-y-4;
    transition: gap 300ms , grid-template-columns 300ms;
}
</style>