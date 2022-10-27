<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="text-lg font-semibold tracking-wide w-1/2 h-2 py-4 bg-gray-200 animate-pulse"></h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-6 px-1 sm:px-3">

            <div class="details h-2 py-3 w-3/4 px-1 sm:px-3 bg-gray-200 animate-pulse"></div>

            <div class="description w-full px-1 sm:px-3 h-4 py-8 bg-gray-200 animate-pulse"></div>

        </div>
        <div class="card-footer w-full px-1 sm:px-3">
            <div class="response w-full flex flex-row">
                <button class="text-sm tracking-wide border border-gray-200 px-4 py-1 rounded text-slate-300">Accept</button>
            </div>
        </div>

    </div>
</template>