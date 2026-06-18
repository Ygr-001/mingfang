// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],

  css: ['~~/assets/css/main.css'],

  app: {
    head: {
      title: '明芳线业 - 专业纱线生产制造商 | MING FANG',
      meta: [
        { name: 'description', content: '明芳线业始创于1997年，专业生产涤纶线、尼龙线、包芯线、全棉线、弹力线、绣花线、蓬松线、防水线、抗菌线、可再生纱线等。月产量100吨以上，通过OEKO-TEX标准100婴儿级认证。' },
        { name: 'keywords', content: '明芳线业,缝纫线,涤纶线,尼龙线,包芯线,全棉线,弹力线,绣花线,蓬松线,三防线,可再生纱线,环保舒弹丝,MING FANG' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  tailwindcss: {
    viewer: false,
  },
})
