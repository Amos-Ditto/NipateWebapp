<template>
    <ul class="w-full flex flex-col items-center gap-2 h-[7.5rem] sm:h-[11.5rem] p-2 overflow-y-auto">
        <li></li>
        <li></li>
        <li class="hidden sm:block"></li>
    </ul>
</template>

<style scoped>
ul li {
    @apply w-[80%] cursor-pointer pl-3 h-6 hover:bg-slate-200 rounded text-xs sm:text-sm font-semibold tracking-wider;
    animation: pulse 1000ms infinite linear;
}
@keyframes pulse {
    0% {
        @apply bg-slate-100;
    }
    50% {
        @apply bg-slate-200;
    }
    100% {
        @apply bg-slate-100;
    }
}

</style>