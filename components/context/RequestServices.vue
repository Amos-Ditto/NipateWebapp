<template>
    <main class="w-full pt-1 flex flex-col gap-4">
        <hr>
        <ContextRequestCard>
            <template #title>
                <div class="w-full flex-row flex gap-1 px-2">
                    <div class="product flex flex-row gap-2 tracking-wide">
                        <p>Bodaboda</p>
                        <span>in:</span>
                    </div>
                    <div class="location flex flex-row gap-2 italic">
                        <p>Kabarak</p><span>-</span><p>Nakuru</p>
                    </div>
                </div>
            </template>
            <div class="content w-full">
                <div class="message w-full text-neutral-800 gap-2 flex">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt ipsam.</h3>
                </div>
            </div>
            <template #duration>
                <div class="duration w-full flex flex-row gap-1 px-4 justify-end italic">
                    <span>30 mins</span><p>ago.</p>
                </div>
            </template>
        </ContextRequestCard>
        <ContextRequestCard>
            <template #title>
                <div class="w-full flex-row flex gap-1 px-2">
                    <div class="product flex flex-row gap-2 tracking-wide">
                        <p>Mechanic</p>
                        <span>in:</span>
                    </div>
                    <div class="location flex flex-row gap-2 italic">
                        <p>Kiamunyi</p><span>-</span><p>Nakuru</p>
                    </div>
                </div>
            </template>
            <div class="content w-full">
                <div class="message w-full text-neutral-800">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt ipsam.</h3>
                </div>
            </div>
            <template #duration>
                <div class="duration w-full flex flex-row gap-1 px-4 justify-end italic">
                    <span>1 h</span><p>ago.</p>
                </div>
            </template>
        </ContextRequestCard>
        <ContextRequestCard>
            <template #title>
                <div class="w-full flex-row flex gap-1 px-2">
                    <div class="product flex flex-row gap-2 tracking-wide">
                        <p>Bodaboda</p>
                        <span>in:</span>
                    </div>
                    <div class="location flex flex-row gap-2 italic">
                        <p>Kabarak</p><span>-</span><p>Nakuru</p>
                    </div>
                </div>
            </template>
            <div class="content w-full">
                <div class="message w-full text-neutral-800">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt ipsam.</h3>
                </div>
            </div>
            <template #duration>
                <div class="duration w-full flex flex-row gap-1 px-4 justify-end italic">
                    <span>1 h</span><p>ago.</p>
                </div>
            </template>
        </ContextRequestCard>
        <ContextRequestCard>
            <template #title>
                <div class="w-full flex-row flex gap-1 px-2">
                    <div class="product flex flex-row gap-2 tracking-wide">
                        <p>Bodaboda</p>
                        <span>in:</span>
                    </div>
                    <div class="location flex flex-row gap-2 italic">
                        <p>Kabarak</p><span>-</span><p>Nakuru</p>
                    </div>
                </div>
            </template>
            <div class="content w-full">
                <div class="message w-full text-neutral-800">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt ipsam.</h3>
                </div>
            </div>
            <template #duration>
                <div class="duration w-full flex flex-row gap-1 px-4 justify-end italic">
                    <span>3 h</span><p>ago.</p>
                </div>
            </template>
        </ContextRequestCard>
    </main>
</template>