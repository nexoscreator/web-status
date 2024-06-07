import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  preset: 'github_pages',
  css: ["~/assets/main.css"],
  modules: ["nuxt-windicss", "@nuxt/content", "unplugin-icons/nuxt"]
})
