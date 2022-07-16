<script setup lang="ts">
const selectservices = ref<boolean>(false);

interface Groups {
    name: string;
}
const groups: Groups[] = [
    {name: 'Transport & Commutation'}, {name: 'Hair & beauty'},
    {name: 'AutoMobiles & Car Maintenance'}
]
// Methods
const selectServices = ():void => {
    selectservices.value = !selectservices.value;
};
console.log("Services loaded");
</script>
<template>
    <div class="tag w-full flex flex-col gap-2 shadow bg-white rounded h-[320px] px-1 py-2">
        <transition name="slide-filters" mode="out-in">
            <div class="services w-full flex flex-col gap-2 p-2"  v-if="!selectservices">
                <h3 class="text-neutral-600 font-semibold text-base flex flex-row items-center gap-1">Services <div class="i-mdi-account-wrench" /></h3>
                <div class="tag-values flex flex-col gap-1 px-2 py-1 max-h-[240px] overflow-y-auto">
                    <button v-for="(group, index) in groups" :key="index" @click="selectServices">
                        {{group.name}}
                    </button>
                </div>
            </div>
        </transition>
        <transition name="slide-filters" mode="out-in">
            <div class="locations w-full flex flex-col gap-2"  v-if="selectservices">
                <h3 class="text-neutral-600 font-semibold text-base flex flex-row items-center gap-1">Transport & Commutation <div class="i-mdi-account-wrench" /></h3>
                <div class="tag-values flex flex-col gap-1 px-2 py-1 max-h-[230px] overflow-y-auto">
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Boda boda</span>
                    </label>
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Taxi</span>
                    </label>
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Movers</span>
                    </label>
                </div>
                <div class="w-full flex items-center justify-around">
                    <div class="i-mdi-arrow-back hover:bg-blue-500 cursor-pointer text-xl" @click="selectServices" />
                    <button class="bg-blue-400 text-white font-bold text-base px-6 py-1 rounded font-mono tracking-wide">search</button>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.slide-filters-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.slide-filters-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.slide-filters-enter-active {
    transition: opacity 500ms ease, transform 300ms ease;
}
.tag-values label {
    @apply w-full flex flex-row items-center text-neutral-500;
    @apply text-sm tracking-wide hover:bg-slate-100 px-2 py-2 cursor-pointer;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}
.tag-values button {
    @apply w-full flex items-center text-start text-neutral-500;
    @apply text-base hover:bg-slate-100 py-2 px-2 cursor-pointer;
}
.tag-values label input {
    @apply w-[1rem] h-[1rem];
}
</style>