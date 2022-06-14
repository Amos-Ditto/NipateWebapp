<template>
    <NuxtLayout name="custom">
        <main class="w-100 flex justify-align-center top-3 flex-column gap-2 padding-12">
            <div class="title-section flex justify-align-center flex-column">
                <div class="logo w-100 flex justify-align-center">
                    <img src="@/assets/logo-img-removebg-preview.png" alt="" class="w-30 hrem-4">
                </div>
                <h3 class="top-1 font-24">Sign Up to Nipate App</h3>
            </div>
            <div class="input-fields w-100 flex flex-column gap-1 justify-align-center">
                <span class="font-18">Enter your personal details.</span>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="text" placeholder="phone number" class="h-100">
                    <div class="i-mdi-phone mdi-icons"></div>
                </div>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="text" placeholder="ID Number" class="h-100">
                    <div class="i-mdi-account-box-outline mdi-icons"></div>
                </div>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="text" placeholder="first name" class="h-100">
                    <div class="i-mdi-account-circle mdi-icons"></div>
                </div>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="password" placeholder="password" class="h-100" ref="password">
                    <div class="i-mdi-lock mdi-icons"></div>
                    <div class="mdi-password">
                        <div class="i-mdi-eye-off" v-show="visible_password" @click="hidePassword"></div>
                        <div class="i-mdi-eye" v-show="!visible_password" @click="showPassword"></div>
                    </div>
                </div>
                <div class="input-field relative hrem-3 w-100 flex justify-align-center">
                    <input type="password" placeholder="Confirm password" class="h-100" ref="confirm_password">
                    <div class="i-mdi-lock mdi-icons"></div>
                    <div class="mdi-password">
                        <div class="i-mdi-eye-off" v-show="visible_confirm_password" @click="hideConfirmPassword"></div>
                        <div class="i-mdi-eye" v-show="!visible_confirm_password" @click="showConfirmPassword"></div>
                    </div>
                </div>
                <div class="submit-btn w-100 flex justify-align-center top-2">
                    <button class="bg-gold w-80 hrem-3 btn-b-none b-4 font-18">Submit</button>
                </div>
                <div class="forgot-password flex justify-align-center hrem-1 top-2">
                    <p class="c-dark font-18">Already have an account?</p>
                    <NuxtLink to="/Login" class="c-dark font-18">Login</NuxtLink>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>

const visible_password = ref(false);
const password = ref(null);
function showPassword() {
    password.value.type = 'text';
    visible_password.value = true;
}
function hidePassword() {
    password.value.type = 'password';
    visible_password.value = false;
}

const visible_confirm_password = ref(false);
const confirm_password = ref(null);
function showConfirmPassword() {
    confirm_password.value.type = 'text';
    visible_confirm_password.value = true;
}
function hideConfirmPassword() {
    confirm_password.value.type = 'password';
    visible_confirm_password.value = false;
}
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
.mdi-password {
    position: absolute;
    display: block;
    padding: 0 4px;
    top: 0%;
    right: 12%;
    height: 100%;
    font-size: 20px;
    color: #c0c0c0;
    cursor: pointer;
    transform: translate(50%, 30%);
}
.submit-btn {
    button {
        cursor: pointer;
        transition: transform .3s ease;
        &:hover {
            transform: scale3d(1.04, 1.04, 1.04);
        }
    }
}
@media screen and (min-width: 600px) {
    .input-fields {
        width: 30%;
    }
}

</style>