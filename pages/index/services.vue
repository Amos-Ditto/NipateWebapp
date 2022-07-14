<template>
    <main class="w-full flex flex-col py-2">
        <div class="w-full px-0 sm:px-8 flex flex-row justify-between">
            <div class="filters px-2 gap-2 flex flex-row relative">
                <button class="px-2 py-1 rounded-md border-neutral-300 text-sm hover:text-green-400">Find by <div class="i-mdi-filter-variant scale-110 text-neutral-500" /></button>
                <div class="responsive-btns overflow-x-auto overflow-y-hidden z-[20]">
                    <div class="filter md:ml-2">
                        <button>Location <div class="i-mdi-map-marker text-neutral-500" /></button>
                        
                    </div>
                    <div class="filter md:ml-2">
                        <button>Services <div class="i-mdi-account-wrench text-neutral-500" /></button>
                        <div class="dropfown fixed top-0 translate-y-[100%] md:translate-y-[-40%] min-h-[4rem] min-w-[8rem] bg-slate-200 shadow z-[99]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elite
                        </div>
                    </div>
                </div>
            </div>
            <div class="other-btns text-neutral-500 flex flex-row gap-4 md:gap-12 pr-3 md:pr-1">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <section class="pt-16 md:pt-0 md:mt-8 relative">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur aperiam voluptatum natus nulla debitis nobis provident necessitatibus eligendi eum, incidunt pariatur deserunt voluptatem veritatis itaque! Soluta dignissimos incidunt quibusdam?
        </section>
    </main>
</template>

<style scoped>

.filters button {
    @apply flex flex-row gap-2 items-center text-neutral-600;
}
.filter {
    @apply flex justify-center relative;
}
.filter button {
    @apply text-sm px-2 md:px-3 py-2 border border-neutral-200 rounded hover:border-orange-500 hover:text-orange-500;
    @apply flex gap-2 md:gap-1;
    transition: border 300ms ease, color 300ms ease;
}
.responsive-btns {
    @apply w-[90vw] md:w-auto flex flex-row absolute md:relative bottom-0 left-0 translate-y-[105%] md:translate-y-0;
    @apply gap-2 py-2 md:py-2 rounded px-3 md:px-0;
}
.other-btns button {
    @apply font-serif text-sm md:text-base md:font-bold hover:text-green-400;
    transition: color 300ms ease;
}
</style>