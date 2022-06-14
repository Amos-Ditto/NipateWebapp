<template>
    <main class="wh-100">
        <NuxtLayout name="custom">
            <template #header>
                <TopBar id="top-2-navbar"></TopBar>
            </template>
            <section class="w-100 padding-8">
                <div class="background-img"></div>
                <main class="flex justify-align-center w-100 flex-wrap">
                    <div class="splash-title flex align-center w-80 flex-wrap">
                        <h3 class="c-dark flex flex-wrap w-100 top-3">
                            Powerful and easy to use platform.
                        </h3>
                    </div>
                    <div class="splash-continue flex flex-row justify-align-center w-100 gap-2 top-3">
                        <button class="padding-12 font-18 btn-b-none bg-gold br-20 l-space-2">Get Started</button>
                        <button class="padding-12 flex flex-row font-16 b-4 bg-inherit br-12">Contact Us <div class="i-mdi-chevron-right font-20"></div></button>
                    </div>
                </main>
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

button {
    transition: transform .3s;
    &:hover {
        transform: scaleX(1.04);
    }
}
.splash-title {
    h3 {
        font-size: 45px;
        letter-spacing: 2px;
    }
}
.splash-continue {
    button {
        &:last-child {
            border: 1px solid var(--color-variant-black);
        }
    }
}
@media screen and (min-width: 600px) {
    .background-img {
        aspect-ratio: 600/400;
        top: 5rem;
        background-image: url('@/assets/blob-haikei-full.svg');
    }
    main {
        width: 75%;
        gap: 3rem;
        .splash-continue {
            justify-content: center;
            width: 50%;
            margin-right: 8rem;
        }
    }
}
</style>