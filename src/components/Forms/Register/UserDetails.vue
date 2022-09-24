<script setup lang="ts">import { ref } from 'vue';


const emit = defineEmits<{
    (e: 'toggleContinueRegistration'): void
}>()

interface UserDetail {
    MobileNumber: string
    IDNumber?: number
    FirstName: string
    LastName: string
}

const userdetails = ref<UserDetail>({
    MobileNumber: '',
    FirstName: '',
    LastName: '',
})
const submitUserRegistration = () => {
    emit('toggleContinueRegistration');
}
</script>

<template>
    <form
        @submit.prevent="submitUserRegistration"
        class="w-[96%] md:w-[600px] px-2 pt-2 sm:pt-4 pb-4 flex flex-col items-start sm:items-center justify-start sm:justify-center transition-all duration-300"
    >
        <h3 class="text-[#346974] text-3xl sm:text-2xl font-light transition-font duration-300">Register as a User</h3>
        <div class="input-fields w-full sm:w-[80%] flex flex-col gap-y-8 sm:gap-y-6 pt-14 sm:pt-12 transition-all duration-300">
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="phone" class="text-[#346974] text-base font-semibold">Mobile Number</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <div class="phone-icon-label px-2 py-2 bg-slate-50 border border-gray-300 w-[20%] rounded-l flex flex-row items-center justify-center gap-x-1 opacity-90">
                        <img src="../../../assets/bgImg/Flag-of-Kenya.svg" alt="ke" class="w-[1.2rem] h-[1rem]">
                        <small class="tracking-wide text-sm text-slate-700 font-serif">+254</small>
                    </div>
                    <input type="text" name="phone" id="phone" required
                        class="w-[80%] rounded-r placeholder:text-slate-500" placeholder="eg 712345678"
                        v-model.trim="userdetails.MobileNumber"
                    >
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="idnumber" class="text-[#346974] text-base font-semibold">ID Number</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <input type="number" name="idnumber" id="idnumber" required
                        class="w-full rounded placeholder:text-slate-500"
                        v-model.number="userdetails.IDNumber"
                    >
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="fname" class="text-[#346974] text-base font-semibold">First Name</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <input type="text" name="fname" id="fname" required
                        class="w-full rounded" v-model.trim="userdetails.FirstName"
                    >
                </div>
            </div>
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="lname" class="text-[#346974] text-base font-semibold">Last Name</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <input type="text" name="lname" id="lname" required
                        class="w-full rounded" v-model.trim="userdetails.LastName"
                    >
                </div>
            </div>
            <div class="submit-btns w-full flex flex-row items-center pt-8 pb-2 justify-between">
                <div class="progres-bar flex flex-row items-center gap-x-2">
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-orange-400"></div>
                    <div class="progres-dot w-[9px] h-[9px] rounded-full bg-gray-400"></div>
                </div>
                <button type="submit"
                    class="min-w-[9.1rem] px-8 py-2 text-lg font-bold tracking-wide text-slate-100 bg-orange-600 rounded hover:bg-orange-500 transition-colors duration-300"
                >Continue</button>
            </div>
        </div>
    </form>
</template>

<style scoped>

.input-fields input {
    @apply py-2 bg-gray-100 border border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
}
</style>