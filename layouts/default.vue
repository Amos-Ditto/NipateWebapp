<template>
    <main class="w-full flex-col flex">
        <header class="min-h-[4em] sm:min-h-[4.8em] flex items-center justify-center bg-orange-400 w-full ">
            <PageFeauturesNavBar />
        </header>
        <main class="w-full">
            <slot></slot>
        </main>
        <footer class="w-full flex flex-col items-center text-neutral-600 px-4 pt-4">
            <div class="company-details flex flex-col justify-start sm:justify-center w-full sm:flex-row gap-x-4">
                <h3 class="font-bold">Copyright @2022 Bespoke Systems</h3>
                <h3 class="underline decoration-gray-400">Trademark Policy</h3>
                <h3 class="underline decoration-gray-400">Terms of Service</h3>
            </div>
        </footer>
    </main>
</template>

<style scoped>

header {
    transition: height 300ms ease;
}
</style>