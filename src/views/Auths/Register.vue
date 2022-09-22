<script setup lang="ts">

const submitUserRegistration = (): void => {

}
</script>
<template>
    <section class="w-full px-4 sm:px-8 flex flex-col justify-center items-center">
        <form
            @submit.prevent="submitUserRegistration"
            class="w-[96%] md:w-[600px] px-2 pt-2 sm:pt-4 pb-4 flex flex-col items-start sm:items-center justify-start sm:justify-center transition-all duration-300"
        >
            <h3 class="text-[#346974] font-light text-2xl sm:text-3xl transition-font">Register as a User</h3>
            <div class="input-fields w-full sm:w-[80%] flex flex-col gap-y-4 pt-14 sm:pt-12 transition-all duration-300">
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="phone" class="text-[#346974] text-base font-semibold">Mobile Number</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <div class="phone-icon-label px-2 py-2 bg-slate-50 border-2 border-gray-300 w-[20%] rounded-l flex flex-row items-center justify-center gap-x-1 opacity-90">
                            <img src="../../assets/bgImg/Flag-of-Kenya.svg" alt="ke" class="w-[1.2rem] h-[1rem]">
                            <small class="tracking-wide text-sm text-slate-700 font-serif">+254</small>
                        </div>
                        <input type="text" name="phone" id="phone" required
                            class="w-[80%] rounded-r placeholder:text-slate-500" placeholder="eg 712345678"
                        >
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="idnumber" class="text-[#346974] text-base font-semibold">ID Number</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <input type="text" name="idnumber" id="idnumber" required
                            class="w-full rounded placeholder:text-slate-500"
                        >
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="fname" class="text-[#346974] text-base font-semibold">First Name</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <input type="text" name="fname" id="fname" required
                            class="w-full rounded"
                        >
                    </div>
                </div>
                <div class="input-field w-full flex flex-col gap-y-2">
                    <label for="lname" class="text-[#346974] text-base font-semibold">Last Name</label>
                    <div class="input w-full flex flex-row gap-x-1">
                        <input type="text" name="lname" id="lname" required
                            class="w-full rounded"
                        >
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped>

.input-fields input {
    @apply py-2 bg-gray-100 border-2 border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}
</style>