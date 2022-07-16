<script setup lang="ts">
const selectlocation = ref<boolean>(false);

interface Location {
    name: string;
}
const counties: Location[] = [
    {name: 'Nakuru'}, {name: 'Nairobi'}
]
// Methods
const selectLocation = ():void => {
    selectlocation.value = !selectlocation.value;
};
console.log("Location loaded");

</script>
<template>
    <div class="tag w-full py-2 px-3 shadow bg-white rounded h-[320px]">
        <transition name="slide-filters" mode="out-in">
            <div class="locations w-full flex flex-col gap-2 p-2"  v-if="!selectlocation">
                <h3 class="text-neutral-600 font-semibold text-base flex flex-row items-center gap-1">Locations <div class="i-mdi-map-marker" /></h3>
                <div class="tag-values flex flex-col gap-1 px-2 py-1 max-h-[240px] overflow-y-auto">
                    <button
                        v-for="(county, index) in counties" @click="selectLocation">
                        {{county.name}}
                    </button>
                </div>
            </div>
        </transition>
        <transition name="slide-filters" mode="out-in">
            <div class="locations w-full flex flex-col gap-2"  v-if="selectlocation">
                <div class="top-side w-full flex flex-row items-center text-neutral-600">
                    <div class="i-mdi-arrow-back cursor-pointer hover:bg-blue-500 text-xl" @click="selectLocation" />
                    <h3 class="font-semibold text-base flex flex-row items-center gap-1 pl-8">Nakuru <div class="i-mdi-map-marker" /></h3>
                </div>
                <div class="tag-values flex flex-col gap-1 px-2 py-1 max-h-[230px] overflow-y-auto">
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Kabarak</span>
                    </label>
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Kiamunyi</span>
                    </label>
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Kabarak</span>
                    </label>
                    <label>
                        <input type="checkbox">
                        <span class="pl-2">Kiamunyi</span>
                    </label>
                </div>
                <div class="search-btn w-full flex items-center justify-center">
                    <button class="font-mono">search</button>
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
.search-btn button {
    @apply bg-blue-400 text-white font-bold px-8 py-1 tracking-wide rounded hover:bg-blue-600;
    transition: background-color 300ms ease;
}
</style>