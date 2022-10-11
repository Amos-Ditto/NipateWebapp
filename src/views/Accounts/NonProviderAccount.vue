<template>
    <section class="flex flex-col w-full gap-y-4 sm:gap-y-8">

        <div class="top-section w-full flex flex-row justify-between gap-y-6">

            <div class="user-container w-full px-3 pb-12 flex flex-col">
                <div class="user-details flex flex-row gap-x-3 ">
                    <div
                        class="user-icon p-2.5 sm:p-2 rounded-xl border border-gray-300 flex items-center justify-center">
                        <div class="i-mdi-account-outline text-3xl xs:text-4xl sm:text-5xl text-slate-400"></div>
                    </div>
                    <div class="user-details-list flex flex-col gap-y-1.5 sm:gap-y-3">
                        <small class="text-base xs:text-lg sm:text-xl font-light">Amos Kipyegon</small>
                        <div class="location flex flex-row items-center gap-x-0.5 xs:gap-x-1 sm:gap-x-2">
                            <div class="i-mdi-map-marker-outline text-slate-500 text-sm sm:text-base"></div>
                            <small class="text-slate-500 text-xs">Nakuru, Kenya</small>
                        </div>
                    </div>
                    <div
                        class="edit p-1 w-6 h-6 hidden xs:flex items-center justify-center cursor-pointer hover:border border-gray-300 rounded-lg">
                        <div class="i-mdi-pencil-outline text-slate-400 text-sm"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="other-links flex flex-row items-start">
                <button
                    class="py-1.5 px-3 rounded-3xl truncate bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100 text-sm flex flex-row items-center gap-x-1">
                    Register to offer Services
                </button>
            </div> -->
        </div>
        <div class="body-section w-full flex flex-col gap-y-12">
            <div class="register-provider flex flex-col gap-y-8 px-4">
                <div class="form-title">
                    <h3 class="text-lg font-light tracking-wide">Register to provide Services.</h3>
                </div>
                <div class="input-field flex flex-col gap-y-2">
                    <label for="select-loc" class="text-xs font-bold">Current county:</label>
                    <div class="input flex items-start flex-col">
                        <button type="button" id="select-loc" class="flex flex-row items-center justify-between gap-x-8 min-w-[50%] sm:min-w-[30%] px-4 py-1 rounded border border-gray-300">
                            <small class="font-sans text-sm tracking-wide">select</small>
                            <div class="i-mdi-chevron-down"></div>
                        </button>
                    </div>
                </div>
                <div class="accept-terms flex flex-row gap-x-2">
                    <input type="checkbox" name="terms" id="terms" class="w-4 h-4">
                    <label class="text-xs" for="terms">By registering, you agree to the Terms of Service and Privacy Policy.</label>
                </div>
                <div class="submit-provider">
                    <button type="button" class="bg-slate-600 hover:bg-slate-700 capitalize transition-colors duration-300 rounded-sm px-10 sm:px-8 py-1.5 text-slate-100 text-sm">Submit</button>
                </div>
            </div>
            <div class="other-section flex flex-col gap-y-12 w-full px-1 sm:px-4">
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