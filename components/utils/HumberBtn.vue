<script setup lang="ts">
// Props
const props = defineProps<{
    closemobilenav: boolean;
}>();
const emit = defineEmits<{
    (event: 'openMSideNav');
}>();
const open = ref<boolean>(false);

const onOpen = ():void => {
    emit("openMSideNav");
}
</script>

<template>
    <div
        class="menu-btn relative w-[38px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-neutral-400 rounded"
        @click="onOpen" :class="props.closemobilenav && 'open'"
    >
        <div class="menubtn"></div>
    </div>
</template>
<style scoped>
.menubtn {
    @apply w-[80%] h-[3.1px] bg-neutral-500 rounded;
    animation: background-color 300ms ease;
}
.menu-btn.open .menubtn {
    @apply bg-transparent;
}
.menubtn::before , .menubtn::after {
    content: '';
    @apply absolute w-[80%] h-[3.1px] bg-neutral-500 rounded;
    transition: transform 300ms ease;
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