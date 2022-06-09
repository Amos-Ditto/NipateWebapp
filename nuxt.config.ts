import presetIcons from '@unocss/preset-icons'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt'],

  unocss: {
    preflight: false,
    presets: [
      presetIcons(),
    ],
  },
})