<template>
    <div class="w-full flex flex-col gap-1">
        <div class="title w-full py-1">
            <slot name="title"></slot>
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
        <hr>
    </div>
</template>