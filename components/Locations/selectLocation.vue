<script setup lang="ts">
import Locations from '~~/types/LocationTypes';

const baseUrl = ref<string>("http://127.0.0.1:8000");

const counties = ref<Locations[]>([]);
const towns = ref<Locations[]>();

// Emits
const emit = defineEmits<{
    (event: "selectedLocation", id: number, Name: string): void;
}>();

// Condition Transitions data
const county_suspense = ref<boolean>(false);
const town_suspense = ref<boolean>(false);
const showloactiontype = ref<boolean>(true);

// Transition methods

const fetchData = async () => {
    county_suspense.value = true;
    await fetch(`${baseUrl.value}/location/counties/`)
    .then(res => {
        if (res.status !== 200) {
            county_suspense.value = true;
        } else {
            return res.json();
        }
    })
    .then(data => {
        county_suspense.value = false;
        counties.value = data;
    })
    .catch(error => {
        county_suspense.value = true;
        console.log("Error");
    })
};
fetchData();


const selectId = async (event: number) => {
    showloactiontype.value = false;
    town_suspense.value = true;
    await fetch(`${baseUrl.value}/location/towns/?CountyID=${event}`)
    .then(res => {
        if (res.status !== 200) {
            console.log("Error api");
            town_suspense.value = true;
            return;
        }
        return res.json();
    })
    .then(data => {
        town_suspense.value = false;
        towns.value = data;
        console.log(data);
        console.log(towns.value);
    })
    .catch(eror => {
        town_suspense.value = true;
        console.log("Error");
    })
}

const selectTownId = (id: number, Name: string):void => {
    emit("selectedLocation", id, Name);
};
</script>
<template>
    <div class="locations w-full py-3 px-2 overflow-y-hidden">
        <transition name="togglemenu">
            <div class="counties w-full" v-if="showloactiontype">
                <div class="search">
                    <input type="text" placeholder="search for county">
                    <div class="i-mdi-magnify absolute leading-10 top-0 sm:top-1 translate-y-full left-[15%] flex items-center" />
                </div>
                <div class="error w-full p-2 flex justify-center" :class="county_suspense ? 'block' : 'hidden'" >
                    <button>
                        <div class="i-mdi-restart text-2xl" />
                        Error
                    </button>
                </div>
                <div class="places w-full sm:mt-2">
                    <div>
                        <LazyLocationsLocationList v-if="!county_suspense" :locations="counties" @select-id="selectId" />
                        <SuspenseComponentsLocationSuspense v-if="county_suspense" />
                    </div>
                </div>
            </div>
        </transition>
        <transition name="togglemenu">
            <div class="towns w-full" v-if="!showloactiontype">
                <div class="search">
                    <input type="text" placeholder="search for location">
                    <div class="i-mdi-magnify absolute leading-10 top-0 sm:top-1 translate-y-full left-[15%] flex items-center" />
                </div>
                <div class="error w-full p-2 flex justify-center" :class="town_suspense ? 'block' : 'hidden'" >
                    <button>
                        <div class="i-mdi-restart text-2xl" />
                        Error
                    </button>
                </div>
                <div class="places w-full sm:mt-2">
                    <div>
                        <LazyLocationsTownList v-if="!town_suspense" :locations="towns" @select-town-id="selectTownId" />
                        <SuspenseComponentsLocationSuspense v-if="town_suspense" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>

.togglemenu-enter-from {
    transform: translateX(90%);
}
.togglemenu-leave-to {
    transform: translateX(-90%);
}
.togglemenu-enter-active , .togglemenu-leave-active {
    transition: transform 300ms ease;
    overflow: hidden;
}

input:focus {
    @apply border-blue-500 border-2;
    transition: border 300ms ease;
}
.error button {
    @apply flex gap-3 items-center py-1 px-2 sm:px-3 bg-red-400 hover:bg-red-500 text-white font-bold tracking-wide rounded-md;
    transition: background-color 300ms ease;
}
.search {
    @apply w-full p-2 flex justify-center relative bg-slate-100 rounded;
}
.search input {
    @apply text-xs sm:text-sm w-[84%] h-8 sm:h-9 rounded outline-none border border-neutral-400 bg-inherit pl-[14%] pr-2 tracking-wider;
}
</style>