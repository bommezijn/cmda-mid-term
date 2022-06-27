import { apiEndpoint } from './sm.json'
import smConfig from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cmda-midterm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['../static/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/image',
    ['@nuxtjs/prismic', { endpoint: smConfig.apiEndpoint || '' }],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      name: 'CMD Mid Term',
      description: 'CMD Mid term accreditatie website',
      theme_color: '#ffcc21',
      lang: 'nl',
      ogType: 'website',
      ogSiteName: 'CMD Mid Term',
      ogTitle: 'CMD Mid Term',
      ogDescription: 'CMD Mid term accreditatie website',
      nativeUI: 'true',
    },
    manifest: {
      name: 'CMD Mid Term',
      short_name: 'CMD-MD',
      lang: 'en',
      background_color: '#ffcc21',
      theme_color: '#ffcc21',
    },
    workbox: {
      preCaching: [],
      offlineStrategy: 'NetworkFirst',
      offlineAssets: ['/*.png'],
    },
  },
  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    apiOptions: {
      routes: [
        {
          type: 'standaard',
          path: '/standaard/:uid',
        },
      ],
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@prismicio/vue'],
  },

  googleFonts: {
    display: 'swap',
    text: 'Hello World',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    overwriting: false,
    families: {
      'Open+Sans': true,
    },
  },
}
