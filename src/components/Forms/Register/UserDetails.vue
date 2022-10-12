<script setup lang="ts">
import { ref } from 'vue';
import type UserRegister from '../../../Types/UserRegister';

const base_url = import.meta.env.VITE_BASE_URL;

const emit = defineEmits<{
    (e: 'toggleContinueRegistration'): void
    (e: 'userRegisteredDetails', payload: UserRegister): void
}>()

interface UserDetail {
    MobileNumber: string
    IDNumber: number | null
    FirstName: string
    LastName: string
}

interface Validation {
    validno: boolean
    validid: boolean
}
const userdetails = ref<UserDetail>({
    MobileNumber: '',
    IDNumber: null,
    FirstName: '',
    LastName: '',
})
const fetcherror = ref<{
    Error?: null | string
}>({});

const submitUserRegistration = async (type: void) => {
    validate.value = {
        validno: false, validid: false
    }

    if(userdetails.value.MobileNumber.length !== 10) {
        validate.value.validno = true; return;
    }

    let checkvalid_id = userdetails.value.IDNumber?.toString() || '';
    if(checkvalid_id.length >= 9 || checkvalid_id.length < 5) {
        validate.value.validid = true; return;
    }
    submitstatus.value = true;
    const response = await fetch(`${base_url}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "MobileNumber": '254' + userdetails.value.MobileNumber.slice(1),
            "IDNumber": userdetails.value.IDNumber,
            "FirstName": userdetails.value.FirstName,
            "SurName": userdetails.value.LastName
        })
    })

    if(response.status === 201) {
        var data: UserRegister = await response.json();
        
        emit('userRegisteredDetails', data);
        submitstatus.value = false;
        setTimeout(() => {
            emit('toggleContinueRegistration');
        }, 300)

    } else if(response.status === 400) {
        fetcherror.value = await response.json();
        validate.value.validno = true; errormessages.value.MobileNumber = fetcherror.value.Error;
        setTimeout(() => {
            submitstatus.value = false;
        }, 500)
    }
}
interface ErrorMSG {
    MobileNumber?: string | null
    IDNumber: string | null
}
const errormessages = ref<ErrorMSG>({
    MobileNumber: 'Please enter a valid Mobile Number',
    IDNumber: 'please enter a valid ID Number'
});

const validate = ref<Validation>({
    validno: false, validid: false
});
const submitstatus = ref<boolean>(false);

</script>

<template>
    <form
        @submit.prevent="submitUserRegistration()"
        class="w-[96%] md:w-[600px] px-2 pt-2 sm:pt-4 pb-4 flex flex-col items-start sm:items-center justify-start sm:justify-center transition-all duration-300 rounded-lg"
    >
        <h3 class="text-[#346974] text-3xl sm:text-2xl font-light transition-font duration-300">Register as a User</h3>
        <div class="input-fields w-full sm:w-[80%] flex flex-col gap-y-6 sm:gap-y-6 pt-14 sm:pt-12 transition-all duration-300">
            <div class="input-field w-full flex flex-col gap-y-2">
                <label for="phone" class="text-[#346974] text-base font-semibold">Mobile Number</label>
                <div class="input w-full flex flex-row gap-x-1">
                    <div class="phone-icon-label px-2 py-2 bg-slate-50 border border-gray-300 w-[20%] rounded-l flex flex-row items-center justify-center gap-x-1 opacity-90">
                        <img src="../../../assets/bgImg/Flag-of-Kenya.svg" alt="ke" class="w-[1.2rem] h-[1rem]">
                        <small class="tracking-wide text-sm text-slate-700 font-serif">+254</small>
                    </div>
                    <input type="text" name="phone" id="phone" required
                        class="w-[80%] rounded-r placeholder:text-slate-500" placeholder="eg 0712345678"
                        v-model.trim="userdetails.MobileNumber"
                    >
                </div>
                <div class="error-status w-full px-0.5 flex flex-row justify-start items-center gap-x-2" v-if="validate.validno">
                    <div class="i-mdi-alert-outline text-orange-400 text-sm"></div>
                    <small class="text-xs text-orange-400">{{errormessages.MobileNumber}}</small>
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

                <div class="error-status w-full px-0.5 flex flex-row justify-start items-center gap-x-2" v-if="validate.validid">
                    <div class="i-mdi-alert-outline text-orange-400 text-sm"></div>
                    <small class="text-xs text-orange-400">{{errormessages.IDNumber}}</small>
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
                    class="min-w-[9.1rem] px-8 py-2 text-lg font-bold tracking-wide text-slate-100 bg-orange-600 ''
                    ' rounded hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center"
                >
                    <Transition name="slide" mode="out-in">
                        <span v-if="!submitstatus">Continue</span>
                        <span class="loader" v-else="submitstatus" ></span>
                    </Transition>
                </button>
                <!-- Continue -->
            </div>
        </div>
    </form>
</template>

<style scoped>

.input-fields input {
    @apply py-2 bg-gray-100 border border-gray-300 px-3 outline-none focus:border-blue-300 transition-colors duration-300 tracking-wider text-slate-700;
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


.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}
</style>