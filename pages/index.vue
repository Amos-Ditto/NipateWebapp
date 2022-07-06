<template>
    <NuxtLayout name="custom" class="overflow-y-auto">
        <template #header>
            <nav class="w-full bg-slate-100 ">
                <LazyDesignsTopNav class="w-full" />
            </nav>
        </template>
        <hr>
        <main class="context">
            <div class="side-nav">
                <DesignsSideBar />
            </div>
            <section>
                <div class="center w-full flex flex-col gap-8">
                    <div class="searchbar">
                        <DesignsSearchBar />
                    </div>
                    <div class="content w-full min-h-[20rem] p-2">
                        <div class="categories w-full">
                            <h3 class="text-2xl font-bold text-neutral-600">Categories</h3>
                            <LazyContextCategories />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <hr>
        <template #footer>
            <div class="w-full h-[2rem] pt-5 flex items-center justify-center">
                <h3>Copyright of Bespoke Systems @2022</h3>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>

.context {
    @apply h-[80vh] w-full px-4 pt-3 flex flex-row gap-3 md:gap-6;
}
.context .side-nav {
    @apply w-[16%] border-r-[0.5px] border-neutral-300;
}
.context section {
    @apply px-2 flex flex-col w-[75%] md:pt-5;
}
section .searchbar {
    @apply w-[96%] h-[3rem] flex items-center justify-center;
}
</style>