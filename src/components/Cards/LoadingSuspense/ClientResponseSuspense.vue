<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="py-3 h-2 w-1/2 bg-gray-200 animate-pulse"></h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-4 px-1 sm:px-3">
            <div class="details h-2 py-2 w-full bg-gray-200 animate-pulse"></div>

            <div class="description w-full h-6 py-6 bg-gray-200 animate-pulse"></div>

        </div>
        <div class="card-footer w-full flex flex-col gap-y-2 py-3 px-1 sm:px-3 border-t border-gray-200">
            <div class="response-title">
                <h3 class="text-base font-semibold tracking-wide text-slate-300">Response</h3>
            </div>
            <div class="duration w-32 h-2 py-2 bg-gray-200 animate-pulse">
                <small class="text-sm tracking-wide text-slate-500"></small>
            </div>
            <div class="response-details w-full bg-gray-200 animate-pulse h-6 py-6"></div>
        </div>
    </div>
</template>