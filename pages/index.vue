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
                    <div class="content w-full min-h-[20rem] md:p-2 flex flex-col gap-6">
                        <div class="categories w-full">
                            <h3 class="text-2xl font-bold text-neutral-600">Categories.</h3>
                            <LazyContextCategories />
                        </div>
                        <hr>
                        <div class="requests">
                            <h3 class="text-xl font-bold text-neutral-600 font-serif">Top Services requested.</h3>
                            <div class="requests w-full pt-6">
                                <LazyContextRequestServices />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <hr>
        <template #footer>
            <div class="w-full h-[2rem] pt-5 pb-8 flex items-center justify-center">
                <h3>Copyright of Bespoke Systems @2022</h3>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>

.context {
    @apply md:h-[90vh] w-full px-1 md:px-4 pt-3 flex flex-row gap-3 md:gap-6;
}
.context .side-nav {
    @apply hidden md:block w-[16%] border-r-[0.5px] border-neutral-300;
}
.context section {
    @apply px-2 flex flex-col w-full md:w-[80%] md:pt-5 md:overflow-y-auto;
    transition: width 300ms ease;
}
section .searchbar {
    @apply w-full md:w-[96%] h-[3rem] flex items-center justify-center;
    transition: width 300ms ease;
}
</style>