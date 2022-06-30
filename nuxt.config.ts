import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    css: ["@/assets/css/main.css"],
})
