<template>
    <div class="card w-full h-full flex flex-col gap-1">
        <div class="icon-card w-full h-[80%] rounded-lg border-[3px] border-amber-200 flex items-center justify-center bg-slate-100 text-neutral-500">
            <slot name="iconcard"></slot>
        </div>
        <div class="card-title w-full flex items-center justify-center text-neutral-500">
            <slot></slot>
        </div>
    </div>
</template>