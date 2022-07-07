<template>
    <div class="w-full py-2 flex flex-col gap-1 card cursor-pointer border-b border-neutral-200 hover:border-orange-500 hover:text-orange-500 hover:scale-[1.01]">
        <div class="title w-full py-1 text-neutral-600">
            <slot name="title"></slot>
        </div>
        <div class="w-full main">
            <slot></slot>
        </div>
        <div class="w-full text-neutral-600 duration">
            <slot name="duration"></slot>
        </div>
    </div>
</template>
<style scoped>
.card {
    transition: transform 200ms ease;
}
</style>