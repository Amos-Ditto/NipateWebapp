<template>
    <main class="w-full h-full p-0 m-0 bg-gray-100">
        <div class="top-bar w-full h-[4rem] bg-white shadow flex flex-row items-center justify-between px-4 md:px-20">
            <div class="logo-label flex flex-row gap-4 items-center px-6 sm:px-2">
                <img src="@/assets/img/Logo/Vector.svg" alt="img" class="h-[2.2rem] md:h-[2.4rem] hidden sm:block">
                <img src="@/assets/img/Logo/Nipate.svg" alt="label name" class="h-[1.8rem] md:h-[2.1rem] pt-1 md:pt-2">
            </div>
        </div>
        <section class="w-full px-4 sm:px-2 flex justify-center py-4">
            <div class="header w-full md:w-[750px] lg:w-[780px] sm:w-[600px] h-[4.5rem] sm:h-[5.4rem] bg-white border border-neutral-200 rounded-t flex items-center px-2 sm:px-6 md:px-10">
                <h3 class="text-neutral-600 text-base sm:text-2xl tracking-wide font-thin">Create Provider Account Today!</h3>
            </div>
            <div class="back-btn fixed bottom-[11%] left-[3%] bg-white w-[3.4rem] h-[3rem] rounded-[50%] border-[3px] border-neutral-300 flex items-center text-left hover:bg-neutral-300">
                <span class="text-black text-lg"><div class="i-mdi-chevron-left" /></span>
                <p class="text-neutral-800 text-xs font-bold tracking-tight">back</p>
            </div>
        </section>
    </main>
</template>

<style scoped>
.header {
    background-image: url('@/assets/img/bg-img/undraw_interaction_design_odgc.svg');
    background-position: 100% 90%;
    background-size: 40% 80%;
    background-repeat: no-repeat;
    transition: width 300ms;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}

.back-btn {
    transition: background-color 300ms;
    cursor: pointer;
}
@media (max-width: 600px) {
    .header {
        background-size: 30% 50%;
    }
}
</style>