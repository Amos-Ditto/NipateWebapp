import { defineNuxtConfig } from 'nuxt'
// import Unocss from '@unocss/nuxt'
import presetIcons from '@unocss/preset-icons';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@unocss/nuxt'],
    unocss: {
        icons: true,
        presets: [presetIcons({})],
    }

})
