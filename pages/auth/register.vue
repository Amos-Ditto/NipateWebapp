<script setup lang="ts">
const routes = useRoute();

console.log(routes.name);

const toggleforms = ref<boolean>(false);
const apiloading = ref<boolean>(false);
const selectlocation = ref<boolean>(false);

const toggleForm = ():void => {
    toggleforms.value = !toggleforms.value;
}
// First initail account creation form
const submitInitialDetails = () => {
    console.log("Submitted");
    setTimeout(() => {
        toggleForm();
    }, 1000);
}

const submitFinalDetails = ():void => {
    console.log("Finally");
    setTimeout(() => {
        toggleForm();
    }, 1000);
}

const openLocationDropDown = ():void => {
    selectlocation.value = !selectlocation.value;
}

// Transition Methods
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
    <main class="w-full flex justify-center items-center flex-col px-0 xs:px-4">
        <div class="hero">
            <h1>Register account</h1>
        </div>
        <section class="forms">
            <div class="status-bar">
                <div class="round-bar bg-orange-400"></div>
                <div class="round-bar" :class="toggleforms ? 'bg-orange-400' : 'bg-white'"></div>
            </div>
            <transition name="transition-forms">
                <form @submit.prevent="submitInitialDetails" class="initial-form" v-if="!toggleforms">
                    <div class="input-field">
                        <label for="phonenumber">Mobile Number</label>
                        <div class="input-number">
                            <button>
                                <img src="@/assets/img/bg-img/Flag-of-Kenya.svg" alt=" ">
                                <span>+254</span>
                            </button>
                            <input type="text" id="phonenumber" name="phonenumber" placeholder="eg 712345678">
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="idnumer">ID Number</label>
                        <div class="input">
                            <input type="number" id="idnumber" name="idnumber">
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="fname">First Name</label>
                        <div class="input">
                            <input type="text" id="fname" name="fname" class="focus:border-blue-400">
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="lname">Last Name</label>
                        <div class="input">
                            <input type="text" id="lname" name="lname">
                        </div>
                    </div>
                    <div class="sumbmit-form">
                        <button type="submit">
                            Continue
                            <span class="loader w-5 h-5 border-4 border-white" v-if="apiloading"></span>
                        </button>
                    </div>
                </form>
            </transition>
            <transition name="transition-forms">
                <form @submit.prevent="submitFinalDetails" class="initial-form" v-if="toggleforms">
                    <div class="input-field relative">
                        <label for="area-location">Your Location</label>
                        <div class="input">
                            <button type="button" id="area-location" autocomplete="off" @click="openLocationDropDown">select your location</button>
                            <div class="icon-drop-down" @click="openLocationDropDown">
                                <div class="i-mdi-chevron-down text-2xl" :class="selectlocation && 'rotate-180'"></div>
                            </div>
                        </div>
                        <transition name="showdropdown" @enter="enter" @after-enter="afterEnter" @leave="leave">
                            <div class="location-drop-down" v-if="selectlocation">
                                <div class="county w-[45%] xs:w-[40%] h-full border-r border-gray-200 pb-2">
                                    <div class="county-context overflow-y-auto w-full py-2 pl-1 xs:pl-3 pr-2 h-full flex flex-col gap-1">
                                        <input type="text" autocomplete="off" id="county-loc" placeholder="region nearby">
                                        <button>
                                            <div class="i-mdi-map-marker"></div>
                                            Nakuru
                                        </button>
                                        <button>
                                            <div class="i-mdi-map-marker"></div>
                                            Nairobi
                                        </button>
                                        <button>
                                            <div class="i-mdi-map-marker"></div>
                                            Baringo
                                        </button>
                                    </div>
                                </div>
                                <div class="towns h-full xs:w-[55%]">
                                    <div class="towns-context overflow-y-auto w-full py-2 pl-3 pr-2 h-full flex flex-col gap-2">
                                        <input type="text" autocomplete="off" id="town-loc" placeholder="area nearby">
                                        <button>
                                            Nakuru
                                        </button>
                                        <button>Nakuru Nakuru</button>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="input-field">
                        <label for="gender">Gender</label>
                        <div class="input">
                            <select name="gender" id="gender">
                                <option value="">select your gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="password">Password</label>
                        <div class="input">
                            <input type="password" id="password" name="password">
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="cpassword">Confirm Password</label>
                        <div class="input">
                            <input type="password" id="cpassword" name="cpassword">
                        </div>
                    </div>
                    <div class="sumbmit-form">
                        <button type="submit">
                            Finish
                            <span class="loader w-5 h-5 border-4 border-white" v-if="apiloading"></span>
                        </button>
                    </div>
                </form>
            </transition>
        </section>
    </main>
</template>

<style scoped>

