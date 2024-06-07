import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  modules: ["nuxt-windicss", "@nuxt/content", "unplugin-icons/nuxt"]
})
