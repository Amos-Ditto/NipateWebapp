<script setup lang="ts">
// Props
defineProps<{
    closemobilenav: boolean;
}>();
// Emits
const emit = defineEmits<{
    (event: "openMSideNav")
}>();

// Methods
const openMSideNav = (): void => {
    emit("openMSideNav");
};
</script>
<template>
    <nav>
        <div class="left">
            <img src="@/assets/img/logo-removebg.png" alt="logo">
            <div class="links">
                <!-- <NuxtLink to="/" class="link">
                    <span>Home</span>
                </NuxtLink> -->
                <div class="link">
                    <a href="#">About Us</a>
                </div>
                <div class="link">
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="menu-btn h-full flex items-center md:hidden">
                <UtilsHumberBtn @open-m-side-nav="openMSideNav" :closemobilenav="closemobilenav" />
            </div>
            <div class="auth-btn">
                <button><NuxtLink to="/auth">Log In</NuxtLink></button>
                <button class="border border-blue-500"><NuxtLink to="/auth/register">Join</NuxtLink></button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    @apply w-full h-[3.5rem] md:h-[4rem] md:pt-5 flex justify-between items-center;
}
.left {
    @apply grid grid-cols-2 pt-2 md:pt-0 px-4 md:px-11 gap-6 h-full;
}
.left img {
    @apply w-[10rem] md:w-[10rem] h-[86%] md:h-[3.2rem] mb-2;
    transition: height 300ms ease, width 300ms ease;
}
.left .links {
    @apply hidden font-serif md:flex flex-row gap-2 lg:gap-4 pt-1;
}
.left , .right {
    transition: width 300ms ease;
    @apply h-full items-center flex;
}
.right {
    @apply flex items-center gap-3 h-full pr-10;
}
.links .link {
    @apply border-b-2 px-3 pt-3 border-transparent hover:border-neutral-800;
    transition: border 300ms ease;
}
.links .link:hover a {
    @apply text-orange-500;
    transition: color 300ms ease;
}

.link.router-link-active {
    @apply border-neutral-800 text-orange-500;
}
.auth-btn {
    @apply h-full items-center text-sm font-serif hidden md:flex md:flex-row md:gap-2 lg:gap-3;
}
.auth-btn button {
    @apply px-4 py-1 flex items-center rounded font-sans text-base hover:text-orange-500 hover:border-orange-500;
    transition: color 300ms ease, border 300ms ease;
}
</style>