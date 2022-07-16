<script setup lang="ts">
const openmobilenav = ref<boolean>(false);
const closemobilenav = ref<boolean>(false);

const openMSideNav = (): void => {
    openmobilenav.value = !openmobilenav.value;
    closemobilenav.value = !closemobilenav.value;
};
</script>

<template>
    <NuxtLayout name="custom">
        <template #header>
            <nav class="w-full bg-slate-100 z-[100] flex justify-center shadow md:shadow-md">
                <LazyDesignsTopNav class="w-full" @open-m-side-nav="openMSideNav" :closemobilenav="closemobilenav" />
            </nav>
        </template>
        <hr>
        <main class="context z-0">
            <div class="side-nav">
                <DesignsSideBar />
            </div>
            <transition name="slide-nav">
                <div class="mobile-nav w-full h-full z-[90] block md:hidden fixed left-0 top-0" v-if="openmobilenav">
                    <DesignsMobileSideBar @close-m-side-nav="openMSideNav" />
                </div>
            </transition>
            <section>
                <div class="center w-full">
                    <slot></slot>
                </div>
                <hr>
                <div class="w-full h-[2rem] flex items-center justify-center">
                    <slot name="footer"></slot>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<style scoped>
section {
    transition: width 300ms ease;
}

/* Animate sliding side bar */
.slide-nav-enter-from , .slide-nav-leave-to {
    transform: translateX(-50%);
}
.slide-nav-enter-active , .slide-nav-leave-active {
    transition: transform 300ms ease;
}

.context {
    @apply md:h-[90vh] w-full px-1 md:px-4 pt-3 flex flex-row gap-3 md:gap-6;
}
.context .side-nav {
    @apply hidden md:block w-[18%] border-r-[0.5px] border-neutral-300;
}
.context section {
    @apply flex flex-col w-full md:pt-5 md:overflow-y-auto;
    transition: width 300ms ease;
}
section .searchbar {
    @apply w-full md:w-[96%] h-[3rem] flex items-center justify-center;
    transition: width 300ms ease;
}
</style>