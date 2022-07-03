<script setup lang="ts">
import { isNavigationFailure } from "vue-router";
import LoadingBar from "./components/utils/loadingBar.vue";
const router = useRouter();
const title = ref<string>('Nipate App');
const description = ref<string>('This is nipate development app');
const succesfull = ref<boolean>(true);
const routes = ref<boolean>(false);

router.beforeEach(to => {
  succesfull.value = true;
  routes.value = true;
})
router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    succesfull.value = false;
  }
  setTimeout(() => {
    routes.value = false;
  }, 1000);
})

useHead({
  title: title.value,
  meta: [{
    name: 'nipate',
    content: description.value
  }]
})

</script>

<template>
  <main class="w-screen h-screen bg-slate-50 m-0 p-0 relative">
    <LoadingBar v-if="routes"  :class="succesfull ? 'bg-green-500 loading-bar' : 'bg-green-500 loading-bar'" />
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
.loading-bar {
  animation: load 2s linear;
}
@keyframes load {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
