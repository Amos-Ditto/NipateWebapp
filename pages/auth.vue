<template>
    <NuxtLayout name="default">
        <main>
            <NuxtPage />
        </main>
    </NuxtLayout>
</template>

<style>

@tailwind components;
@tailwind utilities;

@layer components {
    main {
        @apply w-full h-full flex justify-center relative;
    }
}
</style>