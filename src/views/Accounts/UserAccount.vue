<script setup lang="ts">
import ServicesCard from '../../components/Cards/ServicesCard.vue';
import AdvertCard from '../../components/Cards/AdvertCard.vue';

</script>
<template>
    <section class="w-full py-8 px-[8px] sm:px-[2px] md:px-[5px] lg:px-[40px] xl:px-[100px] transition-pad duration-300">
        <div class="main-section w-full grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-5 grid-flow-row gap-x-1 lg:gap-x-8 gap-y-4">
            <nav class="side-bar hidden col-span-1 row-span-1 pt-4 pb-8 bg-gray-100 sm:flex flex-col rounded-sm border border-gray-300">
                <ul class="w-full flex flex-col gap-y-1">
                    <li>
                        <router-link :to="{ name: 'Provider-Home' }">
                            <div class="i-mdi-home-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Provider-Services' }">
                            <div class="i-mdi-cog-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>My Services</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-text-box text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Requests</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-plus text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Adverts</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="body-section sm:col-span-7 lg:col-span-4 row-span-3 pb-2 flex flex-col gap-y-4">
                <!-- Body NavBar -->
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<style scoped>

nav ul li {
    @apply flex items-center cursor-pointer border-b border-gray-200;
}
nav ul li a {
    @apply relative flex flex-row sm:justify-center lg:justify-start items-center gap-x-3 py-3 sm:px-1 lg:px-3 hover:bg-gray-200 w-full h-full transition-colors;
}
nav ul li .router-link-exact-active {
    @apply bg-gray-200;
}

nav ul li a span {
    @apply text-base font-bold text-[#346974] sm:absolute sm:left-full lg:left-0 lg:relative sm:hidden lg:block;
}

.button-more:hover span {
    @apply flex;
}

@media (max-width: 1024px) {
    nav ul li a:hover span {
        @apply block z-10 bg-gray-100 py-2 px-3 shadow-lg rounded text-sm font-semibold;
    }
}
</style>