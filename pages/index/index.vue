<template>
    <main class="w-full flex flex-col justify-center px-2 gap-4">
        <div class="content w-full min-h-[20rem] md:p-2 flex flex-col gap-4 pt-5">
            <div class="categories w-full">
                <h3 class="text-2xl font-bold text-neutral-600">Categories.</h3>
                <LazyContextCategories />
            </div>
            <hr>
            <div class="requests">
                <h3 class="text-xl font-bold text-neutral-600 font-serif">Top Services requested.</h3>
                <div class="requests w-full pt-4 flex flex-row justify-start">
                    <!-- <ServicesList /> -->
                    <ContextServicesList />
                    <!-- <LazyContextRequestServices class="w-full md:w-[60%]" /> -->
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
.searchbar {
    @apply w-full md:w-[96%] h-[3rem] flex items-center justify-center;
    transition: width 300ms ease;
}
</style>