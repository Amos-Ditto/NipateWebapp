<template>
    <div class="spinner">
        <span class="loader"></span>
    </div>
</template>

<style>
.loader {
    @apply w-full h-full;
    border: 5px solid rgb(210, 216, 221);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>