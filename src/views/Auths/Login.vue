<script setup lang="ts">

const formLoginSubmit = (): void => {
    console.log('Submitted');
    
}
</script>
<template>
    <section class="w-full flex items-center justify-center flex-col px-2 sm:px-8 transition-pad duration-300">
        <form @submit.prevent="formLoginSubmit" class="w-full md:w-[600px] px-2 pt-16 sm:pt-8 pb-4 flex flex-col items-center justify-center">
            <h3 class="text-[#346974] text-3xl sm:text-2xl font-bold transition-font duration-300">Login to your Account</h3>
            <div class="input-fields flex flex-col justify-center items-center w-full gap-y-8 pt-16">
                <div class="input-field w-[80%] sm:w-[75%] flex flex-col justify-start gap-y-1.5 transition-width duration-300">
                    <label for="phone" class="text-[#346974] text-sm font-semibold">Mobile Number</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <div class="phone-icon-label px-2 py-2 bg-slate-50 border border-gray-300 w-[20%] rounded-l flex flex-row items-center justify-center gap-x-1 opacity-75">
                            <img src="../../assets/bgImg/Flag-of-Kenya.svg" alt="ke" class="w-[1.2rem] h-[1rem]">
                            <small class="tracking-wide text-sm text-slate-600 font-serif">+254</small>
                        </div>
                        <input type="text" name="phone" id="phone" class="w-[80%] rounded-r placeholder:text-slate-500" placeholder="eg 712345678">
                    </div>
                </div>
                <div class="input-field w-[80%] sm:w-[75%] flex flex-col justify-start gap-y-1.5 transition-width duration-300">
                    <label for="password" class="text-[#346974] text-sm font-semibold">Password</label>
                    <div class="input w-full">
                        <input type="password" id="password" class="w-full rounded ">
                    </div>
                </div>
            </div>
            <div class="submit-btn w-[80%] sm:w-[75%] pt-8 pb-4 flex items-center transition-width duration-300">
                <button type="submit" 
                    class="px-12 py-1.5 text-base font-bold tracking-wide text-slate-100 bg-orange-600 rounded hover:bg-orange-500 transition-colors duration-300"
                >Login</button>
            </div>
            <div class="create-new w-[80%] sm:w-[75%] py-2 flex flex-row gap-x-2 items-center transition-width duration-300">
                <span class="text-[#346974] text-sm">Don't have an account?</span>
                <router-link :to="{name: 'Register'}" class="text-orange-600 font-bold font-sans underline hover:text-orange-500 transition-colors duration-300">Create Now</router-link>
            </div>
        </form>
    </section>
</template>

<style scoped>

input {
    @apply py-2 bg-gray-100 border border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}
</style>