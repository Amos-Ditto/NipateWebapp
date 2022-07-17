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
        </div>
        <div class="right">
            <div class="menu-btn h-full flex items-center md:hidden">
                <UtilsHumberBtn @open-m-side-nav="openMSideNav" :closemobilenav="closemobilenav" />
            </div>
            <div class="links flex-row pt-2 gap-14 font-[500] tracking-wide hidden md:flex text-neutral-600">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <NuxtLink to="/auth">Login</NuxtLink>
                <NuxtLink to="/auth/register">Join</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    @apply w-[90%] md:w-[80%] flex flex-row py-1.5 sm:py-2 items-center justify-between sm:pr-8 md:pr-0;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
    transition: width 300ms ease;
}
.left img {
    @apply w-[150px] sm:w-[160px] h-[45px] sm:h-[48px];
    transition: width 300ms ease , height 300ms ease;
}
.right {
    @apply pt-2.5 sm:pt-0 flex flex-row gap-4 px-4;
}
.links a {
    font-family: "DM Sans", Sans-serif;
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
    transition: color 300ms ease;
    @apply hover:text-green-500 tracking-widest;
}
</style>