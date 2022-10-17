<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type UserRegister from '../../../Types/UserRegister';
import type { County } from '../../../Types/GeneralTypes';
import fetchCounties from '../../../composables/Api/FetchLocationCounties';
import { useRouter } from 'vue-router';
import useAuthentications from '../../../store/authentications';

const base_url = import.meta.env.VITE_BASE_URL;
const router = useRouter();
const storeauth = useAuthentications();

const props = defineProps<{
    userinitialdata: UserRegister;
}>();

// User data
const userdata = ref<{
    UserID: number
    GenderID: string
    password: string
}>({UserID: parseInt(localStorage.getItem('nipate_user_id') || props.userinitialdata.id.toString()), GenderID: '1', password: ''});

// Form data
const county = ref<County>({id: 0, Name: 'Select'});
const counties = ref<County[]>([]);
const validlocation = ref<boolean>(true);

const opencounty = ref<boolean>(false);
const see_password = ref<boolean>(false);

const closeSelectCounty = (): void => {opencounty.value=false}
const openSelectCounty = (): void => {opencounty.value=true}

// Fetched counties for selecting location Field
const fetchCountiesList = async (type: void ) => {
    counties.value = await fetchCounties(`${base_url}location/counties`);
    
}
onMounted(() => fetchCountiesList());
const onCountyChange = (event: Event): void => {
        opencounty.value=true;
}
const selectLocaction = (select_id: number): void => {
    validlocation.value = true;
    for(let i=0; i<counties.value.length; i++) {
        if(counties.value[i].id === select_id) {
            county.value = counties.value[i];
            break
        }
    }
    closeSelectCounty();
}

// Api Submit data
const submitstatus = ref<boolean>(false);

const submitOtherDetails = async (): Promise<void> => {
    if(county.value.id === 0) {
        validlocation.value = false;
        return;
    }
    submitstatus.value = true;
    const response = await fetch(`${base_url}auth/register`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserID: userdata.value.UserID,
            LocationID: county.value.id,
            GenderID: parseInt(userdata.value.GenderID),
            password: userdata.value.password
        })
    })

    submitstatus.value = false;

    if(response.status === 201) {
        let data = await response.json();
        console.log(data);
        
        localStorage.removeItem('nipate_user_id');
        storeauth.updateUser(data);
        
        // Save User to LocalStorage
        localStorage.setItem("Nipate_user_data", JSON.stringify(data));
        checkUserDetails(data['Auth_token']);
        router.push({name: 'Dashboard'});
    } else {
        let error = await response.json();
        console.log(error);
    }

    // emit('toggleFinishRegistration');
}

const checkUserDetails = async (auth_token: string): Promise<void> => {
  await fetch(`${base_url}provider/status`, {
    method: 'GET',
    headers: {
      "Authorization": auth_token || ""
    }
  })
  .then(async response => {
    storeauth.updateAuthentication(true);
    storeauth.updateUserDetails(await response.json());
    console.log(storeauth.UserDetails);
    
  })
  .catch(error => { console.log(error) })
}

