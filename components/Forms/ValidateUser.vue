<template>
    <form  @submit.prevent="createUser()" class=" w-full flex flex-col gap-4 sm:gap-6 relative" v-if="!togglemoreformdata">
        <div class="input-field w-full flex-col flex items-start gap-1">
            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Mobile Number</label>
            <div class="input-phone gap-1">
                <div class="county-code h-full w-[30%] gap-1 bg-white text-neutral-500 flex flex-row items-center text-xs italic sm:text-sm border border-zinc-200 px-1 py-2 rounded-l">
                    <span class="w-[40%] h-full flex items-center"><img src="@/assets/img/bg-img/Flag-of-Kenya.svg" alt="" class="w-full h-full"></span>
                    <p>+254</p>
                </div>
                <input type="text" placeholder="e.g 794818111">
            </div>
        </div>
        <div class="input-field w-full flex-col flex items-start gap-1">
            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">ID Number/Passport ID</label>
            <div class="input">
                <input type="text" placeholder="enter your ID Number/Passport id">
            </div>
        </div>
        <div class="input-field w-full flex-col flex items-start gap-1">
            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">First Name</label>
            <div class="input">
                <input type="text" placeholder="your first name">
            </div>
        </div>
        <div class="input-field w-full flex-col flex items-start gap-1">
            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Last name</label>
            <div class="input">
                <input type="text" placeholder="your last name">
            </div>
        </div>

        <div class="submit-btn w-full px-2 pt-3 sm:pt-1 flex flex-row gap-4 z-20">
            <button type="submit" class="bg-blue-400 hover:bg-blue-600 rounded-full px-6 py-1 text-white font-bold">Continue</button>
            <UtilsLoadingSpinner class="h-[4px] w-[4px] scale-75" v-if="validatingdetails" />
        </div>
    </form>
</template>