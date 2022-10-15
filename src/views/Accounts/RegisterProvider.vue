<template>
    <section class="w-full flex flex-col items-center justify-center px-1 xs:px-[14px] lg:px-[78px] py-12 gap-y-16">
        <div class="title w-full md:w-[650px] flex items-center justify-start px-4 sm:px-20">
            <h3 class="text-3xl font-light tracking-wide">Register as Provider</h3>
        </div>
        <div class="form md:w-[650px] flex flex-col pb-6 px-4 sm:px-8 gap-y-10">
            <div class="input-field w-full flex flex-col gap-y-3">
                <label for="region" class="text-sm tracking-wide">Where will you be offering services from?</label>
                <div class="input flex flex-col w-full">
                    <button id="region"
                        class="py-2 w-full sm:w-3/4 flex flex-row items-center justify-between font-light px-4 border border-gray-300 focus:border-slate-400 rounded capitalize text-base tracking-wide"
                    >
                        select region
                        <div class="i-mdi-chevron-down"></div>
                    </button>
                </div>
            </div>
            <div class="accept-terms flex flex-row items-center gap-x-2 w-full sm:w-3/4 pt-8">
                <p class="text-sm font-light text-slate-600">
                    By registering, you agree to the Nipate's <span class="text-base font-bold">Terms of Conditions</span> and <span class="text-base font-bold">Privacy Policy</span>
                </p>
            </div>
            <div class="submit-btn w-full flex flex-col">
                <button
                    class="bg-slate-700 hover:bg-slate-800 w-full sm:w-3/4 rounded shadow text-slate-100 text-lg uppercase tracking-wide py-2 sm:py-3 px-4 transition-colors duration-300"
                >Create Account</button>
            </div>
        </div>
    </section>
</template>