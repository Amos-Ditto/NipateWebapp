<template>
    <main class="w-full">
        <div class="loading-bar relative">
            <div class="pulse">

            </div>
        </div>
    </main>
</template>

<style scoped>

.loading-bar {
    @apply bg-green-400 h-[2px] flex items-center overflow-hidden;
    animation: scroll 1s linear;
}

.pulse {
    @apply absolute w-[20%] h-full bg-gradient-to-r from-green-400 to-green-600;
    animation: pulse 1000ms linear infinite;
}

@keyframes scroll {
    0% {
        @apply w-0;
    }
    100% {
        @apply w-full;
    }
}
@keyframes pulse {
    0% {
        @apply left-0;
    }
    25% {
        @apply left-[25%];
    }
    50% {
        @apply left-[50%];
    }
    100% {
        @apply left-[75%];
    }
}
</style>