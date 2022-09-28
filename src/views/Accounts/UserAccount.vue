<script setup lang="ts">
import ProviderAccountNav from '../../components/Layouts/ProviderAccountNav.vue';
import ServicesCard from '../../components/Cards/ServicesCard.vue';
import AdvertCard from '../../components/Cards/AdvertCard.vue';


</script>
<template>
    <section class="w-full py-8 px-[8px] sm:px-[10px] md:px-[20px] lg:px-[40px] xl:px-[100px] transition-pad duration-300">
        <div class="main-section w-full grid grid-cols-1 lg:grid-cols-5 grid-flow-row gap-x-8 gap-y-4">
            <nav class="side-bar col-span-1 row-span-1 pt-4 pb-8 bg-gray-100 flex flex-col rounded-sm border border-gray-300">
                <ul class="w-full flex flex-col gap-y-1">
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-home-outline text-2xl text-[#346974]"></div>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-text-box text-2xl text-[#346974]"></div>
                            <span>Requests</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-account-outline text-2xl text-[#346974]"></div>
                            <span>Profile</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-plus text-2xl text-[#346974]"></div>
                            <span>Adverts</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="body-section col-span-4 row-span-3 pb-2 flex flex-col gap-y-4">
                <!-- Body NavBar -->
                <!-- <ProviderAccountNav /> -->
                <div class="w-full flex flex-col gap-y-4 px-3">
                    <h3 class="text-lg capitalize font-bold">Services request</h3>
                    <div class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2">
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <!-- <ServicesCard /> -->
                    </div>
                    <!-- <div class="list-all w-full flex items-center justify-end px-1">
                        <small class="text-base text-green-500 hover:text-orange-500 font-bold italic transition-colors cursor-pointer underline">view all</small>
                    </div> -->
                </div>
                <div class="w-full flex flex-col gap-y-4 pt-10 px-3">
                    <h3 class="text-lg capitalize font-bold">your adverts</h3>
                    <div class="a-container grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2">
                        <AdvertCard />
                        <AdvertCard />
                        <AdvertCard />
                    </div>
                    <!-- <div class="list-all w-full flex items-center justify-end px-1">
                        <small class="text-base text-green-500 hover:text-orange-500 font-bold italic transition-colors cursor-pointer underline">view all</small>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

nav ul li {
    @apply flex items-center cursor-pointer border-b border-gray-200;
}
nav ul li a {
    @apply flex flex-row items-center gap-x-3 py-3 px-3 hover:bg-gray-200 w-full h-full transition-colors;
}

nav ul li a span {
    @apply text-base font-bold text-[#346974];
}

</style>