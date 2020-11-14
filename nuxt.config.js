export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtlayout-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.js' //plugin that will be redirect to /sorry page if error 500
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    //import self modules
    '~/modules/example',
    //with passing parameter
    ['~/modules/example',{ token: '123' }]
  ],

  //add middleware for route
  router: {
    //middleware: 'record-stats'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
