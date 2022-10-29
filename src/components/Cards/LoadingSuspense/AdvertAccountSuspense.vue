<template>
    <div
        class="advert bg-gray-50 rounded-md border border-gray-300 px-3 lg:px-8 py-3 flex flex-col gap-y-6"
    >
        <div class="advert-top flex flex-row justify-between">
            <h3 class="h-2 py-4 w-1/2 bg-gray-200 animate-pulse"></h3>
            <div
                class="right-top flex flex-row items-center gap-x-4 relative justify-end sm:justify-center"
            >
                <button
                    class="border border-gray-100 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm text-slate-300"
                >
                    Edit
                </button>
                <button
                    class="border border-gray-100 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-xs xs:text-sm text-slate-300"
                >
                    Delete
                </button>
            </div>
        </div>
        <div class="advert-body w-full flex flex-col gap-y-5">
            <div class="ad-details flex flex-col gap-y-2">
                <div
                    class="ad-location flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                >
                    <div class="i-mdi-map-marker-outline text-slate-300"></div>
                    <small>-</small>
                    <small
                        class="bg-gray-200 animate-pulse w-[10rem] h-2 py-2"
                    ></small>
                </div>
                <div
                    class="ad-time flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                >
                    <div
                        class="i-mdi-clock-outline text-sm text-slate-300"
                    ></div>
                    <small>-</small>
                    <small
                        class="bg-gray-200 animate-pulse w-[8rem] py-2 h-2"
                    ></small>
                    <small>-</small>
                    <small
                        class="bg-gray-200 animate-pulse w-[8rem] py-2 h-2"
                    ></small>
                </div>
            </div>
            <div class="description">
                <p class="bg-gray-200 animate-pulse w-full py-10 h-6"></p>
            </div>
        </div>
    </div>
</template>
