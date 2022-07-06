import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons';

export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@unocss/nuxt'],
    unocss: {
        icons: true,
        presets: [presetIcons({})],
    }

})
