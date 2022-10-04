<template>
    <div
        class="service-container py-3.5 w-full flex flex-col gap-y-11 border border-slate-300 rounded-md sm:rounded-xl">
        <div class="w-full px-4 flex flex-row items-center justify-between">
            <h3 class="text-bs font-bold italic tracking-wide">Rafiki Cafe</h3>
            <div class="edit-icons flex flex-row items-center gap-x-4">
                <button
                    class="rounded-full py-0.5 px-1.5 border-2 border-slate-300 hover:border-slate-400 transition-colors text-slate-400">
                    <div class="i-mdi-pencil-outline text-xl"></div>
                </button>
                <button
                    class="rounded-full py-0.5 px-1.5 border-2 border-slate-300 hover:border-slate-400 transition-colors text-slate-400">
                    <div class="i-mdi-delete-outline text-xl"></div>
                </button>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-3 py-1.5 border-t border-gray-300">
            <div
                class="list-details px-4 flex flex-col gap-y-3 py-1 border-b sm:border-b-0 sm:border-r border-gray-300">

                <div class="service w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold text-slate-600">Service:</small>
                    <p class="text-xs truncate">Boda Boda</p>
                </div>
                <div class="loc w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold text-slate-600">Located at:</small>
                    <p class="text-xs truncate">Shoppers Paradise Plaza, Kenyatta Avenue, Nakuru CBD, Biashara, Nakuru,
                        Kenya</p>
                </div>
                <div class="days-work w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold text-slate-600">Available Days:</small>
                    <p class="text-xs truncate">Mon , Tue , Wed , Thur , Fri</p>
                </div>

                <div class="days-work w-full flex flex-row items-center gap-x-1 flex-wrap">
                    <small class="text-sm font-bold">Age Range:</small>
                    <p class="text-xs truncate">All</p>
                </div>
            </div>
            <div class="description-details flex flex-col py-1 px-4 sm:px-2">
                <p>
                    <small class="text-sm font-semibold">Description:</small>
                    <p class="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem
                    voluptatibus laudantium expedita illum blanditiis minima id porro.</p>
                </p>
            </div>
        </div>
    </div>
</template>