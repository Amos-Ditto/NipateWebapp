<template>
    <footer class="w-full py-2 bg-gray-50 shadow-md flex items-center flex-col">
        <div class="top-footer w-full border-b border-gray-300 py-2 px-[8px] lg:px-[100px] transition-pad duration-300 flex items-center flex-row">
            <div class="logo py-0.5 flex flex-row items-center">
                <img src="../../assets/Logo/Vector.svg" alt="logo">
                <img src="../../assets/Logo/Nipate.svg" alt="logo">
            </div>
        </div>
        <div class="bottom-footer w-full px-[8px] lg:px-[100px] transition-pad duration-300 pt-2 pb-1 sm:pb-3 flex flex-col items-center">
            <div class="top-b-footer w-full flex flex-row py-0.5 gap-2">
                <span>Contact</span>
                <span>About</span>
                <span>Terms of services</span>
            </div>
            <div class="bottom-b-footer flex flex-col w-full px-1">
                <small class="text-slate-600">Copyright @ 2022 Bespoke Systems.</small>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.top-footer .logo img {
    @apply min-w-[2rem] max-w-[4rem] h-[1.12rem];
}

.top-b-footer span {
    @apply text-xs hover:underline text-slate-600 border-r-2 pl-1 pr-2 border-gray-200 cursor-pointer relative;

}
</style>