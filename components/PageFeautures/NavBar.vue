<template>
    <nav class=" w-full flex items-center flex-row justify-between px-4 sm:px-8">
        <div class="logo flex h-full items-center">
            <img src="@/assets/img/Logo/Decoupled.svg" alt="nipate">
        </div>
        <div class="right-auth text-neutral-600 flex flex-row gap-3">
            <button><NuxtLink to="/auth" class="block w-full h-full">Login</NuxtLink></button>
            <button>Register</button>
        </div>
    </nav>
</template>

<style scoped>

.logo img {
    @apply w-[7.5rem] sm:w-[9rem] h-[3.4rem];
    transition: width 300ms;
}
.right-auth button {
    @apply px-4 py-1 text-base sm:text-lg font-bold;
    @apply first:border-2 border-neutral-400 rounded-md hover:border-neutral-600;
    @apply last:bg-orange-500 last:text-slate-100 hover:last:bg-orange-600;
    transition: border 300ms , background-color 300ms;
}
</style>