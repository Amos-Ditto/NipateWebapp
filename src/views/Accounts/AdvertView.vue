<template>
    <section class="w-full flex flex-col gap-y-10 sm:gap-y-14">
        <div class="top-nav flex flex-row justify-between px-1">
            <div class="left-nav">
                <h3 class="text-2xl font-light">Adverts</h3>
            </div>
            <div class="right-nav pr-1">
                <button class="px-4 py-1.5 rounded-2xl bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1">
                    <div class="i-mdi-plus text-slate-100 text-base"></div>
                    New Advert
                </button>
            </div>
        </div>
        <div class="body-section flex flex-col gap-y-2 sm:px-8">
            <div class="advert rounded-md border border-gray-300 px-3 lg:px-8 py-3 flex flex-col gap-y-6">
                <div class="advert-top flex flex-row justify-between">
                    <h3 class="text-lg font-bold">Rafiki Cafe</h3>
                    <div class="right-top flex items-center flex-row gap-x-2">
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300">Edit</button>
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-tomato hover:border-tomato transition-colors duration-300">delete</button>
                    </div>
                </div>
                <div class="advert-body w-full flex flex-col gap-y-5">
                    <div class="ad-details flex flex-col gap-y-2">
                        <div class="ad-location flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <!-- <small class="text-slate-500 text-xs">Catering</small>
                            <small>-</small> -->
                            <div class="i-mdi-map-marker-outline text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                        </div>
                        <div class="ad-time flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <div class="i-mdi-clock-outline text-sm text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">From: Today</small>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">To: 07/10/2022</small>
                        </div>
                    </div>
                    <div class="description">
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quaerat natus, at dicta aperiam nemo libero esse quibusdam, ratione, sunt dolore perspiciatis sed assumenda deserunt quisquam </p>
                    </div>
                </div>
            </div>
            <div class="advert rounded-md border border-gray-300 px-3 lg:px-8 py-3 flex flex-col gap-y-6">
                <div class="advert-top flex flex-row justify-between">
                    <h3 class="text-lg font-bold">Rafiki Cafe</h3>
                    <div class="right-top flex items-center flex-row gap-x-2">
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300">Edit</button>
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-tomato hover:border-tomato transition-colors duration-300">delete</button>
                    </div>
                </div>
                <div class="advert-body w-full flex flex-col gap-y-5">
                    <div class="ad-details flex flex-col gap-y-2">
                        <div class="ad-location flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <!-- <small class="text-slate-500 text-xs">Catering</small>
                            <small>-</small> -->
                            <div class="i-mdi-map-marker-outline text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                        </div>
                        <div class="ad-time flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <div class="i-mdi-clock-outline text-sm text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">From: Today</small>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">To: 07/10/2022</small>
                        </div>
                    </div>
                    <div class="description">
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quaerat natus, at dicta aperiam nemo libero esse quibusdam, ratione, sunt dolore perspiciatis sed assumenda deserunt quisquam </p>
                    </div>
                </div>
            </div>
            <div class="advert rounded-md border border-gray-300 px-3 lg:px-8 py-3 flex flex-col gap-y-6">
                <div class="advert-top flex flex-row justify-between">
                    <h3 class="text-lg font-bold">Rafiki Cafe</h3>
                    <div class="right-top flex items-center flex-row gap-x-2">
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-dodgerblue hover:border-dodgerblue transition-colors duration-300">Edit</button>
                        <button class="border border-gray-200 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm hover:text-tomato hover:border-tomato transition-colors duration-300">delete</button>
                    </div>
                </div>
                <div class="advert-body w-full flex flex-col gap-y-5">
                    <div class="ad-details flex flex-col gap-y-2">
                        <div class="ad-location flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <!-- <small class="text-slate-500 text-xs">Catering</small>
                            <small>-</small> -->
                            <div class="i-mdi-map-marker-outline text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                        </div>
                        <div class="ad-time flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2">
                            <div class="i-mdi-clock-outline text-sm text-slate-500"></div>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">From: Today</small>
                            <small>-</small>
                            <small class="text-slate-500 text-xs">To: 07/10/2022</small>
                        </div>
                    </div>
                    <div class="description">
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quaerat natus, at dicta aperiam nemo libero esse quibusdam, ratione, sunt dolore perspiciatis sed assumenda deserunt quisquam </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>