<script setup lang="ts">
import { Locations } from '~~/types/LocationTypes';
const config = useRuntimeConfig();

const selectlocale = ref<boolean>(false);
const apifetchstatus = ref<boolean>(true)
const loadingstatus = ref<boolean>(false);

defineProps<{
    apicounties: Locations[];
}>();

const emit = defineEmits<{
    (event: 'selectLocation', id: number, name: string);
    (event: 'closeDropDown');
}>();

const regionid = ref<number>();

const locations = [
    {Name: 'Kabarak', id: 1}, {Name: 'Kiamunyi', id: 2}, {Name: 'Mercy Njeri', id: 3}
]
const towns = ref<Locations[]>([]);

const fetchRegion = async (type: void) => {
    loadingstatus.value = true;
    apifetchstatus.value = true;
    await fetch(`${config.base_Url}/location/towns/?CountyID=${regionid.value}`)
    .then(res => {
        if(res.status != 200) {
            apifetchstatus.value = false;
            console.log('api fetch error');
        }
        return res.json();
    })
    .then(response => {
        setTimeout(() => {
            loadingstatus.value = false;
        }, 500);
        if(apifetchstatus.value == false) {
            return;
        }
        towns.value = response;
    })
}
const selectRegion = (id:number):void => {
    selectlocale.value = !selectlocale.value;
    regionid.value = id;
    fetchRegion();
}

const selectLocation = (id: number, name: string):void => {
    emit('selectLocation', id, name);
    setTimeout(() => {
        emit('closeDropDown');
    }, 400);
}
</script>

<template>
    <main class="w-full flex flex-col px-1 py-1">
        <div class="header w-full text-neutral-500 text-sm py-2 px-2 relative flex items-center">
            <!-- <h3>pick your location</h3> -->
            <input type="search" name="" id="search-location" placeholder="search for location">
            <div class="i-mdi-magnify absolute left-0 translate-x-[100%] translate-y-[10%] text-neutral-400 text-xl" />
        </div>
        <hr>
        <transition name="slide" mode="out-in">
            <ul class="list-counties w-full px-2 py-2 flex flex-col gap-1 text-neutral-500" v-if="!selectlocale">
                <li v-for="(county, index) in apicounties" :key="index" @click="selectRegion(county.id)">
                    {{county.Name}}
                </li>
            </ul>
        </transition>
        <transition name="slide" mode="out-in">
            <ul class="sub-group w-full px-2 py-2 flex flex-col text-sm text-neutral-500 gap-1" v-if="selectlocale">
                <li v-for="(location, index) in towns" :key="index" v-if="!loadingstatus" @click="selectLocation(location.id, location.Name)">{{location.Name}}</li>

                <li v-if="loadingstatus" class="loading-li"></li>
                <li v-if="loadingstatus" class="loading-li"></li>
                <li v-if="loadingstatus" class="loading-li"></li>
            </ul>
        </transition>
    </main>
</template>

<style scoped>

.slide-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.slide-enter-active {
    transition: opacity 500ms ease, transform 300ms ease;
    overflow: hidden;
}
.header input {
    @apply w-[80%] h-[2.2rem] pl-9 pr-2 bg-gray-100 border border-zinc-200 rounded;
    @apply outline-none tracking-wide placeholder:text-neutral-400 text-sm;
    @apply hover:border-orange-300 focus:border-orange-300;
}
.list-counties li {
    @apply w-full py-1 text-sm px-4 tracking-wider cursor-pointer hover:bg-zinc-100;
}
.sub-group li {
    @apply hover:bg-zinc-100 py-1.5 px-4 cursor-pointer tracking-wide;
}
.loading-li {
    @apply h-[2rem];
    animation: pulse 1s infinite linear;
}
@keyframes pulse {
    0% {
        @apply bg-zinc-50;
    }
    50% {
        @apply bg-zinc-100;
    }
    100% {
        @apply bg-zinc-50;
    }
}
</style>