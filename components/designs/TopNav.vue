<template>
    <nav class="w-full pt-3 md:pt-8 flex justify-center items-center gap-[8%]">
        <div class="left w-[20%] lg:w-[25%]">
            <img src="@/assets/img/logo-removebg.png" alt="logo" class="w-[9rem] h-[100%] md:h-[3rem] mb-1">
        </div>
        <div class="right w-[70%] lg:w-[50%] md:pl-6 lg:pl-12 flex justify-evenly md:justify-around">
            <div class="links font-serif flex flex-row gap-2 lg:gap-4 pt-2">
                <NuxtLink to="/" class="link">
                    <span>Home</span>
                </NuxtLink>
                <div class="link">
                    <a href="#">About Us</a>
                </div>
                <div class="link">
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div class="auth-btn text-sm font-serif hidden sm:flex flex-row md:gap-2 lg:gap-3">
                <button><NuxtLink to="/auth">Log In</NuxtLink></button>
                <button class="border border-blue-500"><NuxtLink to="/auth/register">Join</NuxtLink></button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.left , .right {
    transition: width 300ms ease;
}
.links .link {
    @apply border-b-2 px-3 py-1 border-transparent hover:border-neutral-800;
    transition: border 300ms ease;
}
.links .link:hover a {
    @apply text-orange-500;
    transition: color 300ms ease;
}

.link.router-link-active {
    @apply border-neutral-800 text-orange-500;
}
.auth-btn button {
    @apply px-3 rounded-md font-semibold hover:text-orange-500 hover:border-orange-500;
    transition: color 300ms ease, border 300ms ease;
}
/* .auth-btn button a {
    @apply ;
} */
</style>