<script setup lang="ts">

const apiloading = ref<boolean>(false);
const userLogin = ():void => {
    console.log("Logged in");
    
}
</script>

<template>
    <main class="w-full flex flex-col items-center justify-center gap-4 px-2 py-4">
        <div class="hero">
            <h1>Login to your Account</h1>
        </div>
        <section>
            <form @submit.prevent="userLogin">
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
                    <label for="password">Password</label>
                    <div class="input">
                        <input type="password" id="password" name="password">
                    </div>
                </div>
                <div class="log-in">
                    <button type="submit">
                        <span v-if="!apiloading">Login</span>
                        <span class="loader w-5 h-5 border-4 border-white" v-if="apiloading"></span>
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>

<style scoped>

.hero {
    @apply w-full sm:w-[500px] md:w-[600px] lg:w-[60%] h-[4rem] xs:h-[6rem] bg-gray-50 rounded-md;
    @apply flex justify-center items-center px-4;
    transition: width 300ms , height 300ms;
}

.hero h1 {
    @apply text-2xl text-slate-600 font-bold;
}

section {
    @apply flex items-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-1 xs:px-4;
    transition: width 300ms;
}

form {
    @apply w-full flex items-center justify-start flex-col gap-4 py-8;
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

.input-field .input input {
    @apply w-full sm:w-[445px] h-[2.6rem] xs:h-[3rem] bg-gray-50 pl-4;
    @apply text-lg xs:text-xl placeholder:italic tracking-wider text-neutral-600 rounded-md outline-none;
    @apply focus:border-blue-400 border border-gray-300;
    transition: border 300ms;
}

.log-in {
    @apply w-full sm:w-[500px] md:w-[600px] flex items-center justify-start pt-8 px-4;
}

.log-in button {
    @apply w-full sm:w-[445px] h-[2.6rem] xs:h-[3rem] bg-orange-400 rounded-md font-bold text-xl text-white tracking-wide;
    @apply hover:bg-orange-500 flex items-center justify-center gap-3;
    transition: background-color 300ms;
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