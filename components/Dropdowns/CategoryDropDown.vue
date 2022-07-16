<script setup lang="ts">
defineProps<{
    category: string
}>();
const emit = defineEmits<{
    (event: 'chooseThisCategory')
}>();

const chooseThisCategory = (): void => {
    emit('chooseThisCategory')
};
</script>
<template>
    <main class="w-full flex items-center text-neutral-600 border-t border-neutral-300">
        <div
            @click="chooseThisCategory"
            class="tag w-full flex flex-row justify-between items-center hover:px-3.5 px-4 py-1 tracking-wider cursor-pointer hover:brightness-200"
        >
            <h3>{{category}}</h3>
            <div class="i-mdi-chevron-right" />
        </div>
    </main>
</template>
<style scoped>
.tag {
    transition: padding 300ms ease;
}
</style>