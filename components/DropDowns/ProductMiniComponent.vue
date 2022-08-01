<script setup lang="ts">

const showproducts = ref<Boolean>(false);
const showProducts = ():void => {
    showproducts.value = !showproducts.value;
}

// Transition methods
const enter = (el: HTMLElement): void => {
    el.style.height = "auto";
    let height = getComputedStyle(el).height;
    el.style.height = '0';
    getComputedStyle(el);
    setTimeout(() => {el.style.height = height});

};

const afterEnter = (el: HTMLElement): void => {
    el.style.height = "auto";
};

const leave = (el: HTMLElement): void => {
    el.style.height = getComputedStyle(el).height;
    getComputedStyle(el);
    setTimeout(() => {el.style.height = '0'});
};

</script>
<template>
    <div class="select-btn" @click="showProducts">
        <span>Transport</span>
        <div class="i-mdi-chevron-down"></div>
    </div>
    <transition name="dropdown" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div class="lists w-full px-4 flex flex-col gap-2 items-start" v-if="showproducts">
            <button>Boda</button>
            <button>Taxi</button>
        </div>
    </transition>
</template>

<style scoped>
.select-btn {
    @apply  w-full flex flex-row items-center justify-between hover:bg-gray-200;
    @apply px-4 py-3 relative cursor-pointer;
    transition: background-color 300ms ease;
}
.lists button {
    @apply w-full py-2 hover:bg-gray-200 text-start px-4;
}

.dropdown-enter-from, .dropdown-leave-to {
    opacity: 0;
}
.dropdown-enter-active, .dropdown-leave-active {
    transition: height 250ms ease, opacity 300ms;
}
</style>
