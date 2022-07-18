<script setup lang="ts">
const togglegrouplocation = ref<boolean>(true);

interface Location {
    name: string;
}

interface ApiCounties {
    id: Number;
    Name: String;
}
defineProps<{
    counties: ApiCounties[];
    instantloading: boolean;
}>();
const towns: Location[] = [
    {name: 'Kabarak'}, {name: 'Kiamunyi'}, {name: 'Mercy Njeri'}
]

// Methods
const toggleGroupLocation = ():void => {
    togglegrouplocation.value = !togglegrouplocation.value;
}
</script>
<template>
    <div class="drop-down">
        <transition name="dropdown">
            <div class="location-group w-full py-2 flex flex-col gap-2" v-if="togglegrouplocation">
                <div class="search-group w-full h-[15%] flex items-center px-4 relative">
                    <input type="text" class="outline-none rounded border border-neutral-300 bg-transparent tracking-widest px-8 py-1.5 italic w-full text-neutral-500 text-sm">
                    <div class="i-mdi-magnify absolute left-0 translate-x-[150%] translate-y-[10%]" />
                </div>
                <hr>
                <div
                    class="groups-btn flex flex-wrap items-center w-full max-h-[160px] gap-4 px-4 py-4 overflow-y-auto"
                    v-if="!instantloading"
                >
                    <button
                        @click="toggleGroupLocation"
                        v-for="(county, index) in counties" :key="index"
                    >{{county.Name}}</button>
                </div>
                <div
                    class="groups-btn-loading flex flex-wrap items-center justify-center w-full gap-4 px-4 py-4 overflow-y-auto"
                    v-if="instantloading"
                >
                    <button class="w-[5rem] h-[2rem] rounded"></button>
                    <button class="w-[5rem] h-[2rem] rounded"></button>
                    <button class="w-[5rem] h-[2rem] rounded"></button>
                    <button class="w-[5rem] h-[2rem] rounded"></button>
                    <button class="w-[5rem] h-[2rem] rounded"></button>
                </div>
            </div>
        </transition>
        <transition name="dropdown">
            <div class="group w-full py-2 flex flex-col gap-2" v-if="!togglegrouplocation">
                <div class="search-group w-full h-[15%] flex items-center px-4 relative">
                    <input type="text" placeholder="search for your town">
                    <div class="i-mdi-magnify absolute left-0 translate-x-[150%] translate-y-[10%]" />
                </div>
                <hr>
                <h3 class=" text-xs italic px-4">select by this tags</h3>
                <div class="group-btn flex flex-wrap items-center w-full max-h-[130px] gap-4 px-4 py-4 overflow-y-auto">
                    <button v-for="(town, index) in towns" :key="index">{{town.name}}</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.dropdown-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.dropdown-enter-active {
    transition: opacity 500ms ease, transform 300ms ease;
}
.drop-down {
    @apply w-[250px] h-[220px] shadow bg-slate-50 absolute bottom-0 translate-y-[104%] z-40;
}
.drop-down .groups-btn button {
    @apply text-xs border border-neutral-300 rounded-lg px-2 py-1 hover:border-orange-500 hover:text-orange-500;
    transition: border 300ms ease, color 300ms ease;
}
.group input {
    @apply outline-none rounded border border-neutral-300 bg-transparent tracking-widest px-8 py-1.5 italic w-full text-neutral-500 text-sm;
    @apply placeholder:text-xs placeholder:text-neutral-400;
}
.group .group-btn button {
    @apply text-xs px-3 py-1 bg-slate-200 tracking-wide rounded;
}
.groups-btn-loading button {
    animation: loadingbtn 2s infinite linear;
}
@keyframes loadingbtn {
    0% {
        @apply bg-slate-50;
    }
    50% {
        @apply bg-slate-200;
    }
    100% {
        @apply bg-slate-50;
    }
}
</style>