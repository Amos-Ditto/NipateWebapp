<template>
    <nav class="w-full h-full flex flex-row justify-between items-center">
        <div class="left px-8 md:px-14 lg:px-28">
            <img class="w-[6rem] sm:w-[6.4rem] lg:w-[7rem] lg:h-[4.4rem] h-[4rem]" src="@/assets/img/Logo/Nipate.svg" alt="label">
        </div>
        <div class="right flex flex-row gap-9 md:gap-40 lg:gap-60 px-8 md:px-8 lg:px-20">
            <div class="links hidden sm:flex items-center flex-row text-neutral-500 gap-3 md:gap-8">
                <div class="link">
                    <NuxtLink to="/home">Home</NuxtLink>
                </div>
                <div class="link">
                    <NuxtLink to="">Services</NuxtLink>
                </div>
                <div class="link">
                    <NuxtLink to="">Advertise</NuxtLink>
                </div>
                <div class="link">
                    <NuxtLink to="">Contact Us</NuxtLink>
                </div>
            </div>
            <div class="other-links flex flex-row gap-8 sm:gap-6 lg:gap-9">
                <div class="other-notification flex items-center text-neutral-500 text-xl relative cursor-pointer">
                    <div class="i-mdi-bell" />
                    <div class="notification w-[5px] h-[5px] bg-orange-400 rounded-full absolute top-0 right-[-4px] translate-y-[40%]"></div>
                </div>
                <div class="other-user flex flex-row items-center gap-1 cursor-pointer relative">
                    <div class="user-logo w-[2.2rem] h-[2.2rem] border-[3px] border-gray-200 rounded-full flex items-center justify-center text-xl text-neutral-400">
                        <div class="i-mdi-user text-" />
                    </div>
                    <div class="i-mdi-chevron-down text-lg text-neutral-600" />
                    <!-- <div class="user-dropdown absolute bottom-0 right-0 translate-y-[108%] w-[16rem] md:w-[20rem] min-h-[12rem] bg-slate-200 shadow-md">

                    </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.left , .left img {
    transition: padding 300ms , width 300ms , height 300ms;
}
.right , .right .links , .other-links {
    transition: padding 300ms , gap 300ms ;
}

.other-notification .i-mdi-bell {
    transition: color 300ms;
}
.other-notification:hover .i-mdi-bell {
    @apply text-orange-400;
}
.other-user:hover .user-logo {
    @apply border-orange-300;
}
.other-user:hover .i-mdi-chevron-down {
    @apply text-orange-400 scale-125;
}
.other-user .user-logo {
    transition: border 300ms;
}
.other-user .i-mdi-chevron-down {
    transition: color 300ms , transform 300ms;
}

.links .link {
    @apply text-base font-bold cursor-pointer hover:text-orange-500;
    transition: color 300ms;
}
.router-link-active {
    @apply text-orange-500;
}
</style>