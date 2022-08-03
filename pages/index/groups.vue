<template>
    <main class="w-full pt-4 flex flex-col gap-4">
        <div class="page-header font-bold text-xl sm:text-3xl tracking-tight">
            <h3>Services Near you</h3>
        </div>
        <div class="container">
            <div class="card">
                <div class="card-title">
                    <h2>Catering Services</h2>
                </div>
                <div class="card-context">
                    <p>Our catering services are great, you are going enjoy them</p>
                </div>
                <div class="card-footer">
                    <div class="user-details">
                        <div class="user-icon w-[22px] h-[22px] flex items-center justify-center rounded-full text-neutral-400 bg-gray-200">
                            <div class="i-mdi-account"></div>
                        </div>
                        <span>Rafiki cafe</span>
                    </div>
                    <div class="user-location">
                        <div class="i-mdi-google-maps text-neutral-400"></div>
                        <div class="location-name">
                            <span>Kangemi</span>,
                            <span>Nairobi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    @apply  flex-row py-2 flex gap-4 w-full overflow-x-auto overflow-y-hidden;
}
.container .card {
    @apply  w-[200px] sm:w-[250px] sm:h-[180px] px-8 h-[180px] border border-gray-300;
    @apply flex flex-col px-2 py-8 justify-between rounded-md hover:border-gray-400 cursor-pointer;
    transition: width 300ms , height 300ms;
}
/* Card style */
.card .card-title h2 {
    @apply indent-2 font-semibold text-xl text-neutral-600;

}
.card .card-context p {
    @apply text-base sm:text-lg text-neutral-500 tracking-normal leading-6;
}
.card .card-footer {
    @apply flex flex-row items-center gap-2;
}
.card-footer .user-details , .card-footer .user-location {
    @apply flex flex-row gap-1 items-center;
}
.card-footer .user-details span , .card-footer .user-location span {
    @apply text-xs truncate;
}
</style>