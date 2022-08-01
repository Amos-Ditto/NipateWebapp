<template>
    <main class="w-full flex-col flex">
        <header class="h-[4em] sm:h-[4.8em] flex items-center">
            <PageFeauturesNavBar />
        </header>
        <main class="w-full">
            <slot></slot>
        </main>
    </main>
</template>

<style scoped>

header {
    transition: height 300ms ease;
}
</style>