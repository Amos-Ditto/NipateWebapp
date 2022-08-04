<script setup lang="ts">
import {useAuthStore} from '~/stores/authentications';

const userauthenticated = useAuthStore();

const toggleUserWhenLoggedIn = ():void => {
    userauthenticated.toggleIsUserAuthenticated();
}
toggleUserWhenLoggedIn();

</script>
<template>
    <main class="w-full h-full">
        <header class="h-[4em] sm:h-[4.8em] flex items-center w-full px-2 sm:px-8">
            <div class="logo">
                <img src="@/assets/img/Logo/Decoupled.svg" alt="">
            </div>
        </header>
        <section class="w-full">
        </section>
    </main>
</template>

<style scoped>

header {
    transition: height 300ms ease;
}
header .logo img {
    @apply w-[7.5rem] sm:w-[9rem] h-[3.4rem];
    transition: width 300ms ease;
}
</style>