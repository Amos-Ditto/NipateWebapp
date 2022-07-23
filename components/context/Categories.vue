<template>
    <main class="w-full flex flex-col items-center">
        <section>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-car-wash text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">car wash</h3>
                </LazyUtilsCardCategory>
            </div>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-screwdriver text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">welding</h3>
                </LazyUtilsCardCategory>
            </div>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-hair-dryer text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">beauty</h3>
                </LazyUtilsCardCategory>
            </div>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-motorbike text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">boda boda</h3>
                </LazyUtilsCardCategory>
            </div>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-garage text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">garage</h3>
                </LazyUtilsCardCategory>
            </div>
            <div class="card sm:w-[8rem] md:w-[10rem] sm:h-[8rem] md:h-[9rem] hover:cursor-pointer">
                <LazyUtilsCardCategory>
                    <template #iconcard>
                        <div class="i-mdi-car text-4xl scale-[2]" />
                    </template>
                    <h3 class="font-serif text-lg tracking-wide">car wash</h3>
                </LazyUtilsCardCategory>
            </div>
        </section>
        <div class="load-more flex items-center mt-1">
            <button class="px-1 py-0 text-neutral-600 hover:border-neutral-500 flex flex-row items-center gap-1 hover:tracking-widest font-bold font-sans">
                more <div class="i-mdi-chevron-right rotate-90 md:rotate-0" />
            </button>
        </div>
    </main>
</template>

<style scoped>
section {
    @apply w-full py-6 md:py-4 md:px-10 gap-6 md:gap-12;
    @apply overflow-x-auto sm:overflow-x-hidden flex flex-row sm:grid sm:grid-cols-4 scroll-pl-6;
}
.load-more button {
    transition: border 300ms ease, letter-spacing 300ms ease;
}
</style>