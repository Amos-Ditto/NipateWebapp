<script setup lang="ts">

const title = ref<string>('Nipate App');
const description = ref<string>('This is nipate development app');

useHead({
  title: title.value,
  meta: [{
    name: 'nipate',
    content: description.value
  }]
})

</script>

<template>
  <main class="w-screen h-screen bg-slate-50">
    <NuxtPage />
  </main>
</template>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0%;
  padding: 0%;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
}
.page-enter-from{
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@tailwind components;
@tailwind utilities;

@layer components {
  main {
    @apply m-0 p-0;
  }
}
</style>
