<script setup lang="ts">

const submitDetails = (): void => {
    console.log("Details");
    
}
</script>
<template>
    <section class="w-full flex flex-col px-2 gap-y-10 sm:gap-y-12">
        <div class="nav-header flex flex-row justify-between w-full">
            <h3 class="text-2xl capitalize tracking-wide sm:text-2xl font-bold text-[#014451]">Create New Service</h3>
            <div class="nav-links flex flex-row gap-x-2 items-center">
                <button class="bg-slate-700 hover:bg-slate-800 transition-colors uppercase text-slate-100 text-sm font-light py-1.5 px-5 tracking-wider rounded-3xl">
                    back
                </button>
            </div>
        </div>
        <div class="service-details flex flex-col w-full border border-gray-300 rounded py-4 gap-y-8 sm:gap-y-12 px-5">
            <div class="service-details-header text-start w-full px-1 sm:px-2">
                <h3 class="text-lg sm:text-xl font-light">Service Details</h3>
            </div>
            <form @submit.prevent="submitDetails" class="px-1 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 xs:gap-y-6 sm:gap-y-8 gap-x-8">
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="service-name" class="text-sm capitalize font-bold tracking-wide">Service title:</label>
                    <div class="input w-full flex flex-col">
                        <input type="text" id="service-name" placeholder="title" class=" py-2.5 rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50">
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="service-select" class="text-sm font-bold tracking-wide">Select Service type:</label>
                    <div class="input w-full flex flex-col">
                        <button type="button" id="service-select" class=" relative h-[2.8rem] rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50 flex items-center">
                            <span>select category</span>
                            <div class="i-mdi-menu-down text-base absolute right-[5%]"></div>
                        </button>
                    </div>
                </div>
                <div class="description md:col-span-2 py-4 flex flex-col gap-y-2">
                    <label for="description" class="text-sm capitalize font-bold tracking-wide">Service description:</label>
                    <div class="input w-full flex flex-col">
                        <textarea name="description" id="description" cols="30" rows="4" placeholder="description" class="py-2.5 rounded outline-none px-3 tracking-wide text-slate-600 border border-gray-300 bg-gray-50"></textarea>
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <button class="bg-slate-600 hover:bg-slate-800 text-slate-100 transition-colors duration-300 w-full md:w-[50%] py-2 font-light uppercase tracking-wide text-lg rounded">Submit</button>
                </div>
            </form>
        </div>
        <div class="location-details pointer-events-none flex flex-col w-full border border-gray-300 rounded py-4 gap-y-10 px-5">
            <div class="service-details-header w-full items-center flex">
                <h3 class="text-lg sm:text-xl font-light">Your Location Center</h3>
            </div>
            <div class="choose-loc py-2 w-full flex flex-col gap-y-6 items-center justify-center">
                <div class="loc-logo flex items-center w-full justify-center">
                    <img src="../../assets/bgImg/undraw_my_location_re_r52x.svg" alt="img" class="w-[6rem] h-[4.5rem]">
                </div>
                <button class="flex fle-row items-center gap-x-3 border border-gray-300 rounded-md py-2 px-4">
                    <div class="i-mdi-map-marker text-xl"></div>
                    <span class="text-base font-light tracking-wide">Click to select your Location</span>
                </button>
            </div>
        </div>
    </section>
</template>