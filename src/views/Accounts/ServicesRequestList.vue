<template>
    <section class="w-full px-1 flex flex-col gap-y-10">
        <div class="top-nav flex flex-col sm:flex-row justify-between items-start w-full px-2.5 gap-y-8">
            <div class="title">
                <h3 class="text-2xl font-bold">Service Requests</h3>
            </div>
            <!-- <div class="new flex flex-row items-center justify-between w-full gap-x-4">
                <div class="sort flex flex-row items-center gap-x-2">
                    <small class="text-base">Sort:</small>
                    <select name="category" id="category" class="w-[5rem] sm:w-[6rem] xs:w-auto px-2 py-1 rounded text-slate-500 border-gray-300 hover:border-slate-600 border text-sm outline-none transition-colors duration-300 cursor-pointer">
                        <option value="all">All</option>
                        <option value="Responded">Accepted</option>
                        <option value="noresponse">Not yet Accepted</option>
                    </select>
                </div>
                <button
                    class="border border-gray-300 hover:bg-slate-600 transition-colors duration-300 rounded py-1 px-2.5 sm:px-3.5 text-slate-600 hover:text-slate-100 text-sm"
                >Refresh</button>
            </div> -->
        </div>
        <div class="body-container w-full flex flex-col gap-y-4 px-1 sm:px-4 text-[#346974]">
            <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
                <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
                    <h3 class="text-lg font-semibold tracking-wide">Rafiki Cafe</h3>
                    <!-- <small class="text-sm text-slate-500 tracking-wider italic">30mins ago</small> -->
                </div>
                <div class="card-body w-full flex flex-col gap-y-4">
                    <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                        <small class="text-slate-500 text-xs">Catering</small>
                        <small>-</small>
                        <small class="text-slate-500 text-xs">Amos Kipyegon</small>
                        <small>-</small>
                        <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                        <small class="text-xs text-slate-400 italic">30mins ago.</small>
                    </div>
                    <div class="description w-full px-1 sm:px-3">
                        <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem voluptatum eaque exercitationem accusamus delectus.</p>
                    </div>
                </div>
                <div class="card-footer w-full px-1 sm:px-3">
                    <div class="response w-full flex flex-row">
                        <button class="text-sm border border-gray-300 px-4 py-1 rounded bg-slate-600 hover:bg-slate-700 transition-colors duration-300 text-slate-100">Send a response</button>
                    </div>
                </div>
            </div>
            <div class="requests-card w-full flex flex-col gap-y-6 sm:gap-y-8 px-3 py-3 border border-gray-300 rounded">
                <div class="card-header flex items-center justify-between w-full px-1 sm:px-3 py-1">
                    <h3 class="text-lg font-semibold tracking-wide">Rafiki Cafe</h3>
                    <!-- <small class="text-sm text-slate-500 tracking-wider italic">30mins ago</small> -->
                </div>
                <div class="card-body w-full flex flex-col gap-y-4">
                    <div class="details flex flex-row flex-wrap items-center w-full px-1 sm:px-3 gap-x-2 gap-y-2">
                        <small class="text-slate-500 text-xs">Catering</small>
                        <small>-</small>
                        <small class="text-slate-500 text-xs">Amos Kipyegon</small>
                        <small>-</small>
                        <small class="text-slate-500 text-xs">Kiamunyi, Nakuru</small>
                        <small class="text-xs text-slate-400 italic">30mins ago.</small>
                    </div>
                    <div class="description w-full px-1 sm:px-3">
                        <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem voluptatum eaque exercitationem accusamus delectus.</p>
                    </div>
                </div>
                <div class="card-footer w-full px-1 sm:px-3">
                    <div class="response w-full flex flex-row">
                        <button class="text-sm border border-slate-600 px-4 py-1 rounded text-slate-600">Accepted request</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>