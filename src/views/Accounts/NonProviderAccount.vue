<script setup lang="ts">
import UserAccountDetails from '../../components/Heroes/UserAccountDetails.vue';


</script>
<template>
    <section class="flex flex-col w-full gap-y-4 sm:gap-y-8">

        <div class="top-section w-full flex flex-row justify-between gap-y-6">

            <div class="user-container w-full px-3 pb-12 flex flex-col">
                <UserAccountDetails />
            </div>
        </div>
        <div class="body-section w-full flex flex-col gap-y-12 px-1 sm:px-4">

            <div class="other-section flex flex-col gap-y-12 w-full">
                <div class="requests-dummy w-full flex flex-col gap-y-3">
                    <div class="request-title flex flex-row items-center">
                        <h3 class="font-bold text-lg">Requested Services</h3>
                    </div>
                    <div class="request-body w-full flex flex-col gap-y-6 sm:gap-y-8 justify-center items-center py-4 sm:py-10 border border-gray-300 rounded-md">
                        <img src="../../assets/bgImg/undraw_no_data_re_kwbl.svg" alt="no data" class="w-[4rem] h-[3rem]">
                        <div class="body-text flex flex-col">
                            <h3 class="text-sm font-light">You have requested no services yet!</h3>
                        </div>
                        <div class="search-redirect">
                            <button class="uppercase border border-slate-400 hover:bg-slate-700 transition-colors duration-300 text-slate-600 hover:text-slate-100 font-light px-4 py-2 rounded-sm text-xs">search Services</button>
                        </div>
                    </div>
                </div>
                <div class="ad-dummy w-full flex flex-col gap-y-3">
                    <div class="ad-title flex flex-row items-center">
                        <h3 class="font-bold text-lg">My Advertisements</h3>
                    </div>
                    <div class="ad-body w-full flex flex-col gap-y-6 sm:gap-y-8 justify-center items-center py-4 sm:py-10 border border-gray-300 rounded-md">
                        <img src="../../assets/bgImg/undraw_add_notes_re_ln36.svg" alt="no data" class="w-[4rem] h-[3rem]">
                        <div class="body-text flex flex-col">
                            <h3 class="text-sm font-light">You have placed no adverts yet!</h3>
                        </div>
                        <div class="ad-redirect">
                            <button class="uppercase border border-slate-400 hover:bg-slate-700 transition-colors duration-300 text-slate-600 hover:text-slate-100 font-light px-4 py-2 rounded-sm text-xs">Place advert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>