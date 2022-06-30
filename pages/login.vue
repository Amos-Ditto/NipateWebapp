<template>
    <NuxtLayout>
        <main>
            <div class="container">
                <div class="logo">
                    <img src="@/assets/img/logo-img-removebg-preview.png" alt="">
                </div>
                <div class="title">
                    <h3>Login to Nipate</h3>
                </div>
                <div class="input-fields">
                    <div class="input-field">
                        <label for="number">Mobile number</label>
                        <input type="text" id="number">
                    </div>
                    <div class="input-field">
                        <label for="password">Password</label>
                        <input type="text" id="password">
                    </div>
                    <div class="btn-field">
                        <button>Log In</button>
                    </div>
                </div>
                <div class="register-container">
                    <h3>New to Nipate?</h3>
                    <a href="#">Create account.</a>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<style>

@tailwind components;
@tailwind utilities;

@layer components {
    main {
        @apply w-full h-full flex justify-center relative;
    }
    .container {
        @apply w-[280px] md:w-[320px] lg:w-[400px] min-h-[40%] absolute top-[6%] flex items-center flex-col;
    }
    .container .logo {
        @apply w-full h-[3.5rem] flex justify-center items-center;
    }
    .container .logo img {
        @apply w-[3.4rem] h-[3rem];
    }
    .container .title {
        @apply w-full h-[2rem] flex items-center justify-center text-xl font-semibold mt-1;
    }
    .container .input-fields {
        @apply mt-4 w-[300px] md:w-[320px] lg:w-[400px] min-h-[5rem] gap-2 rounded flex flex-col border border-neutral-200 p-3;
    }
    .container .input-fields .input-field {
        @apply w-full flex flex-col gap-1;
    }
    .input-fields .input-field label {
        @apply text-[0.95rem] italic;
    }
    .input-fields .input-field input {
        @apply w-full h-[2.1rem] border-2 border-zinc-300 outline-none rounded px-2 text-blue-900 tracking-wider bg-slate-50;
        transition: border 200ms ease;
    }
    .input-fields .input-field input:focus {
        @apply border-green-300;
    }
    .input-fields .btn-field {
        @apply flex items-center justify-center w-full mt-4;
    }
    .input-fields .btn-field button {
        @apply bg-orange-500 text-white w-[98%] hover:bg-orange-600 hover:scale-x-100;
        transition: background-color 200ms ease;
    }
    .container .register-container {
        @apply w-[300px] md:w-[320px] lg:w-[400px] rounded border border-neutral-200 min-h-[3rem] mt-8;
        @apply text-sm tracking-wide p-3 flex items-center justify-center gap-1;
    }
    .container .register-container a {
        @apply text-blue-500 font-bold;
    }
}


</style>