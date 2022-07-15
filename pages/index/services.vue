<template>
    <main class="w-full flex flex-col py-1 gap-2 overflow-y-auto relative min-h-[60vh]">
        <div class="navigation-bar w-full flex flex-row justify-between">
            <div class="filters flex items-center">
                <button class="flex flex-row items-center text-neutral-600 text-sm gap-2 px-2 font-bold hover:text-green-600">
                    Find by <div class="i-mdi-filter-variant" />
                </button>
            </div>
            <div class="links flex flex-row gap-2 md:gap-8">
                <button>My requests</button>
                <button>Request service</button>
            </div>
        </div>
        <hr>
        <div class="filter-btns flex flex-row px-3 gap-3 w-full md:w-auto">
            <div class="relative filter-btn">
                <button>Location <div class="i-mdi-map-marker" /></button>
                <!-- <div class="dropdown z-10">
                    <div class="pointer w-[1.15rem] h-[1.15rem] absolute top-0 left-4 bg-inherit rotate-45 rounded -translate-y-[50%] -z-20 border border-neutral-300"></div>
                    <div class="menu-context w-full h-full bg-inherit">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, libero? Possimus, vero eaque asperiores quam commodi dolorem tempore excepturi error alias doloribus! Esse provident quasi veritatis eveniet aperiam quis adipisci!
                    </div>
                </div> -->
            </div>
            <div class="relative filter-btn">
                <button>services <div class="i-mdi-account-wrench" /></button>
                <DropdownsMenuDropDown />
            </div>
        </div>
        <section class="pt-3 md:pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur aperiam voluptatum natus nulla debitis nobis provident necessitatibus eligendi eum, incidunt pariatur deserunt voluptatem veritatis itaque! Soluta dignissimos incidunt quibusdam?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur illo cupiditate aut quam incidunt ipsum impedit sit corporis sint. Inventore deleniti quibusdam necessitatibus placeat quam? Iste earum facilis eaque?
        </section>
    </main>
</template>

<style scoped>
.navigation-bar {
    @apply pr-2 md:pr-16 pt-3 md:pt-0;
}
.filters , .filter-btns button , .navigation-bar .links button{
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}

.navigation-bar .links button {
    @apply px-2 text-neutral-600 text-sm sm:text-base md:text-lg font-bold tracking-wide hover:text-green-500;
    transition: color 250ms ease;
}
.filter-btns button {
    @apply flex flex-row items-center gap-1.5 text-neutral-500 text-sm md:text-base border border-neutral-300 px-2 md:px-4 py-1 rounded;
    @apply hover:border-green-500 hover:text-green-500;
    transition: border 300ms ease , color 300ms ease;
}
.filter-btns {
    @apply md:absolute md:top-0 md:translate-x-[40%];
}
/* .filter-btn .dropdown {
    @apply absolute bottom-0 translate-y-[110%] min-w-[200px] min-h-[150px] bg-slate-100 rounded border border-neutral-300;
} */
</style>