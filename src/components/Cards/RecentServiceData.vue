<template>
    <div class="main w-full h-[180px] sm:h-[200px] py-1 bg-gray-100 rounded-sm border border-gray-300 shadow-sm transition-all duration-300 flex flex-col relative gap-y-4 cursor-pointer hover:bg-zinc-200 sm:hover:bg-gray-50">
        <div class="card-top w-full border-b border-gray-200 px-3 py-2 transition-colors duration-300">
            <h3 class="text-lg font-bold tracking-wider text-[#346974]">Catering Services</h3>
        </div>
        <div class="card-body w-full px-3">
            <p class="text-slate-700 tracking-wide text-sm">Our catering services are great, you are going enjoy them Our catering services are ...</p>
        </div>
        <div class="card-footer w-full flex flex-row items-center justify-between px-3 py-3 absolute bottom-0">
            <div class="user-name flex items-center gap-2 flex-row">
                <div class="avatar px-1.5 py-1.5 bg-gray-200 rounded-md transition-colors duration-300">
                    <div class="i-mdi-account-outline text-slate-600 text-xl"></div>
                </div>
                <span class="text-slate-500 text-xs sm:text-sm font-serif">Rafiki Cafe</span>
            </div>
            <div class="location-pin flex items-center gap-2 flex-row">
                <div class="location-icon px-1 py-1 bg-gray-200 rounded transition-colors duration-300">
                    <div class="i-mdi-map-marker-outline"></div>
                </div>
                <span class="text-slate-500 text-xs sm:text-sm font-serif">Rafiki, Nakuru</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main:hover .card-top {
        @apply border-gray-300 sm:border-gray-200;
    }
    .main:hover .avatar,
    .main:hover .location-icon {
        @apply bg-gray-300 sm:bg-gray-200;
    }
    h3 {
        color: #014451;
    }
</style>