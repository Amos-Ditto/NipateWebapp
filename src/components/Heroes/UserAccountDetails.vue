<template>
    <div class="user-details flex flex-row gap-x-3 ">
        <div class="user-icon p-2.5 sm:p-2 rounded-xl border border-gray-300 flex items-center justify-center">
            <div class="i-mdi-account-outline text-3xl xs:text-4xl sm:text-5xl text-slate-400"></div>
        </div>
        <div class="user-details-list flex flex-col gap-y-1.5 sm:gap-y-3">
            <small class="text-base xs:text-lg sm:text-xl font-light">Amos Kipyegon</small>
            <div class="location flex flex-row items-center gap-x-0.5 xs:gap-x-1 sm:gap-x-2">
                <div class="i-mdi-map-marker-outline text-slate-500 text-sm sm:text-base"></div>
                <small class="text-slate-500 text-xs">Nakuru, Kenya</small>
            </div>
        </div>
        <div
            class="edit p-1 w-6 h-6 hidden xs:flex items-center justify-center cursor-pointer hover:border border-gray-300 rounded-lg">
            <div class="i-mdi-pencil-outline text-slate-400 text-sm"></div>
        </div>
    </div>
</template>