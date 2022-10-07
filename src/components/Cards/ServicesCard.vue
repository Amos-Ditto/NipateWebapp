<template>
    <div class="ad-card min-h-[15rem] bg-gray-100 sm:rounded-md border border-gray-300 flex flex-col gap-y-1 relative">
        <div class="card-title py-2 sm:py-1.5 border-b border-gray-300 flex items-center px-2 w-full">
            <h3 class="text-lg text-[#014451]">Catering Services</h3>
        </div>
        <div class="card-body py-1 flex flex-col w-full">
            <div class="flex flex-col w-full border-b border-gray-200 py-1">
                <div class="user-name w-full flex flex-row items-center gap-x-2 px-2">
                    <div class="user-icon p-1 bg-gray-200 rounded">
                        <div class="i-mdi-account-outline text-lg text-slate-400"></div>
                    </div>
                    <p class="text-xs">Amos Kipyegon</p>
                </div>
                <div class="duration w-full flex flex-row items-center gap-x-2 px-2 pt-2 text-slate-400">
                    <div class="time-icon p-1">
                        <div class="i-mdi-clock-outline text-sm"></div>
                    </div>
                    <p class="text-xs italic">30 mins ago.</p>
                </div>
            </div>
            <div class="px-2 py-2">
                <p class="text-sm">Our catering services are great, you are going enjoy them Our catering services are ...</p>
            </div>
        </div>
        <div class="card-footer flex flex-col px-2.5 py-2 absolute bottom-0 w-full border-t border-gray-300">
            <button class="text-sm border border-dodgerblue py-1.5 sm:py-1 px-2 rounded-sm text-steelblue font-bold 
                hover:bg-steelblue transition-colors duration-300 hover:text-slate-100"
            >Respond</button>
        </div>
    </div>
</template>