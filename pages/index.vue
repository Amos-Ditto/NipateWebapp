<template>
    <NuxtLayout name="custom">
        <template #header>
            <nav class="w-full h-[3.6rem] md:h-[4rem] bg-slate-100 ">
                <LazyDesignsTopNavBar />
            </nav>
        </template>
        <main>
            <h1>this is body</h1>
        </main>
        <template #footer>
            <nav>this is footer</nav>
        </template>
    </NuxtLayout>
</template>