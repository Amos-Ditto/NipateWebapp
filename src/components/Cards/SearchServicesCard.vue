<template>
    <div class="service-card w-full min-h-[8rem] border-b border-gray-200 flex flex-col gap-y-4 px-2 sm:px-6 py-6">
        <div class="card-header">
            <h3 class="text-lg font-bold tracking-wider">Rafiki cafe</h3>
        </div>
        <div class="card-description w-full">
            <p class="text-sm tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quasi? Minima
                culpa, quisquam dolore est quibusdam eius inventore ratione quia alias eveniet nesciunt expedita nisi
                fugiat labore. Eum, rerum obcaecati.</p>
        </div>
        <div class="card-details flex flex-col gap-y-4">
            <div class="body-details flex flex-col sm:flex-row gap-x-4 gap-y-4 item-center">
                <div class="service-details flex flex-row items-center">
                    <button class="px-4 py-1 bg-gray-200 rounded text-sm tracking-wider text-slate-500">Coffee
                        shop</button>
                </div>
                <div class="loc-details flex flex-row items-center gap-x-1 text-slate-500">
                    <div class="i-mdi-map-marker text-lg"></div>
                    <small class="text-sm font-light">Lower Rafiki A, Nakuru, Kenya</small>
                </div>
            </div>
        </div>
        <div class="card-footer flex flex-row items-center justify-between sm:justify-start gap-x-6 pt-2.5">
            <button
                class="capitalize px-4 py-1 border border-dodgerblue text-dodgerblue text-sm rounded-sm tracking-wider"
            >view</button>
            <button class="px-4 py-1 border border-dodgerblue text-dodgerblue text-sm tracking-wide capitalize rounded-sm">send request</button>
        </div>
    </div>
</template>