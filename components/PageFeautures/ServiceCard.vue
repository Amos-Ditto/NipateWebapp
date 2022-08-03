<template>
    <div class="card">
        <div class="card-title">
            <h2>Catering Services</h2>
        </div>
        <div class="card-context">
            <p>Our catering services are great, you are going enjoy them
                Our catering services are great, you are going enjoy them
                Our catering services are great, you are going enjoy them
            </p>
        </div>
        <div class="card-footer">
            <div class="user-details">
                <div
                    class="user-icon w-[22px] h-[22px] flex items-center justify-center rounded-full text-neutral-400 bg-gray-200">
                    <div class="i-mdi-account"></div>
                </div>
                <span>Rafiki cafe</span>
            </div>
            <div class="user-location">
                <div class="i-mdi-google-maps text-neutral-400"></div>
                <div class="location-name">
                    <span>Kangemi</span>-
                    <span>Nairobi</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    @apply  min-w-[220px] sm:w-[280px] sm:h-[180px] px-8 h-[180px] border border-gray-300;
    @apply flex flex-col px-2 py-8 justify-between rounded-md hover:border-gray-400 cursor-pointer;
    transition: width 300ms , height 300ms , border 300ms;
}
/* Card style */
.card .card-title h2 {
    @apply font-semibold text-lg md:text-xl text-neutral-600;

}
.card .card-context p {
    @apply text-base sm:text-base text-neutral-500 tracking-normal leading-6;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.card .card-footer {
    @apply flex flex-row items-center gap-2 w-full;
}
.card-footer .user-details , .card-footer .user-location {
    @apply flex flex-row gap-1 items-center w-[50%] overflow-hidden;
}
.card-footer .user-details span , .card-footer .user-location span {
    @apply text-xs;
}
.location-name {
    @apply flex flex-row items-center text-sm gap-0;
}
</style>