.transition-forms-enter-from {
    @apply opacity-0;
}
.transition-forms-leave-to {
    @apply opacity-0 hidden overflow-hidden;
}
.transition-forms-enter-active {
    transition: opacity 300ms;
    overflow: hidden;
}
.hero {
    @apply w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[4rem] xs:h-[6rem] sm:bg-gray-50 sm:rounded-md;
    @apply flex justify-center items-center px-4;
    transition: width 300ms;
}

.hero h1 {
    @apply font-bold italic text-2xl sm:text-4xl text-slate-600;
}

section.forms {
    @apply w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-2 xs:px-8 py-4 flex flex-col gap-6 justify-center items-center;
    transition: width 300ms;
}
form.initial-form {
    @apply w-full md:w-[80%] flex flex-col gap-1 sm:gap-2 md:gap-3;
    transition: width 300ms;
}

.input-field {
    @apply w-full sm:w-[500px] md:w-[600px] flex justify-start items-start px-2 py-1 gap-3 flex-col;
    transition: width 300ms
}
.input-field label {
    @apply px-4 text-slate-500 font-bold text-lg w-full text-left;
}

.input-field .input-number {
    @apply w-full flex flex-row items-center justify-start gap-2 relative;
}
.input-field .input {
    @apply w-full sm:w-[445px] h-[2.6rem] xs:h-[3rem] flex flex-row items-center gap-2 relative;   
}

.input-field .input-number button {
    @apply sm:w-[80px] h-[2.6rem] xs:h-[3rem] px-2 flex items-center justify-between gap-1 text-sm text-neutral-500;
    @apply border border-gray-300 bg-gray-50 text-base xs:text-lg italic tracking-wide font-bold rounded-l-md;
}
.input-field .input-number button img {
    @apply w-[20px] h-full;
}
.input-field .input-number input {
    @apply w-[80%] sm:w-[360px] h-[2.6rem] xs:h-[3rem] bg-gray-50 border border-gray-300 pl-4;
    @apply text-lg xs:text-xl placeholder:italic tracking-wider text-neutral-600 rounded-r-md outline-none;
    @apply focus:border-blue-400;
    transition: border 300ms;
}
.input-field .input input , .input-field .input select , .input-field .input button {
    @apply w-full h-full bg-gray-50 pl-4 flex items-center justify-start;
    @apply text-lg xs:text-xl placeholder:italic tracking-wider text-neutral-600 rounded-md outline-none;
    @apply focus:border-blue-400 border border-gray-300;
    transition: border 300ms;
}

.sumbmit-form {
    @apply px-2 pt-8 w-full sm:w-[445px] flex items-center justify-start;
}
.sumbmit-form button {
    @apply min-w-[8rem] py-2 px-12 text-xl font-bold bg-orange-400 text-white rounded-md;
    @apply hover:bg-orange-500 flex items-center gap-2 justify-center;
    transition: background-color 300ms , w-dth 300ms;
}

.status-bar {
    @apply w-full flex items-center justify-center flex-row gap-3;
}
.round-bar {
    @apply w-[8px] h-[8px] rounded-full;
}

.input .icon-drop-down {
    @apply  absolute right-0 w-[42px] sm:w-[50px] rounded-r-md h-full flex items-center justify-center bg-gray-200;
    @apply cursor-pointer hover:bg-gray-300;
    transition: background-color 300ms;
}
.input .icon-drop-down .i-mdi-chevron-down {
    transition: transform 300ms;
}
.location-drop-down {
    @apply w-[96%] sm:w-[445px] z-20 shadow-md absolute bottom-0 translate-y-[101%] h-[12rem] xs:h-[15rem] bg-gray-50 flex justify-between flex-row gap-0.5 xs:gap-1 border border-gray-200;
}
.county .county-context button {
    @apply w-full px-1 xs:px-2 py-1 flex gap-1 xs:gap-2 items-center justify-start tracking-wide text-neutral-500 text-base xs:text-lg hover:bg-gray-200;
    transition: background-color 300ms;
}
.county .county-context button .i-mdi-map-marker {
    @apply text-base text-neutral-400;
}
.county .county-context input , .towns .towns-context input {
    @apply px-0.5 xs:px-2 tracking-wide italic text-slate-600 text-base outline-none sticky top-0 w-full z-20 border border-gray-200 py-0.5 rounded-sm;
}
.towns-context button {
    @apply w-full hover:bg-gray-200 px-2 xs:px-4 h-[2rem] flex items-center truncate text-base text-neutral-500;
    transition: background-color 300ms;
}

.showdropdown-menu-enter-from {
    @apply opacity-0;
}
.showdropdown-menu-enter-active {
    transition: height 300ms ease , opacity 400ms;
    overflow: hidden;
}
/* Loader style */
.loader {
    border-bottom-color: transparent;
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
</style>