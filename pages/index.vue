<template>
    <NuxtLayout name="custom" class="overflow-y-auto">
        <template #header>
            <nav class="w-full bg-slate-100 ">
                <LazyDesignsTopNav class="w-full" />
            </nav>
        </template>
        <hr>
        <main class="h-[80vh] w-full px-4 pt-3 flex flex-row gap-3 md:gap-6 bg-slate-100">
            <div class="side-nav w-[16%] shadow bg-slate-50 rounded">
                <DesignsSideBar />
            </div>
            <section class="px-2 flex flex-col w-[75%]">
                <div class="center w-full flex flex-col gap-8">
                    <div class="searchbar w-full rounded-t bg-slate-50 shadow">
                        <DesignsSearchBar />
                    </div>
                    <div class="content w-full min-h-[12rem] p-4 rounded-t bg-slate-50 shadow">
                        <h1>Main content</h1>
                    </div>
                </div>
            </section>
            <div class="tags w-[15%] min-h-[5rem] p-2 shadow bg-slate-50 rounded">
                <LazyDesignsCategoryList />
            </div>
        </main>
        <hr>
        <template #footer>
            <div class="w-full h-[2rem] pt-5 flex items-center justify-center">
                <h3>Copyright of Bespoke Systems @2022</h3>
            </div>
        </template>
    </NuxtLayout>
</template>