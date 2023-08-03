// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      script: [
        // {
        //   type: "text/javascript",
        //   src: "https://preview.keenthemes.com/metronic8/demo32/assets/plugins/global/plugins.bundle.js",
        //   body: true
        // },
        // {
        //   type: "text/javascript",
        //   src: "https://preview.keenthemes.com/metronic8/demo32/assets/js/scripts.bundle.js",
        //   body: true
        //
        // }
      ],
    },
  },
});
