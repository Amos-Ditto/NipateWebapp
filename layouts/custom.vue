<template>

    <section class="w-full h-full flex flex-col">
        <header>
            <slot name="header"></slot>
        </header>
        <main class="w-full">
            <slot />
        </main>
        <footer class="w-full">
            <slot name="footer"></slot>
        </footer>
    </section>
</template>