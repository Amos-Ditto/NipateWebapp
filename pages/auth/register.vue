<template>
    <NuxtLayout name="default" class="flex justify-center p-2 overflow-y-auto">
        <div class="reg-container flex flex-col w-full sm:w-[580px] md:w-[750px] min-h-[10rem] p-4 sm:shadow rounded my-4">
            <div class="title w-full h-[3rem] mt-3 flex flex-col items-start justify-start ml-6 sm:ml-9 md:ml-10 gap-1">
                <h3 class=" text-neutral-700 text-xl sm:text-2xl md:text-3xl font-semibold sm:font-bold">
                    Hi, Welcome to <span class="text-red-500 italic">Ni</span>pate
                </h3>
                <h4 class=" text-neutral-600 text-sm md:text-base ml-3 underline underline-offset-1">
                    Create an account to access our services
                </h4>
            </div>
            <div class="form-fields w-full flex flex-col justify-start items-start gap-4 mt-12 text-neutral-600">
                <div class="form-field w-full py-2 flex flex-col gap-2">
                    <label for="MobileNumber" class="italic ml-2 font-semibold tracking-wide">Mobile Number:</label>
                    <div class="input w-full relative">
                        <input type="text" class="w-[80%] md:w-[60%] h-[2.6rem] border border-neutral-400 outline-none rounded pl-9 pr-2">
                        <div class="i-mdi-phone absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                    </div>
                </div>
                <div class="names-field w-full py-2 flex flex-col md:grid md:grid-cols-2">
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="fname" class="italic ml-2 font-semibold tracking-wide">First name:</label>
                        <div class="input w-full relative">
                            <input type="text" id="fname" class="outline-none h-[2.6rem] w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9  pr-1">
                            <div class="i-mdi-user absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="lname" class="italic ml-2 font-semibold tracking-wide">Last name:</label>
                        <div class="input w-full relative">
                            <input type="text" id="lname" class="outline-none h-[2.6rem] w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9 pr-1">
                            <div class="i-mdi-user absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                </div>
                <div class="select-location w-full justify-center py-2 px-2 relative">
                    <div
                        class="select-btn px-1 md:px-3 py-3 md:py-4 max-w-[11rem] md:max-w-[12.5rem] min-h-[2rem]
                        flex flex-row items-center gap-4 text-xs md:text-sm font-bold border border-neutral-400 rounded cursor-pointer
                        hover:gap-5 hover:border-neutral-600 hover:text-neutral-800"
                    >
                        <p class="truncate">Choose your location</p>
                        <div class="i-mdi-chevron-right text-sm rotate-90 sm:rotate-0" />
                    </div>
                    <LazyUtilsSelectLocation class=" w-[60%] sm:w-[50%] shadow rounded h-[12rem] sm:h-[16rem]
                        absolute bottom-1 sm:top-0 left-0 translate-x-1 sm:translate-x-48 md:translate-x-56 translate-y-full sm:translate-y-0
                        z-[99] bg-slate-50 overflow-hidden"
                    />
                </div>
                <div class="gender-input w-full py-2 px-3 flex flex-row gap-[2rem] md:gap-[6rem]">
                    <div class="input-field flex items-center gap-3">
                        <label for="male" class="italic font-semibold tracking-wide">Male:</label>
                        <input type="radio" name="gender" id="male" class="w-6 h-6 cursor-pointer">
                    </div>
                    <div class="input-field flex items-center gap-3">
                        <label for="female" class="italic font-semibold tracking-wide">Female:</label>
                        <input type="radio" name="gender" id="female" class=" w-6 h-6 cursor-pointer">
                    </div>
                </div>
                <div class="submit-btn w-full mt-8 py-2 flex justify-center text-white text-lg font-extrabold">
                    <button class="w-[90%] h-[3rem] bg-orange-500 hover:bg-orange-600 rounded">Create account</button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>

input {
    letter-spacing: 1px;
    background-color: inherit;
}
.select-btn {
    transition: gap 300ms ease, border 300ms ease, color 300ms ease;
}
button {
    transition: background-color 300ms ease;
}
</style>