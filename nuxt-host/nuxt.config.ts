import federation from "@originjs/vite-plugin-federation";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    plugins: [
      federation({
        name: 'nuxt-host',
        remotes: {
            microBlock: "http://localhost:5001/assets/remoteEntry.js",
        },
        shared: ['vue'],
    })
    ],
  }
})
