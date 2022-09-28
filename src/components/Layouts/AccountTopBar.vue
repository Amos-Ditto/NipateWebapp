<template>
    <nav class="w-full flex flex-row items-center justify-between py-5 sm:py-5 px-[10px] lg:px-[75px] bg-gray-100 shadow-sm transition-pad duration-300">
        <router-link :to="{ name: 'Dashboard' }" class="flex flex-row items-center gap-x-3.5">
            <img src="../../assets/Logo/Vector.svg" alt="logo" class="w-[2.3rem] sm:w-[2.9rem] h-[2.4rem] sm:h-[2.8rem]">
            <img src="../../assets/Logo/Nipate.svg" alt="" class="w-[4.4rem] sm:w-[6rem] h-[2.3rem] sm:h-[2.8rem]">
        </router-link>
        <div class="right-nav flex flex-row items-center gap-x-6 sm:gap-x-12 transition-pad duration-300">
            <!-- <div class="notification p-2 sm:p-2.5 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300">
                <div class="i-mdi-bell text-lg sm:text-xl text-[#346974]"></div>
            </div> -->
            <div class="account flex flex-row items-center gap-x-1 cursor-pointer">
                <small class="text-lg text-[#346974] font-bold tracking-tight">Amos</small>
                <small class="hidden sm:block text-sm sm:text-lg text-[#346974] font-bold tracking-tight">Kipyegon</small>
                <div class="account-icon bg-gray-200 ml-2 p-2 sm:p-2.5 rounded-full">
                    <div class="i-mdi-account text-[#346974] text-lg sm:text-xl"></div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

a img {
    @apply transition-all duration-300;
}
</style>