<script setup lang="ts">
import ProviderAccountNav from '../../components/Layouts/ProviderAccountNav.vue';


</script>
<template>
    <section class="w-full py-8 px-[8px] lg:px-[80px] transition-pad duration-300">
        <div class="main-section w-full grid grid-cols-5 grid-rows-3 gap-x-8">
            <nav class="side-bar col-span-1 py-4 bg-gray-100 flex flex-col rounded-sm border border-gray-300">
                <ul class="w-full flex flex-col gap-y-1">
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-home-outline text-2xl text-[#346974]"></div>
                            <span class="text-lg font-bold text-[#346974]">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-text-box text-2xl text-[#346974]"></div>
                            <span class="text-lg font-bold text-[#346974]">Requests</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User' }">
                            <div class="i-mdi-account-outline text-2xl text-[#346974]"></div>
                            <span class="text-lg font-bold text-[#346974]">Profile</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="body-section col-span-4 row-span-3 py-2 flex flex-col gap-y-4">
                <!-- Body NavBar -->
                <ProviderAccountNav />
                <div class="w-full flex flex-col gap-y-4 pt-10 px-3">
                    <h3 class="text-lg capitalize font-bold">your adverts</h3>
                    <div class="a-container grid grid-cols-4 gap-x-6">
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                    </div>
                    <div class="list-all w-full flex items-center justify-end px-1">
                        <small class="text-orange-400 hover:text-orange-500 font-bold transition-colors cursor-pointer">view all</small>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-y-4 pt-10 px-3">
                    <h3 class="text-lg capitalize font-bold">your adverts</h3>
                    <div class="a-container grid grid-cols-4 gap-x-6">
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                        <div class="ad-card"></div>
                    </div>
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

.a-container .ad-card {
    @apply min-h-[15rem] bg-gray-100 rounded-md border border-gray-300;
}
</style>