<template>
    <div class="container flex align-center flex-between bg-inherit wh-100 padding-w-8">
        <div class="logo flex justify-align-center">
            <img src="@/assets/logo-removebg.png" alt="" class="wh-100 border-4">
        </div>
        <div class="links bg-inherit flex align-center gap-1 padding-4 h-100">
            <NuxtLink to="/" class="flex justify-align-center font-16 h-100 padding-w-4">Home</NuxtLink>
            <NuxtLink to="/Login" class="bg-inherit flex justify-align-center font-16 h-100 padding-w-4">About Us</NuxtLink>
            <button class="btn-desk border-dark padding-8 b-8 font-14 l-space color-variant-dark">Register</button>
            <button class="btn-desk bg-gold btn-b-none padding-8 b-8 font-14 l-space color-white f-weight-700" @click="redirectLogin">Login</button>
            <button class="btn-mobile bg-gold btn-b-none padding-8 b-8 font-14 l-space color-white f-weight-700" @click="redirectLogin">SignUp</button>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
function redirectLogin() {
    router.push("/Login");
}
</script>

<style lang="scss" scoped>

a {
    position: relative;
    text-decoration: none;
    color: #706b6b;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: none;
    &::after {
        visibility: hidden;
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background: #f2542d;
        bottom: 0%;
        left: 0%;
        opacity: 0;
        transition: opacity .3s, visibility .3s;
    }
    &:hover {
        background-color: inherit;
        &::after {
            visibility: visible;
            opacity: 1;
        }
    }
}
.logo {
    width: 8rem;
    height: 2rem;

}
button {
    cursor: pointer;
    transition: tansform .4s ease;
}
.btn-desk {
    display: none;
}
@media screen and (min-width: 600px) {
    .logo {
        width: 35%;
        justify-content: center;
        img {
            width: 30%;
        }
    }
    a {
        font-size: large;
    }
    .links {
        width: 40%;
        padding-left: 16px;
    }
    .btn-desk {
        display: block;
        &:hover {
            transform: scale3d(1.04, 1.04, 1.04);
        }
    }
    .btn-mobile {
        display: none;
    }
}
</style>