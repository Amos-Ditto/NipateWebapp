<template>
    <nav class="w-full p-2">
        <ul class="w-full flex flex-col gap-3">
            <li><NuxtLink to="/" ><div class="i-mdi-magnify text-2xl" /> Search</NuxtLink></li>
            <li><NuxtLink to="/services" ><div class="i-mdi-format-list-bulleted text-2xl" /> Services</NuxtLink></li>
            <li><NuxtLink to="" ><div class="i-mdi-ad text-2xl" /> Advertise</NuxtLink></li>
            <li><NuxtLink to="" ><div class="i-mdi-account-box text-2xl" /> Your account</NuxtLink></li>
        </ul>
    </nav>

</template>

<style scoped>
ul li {
    @apply w-full h-[3rem] text-sm text-neutral-600 font-bold tracking-wider flex items-center rounded;
}
ul li a {
    @apply bg-inherit flex flex-row px-3 gap-2 w-full h-full items-center truncate relative;
    @apply border-b border-neutral-400 hover:border-orange-400 hover:text-orange-400 hover:px-4;
    transition: color 200ms ease, border 200ms ease, padding 200ms ease;
}
.router-link-exact-active {
    @apply border-orange-400 text-orange-400 px-4;
}
</style>