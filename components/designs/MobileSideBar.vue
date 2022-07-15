<script setup lang="ts">
const emit = defineEmits<{
    (event: "closeMSideNav")
}>();
const closeMSideNav = (): void => {
    emit("closeMSideNav");
};
</script>

<template>
    <main class="h-full w-full flex flex-row bg-transparent gap-0 pb-[20px]">
        <div class="menu w-[46%] sm:w-[38%] h-full bg-slate-100 flex flex-col gap-3 pt-16 px-3 mb-[3.2rem] overflow-y-auto overflow-x-hidden relative">
            <ul class="w-full flex flex-col gap-1">
                <li><NuxtLink to="/" ><div class="i-mdi-magnify text-2xl" /> Search</NuxtLink></li>
                <li><NuxtLink to="/services" ><div class="i-mdi-format-list-bulleted text-2xl" /> Services</NuxtLink></li>
                <li><NuxtLink to="" ><div class="i-mdi-ad text-2xl" /> Advertise</NuxtLink></li>
                <li><NuxtLink to="" ><div class="i-mdi-account-box text-2xl" /> Your account</NuxtLink></li>
                <li><NuxtLink to="/auth" ><div class="i-mdi-login text-2xl" /> Login</NuxtLink></li>
                <li><NuxtLink to="/auth/register" ><div class="i-mdi-paper text-2xl" /> Join</NuxtLink></li>
            </ul>
        </div>
        <div class="empty-sec w-[44%] sm:w-[68%] h-full" @click="closeMSideNav"></div>
    </main>
</template>

<style scoped>
ul li {
    @apply w-full h-[3rem] text-sm text-neutral-600 font-bold tracking-wider flex items-center rounded cursor-pointer;
}
ul li a {
    @apply bg-inherit flex flex-row px-3 gap-2 w-full h-full items-center truncate relative;
    @apply border-b border-neutral-400 hover:border-orange-400 hover:text-orange-400 hover:px-4;
    transition: color 200ms ease, border 200ms ease, padding 200ms ease;
}
.router-link-exact-active {
    @apply text-orange-500 border-orange-500;
}
</style>