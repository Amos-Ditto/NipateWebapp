<script setup lang="ts">

const mobiledropdowncontext = ref<boolean>(false);

const toggleMobileDropDownMenu = (): void => {
    mobiledropdowncontext.value = !mobiledropdowncontext.value;
}

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
const printOut = ():void => {
    console.log("click register");
    
}
</script>
<template>
    <main class="w-full flex-col flex justify-center items-center gap-4">
        <header class="min-h-[3.6rem] sm:min-h-[4.8em] flex items-center justify-center bg-orange-400 w-full relative">
            <PageFeauturesNavBar @toggle-menu-visibility="toggleMobileDropDownMenu" />
            <transition name="open-mobile-menu" @enter="enter" @after-enter="afterEnter" @leave="leave">
                <div class="menu-drop-down-features" v-if="mobiledropdowncontext">
                    <div class="toggling-area top-0 bottom-0 right-0 left-0 absolute bg-transparent" @click="toggleMobileDropDownMenu"></div>
                    <div class="mobile-menu-context">
                        <ul class="w-full flex flex-col gap-1 py-2" @click="toggleMobileDropDownMenu">
                            <li @click="printOut">Register</li>
                            <li>Login</li>
                            <li>My account</li>
                            <li>Provider Account</li>
                        </ul>
                    </div>
                </div>
            </transition>
        </header>
        <main class="w-full lg:w-[84%]">
            <slot></slot>
        </main>
        <footer class="w-full flex flex-col items-center text-neutral-600 px-4 pt-4">
            <div class="company-details flex flex-col justify-start sm:justify-center w-full sm:flex-row gap-x-4">
                <h3 class="font-bold">Copyright @2022 Bespoke Systems</h3>
                <h3 class="underline decoration-gray-400">Trademark Policy</h3>
                <h3 class="underline decoration-gray-400">Terms of Service</h3>
            </div>
        </footer>
    </main>
</template>

<style scoped>

header {
    transition: height 300ms ease;
}
main {
    transition: width 300ms;
}

/* Transitions */

.open-mobile-menu-enter-from {
    @apply opacity-100;
}
.open-mobile-menu-enter-active {
    transition: height 300ms;
}

.mobile-menu-context {
    @apply absolute top-0 right-1.5 min-h-[6rem] sm:min-h-[8rem] w-[12rem] sm:w-[16rem] bg-gray-200 rounded-md;
}

/* End of transitions */
.mobile-menu-context ul li {
    @apply text-slate-600 font-bold sm:text-xl px-2 py-1.5 cursor-pointer;
    @apply hover:bg-gray-300;
    transition: background-color 300ms;
}
.menu-drop-down-features {
    @apply absolute min-h-[50vh] w-screen z-10 bottom-0 translate-y-[101%] bg-transparent;
}
</style>