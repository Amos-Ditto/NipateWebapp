<script setup lang="ts">
import { Locations } from '~~/types/LocationTypes';

const config = useRuntimeConfig();

const pageerror = ref<boolean>(false);

const validatingdetails = ref<boolean>(false);
const togglemoreformdata = ref<boolean>(false);
const selectlocation = ref<boolean>(false);

// Api data
const apicounties = ref<Locations[]>([]);
// Form user data
const user_number = ref<string>('');
const id_number = ref<number>();
const f_name = ref<string>('');
const l_name = ref<string>('');

// Methods

const createUser = async (type:void) => {
    validatingdetails.value = true;
    setTimeout(() => {
        validatingdetails.value = false;
        togglemoreformdata.value = true;
    }, 500);
    console.log('submit');
}
const postMoreUserDetails = async(type: void) => {
    console.log('more data');
    
}
const openLocationSelect = (): void => {
    selectlocation.value = true;
}
const toggleLocationSelect = (): void => {
    selectlocation.value = !selectlocation.value;
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

const fetchCountyLocations = async (type:void) => {
    await fetch(`${config.base_Url}/location/counties/`)
    .then((res) => {
        return res.json();
    })
    .then(response => {
        apicounties.value = response;
    })
    .catch(error => {
        pageerror.value = true;
        console.log(error);
    })
};
const fetchApiData = async (type:void) => {
    fetchCountyLocations();
};
fetchApiData();
</script>
<template>
    <main class="w-full h-screen fixed top-0 m-0 bg-gray-100 overflow-y-auto">
        <div class="overflow-y-auto h-full w-full">
            <div class="top-bar w-full h-[4rem] bg-white border-b border-gray-200 flex flex-row items-center justify-between px-4 md:px-20">
                <div class="logo-label flex flex-row gap-4 items-center px-6 sm:px-2">
                    <img src="@/assets/img/Logo/Vector.svg" alt="img" class="h-[2.2rem] md:h-[2.4rem] hidden sm:block">
                    <img src="@/assets/img/Logo/Nipate.svg" alt="label name" class="h-[1.8rem] md:h-[2.1rem] pt-1 md:pt-2">
                </div>
            </div>
            <section class="w-full px-4 sm:px-2 flex flex-col items-center py-4">
                <div class="header w-full md:w-[750px] lg:w-[780px] sm:w-[600px] min-h-[4.5rem] sm:min-h-[5.4rem] bg-white border border-neutral-200 rounded-t flex justify-start gap-2 px-2 sm:px-6 md:px-10 pt-4 flex-col">
                    <h3 class="text-neutral-600 text-base sm:text-2xl tracking-wide font-semibold sm:font-thin w-full">Register To <span class="text-orange-600">N</span>ipate.</h3>
                    <div class="header-body w-[60%] text-start text-neutral-500 indent-1 text-xs sm:text-base">
                        Join <span class="text-orange-600">N</span>ipate to easily get services or 
                        offer services to our customers
                    </div>
                </div>
    
                <div class="context w-full md:w-[750px] lg:w-[780px] sm:w-[600px] flex-wrap-reverse sm:flex-wrap flex justify-between items-start flex-row pt-4 sm:pt-8 pb-8 pr-4 gap-4 sm:gap-0">
                    <div class="form w-full sm:w-[50%] px-2 flex flex-col gap-4 sm:gap-6 relative">
                        <form  @submit.prevent="createUser()" class=" w-full flex flex-col gap-4 sm:gap-6 relative" v-if="!togglemoreformdata">
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Mobile Number</label>
                                <div class="input-phone gap-1">
                                    <div class="county-code h-full w-[30%] gap-1 bg-white text-neutral-500 flex flex-row items-center text-xs italic sm:text-sm border border-zinc-200 px-1 py-2 rounded-l">
                                        <span class="w-[40%] h-full flex items-center"><img src="@/assets/img/bg-img/Flag-of-Kenya.svg" alt="" class="w-full h-full"></span>
                                        <p>+254</p>
                                    </div>
                                    <input type="text" placeholder="e.g 794818111">
                                </div>
                            </div>
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">ID Number/Passport ID</label>
                                <div class="input">
                                    <input type="text" placeholder="enter your ID Number/Passport id">
                                </div>
                            </div>
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">First Name</label>
                                <div class="input">
                                    <input type="text" placeholder="your first name">
                                </div>
                            </div>
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Last name</label>
                                <div class="input">
                                    <input type="text" placeholder="your last name">
                                </div>
                            </div>

                            <div class="submit-btn w-full px-2 pt-3 sm:pt-1 flex flex-row gap-4 z-20">
                                <button type="submit" class="bg-orange-400 hover:bg-orange-500 rounded-full px-6 py-1 text-white font-bold">Continue</button>
                                <UtilsLoadingSpinner class="h-[4px] w-[4px] scale-75" v-if="validatingdetails" />
                            </div>
                        </form>
                        <form  @submit.prevent="postMoreUserDetails()" class=" w-full flex flex-col gap-4 sm:gap-6 relative" v-if="togglemoreformdata" >
                            
                            <div class="input-field w-full flex-col flex items-start gap-1 relative">
                                <label for="location" class="text-neutral-500 text-sm tracking-wide px-2">Location/Region</label>
                                <div class="input">
                                    <button @click="openLocationSelect">select your location</button>
                                    <!-- <input id="location" type="text" placeholder="select your location" @focus="openLocationSelect"> -->
                                    <div class="i-mdi-chevron-down absolute right-0 translate-x-[-150%] text-lg" />
                                </div>
                                <transition name="selectlocation" @enter="enter" @after-enter="afterEnter" @leave="leave">
                                    <div class="dropdown-container w-[84%] sm:w-full shadow-md absolute bottom-0 translate-y-[104%] bg-white min-h-[5rem] rounded z-20" v-if="selectlocation">
                                        <div class="close-btn z-20 absolute right-0 top-0 translate-y-[25%] translate-x-[-50%] flex items-center justify-center bg-slate-200 rounded-full p-1 cursor-pointer" @click="toggleLocationSelect">
                                            <div class="i-mdi-close text-base" />
                                        </div>
                                        <LocationsLocationDropDownSelect :apicounties="apicounties" />
                                    </div>
                                </transition>
                            </div>
                            <div class="class-input-field w-full flex-col flex items-start gap-1">
                                <label for="gender" class="text-neutral-500 text-sm tracking-wide px-2">Your Gender</label>
                                <div class="radio px-4 py-2 text-sm font-bold tracking-wide text-neutral-500 grid grid-cols-2 gap-4">
                                    <div class="grid grid-cols-2">
                                        <input type="radio" name="gender" id="male">
                                        <label for="male" class="cursor-pointer">Male</label>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <input type="radio" name="gender" id="female">
                                        <label for="female" class="cursor-pointer">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="password" class="text-neutral-500 text-sm tracking-wide px-2">Password</label>
                                <div class="input">
                                    <input id="password" type="text" placeholder="your password">
                                </div>
                            </div>
                            <div class="input-field w-full flex-col flex items-start gap-1">
                                <label for="c-password" class="text-neutral-500 text-sm tracking-wide px-2">Confirm Password</label>
                                <div class="input">
                                    <input id="c-password" type="text" placeholder="confirm password">
                                </div>
                            </div>

                            <div class="submit-btn w-full px-2 pt-3 sm:pt-1 flex flex-row gap-4 z-20">
                                <button type="submit" class="bg-orange-400 hover:bg-orange-500 rounded-full px-6 py-1 text-white font-bold">Register now</button>
                                <UtilsLoadingSpinner class="h-[4px] w-[4px] scale-75" v-if="validatingdetails" />
                            </div>
                        </form>
                        <div class="loading-bg absolute w-full h-full bg-zinc-100 opacity-40 top-0 z-10" v-if="validatingdetails">

                        </div>
                    </div>
                    <div class="content-container w-[88%] sm:w-[40%] min-h-[3.4rem] sm:min-h-[12rem] h-full flex flex-col items-center sm:justify-start justify-center bg-white border border-zinc-200 rounded py-2 gap-2 relative">
                        <div class="container-header hidden w-full px-4 bg-inherit min-h-[2rem] text-center sm:flex justify-center items-center">
                            <h3 class="text-neutral-500 text-base font-semibold">Hi, Welcome to <span class="text-orange-600">N</span>ipate</h3>
                        </div>
                        <hr class="hidden sm:block w-full">
                        <div class="have-account flex flex-row items-center w-full text-neutral-500 italic sm:text-xs sm:whitespace-nowrap md:text-sm px-4 sm:absolute sm:bottom-1 sm:border-t sm:border-zinc-100">
                            <h3 class="flex items-center">
                                Already have an Account?
                                <button class="ml-[1px] text-orange-600 font-bold p-1 tracking-wide text-lg">
                                    <NuxtLink to="/auth">Login</NuxtLink>
                                </button>
                            </h3>
                        </div>
                    </div>
                </div>
    
    
                <div class="back-btn fixed bottom-[9%] right-[3%] sm:left-[4%] bg-white w-[2.5rem] h-[2.4rem] rounded-[50%] border-[3px] border-neutral-300 flex items-center justify-center hover:bg-neutral-300">
                    <div class="i-mdi-chevron-left text-neutral-500 text-4xl" />
                    <div class="hover-back absolute top-[-120%] px-4 py-1 bg-neutral-300 flex items-center justify-center rounded invisible opacity-0">
                        <p class="text-neutral-800 text-xs font-bold tracking-tight">back</p>
                        <div class="arrow-d absolute bottom-0 bg-inherit w-[1rem] h-[1rem] translate-y-[50%] rotate-45 -z-10">
    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.selectlocation-enter-from, .selectlocation-leave-to {
    opacity: 0;
}
.selectlocation-enter-active, .selectlocation-leave-active {
    transition: height 250ms ease, opacity 300ms;
}
.header {
    background-image: url('@/assets/img/bg-img/undraw_work_chat_re_qes4.svg');
    background-position: 100% 90%;
    background-size: 40% 80%;
    background-repeat: no-repeat;
    transition: width 300ms;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}
.container-header {
    background-image: url('@/assets/img/Logo/Vector.svg');
    background-position: 0% 90%;
    background-size: 20% 90%;
    background-repeat: no-repeat;
}
.back-btn {
    transition: background-color 300ms;
    cursor: pointer;
}
.hover-back {
    transition: visibility 300ms ease, opacity 400ms;
}
.back-btn:hover .hover-back {
    @apply visible opacity-100;
}
.input-field .input {
    @apply relative text-neutral-500 w-[84%] sm:w-full flex items-center;
}
.input-field .input input , .input-field .input button {
    @apply bg-white h-[2.6rem] w-full border border-gray-200 rounded outline-none px-4;
    @apply placeholder:text-sm italic hover:border-orange-400 focus:border-orange-400 tracking-wide;
    @apply flex text-start items-center;
    transition: border 300ms ease;
}
.input-field .input-phone {
    @apply relative text-neutral-500 w-[84%] sm:w-full flex items-center;
}
.input-field .input-phone input {
    @apply bg-white h-[2.3rem] w-full border border-gray-200 rounded-r outline-none pl-2 pr-4;
    @apply placeholder:text-sm italic hover:border-orange-400 focus:border-orange-400 tracking-wide;
    transition: border 300ms ease;
}
.input-field .input-phone:focus-within .county-code {
    @apply border-orange-400;
}
.county-code {
    transition: border 300ms;
}
.submit-btn button {
    transition: background-color 300ms ease;
}
.dropdown-container .close-btn:hover .i-mdi-close {
    @apply scale-125;
}
.i-mdi-close {
    transition: transform 300ms;
}
</style>