<template>
    <NuxtLayout name="custom">

        <main class="w-100 flex justify-align-center top-3 flex-column gap-3 padding-12">
            <div class="title-section flex justify-align-center flex-column">
                <div class="logo w-100 flex justify-align-center">
                    <img src="@/assets/logo-img-removebg-preview.png" alt="" class="w-30 hrem-4">
                </div>
                <h3 class="top-2 font-24">Login in to Nipate App</h3>
            </div>
            <div class="input-fields top-3 w-100 flex flex-column gap-1 justify-align-center">
                <span class="font-18">Enter your mobile number and password.</span>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="text" placeholder="phone number" class="h-100">
                    <div class="i-mdi-phone mdi-icons"></div>
                </div>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="password" placeholder="password" class="h-100">
                    <div class="i-mdi-lock mdi-icons"></div>
                </div>
                <div class="forgot-password flex justify-align-center hrem-1 top-1">
                    <a href="#" class="c-dark font-20">Forgot your password?</a>
                </div>
                <div class="submit-btn w-100 flex justify-align-center top-2">
                    <button class="bg-gold w-80 hrem-3 btn-b-none b-4 font-18">Login</button>
                </div>
            </div>
        </main>
        <template #footer>

        </template>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>

input {
    border: 1px solid #c0c0c0;
    color: #003049;
    border-radius: 8px;
    outline: none;
    padding: 0 38px;
    font-size: 22px;
    font-family: Roboto;
    letter-spacing: 1px;
    transition: box-shadow .3s ease;
    width: 88%;
    &:focus {
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }
}
.mdi-icons {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: 20px;
    color: #c0c0c0;
    transform: translate(50%, 70%);
}
.submit-btn {
    button {
        cursor: pointer;
        transition: transform .3s ease;
        &:hover {
            transform: scale3d(1.05, 1.15, 1.05);
        }
    }
}
@media screen and (min-width: 600px) {
    .input-fields {
        width: 30%;
    }
}
</style>