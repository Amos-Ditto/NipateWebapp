<template>
    <div class="top-bar-nav w-full flex flex-row items-center gap-x-12 px-2">
        <router-link :to="{ name: 'User' }">
            <div class="i-mdi-plus text-2xl"></div>
            <span>Place Advert</span>
        </router-link>
        <router-link :to="{ name: 'User' }">
            <div class="i-mdi-plus text-2xl"></div>
            <span>Add Service Provided</span>
        </router-link>
        <router-link :to="{ name: 'User' }">
            <div class="i-mdi-cog text-2xl"></div>
            <span>Change Provider Details</span>
        </router-link>
    </div>
</template>

<style scoped>

.top-bar-nav a {
    @apply py-5 px-6 border-dotted border-[2px] border-gray-300 rounded-md
        flex flex-row gap-x-2.5 items-center text-[#346974] hover:shadow 
        hover:text-steelblue transition-all duration-300;
}

.top-bar-nav a span {
    @apply text-base font-bold;
}

</style>