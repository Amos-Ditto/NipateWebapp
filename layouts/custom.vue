<template>
    <main class="wh-100">
        <header class="w-100">
            <slot name="header"></slot>
        </header>
        <main class="w-100">
            <slot class="w-100"/>
        </main>
        <footer class="w-100">
            <slot name="footer"></slot>
        </footer>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>