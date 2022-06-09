<template>
    <main class="wh-100">
        <NuxtLayout name="custom">
            <template #header>
                <TopBar id="top-2-navbar"></TopBar>
            </template>
            <section class="w-100 padding-8">
                <div class="background-img"></div>
                <div class="splash-context w-100 top-3 left-1 gap-2">
                    <div class="splash-text c-dark font-24 f-weight-900 h-100 flex align-center top-3 w-50">
                        <h3 class="">Powerful and easy to use platform</h3>
                    </div>
                    <div class="img-banner">
                        <img src="@/assets/logo-img-removebg-preview.png" alt="" class="bg-inherit">
                    </div>
                    <div class="get-started-banner flex align-center gap-2 w-100 top-3">
                        <button class="started bg-gold color-white btn-started btn-b-8 btn-b-none f-weight-900 font-18 padding-8">Get Started</button>
                        <button class="contact font-20 bg-inherit btn-b-none flex align-center flex-row gap-1 padding-8">Contactus <div class="i-mdi-arrow-forward" /> </button>
                    </div>
                    <div class="get-started-banner flex align-center gap-2 w-100 top-3">
                        <button class="started bg-gold color-white btn-started btn-b-8 btn-b-none f-weight-900 font-18 padding-8">Get Started</button>
                        <button class="contact font-20 bg-inherit btn-b-none flex align-center flex-row gap-1 padding-8">Contactus <div class="i-mdi-arrow-forward" /> </button>
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
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

}
.background-img {
    position: absolute;
    left: 0%;
    z-index: -1;
    aspect-ratio: 550/400;
    width: 100%;
    height: 80vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('@/assets/blob-haikei.svg');
}
.splash-context {
    display: grid;
    grid-template-columns: 50% 50% 0fr;
    grid-template-rows: 50% 30%;
    grid-column-gap: 2px;
    grid-row-gap: 10px;
    justify-items: stretch;
    align-items: stretch;
    .img-banner {
        // height: 40vh;
        // width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
// .splash-text {
//     width: 40%;
// }
// .get-started-banner {
//     grid-area: 2 / 1 / 3 / 2;
// }
.started {
    font-family: Roboto;
    cursor: pointer;
    transition: transform .3s ease;
    &:hover {
        transform: scaleX(1.12);
    }
}
.contact {
    font-family: Roboto;
    height: 2rem;
    cursor: pointer;
    transition: transform .3s ease;
    &:hover {
        transform: scaleX(1.12);
    }
}
@media screen and (min-width: 600px) {
    .background-img {
        aspect-ratio: 600/400;
        top: 5rem;
        background-image: url('@/assets/blob-haikei (1).svg');
    }
    section {
        width: 80%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .splash-context {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 100%;
        h3 {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            font-size: 40px;
            height: 80%;
        }
        img {
            // display: none;
            width: 40%;
            height: 40%;
            object-fit: cover;
        }
    }
}
</style>