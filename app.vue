<script setup lang="ts">
import { isNavigationFailure } from "vue-router";
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
  <main class="fixed bottom-0 top-0 left-0 right-0 bg-gray-100 m-0 p-0 overflow-y-auto">
    <UtilsPageLoading v-if="routes" class="absolute top-0 left-0 z-20" />
    <NuxtPage />
  </main>
</template>

<style>

* {
  box-sizing: border-box;
}
html {
  height: -webkit-fill-available;
  -webkit-text-size-adjust: 100%;
}

/* font-family: "NonBreakingSpaceOverride","Hoefler Text",Garamond,"Times New Roman",serif; */

body {
  font-weight: 400;
  font-size: 1em;
  line-height: 1.8;
  margin: 0;
  text-rendering: optimizeLegibility;
  padding: 0%;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  /* For disabling user selection */

  /* -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
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
