<script setup lang="ts">
const open = ref<boolean>(false);

const onOpen = ():void => {
    open.value = !open.value;
}
</script>

<template>
    <div
        class="menu-btn relative w-[32px] h-[22px] flex items-center justify-center pt-2 cursor-pointer"
        @click="onOpen" :class="open && 'open'"
    >
        <div class="menubtn"></div>
    </div>
</template>
<style scoped>
.menubtn {
    @apply w-full h-[3.1px] bg-neutral-500 rounded;
    animation: background-color 300ms ease;
}
.menu-btn.open .menubtn {
    @apply bg-transparent;
}
.menubtn::before , .menubtn::after {
    content: '';
    @apply absolute w-full h-[3.1px] bg-neutral-500 rounded;
}
.menubtn::before {
    @apply -translate-y-[9px];
}
.menubtn::after {
    @apply translate-y-[9px];
}
.menu-btn.open .menubtn::before {
    @apply rotate-45 translate-x-[-2px] translate-y-[2px];
}
.menu-btn.open .menubtn::after {
    @apply -rotate-45 translate-x-[-2px] translate-y-[2px];
}
</style>