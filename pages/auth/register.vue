<script setup lang="ts">
const router = useRouter();
const config = useRuntimeConfig();

const mobilenumber = ref<string>('');
const id_number = ref<number>();
const fname = ref<string>('');
const lname = ref<string>('');
const gender = ref<number>();
const location_id = ref<number>();
const password = ref<string>('');
const confirmpassword = ref<string>('');

// Transition data
const showlocationcomp = ref<boolean>(false);
const loading = ref<boolean>(false);
const fetcherror = ref<boolean>(false);
const catcherror = ref<boolean>(false);

const check_no_validity = ref<boolean>(false);
const valid_no = ref<boolean>(false);
const valid_id = ref<boolean>(false);
const valid_fname = ref<boolean>(false);
const valid_lname = ref<boolean>(false);
const valid_gender = ref<boolean>(false);
const valid_location = ref<boolean>(false);
const valid_password = ref<boolean>(false);
const valid_cpassword = ref<boolean>(false);


const chooseLocation = (): void => {
    showlocationcomp.value = !showlocationcomp.value;
};

// Methods
const selectLocation = (id: number, Name: string):void => {
    location_id.value = id;
    let name = document.getElementById('locationName');
    name.innerHTML = Name;
    showlocationcomp.value = false;
}

const createAccount = async () => {
    check_no_validity.value = false;
    valid_no.value = false; valid_id.value = false; valid_fname.value = false; valid_lname.value = false;
    valid_location.value = false; valid_gender.value = false; valid_password.value = false; valid_cpassword.value = false;

    fetcherror.value = false; catcherror.value = false;
    // Validate form
    if (mobilenumber.value.length < 9) {valid_no.value = true; return;}
    if (mobilenumber.value.length >= 11) {check_no_validity.value = true; return;}

    if (id_number.value === undefined) {valid_id.value = true; return;}

    if (id_number.value.toString().length < 5) {valid_id.value = true; return;}

    if (fname.value.length < 3) {valid_fname.value = true; return;}

    if (lname.value.length < 3) {valid_lname.value = true; return;}

    if (location_id.value === undefined) {valid_location.value = true; return;}

    if (gender.value === undefined) {valid_gender.value = true; return;}

    if (password.value.length < 8) {valid_password.value = true; return;}
    if (confirmpassword.value !== password.value) {valid_cpassword.value = true; return;}

    console.log("Submitted");
    loading.value = true;

    await fetch(`${config.base_Url}/auth/registration/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            MobileNumber: mobilenumber.value, IDNumber: id_number.value,
            FirstName: fname.value, LastName: lname.value,
            LocationID: location_id.value, GenderID: gender.value,
            password: password.value
        })
    })
    .then(res => {
        loading.value = false;
        if (res.status !== 201 ) {
            fetcherror.value = true; return;
        }
        return res.json();
    })
    .then(data => {
        if (fetcherror.value === true) {
            return;
        } else {router.push("/auth");}
    })
    .catch(error => {
        loading.value = false;
        catcherror.value = true;
        console.log(error);
        return;
    })
}

const retryCreateAccount = () => {
    createAccount();
    return;
}
</script>

<template>
    <section class="flex justify-center w-full h-full px-2 md:mt-0 fixed top-0 left-0 sm:relative">
        <div class="reg-container flex flex-col w-full sm:w-[580px] md:w-[750px] px-2 py-8 sm:shadow rounded mb-4 overflow-y-auto">
            <div class="title">
                <h3 class=" text-neutral-700 text-3xl md:text-4xl font-semibold sm:font-bold">
                    Welcome to <span class="text-orange-600">Ni</span>pate.
                </h3>
                <div class="login-link w-full flex justify-end text-sm pr-4 sm:pr-16 text-neutral-600">
                    <h3>Already have an account? <NuxtLink to="/auth">Log In</NuxtLink>.</h3>
                </div>
            </div>
            <hr>
            <div class="form-fields w-full flex flex-col justify-start items-start gap-2 md:gap-4 mt-2 pl-2 sm:pl-0 sm:mt-6 text-neutral-600">
                <div class="fetch-error w-full py-3 border-red-500 border flex justify-center rounded" v-if="fetcherror">
                    <h3 class="text-xs md:text-sm font-bold italic flex items-center justify-center gap-2 md:gap-8 relative w-full">
                        <div class="i-mdi-alert-circle-outline text-xl text-red-500" />
                        Mobile number or ID number already exists.
                        <div class="i-mdi-close text-xl absolute right-4 -translate-x-1/3" />
                    </h3>
                </div>
                <div class="catch-error w-full flex justify-center">
                    <button
                        class="py-2 px-4 bg-red-400 hover:bg-red-500 transition-colors flex flex-row justify-center items-center rounded-lg gap-3 text-sm md:text-lg text-white font-bold"
                        @click="retryCreateAccount" v-if="catcherror"
                    >
                        <div class="i-mdi-restore text-lg" />
                        Retry
                    </button>
                </div>
                <div class="mobile-id-fields w-full py-2 flex flex-col md:grid md:grid-cols-2">
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="m-number" class="italic pl-2 text-base font-semibold tracking-wide ">
                            Mobile Number:
                            <span class="valid" v-if="valid_no">*</span>
                            <span class="text-red-400 text-xs font-light pl-3" v-if="check_no_validity">enter in valid format</span>
                        </label>
                        <div class="input w-full relative">
                            <input
                                type="text" id="m-number" placeholder="e.g 0712345678 "
                                class="outline-none h-[2.6rem] w-[88%] sm:w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9  pr-1"
                                v-model="mobilenumber" :class="check_no_validity && 'border-red-500'"
                            >
                            <div class="i-mdi-phone absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="id-no" class="italic pl-2 text-base font-semibold tracking-wide ">ID Number: <span class="valid" v-if="valid_id">*</span></label>
                        <div class="input w-full relative">
                            <input type="number" id="id-no" class="outline-none h-[2.6rem] w-[88%] sm:w-[80%]  border border-neutral-400 rounded pl-7 pr-1" v-model="id_number">
                            <div class="i-mdi-account-circle absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                </div>

                <div class="names-field w-full flex flex-col md:grid md:grid-cols-2">
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="fname" class="italic pl-2 text-base font-semibold tracking-wide ">First name: <span class="valid" v-if="valid_fname">*</span></label>
                        <div class="input w-full relative">
                            <input type="text" id="fname" class="outline-none h-[2.6rem]  w-[88%] sm:w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9  pr-1" v-model="fname">
                            <div class="i-mdi-user absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="lname" class="italic pl-2 text-base font-semibold tracking-wide ">Last name: <span class="valid" v-if="valid_lname">*</span></label>
                        <div class="input w-full relative">
                            <input type="text" id="lname" class="outline-none h-[2.6rem]  w-[88%] sm:w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9 pr-1" v-model="lname">
                            <div class="i-mdi-user absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                </div>
                <div class="select-location w-full justify-center py-2 px-2 relative">
                    <div
                        class="select-btn px-1 md:px-3 py-3 md:py-4 min-w-[11rem] max-w-[14rem] md:max-w-[12.5rem] min-h-[2rem]
                        flex flex-row items-center justify-center gap-4 text-xs md:text-sm font-bold border border-neutral-400 rounded cursor-pointer
                        hover:gap-5 hover:border-neutral-600 hover:text-neutral-800"
                        @click="chooseLocation" :class="valid_location && 'border-red-500'"
                    >
                        <p id="locationName" class="truncate text-sm">Choose your location</p>
                        <div class="i-mdi-chevron-right text-xl rotate-90 sm:rotate-0" :class="showlocationcomp && '-rotate-90 sm:-rotate-180'" />
                    </div>
                    <LazyLocationsSelectLocation class=" w-[88%] sm:w-[45%] md:w-[40%] shadow-md rounded h-[12rem] sm:h-[16rem]
                        absolute bottom-1 sm:top-0 left-0 translate-x-1 sm:translate-x-48 md:translate-x-56 translate-y-full sm:translate-y-0
                        z-[99] bg-slate-50 overflow-hidden"
                        v-if="showlocationcomp" @selected-location="selectLocation"
                    />
                </div>
                <div class="gender-input w-full flex flex-col">
                    <h3 class="text-lg font-semibold italic tracking-wide">Choose your gender: <span class="valid" v-if="valid_gender">*</span></h3>
                    <div class="pl-8 sm:pl-4 w-[16%] flex flex-row gap-4 mt-2">
                        <div class="input-field flex items-center justify-between gap-3">
                            <label for="male" class="italic text-base sm:text-xs font-semibold tracking-wide">Male:</label>
                            <input type="radio" name="gender" id="male" class="w-6 h-6 cursor-pointer" value="1" v-model="gender">
                        </div>
                        <div class="input-field flex items-center justify-between gap-3">
                            <label for="female" class="italic text-base sm:text-xs font-semibold tracking-wide">Female:</label>
                            <input type="radio" name="gender" id="female" class="w-6 h-6 cursor-pointer" value="2" v-model="gender">
                        </div>
                    </div>
                </div>
                <div class="names-field w-full py-2 flex flex-col md:grid md:grid-cols-2">
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="password" class="italic pl-2 text-base font-semibold tracking-wide ">Password: <span class="valid" v-if="valid_password">*</span></label>
                        <div class="input w-full relative">
                            <input type="password" id="password" class="outline-none h-[2.6rem] w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9  pr-1" v-model="password">
                            <div class="i-mdi-lock absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                    <div class="input-field py-2 flex flex-col gap-2">
                        <label for="cpassword" class="italic pl-2 text-base font-semibold tracking-wide ">Confirm password: <span class="valid" v-if="valid_cpassword">*</span></label>
                        <div class="input w-full relative">
                            <input type="password" id="cpassword" class="outline-none h-[2.6rem] w-[80%]  border border-neutral-400 rounded pl-7 md:pl-9 pr-1" v-model="confirmpassword">
                            <div class="i-mdi-lock absolute left-0 top-0 translate-x-[50%] translate-y-[80%]" />
                        </div>
                    </div>
                </div>
                <div class="submit-btn w-full mt-1 py-2 flex justify-center text-white text-lg font-extrabold">
                    <button
                        class=" w-[98%] md:w-[90%] h-[3rem] bg-orange-500 hover:bg-orange-600 rounded relative flex items-center justify-center"
                        :class="loading && 'loading'"
                        @click="createAccount">Create account <UtilsLoadingSpinner class="absolute right-0 -translate-x-full scale-50" v-if="loading" /></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.title {
    @apply w-full h-[5rem] md:h-[5rem] md:mt-3 flex flex-col items-start justify-start gap-3;
}
.login-link a {
    @apply text-orange-500 font-bold text-base italic underline hover:text-orange-600 tracking-wider;
}
input {
    letter-spacing: 1px;
    background-color: inherit;
    @apply focus:border-green-700;
    transition: width 300ms ease;
}
.valid {
    @apply text-red-500 text-lg;
}
.select-btn {
    transition: gap 300ms ease, border 300ms ease, color 300ms ease;
}
button {
    transition: background-color 300ms ease;
}
.submit-btn .loading {
    animation: pulse 1s linear infinite alternate;
}
@keyframes pulse {
    0% {
        @apply bg-orange-400;
    }
    50% {
        @apply bg-orange-500;
    }
    100% {
        @apply bg-orange-600;
    }
}
</style>