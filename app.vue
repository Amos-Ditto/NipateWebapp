<template>
  <main>
    <header id="top-navbar" class="flex justify-align-center">
      <TopNavbar></TopNavbar>
    </header>
    <NuxtPage />
  </main>
</template>

<script setup>

</script>

<style lang="scss">

:root {
  --background-color: #f8f9fa;
  --background-black: #343a40;
  --color-black: #343a40;
  --color-dark: #000;
  --color-white: #ffffff;
  --color-variant-black: #706b6b;
  --color-gold: #fe7f2d;
}

* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
body {
  background: var(--background-color);
  font-family: serif;
  color: var(--color-black);
  overflow-x: hidden;
}

.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.justify-right {
  justify-content: flex-end;
}
.justify-align-center {
  justify-content: center;
  align-items: center;
}
.align-center {
  align-items: center;
}
.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.wh-100 {
  width: 100%;
  height: 100%;
}
.flex-between {
  justify-content: space-between;
}
.w-100 {
  width: 100%;
}
.w-50 {
  width: 50%;
}
.h-100 {
  height: 100%;
}
.h-50 {
  height: 50%;
}
.bg-inherit {
  background: inherit;
}
.font-12 {
  font-size: 12px;
}
.font-14 {
  font-size: .9rem;
}
.font-16 {
  font-size: 16px;
}
.font-18 {
  font-size: 18px;
}
.font-20 {
  font-size: 20px;
}
.font-24 {
  font-size: 24px;
}
.f-weight-500 {
  font-weight: 500;
}
.f-weight-900 {
  font-weight: 900;
}
.padding-2 {
  padding: 2px;
}
.padding-4 {
  padding: 4px;
}
.padding-8 {
  padding: 8px;
}
.padding-12 {
  padding: 12px;
}
.padding-w-4 {
  padding: 0 4px;
}
.padding-w-8 {
  padding: 0 8px;
}
.gap--5 {
  gap: 0.2rem;
}
.gap-1 {
  gap: 1rem;
}
.gap-2 {
  gap: 2rem;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.color-white {
  color: var(--color-white);
}
.color-variant-dark {
  color: var(--color-variant-black);
}
.c-dark {
  color: var(--color-dark);
}
.left-1 {
  margin-left: 1rem;
}
.left-3 {
  margin-left: 3rem;
}
.top-3 {
  margin-top: 3rem;
}
.border-4 {
  border-radius: 4px;
}
.b-4 {
  border-radius: 4px;
}
.b-8 {
  border-radius: 8px;
}
.br-12 {
  border-radius: 12px;
}
.btn-b-none {
  border: none;
  outline: none;
}
.btn-b-4 {
  border-radius: 4px;
}
.btn-b-8 {
  border-radius: 8px;
}
.bg-gold {
  background: var(--color-gold);
}
.w-2 {
  width: 20%;
}
.w-3 {
  width: 30%;
}
.w-4 {
  width: 40%;
}
.w-6 {
  width: 60%;
}
.w-7 {
  width: 70%;
}
.w-8 {
  width: 80%;
}
#top-navbar {
  width: 100vw;
  height: 1rem;
}
</style>