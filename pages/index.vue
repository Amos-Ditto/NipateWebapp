<template>
    <NuxtLayout>
        <main class="w-full px-2 text-neutral-500 flex items-center flex-col">
            <div class="header-container w-full px-4 gap-2 flex flex-col pt-4">
                <h3 class="font-bold text-xl sm:text-3xl tracking-tight">Service Categories</h3>
                <div class="categories flex flex-row gap-4 py-2 w-full overflow-x-auto">
                    <button>All</button>
                    <button>Housing</button>
                    <button>Transport</button>
                    <button>Transport</button>
                    <button>Transport</button>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<style scoped>

.categories button {
    @apply px-2 sm:px-4 py-1  rounded-lg hover:bg-gray-200;
    @apply text-base sm:text-lg first:bg-gray-200;
    transition: background-color 300ms;
}
</style>