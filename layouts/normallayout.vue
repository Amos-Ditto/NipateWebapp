<template>
    <main class="w-full h-full m-0 p-0 bg-gray-100 fixed top-0 left-0 bottom-0 right-0 overflow-y-auto">
        <section class="w-full h-full flex flex-col">
            <div class="top-nav w-full h-[4.5rem] bg-white shadow border border-gray-200 relative">
                <DesignsNavBar />
                <div class="header-bg absolute top-[4rem] -z-10 left-0 w-full h-[6rem] bg-slate-200"></div>
            </div>
            <section class="w-full p-0 m-0 bg-inherit">
                <slot />
            </section>
        </section>
    </main>
</template>