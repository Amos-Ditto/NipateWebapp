<template>
    <div class="service-card w-full min-h-[8rem] border-b border-gray-200 flex flex-col gap-y-4 px-2 sm:px-6 py-6">
        <div class="card-header">
            <button class="h-2 py-3 w-1/2 bg-gray-200 animate-pulse"></button>
        </div>
        <div class="card-description w-full">
            <p class="w-full bg-gray-200 animate-pulse block line-clamp-3 h-3 py-8"></p>
        </div>
        <div class="card-details flex flex-col gap-y-4">
            <div class="body-details flex flex-col sm:flex-row gap-x-4 gap-y-4 item-center">
                <div class="service-details w-1/4 flex flex-row items-center">
                    <button class="w-full py-3.5 bg-gray-200 rounded animate-pulse"></button>
                </div>
                <div class="loc-details py-3.5 px-24 bg-gray-200 animate-pulse w-1/2"></div>
            </div>
        </div>
        <div class="card-footer flex flex-row items-center justify-between sm:justify-start gap-x-6 pt-2.5">
            <button 
                class="px-4 py-1 border border-blue-300 text-blue-300 bg-gray-200 animate-pulse text-sm tracking-wide capitalize rounded-sm transition-colors"
            >send request</button>
        </div>
    </div>
</template>