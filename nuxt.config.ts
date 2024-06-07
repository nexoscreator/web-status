import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxt/content', 'unplugin-icons/nuxt'],
  css: ['~/assets/main.css'],
  // Other configurations...
})
