<script setup lang="ts">
const emit = defineEmits<{
    (event: "closeMSideNav")
}>();
const closeMSideNav = (): void => {
    emit("closeMSideNav");
};
</script>

<template>
    <main class="h-full w-full flex flex-row bg-transparent pt-2 gap-0">
        <div class="menu w-[56%] h-full bg-slate-100 flex flex-col gap-3 pt-8 px-3 mb-[3.2rem] overflow-y-auto">
            <ul class="w-full flex flex-col gap-1">
                <li><NuxtLink to="/" ><div class="i-mdi-magnify text-2xl" /> Search</NuxtLink></li>
                <li><NuxtLink to="" ><div class="i-mdi-format-list-bulleted text-2xl" /> Services</NuxtLink></li>
                <li><NuxtLink to="" ><div class="i-mdi-ad text-2xl" /> Advertise</NuxtLink></li>
                <li><NuxtLink to="" ><div class="i-mdi-account-box text-2xl" /> Your account</NuxtLink></li>
            </ul>
            <div class="authbtns w-full flex flex-col gap-2 pt-8">
                <button><NuxtLink to="/auth" class="underline">Log in</NuxtLink></button>
                <button><NuxtLink to="/auth/register">Join</NuxtLink></button>
            </div>
        </div>
        <div class="empty-sec w-[44%] h-full" @click="closeMSideNav">

        </div>
    </main>
</template>

<style scoped>
/* ul li a {
    @apply flex flex-row gap-3;
} */
ul li {
    @apply w-full h-[3rem] text-sm text-neutral-600 font-bold tracking-wider flex items-center rounded;
}
ul li a {
    @apply bg-inherit flex flex-row px-3 gap-2 w-full h-full items-center truncate relative;
    @apply border-b border-neutral-400 hover:border-orange-400 hover:text-orange-400 hover:px-4;
    transition: color 200ms ease, border 200ms ease, padding 200ms ease;
}
ul li a::before {
    content: '';
    height: 100%;
    width: 4px;
    transition: visibility 200ms ease;
    @apply bg-orange-500 invisible absolute left-0 top-0;
}
.authbtns button {
    @apply text-sm font-semibold py-2 block tracking-wider;
    @apply hover:text-orange-500 rounded;
}
.authbtns button:nth-child(2) {
    @apply border-blue-800 border;
}
.authbtns button a {
    @apply w-full h-full;
}
</style>