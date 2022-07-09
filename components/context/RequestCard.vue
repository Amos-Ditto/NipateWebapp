<template>
    <div class="w-full py-2 flex flex-col gap-1 card cursor-pointer border-b border-neutral-200">
        <div class="title w-full py-1 text-neutral-600 text-sm">
            <slot name="title"></slot>
        </div>
        <div class="w-full main text-neutral-800 pl-6 text-lg sm:text-lg">
            <slot></slot>
        </div>
        <div class="w-full text-neutral-600 duration text-sm">
            <slot name="duration"></slot>
        </div>
    </div>
</template>
<style scoped>
.card {
    transition: transform 200ms ease;
}
.title , .main {
    transition: color 300ms ease;
}
.card:hover .main , .card:hover .title {
    @apply text-orange-600;
}
</style>