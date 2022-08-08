<script setup lang="ts">
const routes = useRoute();

console.log(routes.name);

const toggleforms = ref<boolean>(false);


// First initail account creation form
const submitInitialDetails = () => {
    console.log("Submitted");
}

const submitFinalDetails = ():void => {
    console.log("Finally");
}

</script>

<template>
    <main class="w-full flex justify-center items-center flex-col px-2 sm:px-4">
        <div class="hero">
            <h1>Register account</h1>
        </div>
        <section class="forms">
            <div class="status-bar">
                <div class="round-bar bg-orange-400"></div>
                <div class="round-bar bg-white"></div>
            </div>
            <form @submit.prevent="submitInitialDetails" class="initial-form" v-if="toggleforms">
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
                        <input type="text" id="fname" name="fname">
                    </div>
                </div>
                <div class="input-field">
                    <label for="lname">Last Name</label>
                    <div class="input">
                        <input type="text" id="lname" name="lname">
                    </div>
                </div>
                <div class="sumbmit-form">
                    <button type="submit">Continue</button>
                </div>
            </form>

            <form @submit.prevent="submitFinalDetails" class="initial-form" v-if="!toggleforms">
                <div class="input-field">
                    <label for="idnumer">ID Number</label>
                    <div class="input">
                        <input type="number" id="idnumber" name="idnumber">
                    </div>
                </div>
                <div class="input-field">
                    <label for="gender">Gender</label>
                    <div class="input">
                        <select name="gender" id="gender">
                            <option value="Nakuru">Male</option>
                            <option value="Nakuru">Female</option>
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
                    <button type="submit">Finish</button>
                </div>
            </form>
        </section>
    </main>
</template>

<style scoped>

.hero {
    @apply w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[6rem] bg-gray-50 rounded-md;
    @apply flex justify-center items-center px-4;
    transition: width 300ms;
}

.hero h1 {
    @apply font-bold italic text-3xl sm:text-4xl text-slate-600;
}

section.forms {
    @apply w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-8 py-4 flex flex-col gap-6 justify-center items-center;
    transition: width 300ms;
}
form.initial-form {
    @apply w-full md:w-[80%] flex flex-col gap-3;
    transition: width 300ms;
}

.input-field {
    @apply w-full sm:w-[500px] md:w-[600px] flex justify-start items-center px-2 py-1 gap-3 flex-col;
    transition: width 300ms
}
.input-field label {
    @apply px-4 text-slate-500 font-bold text-lg w-full text-left;
}

.input-field .input-number , .input-field .input {
    @apply w-full flex flex-row items-center justify-start gap-2;
}

.input-field .input-number button {
    @apply sm:w-[80px] h-[3rem] px-2 flex items-center justify-between gap-1 text-sm text-neutral-500;
    @apply border border-gray-300 bg-gray-50 text-lg italic tracking-wide font-bold rounded-l-md;
}
.input-field .input-number button img {
    @apply w-[20px] h-full;
}
.input-field .input-number input {
    @apply w-[80%] sm:w-[360px] h-[3rem] bg-gray-50 border border-gray-300 pl-4;
    @apply text-xl placeholder:italic tracking-wider text-neutral-600 rounded-r-md outline-none;
    @apply focus:border-blue-400;
    transition: border 300ms;
}
.input-field .input input , .input-field .input select {
    @apply w-full sm:w-[445px] h-[3rem] bg-gray-50 border border-gray-300 pl-4;
    @apply text-xl placeholder:italic tracking-wider text-neutral-600 rounded-md outline-none;
    @apply focus:border-blue-400;
    transition: border 300ms;
}

.sumbmit-form {
    @apply pt-8 w-full sm:w-[445px] flex items-center justify-start;
}
.sumbmit-form button {
    @apply px-16 py-2 text-xl font-bold bg-orange-400 text-white rounded-md;
    @apply hover:bg-orange-500;
    transition: background-color 300ms;
}

.status-bar {
    @apply w-full flex items-center justify-center flex-row gap-3;
}
.round-bar {
    @apply w-[8px] h-[8px] rounded-full;
}
</style>