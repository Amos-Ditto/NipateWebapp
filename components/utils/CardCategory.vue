<template>
    <div class="card w-full h-full flex flex-col gap-1">
        <div class="icon-card w-full h-[80%] rounded-lg border-[3px] border-neutral-200 flex items-center justify-center bg-slate-100 text-neutral-500 px-14 sm:px-0 py-12 sm:py-0">
            <slot name="iconcard"></slot>
        </div>
        <div class="card-title w-full flex items-center justify-center text-neutral-500">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.card:hover .icon-card {
    @apply border-orange-300;
}
.card:hover .card-title {
    @apply text-neutral-700;
}
.icon-card , .icon-card {
    transition: color 300ms ease, border 300ms ease;
}
</style>