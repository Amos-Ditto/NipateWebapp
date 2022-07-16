<script setup lang="ts">

const emit = defineEmits<{
    (event: "closeServiceSearch")
}>();

interface Services {
    name: string;
}
const categories: Services[] = [
    {name: 'Commutation & Transport'}, {name: 'AutoMobiles & Mechanics'}, {name: 'Hair & Beauty'}
]
const selectedcategory = ref<boolean>(false);

const chooseThisCategory = (): void => {
    selectedcategory.value = false;
    // selectedcategory.value = true;
    setTimeout(() => {
        selectedcategory.value = true;
    }, 200);
};

const emitClose = ():void => {
    emit("closeServiceSearch");
};

</script>
<template>
    <main class="absolute bottom-0 translate-y-[105%] min-w-[260px] md:min-w-[320px] max-h-[300px] md:max-h-[400px] bg-slate-100 rounded border border-neutral-300 z-10 px-0 py-1 shadow">
        <div class="title w-full flex flex-row items-center justify-between px-2 text-neutral-600">
            <h3 class="font-bold text-lg tracking-wider">Services</h3>
            <h3 class="text-xs font-semibold hover:text-red-500 capitalize cursor-pointer" @click="emitClose">close</h3>
        </div>
        <div class="search-form w-full flex items-center justify-center relative text-neutral-500 px-2">
            <input
                type="text" placeholder="search services"
                class="w-[92%] pl-2 pr-6 py-1 outline-none border border-neutral-300 rounded text-base tracking-wider bg-inherit placeholder:text-sm focus:border-blue-500"
            >
            <div class="i-mdi-magnify absolute right-0 translate-x-[-160%] translate-y-[10%]" />
        </div>
        <div class="saved-search w-full"></div>
        <h3 class="tag w-full flex flex-row items-center font-semibold text-base font-serif text-neutral-500 gap-1 bg-slate-50 px-2 py-2 shadow-inner tracking-wide">
            categories <div class="i-mdi-chevron-down text-base" />
        </h3>
        <div class="regions w-full flex flex-col py-1 gap-1 max-h-[150px] md:max-h-[200px] overflow-y-auto">
            <LazyDropdownsCategoryDropDown
                v-for="(category, index) in categories" :key="index" 
                :category="category.name" @choose-this-category="chooseThisCategory"
            />
        </div>
        <div
            v-if="selectedcategory" class="category-selection"
        >
            <div class="tag-title w-full text-base font-bold text-neutral-600 flex items-center justify-center">
                <h3 class="italic tracking-wide">Commutation & Transport</h3>
            </div>
            <hr>
            <ul class="services w-full flex flex-col gap-1 bf text-neutral-700 text-sm tracking-wider py-1">
                <li>Boda boda</li>
                <li>Movers</li>
                <li>Taxi</li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
main {
    @apply flex flex-col gap-2 md:gap-3;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}
.search-form:focus-within .i-mdi-magnify {
    @apply text-blue-500;
}
.search-form input {
    transition: border 300ms ease;
}
ul li {
    @apply py-2 px-2 border-b border-neutral-300 hover:bg-slate-200;
    transition: background-color 250ms ease;
    cursor: pointer;
}
.category-selection {
    @apply absolute bottom-0 right-0 md:bottom-auto left-0 md:left-auto md:right-0 min-w-[150px] max-w-[210px] min-h-[170px] md:min-h-[300px] shadow md:translate-x-[108%] translate-y-[105%] md:translate-y-[0%] flex flex-col px-2 py-1 bg-inherit;
}
</style>