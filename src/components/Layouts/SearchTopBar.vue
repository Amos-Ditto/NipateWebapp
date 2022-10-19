<template>
    <header class="py-2.5 sm:py-2 flex flex-row justify-between w-full border-b border-gray-200 px-[8px] lg:px-[78px] transition-all duration-300s">
        <RouterLink to="/" class="left-nav flex items-center flex-row py-0.5">
            <img src="../../assets/Logo/Vector.svg" alt="logo">
            <img src="../../assets/Logo/Nipate.svg" alt="logo">
        </RouterLink>

        <div class="right-nav py-0.5 flex flex-row items-center gap-1.5 sm:gap-3">
            <!-- <Transition name="slide" mode="out-in"> -->
                
                <!-- <div>
                    <button class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                        Logout
                    </button>
                </div> -->
                <div class="flex flex-row items-center gap-1.5 sm:gap-3 transition-pad">
                    <router-link :to="{name: 'Register'}" class="bg-orange-400 text-slate-100 font-serif hover:bg-orange-500">
                        Register
                    </router-link>
                    <small>or</small>
                    <router-link :to="{name: 'Login'}" class="border-dodgerblue text-dodgerblue font-serif hover:border-blue-800">
                        Login
                    </router-link>
                </div>
            <!-- </Transition> -->
        </div>
    </header>
</template>

<style scoped>


.left-nav img {
    @apply max-w-[4.8rem] sm:max-w-[5.8rem] min-w-[3rem] sm:min-w-[3.5rem] h-[2rem] sm:h-[2.5rem] last:mt-1 transition-all duration-300;
}

.right-nav button , .right-nav a {
    @apply py-1 px-3 border rounded text-base;
    transition: background-color 300ms ease, border 300ms ease;
}
</style>