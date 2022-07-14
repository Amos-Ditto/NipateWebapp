<template>
    <div class="w-full py-2 flex flex-col gap-1 card cursor-pointer border-b border-neutral-200 hover:bg-slate-100 rounded">
        <div class="title w-full py-1 text-neutral-600 text-sm">
            <slot name="title"></slot>
        </div>
        <div class="w-full main text-neutral-800 pl-6 text-lg sm:text-lg">
            <slot></slot>
        </div>
        <div class="footer w-full text-neutral-600 duration text-sm flex flex-row px-6 md:px-3 py-2">
            <h3 class="font-bold hover:underline hover:tracking-wider">view</h3>
            <slot name="duration"></slot>
        </div>
    </div>
</template>
<style scoped>
.card {
    font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif;
    transition: transform 200ms ease, background-color 300ms ease;
}
.title , .main {
    transition: color 300ms ease;
}
.footer h3 {
    transition: text-decoration-line 300ms ease, letter-spacing 300ms ease;
}
</style>