</script>
<template>
    <form 
        @submit.prevent="submitOtherDetails"
        class="w-[96%] md:w-[600px] px-2 pt-2 sm:pt-10 pb-4 flex flex-col items-start sm:items-center justify-start sm:justify-center transition-all duration-300"
    >
        <h3 class="text-[#346974] text-3xl sm:text-2xl font-light transition-font duration-300">Register as a User</h3>
        <div class="input-fields w-full sm:w-[80%] flex flex-col gap-y-11 sm:gap-y-8 pt-14 sm:pt-12 transition-all duration-300">
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="county" class="text-[#346974] text-base font-semibold tracking-wide">Your Region/County</label>
                <div class="input w-full flex flex-col relative items-center justify-center">
                    <button type="button" id="county" class="w-full rounded justify-start flex" :class="validlocation ? 'border-gray-300' : 'border-tomato'" @click="onCountyChange">{{county.Name}}</button>
                    <div class="i-mdi-chevron-down absolute right-2 cursor-pointer hover:rotate-180 transition-transform duration-300 text-xl" @click="openSelectCounty" :class="opencounty && 'rotate-180'"></div>
                    <Transition name="drop-down">
                        <div class="drop-down-loc absolute px-0 py-1 -top-1/4 left-1/4 right-1/4 min-h-4 max-h-[15rem] bg-gray-50 rounded flex flex-col z-30 overflow-y-auto" v-if="opencounty">
                            <div class="close absolute z-40 top-1 right-3 p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full text-slate-600" @click="closeSelectCounty">
                                <div class="i-mdi-close"></div>
                            </div>
                            <ul class="w-full flex flex-col max-h-[15rem] overflow-y-auto pb-1">
                                <li v-for="(countyitem, index) in counties"
                                    :key="countyitem.id" @click="selectLocaction(countyitem.id)"
                                ><div class="i-mdi-map-marker"></div> {{countyitem.Name}}</li>
                            </ul>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="gender" class="text-[#346974] text-base font-semibold tracking-wide">Gender</label>
                <div class="input w-full flex flex-col relative items-center justify-center">
                    <select name="gender" id="gender" v-model="userdata.GenderID">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="password" class="text-[#346974] text-base font-semibold">Password</label>
                <div class="input w-full flex flex-row items-center gap-x-1 relative">
                    <input :type="see_password ? 'text' : 'password'" name="password" id="password" required
                        class="w-full rounded" v-model="userdata.password"
                    >
                    <div class="show-password absolute right-2 p-4 sm:py-3 cursor-pointer" @click="see_password = !see_password">
                        <Transition name="slide" mode="out-in">
                            <div class="i-mdi-eye-off text-slate-600" v-if="see_password"></div>
                            <div class="i-mdi-eye text-slate-600" v-else="see_password"></div>
                        </Transition>
                    </div>
                </div>
            </div>
            <div class="submit-btns w-full flex flex-row items-center pt-6 pb-2 justify-between">
                <div class="progres-bar flex flex-row items-center gap-x-2">
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-orange-400"></div>
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-orange-400"></div>
                </div>
                <button type="submit"
                    class="min-w-[9.1rem] px-8 py-2 text-lg font-bold tracking-wide text-slate-100 bg-orange-600 rounded \
                    hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center"
                >
                    <Transition name="slide" mode="out-in">
                        <span v-if="!submitstatus">Finish</span>
                        <span class="loader" v-else="submitstatus" ></span>
                    </Transition>
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped>

input {
    @apply outline-none focus:border-blue-300;
}
.input select {
    @apply w-full py-3 bg-gray-100 border border-gray-300 px-3 rounded outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}
.input #password,
.input #county  {
    @apply py-3 sm:py-2.5 bg-gray-100 border px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}

.county-list ul li , .drop-down-loc ul li {
    @apply flex flex-row gap-x-1 items-center text-sm text-[#346974] py-2 px-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200;
}
.county-list ul li .i-mdi-map-marker,
.drop-down-loc ul li .i-mdi-map-marker {
    @apply text-slate-400 text-sm;
}

.drop-down-loc {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.drop-down-enter-from {
    @apply w-1/2 h-1/2 opacity-0 translate-y-0;
}
.drop-down-leave-to {
    @apply opacity-0
}
.drop-down-enter-active , .drop-down-leave-active {
    transition: width 300ms ease, height 300ms ease, opacity 300ms ease, transform 300ms ease;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(3px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-3px);
}

.loader {
    width: 28px;
    height: 28px;
    /* border: 3px solid #FFF;
    border-bottom-color: #abc; */
    @apply border-[5px] border-slate-100 border-b-gray-400;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

::-webkit-scrollbar {
    width: 2px;
    height: 1px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>