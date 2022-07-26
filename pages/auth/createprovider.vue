<script setup lang="ts">
const router = useRouter();
const selectproducts = ref<boolean>(false);

const openProductSelect = ():void => {
    selectproducts.value = true;
};
const closeProductSelect = (): void => {
    selectproducts.value = false;
}

const routeBack = ():void => {
    router.back();
}
</script>
<template>
    <main class="w-full h-screen fixed top-0 m-0 bg-gray-100">
        <div class="overflow-y-auto h-full w-full">
            <div class="top-bar w-full h-[4rem] bg-white border-b border-gray-200 flex flex-row items-center justify-between px-4 md:px-20">
                <div class="logo-label flex flex-row gap-4 items-center px-6 sm:px-2">
                    <img src="@/assets/img/Logo/Vector.svg" alt="img" class="h-[2.2rem] md:h-[2.4rem] hidden sm:block">
                    <img src="@/assets/img/Logo/Nipate.svg" alt="label name" class="h-[1.8rem] md:h-[2.1rem] pt-1 md:pt-2">
                </div>
            </div>
            <section class="w-full px-4 sm:px-2 flex flex-col items-center py-4">
                <div class="header w-full md:w-[750px] lg:w-[780px] sm:w-[600px] h-[4.5rem] sm:h-[5.4rem] bg-white border border-neutral-200 rounded-t flex items-center px-2 sm:px-6 md:px-10">
                    <h3 class="text-neutral-600 text-base sm:text-2xl tracking-wide font-thin">Create Provider Account Today!</h3>
                </div>
    
                <div class="context w-full md:w-[750px] lg:w-[780px] sm:w-[600px] flex-wrap-reverse sm:flex-wrap flex justify-between items-start flex-row pt-8 pb-8 pr-4 gap-8 sm:gap-0">
                    <div class="form w-full sm:w-[50%] px-2 flex flex-col gap-8">
                        <div class="input-field w-full flex-col flex items-start gap-1 relative">
                            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Product/Service to offer</label>
                            <div class="input">
                                <input type="text" placeholder="select products or service" @focus="openProductSelect">
                                <!-- <input type="search"> -->
                                <div class="i-mdi-chevron-down absolute right-0 translate-x-[-150%] text-lg" :class="selectproducts && 'rotate-180'" />
                            </div>
                            <div class="dropdown-container w-[84%] sm:w-full absolute bottom-0 translate-y-[110%] bg-white min-h-[5rem] rounded z-20" :class="selectproducts ? 'visible opacity-100' : 'invisible opacity-0'">
                                <div class="close-btn absolute right-0 top-0 translate-y-[25%] translate-x-[-50%] flex items-center justify-center bg-slate-200 rounded-full p-1 cursor-pointer" @click="closeProductSelect">
                                    <div class="i-mdi-close" />
                                </div>
                            </div>
                        </div>
                        <div class="input-field w-full flex-col flex items-start gap-1">
                            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Location/Region</label>
                            <div class="input">
                                <input type="text" placeholder="select location for offering services">
                                <div class="i-mdi-chevron-down absolute right-0 translate-x-[-150%] text-lg" />
                            </div>
                        </div>
                        <div class="input-field w-full flex-col flex items-start gap-1">
                            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Available on this Days</label>
                            <div class="checkboxes w-[88%] flex flex-wrap gap-x-2 gap-y-1">
                                <div class="checkbox-option flex flex-row items-center w-full px-2 gap-6">
                                    <label class="">
                                        <input type="checkbox" class="w-[2rem] h-[1rem]">
                                        <span class="text-base">All</span>
                                    </label>
                                    <p class="text-neutral-400 italic">or</p>
                                </div>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Mon</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Tue</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Wed</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Thur</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Fri</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Sat</span>
                                </label>
                                <label>
                                    <input type="checkbox">
                                    <span class="text-sm">Sun</span>
                                </label>
                            </div>
                        </div>
                        <div class="input-field w-full flex-col flex items-start gap-1">
                            <label for="product" class="text-neutral-500 text-sm tracking-wide px-2">Description (optional)</label>
                            <div class="input">
                                <textarea cols="30" rows="3" placeholder="Enter brief but descriptive about your services"></textarea>
                            </div>
                        </div>
                        <div class="submit-btn w-full px-2">
                            <button class="bg-blue-400 hover:bg-blue-600 rounded-full px-6 py-1 text-white font-bold">create now</button>
                        </div>
                    </div>
                    <div class="content-card w-[90%] sm:w-[40%] bg-white rounded min-h-[10rem] sm:min-h-[20rem] px-4 py-4 flex flex-col">
                        <div class="user-title w-full text-neutral-500 font-bold text-base px-4 pb-1">
                            <p>Your <span class="text-orange-600 tracking-wider">N</span>ipate Account</p>
                        </div>
                        <hr>
                        <div class="user-data flex flex-col w-full px-2 pt-1 gap-1">
                            <p class="text-neutral-400 tracking-tight text-xs">You'll use this details to create provider account.</p>
                            <div class="name flex flex-row items-center gap-2 w-full">
                                <h3 class="text-neutral-600 text-sm font-bold tracking-tight">First name:</h3>
                                <h3 class="text-neutral-500 text-lg tracking-widest name-tag">Amos</h3>
                            </div>
                            <div class="name flex flex-row items-center gap-2 w-full">
                                <h3 class="text-neutral-600 text-sm font-bold tracking-tight">Last name:</h3>
                                <h3 class="text-neutral-500 text-lg tracking-widest name-tag">Kipyegon</h3>
                            </div>
                            <div class="name flex flex-row items-center gap-2 w-full">
                                <h3 class="text-neutral-600 text-sm font-bold tracking-tight">Phone Number:</h3>
                                <h3 class="text-neutral-500 text-lg tracking-widest name-tag">0794818111</h3>
                            </div>
                        </div>
                        <div class="change-btn pt-4">
                            <button class="bg-blue-400 hover:bg-blue-600 rounded-full px-6 py-1 text-white font-bold tracking-wide">change account</button>
                        </div>
                    </div>
                </div>
    
    
                <div class="back-btn fixed bottom-[9%] right-[3%] bg-white w-[2.5rem] h-[2.4rem] rounded-[50%] border-[3px] border-neutral-300 flex items-center justify-center hover:bg-neutral-300" @click="routeBack">
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
.header {
    background-image: url('@/assets/img/bg-img/undraw_interaction_design_odgc.svg');
    background-position: 100% 90%;
    background-size: 40% 80%;
    background-repeat: no-repeat;
    transition: width 300ms;
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
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
.input-field .input input {
    @apply bg-white h-[2.3rem] w-full border border-gray-200 rounded outline-none px-4;
    @apply placeholder:text-sm italic;
}
.input-field .input textarea {
    @apply bg-white w-full border border-gray-200 rounded outline-none px-4 py-2 text-sm;
    @apply placeholder:text-sm italic;
}
.input-field .dropdown-container {
    transition: visibility 300ms ease, opacity 300ms ease;
}
/* .input-field:focus-within .dropdown-container {
    @apply visible opacity-100;
} */
.checkboxes label {
    @apply flex flex-row items-center text-neutral-500;
    @apply text-sm tracking-wide hover:bg-slate-100 px-2 py-2 cursor-pointer;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.2em;
}
.checkbox-option label {
    @apply flex flex-row items-center text-neutral-500;
    @apply text-sm tracking-wide hover:bg-slate-100 px-2 py-2 cursor-pointer;
    display: grid;
    grid-template-columns: 1.5em auto;
    gap: 0.8em;
}
/* .input-field .input:focus-within .i-mdi-chevron-down {
    @apply rotate-180;
} */
.i-mdi-chevron-down {
    transition: transform 300ms;
}
.name-tag {
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
}
.submit-btn button {
    transition: background-color 300ms;
}
.dropdown-container .close-btn:hover .i-mdi-close {
    @apply scale-125;
    transition: transform 300ms;
}
@media (max-width: 600px) {
    .header {
        background-size: 30% 50%;
    }
    .checkboxes label {
        grid-template-columns: .8em auto;
        gap: 0.2em;
    }
    .checkbox-option label {
        @apply flex flex-row items-center text-neutral-500;
        @apply text-sm tracking-wide hover:bg-slate-100 px-2 py-2 cursor-pointer;
        display: grid;
        grid-template-columns: 1.5em auto;
        gap: 0.8em;
    }
}
</style>