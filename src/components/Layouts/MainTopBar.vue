<template>
    <header class="w-full h-full flex flex-col bg-gray-50">
        <div class="top-nav">
            <div class="top-left-nav">
                <img src="../../assets/Logo/Vector.svg" alt="logo">
                <img src="../../assets/Logo/Nipate.svg" alt="logo">
            </div>
            <div class="top-right-nav">
                <!-- <small>New to this site?</small> -->
                <button class="bg-orange-400 text-slate-100 font-serif hover:bg-orange-500">Register</button>
                <small>or</small>
                <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">Login</button>
            </div>
        </div>
        <div class="bottom-nav">
            <div class="bottom-left-nav py-1 pl-[20px] flex items-center flex-row">
                <button class="px-1 py-0.5 border border-gray-300 rounded hover:bg-gray-200"><div class="i-mdi-menu text-slate-600 text-2xl"></div></button>
            </div>
            <div class="bottom-left-nav flex items-center flex-row">
                <ul class="flex flex-row items-center gap-4">
                    <li>Services</li>
                    <li>Requests</li>
                    <li><div class="user-avatar px-1 py-1 rounded-full bg-gray-200">
                        <div class="i-mdi-account text-2xl text-slate-400"></div>
                    </div>Account</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>

.top-nav {
    @apply py-0.5 flex flex-row justify-between w-full border-b border-gray-200 px-[4px] lg:px-[78px];
    transition: padding 300ms ease;
}
.top-nav .top-left-nav {
    @apply flex items-center flex-row py-0.5;
}
.top-nav .top-left-nav img {
    @apply max-w-[5.8rem] min-w-[3.5rem] h-[2.5rem] last:mt-1;
}

.top-nav .top-right-nav {
    @apply py-0.5 flex flex-row items-center gap-3;
    transition: padding 300ms ease;
}
.top-nav .top-right-nav small {
    @apply text-slate-400 text-xs tracking-wide;
}
.top-nav .top-right-nav button {
    @apply py-1 px-3 border rounded text-base;
    transition: background-color 300ms ease, border 300ms ease;
}

.bottom-nav {
    @apply py-3 flex flex-row items-center justify-between shadow-sm px-[16px] lg:px-[78px];
    transition: padding 300ms ease;
}
.bottom-nav button {
    transition: background-color 300ms ease;
}
.bottom-left-nav li {
    @apply px-1 text-base text-slate-500 font-bold hover:text-steelblue cursor-pointer;
    @apply flex items-center flex-row gap-1 underline last:no-underline;
}
</style>