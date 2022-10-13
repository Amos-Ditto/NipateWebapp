<template>
    <div class="services w-full flex flex-col gap-y-1 py-1 max-h-[12rem] overflow-y-auto">
        <div class="nav flex flex-row justify-between items-center px-2 py-1 border-b border-gray-200 bg-gray-50 sticky top-0">
            <div class="back p-2 hover:bg-gray-200 transition-colors duration-200 rounded-full cursor-pointer">
                <div class="i-mdi-arrow-left scale-110"></div>
            </div>
        </div>
        <ul class="flex flex-col w-full">
            <li>Boda boda</li>
            <li>Movers</li>
            <li>Taxi</li>
            <li>Car hire</li>
            <li>Boda boda</li>
            <li>Movers</li>
            <li>Taxi</li>
            <li>Car hire</li>
        </ul>
    </div>
</template>

<style scoped>

li {
    @apply w-full py-1.5 px-3 hover:bg-gray-200 transition-colors duration-200 text-sm tracking-wide cursor-pointer;
}
</style>