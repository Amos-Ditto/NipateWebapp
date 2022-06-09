<template>
    <main class="wh-100">
        <NuxtLayout name="custom">
            <template #header>
                <TopBar id="top-2-navbar"></TopBar>
            </template>
            <section class="w-100 padding-8">
                <div class="background-img"></div>
                <div class="splash-context w-100 flex flex-column justify-align-center">
                    <div class="splash-content w-100 flex justify-align-center">
                        <div class="splash-text w-4 font-20 w-4">
                            <h3 class="">Powerful and easy to use platform</h3>
                        </div>
                        <div class="flex justify-align-center w-6">
                            <img src="@/assets/logo-img-removebg-preview.png" alt="" class="bg-inherit w-100">
                        </div>
                    </div>
                    <div class="flex align-center w-100 flex-row gap-2 top-3 padding-w-8">
                        <button class="started bg-gold color-white btn-started br-12 btn-b-none f-weight-900 font-18 padding-12">Get Started</button>
                        <button class="contact font-20 bg-inherit btn-b-none flex align-center flex-row gap--5 padding-8">Contactus<div class="i-mdi-arrow-forward" /></button>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </main>
</template>

<script setup>


</script>

<style lang="scss" scoped>

#top-2-navbar {
  width: 100vw;
  height: 3.8rem;
  background: #ffffff;

}
.background-img {
    background-image: url('@/assets/blob-haikei.svg');
    position: absolute;
    left: 0%;
    z-index: -1;
    aspect-ratio: 550/400;
    width: 100%;
    height: 80vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.splash-context {
    height: 25rem;
    // background: #abc;
}
.splash-content {
    img {
        object-fit: cover;
    }
}
button {
    transition: transform .3s;
    &:hover {
        transform: scaleX(1.12);
    }
}
@media screen and (min-width: 600px) {
    .background-img {
        aspect-ratio: 600/400;
        top: 5rem;
        background-image: url('@/assets/blob-haikei-full.svg');
    }
}
</style>