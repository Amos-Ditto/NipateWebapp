<template>
    <div class="card">
        <div class="card-title">
            <h3>Boda</h3>
        </div>
        <div class="card-body">
            <p>Our boda service are great, get in contact with me on 24/7 clock for any service you need.
                Our boda service are great, get in contact with me on 24/7 clock for any service you need.
            </p>
        </div>
        <div class="card-footer">
            <div class="user-details">
                <div
                    class="user-icon w-[22px] sm:w-[32px] h-[22px] sm:h-[32px] flex items-center justify-center rounded-full text-neutral-400 bg-gray-200">
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
    @apply w-full px-2 min-h-[6rem] py-2 flex flex-col gap-2 cursor-pointer border border-gray-300 rounded-sm;
    @apply hover:shadow-md;
    transition: box-shadow 300ms ease;
}

.card-title {
    @apply w-full py-1 px-4;
}
.card-title h3 {
    @apply text-slate-600 font-semibold text-xl;
}
.card-body {
    @apply w-full indent-2;
}
.card-body p {
    @apply text-base text-neutral-500;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.card-footer {
    @apply w-full flex flex-row items-center py-1 gap-1;
}
.user-details , .user-location {
    @apply w-[50%] flex items-center flex-row gap-2;
}
.user-details span {
    @apply text-sm truncate;
}
.user-location .location-name {
    @apply text-sm truncate;
}
</style>