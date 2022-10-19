<template>
    <div
        class="service-container py-0 w-full flex flex-col border border-slate-200 rounded relative"
    >

        <div class="w-full px-3 sm:px-4 py-5 flex flex-row items-center justify-between border-b border-gray-200">
            <button class="w-[40%] h-[2rem] bg-gray-200 relative animate-pulse"></button>
            <div class="edit-icons flex flex-row items-center gap-x-4 relative justify-end sm:justify-center">
                <button class="bg-gray-200 w-[5rem] h-[2rem] rounded px-4 py-1 text-sm animate-pulse"></button>
                <button class="bg-gray-200 w-[5rem] h-[2rem] rounded px-4 py-1 text-sm animate-pulse"></button>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-x-3">
            <div class="list-details flex flex-col">

                <div class="service w-full flex flex-col gap-y-4 gap-x-2 items-start px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light text-slate-400">Service:</small>
                    <button class="rounded-xl h-[1.6rem] w-[6rem] bg-gray-200 animate-pulse"></button>
                </div>
                <div class="loc w-full flex flex-col gap-y-4 gap-x-2 flex-wrap px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light text-slate-400">Located at:</small>
                    <p class="w-3/4 h-[1.8rem] bg-gray-200 animate-pulse"></p>
                </div>
                <div class="days-work w-full flex flex-col gap-y-4 items-start gap-x-2 flex-wrap px-3 sm:px-4 border-b border-gray-200 py-3 sm:py-4">
                    <small class="text-base font-light text-slate-400">Available Days:</small>
                    <div class="days flex flex-row gap-x-2 gap-y-1 items-center">
                        <button class="animate-pulse rounded-xl bg-gray-200 h-[1.8rem] w-[5.5rem]"></button>
                        <button class="animate-pulse rounded-xl bg-gray-200 h-[1.8rem] w-[5.5rem]"></button>
                        <button class="animate-pulse rounded-xl bg-gray-200 h-[1.8rem] w-[5.5rem]"></button>
                        <button class="animate-pulse rounded-xl bg-gray-200 h-[1.8rem] w-[5.5rem]"></button>
                        <button class="animate-pulse rounded-xl bg-gray-200 h-[1.8rem] w-[5.5rem]"></button>
                    </div>
                </div>
            </div>
            <div class="description-details flex flex-col gap-y-4 py-3 sm:py-4 px-3 sm:px-4">
                <p>
                    <small class="text-base font-light text-slate-400">Description:</small>
                    <p class="h-[6rem] w-full bg-gray-200 animate-pulse"></p>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.popup-enter-from , .popup-leave-to {
    @apply opacity-0 -translate-y-2;
}
.popup-enter-active , .popup-leave-active {
    transition: opacity 300ms ease , transform 300ms ease;
}

.suspense {
    animation: pulse 1s linear infinite;
}

@keyframes pulse {
    0% {
        @apply bg-gradient-to-tr from-gray-50 to-gray-300;
    }
    50% {
        @apply bg-gradient-to-tr from-gray-300 to-gray-50;
    }
    100% {
        @apply bg-gradient-to-tr from-gray-50 to-gray-300;
    }
}
</style>