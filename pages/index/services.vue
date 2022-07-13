<template>
    <main class="w-full flex flex-col md:flex-row gap-2">
        <div class="top-page w-full md:w-[20%] flex flex-row md:flex-col justify-between px-2">
            <div class="filters flex flex-col items-center">
                <div class="flex flex-row gap-2 px-4 items-center text-neutral-700 text-base underline font-thin hover:text-orange-500 cursor-pointer">
                    <p>find by</p>
                    <div class="i-mdi-filter-variant scale-110 md:scale-125" />
                </div>
                <div class="filter min-h-0 max-w-[60%]">
                    <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, praesentium maiores -->
                </div>
            </div>
            <div class="toggle-btns px-1">
                <button class="text-sm border border-neutral-300 py-1 px-3 rounded-md italic font-thin hover:bg-slate-200 duration-300">
                    request service
                </button>
            </div>
        </div>
        <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur aperiam voluptatum natus nulla debitis nobis provident necessitatibus eligendi eum, incidunt pariatur deserunt voluptatem veritatis itaque! Soluta dignissimos incidunt quibusdam?
        </section>
    </main>
</template>

<style scoped>
.filter {
    transition: height 300ms ease;
}
</style>