<template>
    <div class="container flex align-center flex-between bg-inherit wh-100 padding-w-8">
        <div class="logo flex justify-align-center">
            <img src="@/assets/logo-removebg.png" alt="" class="wh-100 border-4">
        </div>
        <div class="links bg-inherit flex align-center gap-1 padding-4 h-100">
            <NuxtLink to="/" class="flex justify-align-center font-14 h-100 padding-w-4">Home</NuxtLink>
            <a href="#" class="bg-inherit flex justify-align-center font-14 h-100 padding-w-4">About Us</a>
        </div>
    </div>
</template>

<script setup>

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
        height: 1px;
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
@media screen and (min-width: 600px) {
    .container {
        padding: 0 50px;
    }
    a {
        font-size: large;
    }
    .links {
        margin-right: 2rem;
    }
}
</style>