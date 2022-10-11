<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useLayouts } from '../../store/layouts';
import useAuthentications from '../../store/authentications';

const userlayout = useLayouts();
const useAuth = useAuthentications();
const { Provider } = storeToRefs(useAuth);
const { userdashboard } = storeToRefs(userlayout);

</script>
<template>
    <section class="w-full py-8 px-[8px] sm:px-[2px] md:px-[5px] lg:px-[40px] xl:px-[100px] transition-pad duration-300 relative">
        <div class="main-section w-full grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-5 grid-flow-row gap-x-4 lg:gap-x-8 gap-y-4">
            <nav class="side-bar hidden col-span-1 row-span-1 pt-4 pb-8 bg-gray-100 sm:flex flex-col rounded-md border border-gray-300">
                <ul class="w-full flex flex-col gap-y-1" v-if="!Provider">
                    <li>
                        <router-link :to="{ name: 'User-Home' }" class="sm-links">
                            <div class="i-mdi-home-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <!-- <li>
                        <router-link :to="{ name: 'Provider-Services-List' }" class="sm-links">
                            <div class="i-mdi-cog-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>My Services</span>
                        </router-link>
                    </li> -->
                    <li>
                        <router-link :to="{ name: 'Service-Requests' }" class="sm-links">
                            <div class="i-mdi-text-box text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Requests</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User-Adverts' }" class="sm-links">
                            <div class="i-mdi-plus text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Adverts</span>
                        </router-link>
                    </li>
                </ul>
                <ul class="w-full flex flex-col gap-y-1" v-if="Provider">
                    <li>
                        <router-link :to="{ name: 'Provider-Home' }" class="sm-links">
                            <div class="i-mdi-home-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Provider-Services-List' }" class="sm-links">
                            <div class="i-mdi-cog-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>My Services</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Service-Requests' }" class="sm-links">
                            <div class="i-mdi-text-box text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Requests</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'User-Adverts' }" class="sm-links">
                            <div class="i-mdi-plus text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                            <span>Adverts</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <transition name="slide">
                <nav class="fixed left-0 right-0 top-0 bottom-0 z-10 sm:hidden" v-if="userdashboard">
                    <div class="absolute left-0 top-0 bottom-0 right-0 opacity-10 bg-gray-200" @click="userlayout.updateUserDashboard"></div>
                    <div class="absolute left-0 top-0 bottom-0 w-[50%] bg-gray-200 py-24">
                        <ul class="w-full flex flex-col gap-y-1 px-1" v-if="!Provider">
                            <li class="xs-links">
                                <router-link :to="{ name: 'User-Home' }" class="xs-links">
                                    <div class="i-mdi-home-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Home</span>
                                </router-link>
                            </li>
                            <!-- <li class="xs-links">
                                <router-link :to="{ name: 'Provider-Services-List' }" class="xs-links">
                                    <div class="i-mdi-cog-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>My Services</span>
                                </router-link>
                            </li> -->
                            <li class="xs-links">
                                <router-link :to="{ name: 'Service-Requests' }" class="xs-links">
                                    <div class="i-mdi-text-box text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Requests</span>
                                </router-link>
                            </li>
                            <li class="xs-links">
                                <router-link :to="{ name: 'User-Adverts' }" class="xs-links">
                                    <div class="i-mdi-plus text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Adverts</span>
                                </router-link>
                            </li>
                        </ul>
                        <ul class="w-full flex flex-col gap-y-1 px-1" v-if="Provider">
                            <li class="xs-links">
                                <router-link :to="{ name: 'Provider-Home' }" class="xs-links">
                                    <div class="i-mdi-home-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Home</span>
                                </router-link>
                            </li>
                            <li class="xs-links">
                                <router-link :to="{ name: 'Provider-Services-List' }" class="xs-links">
                                    <div class="i-mdi-cog-outline text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>My Services</span>
                                </router-link>
                            </li>
                            <li class="xs-links">
                                <router-link :to="{ name: 'Service-Requests' }" class="xs-links">
                                    <div class="i-mdi-text-box text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Requests</span>
                                </router-link>
                            </li>
                            <li class="xs-links">
                                <router-link :to="{ name: 'User-Adverts' }" class="xs-links">
                                    <div class="i-mdi-plus text-xl lg:text-2xl transition-font duration-300 text-[#346974]"></div>
                                    <span>Adverts</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </transition>
            <div class="body-section sm:col-span-7 lg:col-span-4 row-span-3 pb-2 flex flex-col gap-y-4">
                <!-- Body NavBar -->
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<style scoped>

.slide-enter-from , .slide-leave-to {
    @apply -translate-x-full opacity-0;
}
.slide-enter-active , .slide-leave-active {
    transition: opacity 250ms ease , transform 500ms ease;
}
nav ul li {
    @apply flex items-center cursor-pointer border-b border-gray-200;
}
nav ul li a.sm-links {
    @apply relative flex flex-row sm:justify-center lg:justify-start items-center gap-x-3 py-3 sm:px-1 lg:px-3 hover:bg-gray-200 w-full h-full transition-colors;
}
nav ul li a.xs-links {
    @apply relative flex flex-row sm:justify-center lg:justify-start items-center gap-x-3 py-3 px-2 rounded-t-sm hover:bg-gray-300 w-full h-full transition-colors;
    @apply border-b border-gray-300 transition-colors duration-300;
}
nav ul li .router-link-exact-active {
    @apply bg-gray-200;
}

nav ul li.xs-links .router-link-exact-active {
    @apply bg-gray-100 border-b-0;
}
nav ul li a.sm-links span {
    @apply text-base font-bold text-[#346974] sm:absolute sm:left-full lg:left-0 lg:relative sm:hidden lg:block;
}

@media (max-width: 1024px) {
    nav ul li a.sm-links:hover span {
        @apply block z-10 bg-gray-100 py-2 px-3 shadow-lg rounded text-sm font-semibold;
    }
}
</style>