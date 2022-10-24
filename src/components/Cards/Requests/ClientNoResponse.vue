<template>
    <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
        <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
            <h3 class="text-lg font-semibold tracking-wide">Rafiki Cafe</h3>
        </div>
        <div class="card-body w-full flex flex-col gap-y-4">
            <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                <small class="text-slate-500 text-xs">Catering</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">Amos Kipyegon</small>
                <small>-</small>
                <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                <small class="text-xs text-slate-400 italic">30mins ago.</small>
            </div>
            <div class="description w-full px-1 sm:px-3">
                <p class="text-base line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    autem voluptatum eaque exercitationem accusamus delectus.</p>
            </div>
        </div>
        <div class="card-footer w-full px-1 sm:px-3">
            <div class="response w-full flex flex-row">
                <button
                    class="text-sm border border-gray-300 px-4 py-1 rounded text-slate-600"
                >No response yet</button>
            </div>
        </div>
    </div>
</template>