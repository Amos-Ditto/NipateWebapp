<template>
    <div
        class="w-full flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center pt-8 sm:pt-10 pb-3 border border-gray-300 rounded-md"
    >
        <img
            src="../../../assets/bgImg/undraw_no_data_re_kwbl.svg"
            alt="no data"
            class="w-[4rem] h-[3rem]"
        />
        <div class="body-text flex flex-col pt-3">
            <h3 class="text-base tracking-wide font-light">
                You have requested no services yet!
            </h3>
        </div>
        <div class="search-redirect">
            <button
                class="uppercase border border-slate-400 hover:bg-slate-700 transition-colors duration-300 text-slate-600 hover:text-slate-100 font-light px-4 py-2 rounded-sm text-xs"
            >
                search Services
            </button>
        </div>
    </div>
</template>
