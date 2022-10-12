<template>
    <div class="ad-card min-h-[15rem] w-full flex flex-col gap-y-1 border border-gray-300 sm:rounded-md bg-gray-50 relative">
        <div class="card-title w-full border-b border-gray-300 py-2.5 px-2 flex items-center">
            <h3 class="text-lg">Catering Services</h3>
        </div>
        <div class="card-body w-full flex flex-col pt-2">
            <div class="card-body-text w-full flex items-center px-2 text-sm">
                <p>Our catering services are great, you are going enjoy them Our catering services are ...</p>
            </div>
        </div>
        <div class="card-footer w-full grid grid-cols-1 md:grid-cols-2 justify-between gap-y-3 absolute bottom-0 py-2.5 px-2">
            <div class="ad-user-name flex flex-row gap-x-2 items-center">
                <div class="user-icon p-1.5 rounded-md bg-gray-200">
                    <div class="i-mdi-account-outline text-xl text-slate-500"></div>
                </div>
                <small class="text-sm italic truncate">Rafiki Cafe</small>
            </div>
            <div class="ad-area w-full flex flex-row gap-x-0 items-center">
                <div class="area-icon p-1.5 rounded-md">
                    <div class="i-mdi-map-marker text-slate-400"></div>
                </div>
                <small class="text-sm italic truncate">Nakuru, Rafiki</small>
            </div>
        </div>
    </div>
</template>