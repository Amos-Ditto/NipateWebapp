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
  app: {
    head: {
      title: "nipate",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        //{ src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js' } hii ni examl
      ],
      link: [
        // { rel: 'icon', href: './assets/like-thumb-up-svgrepo-com.svg' } hii pia
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ]
    },
  }
})