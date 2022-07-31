<template>
    <nav>
        <div class="top-side h-[4rem] w-full flex flex-row items-center justify-between">
            <div class="left flex flex-row gap-1 items-center">
                <div class="logo flex flex-row items-center">
                   <img src="@/assets/img/Logo/Vectorfull.svg" alt="logo">
                </div>
            </div>
            <div class="right">
               <div class="custom-btns">
                    <button>Login</button>
                    <button>Register</button>
               </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

nav {
    @apply py-2 px-8 w-full flex-col flex justify-between;
    @apply h-[9rem] w-full md:w-[90%];
}
.left img {
    @apply h-[2.4rem] w-[9rem];
}
.links .link {
    @apply font-light text-sm text-neutral-500 tracking-wide;
}
.right {
    @apply flex items-center flex-row gap-4;
}
.right .account button {
    @apply font-bold text-lg italic text-neutral-500;
}
.right .custom-btns {
    @apply flex flex-row gap-3;
}
.right .custom-btns button {
    @apply px-4 py-1 text-lg tracking-wide italic font-bold text-neutral-500 border border-orange-400 rounded-md;
    @apply hover:bg-orange-500;
    transition: background-color 300ms ease;
}

.links {
    @apply flex flex-row justify-between w-full items-center;
}
.links .left-links , .links .right-links {
    @apply flex flex-row gap-2;
}
.links .left-links button {
    @apply text-base font-light text-neutral-500 border-b-2 border-transparent;
    @apply hover:border-neutral-500;
    transition: border 300ms ease;
}
.links .right-links button {
    @apply text-lg font-bold text-neutral-500 border-b-2 border-transparent;
    @apply hover:border-neutral-500;
    transition: border 300ms ease;
}
</style>