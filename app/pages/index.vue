<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative h-[500px] md:h-[650px] overflow-hidden">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="h-full"
      >
        <SwiperSlide v-for="(slide, i) in heroSlides" :key="i" class="h-full">
          <div class="relative h-full flex items-center justify-center text-center text-white px-4"
            :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
            <div class="max-w-2xl relative z-10">
              <p class="hero-tag text-blue-200 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase">{{ slide.tag }}</p>
              <h2 class="hero-title text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-wide">{{ slide.title }}</h2>
              <p class="hero-desc text-sm md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8">{{ slide.description }}</p>
              <NuxtLink :to="slide.link" class="btn-primary hero-cta text-sm md:text-base">{{ slide.btnText }}</NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- 公司简介 + 发展规模 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div ref="profileEl" class="grid lg:grid-cols-2 gap-12 items-center mb-16 reveal-section" :class="{ 'is-visible': profileVisible }">
          <div class="reveal-left">
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Enterprise Profile</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-6">公司简介</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                明芳线业始创于<strong class="text-gray-900">1997年</strong>，是一家专业纱线生产制造商。公司生产的各种涤纶线、尼龙线、包芯线、全棉线、特品线、弹力线、绣花线、蓬松线、防水线、抗菌线，以及再生纱线等，深受广大客户好评。
              </p>
              <p>
                公司现全资收购具有独立排污许可证的<strong class="text-gray-900">广东肇庆鸿基织业有限公司</strong>，成立明芳产业园。集生产、染色、运输等系列完善服务于一体，实力雄厚，<strong class="text-gray-900">月产量达100吨以上</strong>。
              </p>
              <p class="text-xs text-gray-400 italic leading-relaxed">
                Mingfang threads was founded in 1997 and is a professional yarn production manufacturer. Integrating production, dyeing, transportation and other comprehensive services, with a monthly output of over 100 tons.
              </p>
            </div>
          </div>
          <div class="relative reveal-right">
            <div class="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl opacity-50 blur-2xl"></div>
            <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/scale-icon2.webp"
              alt="明芳线业"
              loading="lazy"
              class="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-xl hover:scale-[1.02] hover:-rotate-1 transition-transform duration-700" />
            <div class="absolute -bottom-3 -left-3 bg-primary text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold hover:scale-110 transition-transform">
              始于 1997
            </div>
            <div class="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-gray-700 hover:scale-110 transition-transform">
              <span class="text-primary">●</span> 30+ 年
            </div>
          </div>
        </div>

        <!-- 发展规模 -->
        <div ref="scaleEl" class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 md:p-12 relative overflow-hidden reveal-section" :class="{ 'is-visible': scaleVisible }">
          <!-- 装饰背景 -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div class="relative text-center mb-8">
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Development Scale</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">发展规模</h2>
            <p class="text-gray-500 text-sm max-w-2xl mx-auto">
              建立于2001年，总资产七千万元，有排污许可证，印染、生产一体，产业完整。占地20余亩，年产能1000吨或1000万个缝纫线。
            </p>
            <p class="text-xs text-gray-400 italic mt-1 max-w-2xl mx-auto">
              Established in 2001, with a total asset of 70 million yuan, integrated production. Annual production capacity of 1000 tons or 10 million sewing threads.
            </p>
          </div>

          <!-- 数据卡片 - 数字动画 -->
          <div class="relative grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div v-for="(stat, idx) in stats" :key="stat.label"
              class="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 stat-card group"
              :style="{ animationDelay: idx * 0.1 + 's' }">
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <!-- 年份(历) -->
                <svg v-if="stat.iconKey === 'year'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zM8 15h2v2H8v-2zM14 15h2v2h-2v-2z"/></svg>
                <!-- 资产(钱币) -->
                <svg v-else-if="stat.iconKey === 'asset'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6v12M9 9h4.5a2 2 0 010 4H9a2 2 0 000 4h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <!-- 面积(量尺) -->
                <svg v-else-if="stat.iconKey === 'area'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 17l6-6 4 4 8-8M14 7h7v7M3 21h18"/></svg>
                <!-- 产能(齿轮) -->
                <svg v-else-if="stat.iconKey === 'capacity'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317a1 1 0 011.35 0l1.45 1.235a1 1 0 00.9.255l1.872-.31a1 1 0 011.15.815l.31 1.872a1 1 0 00.494.726l1.586.99a1 1 0 01.39 1.27l-.802 1.733a1 1 0 000 .9l.802 1.732a1 1 0 01-.39 1.27l-1.586.99a1 1 0 00-.494.726l-.31 1.873a1 1 0 01-1.15.814l-1.872-.31a1 1 0 00-.9.255l-1.45 1.236a1 1 0 01-1.35 0l-1.45-1.236a1 1 0 00-.9-.255l-1.872.31a1 1 0 01-1.15-.814l-.31-1.873a1 1 0 00-.494-.726l-1.586-.99a1 1 0 01-.39-1.27l.802-1.732a1 1 0 000-.9l-.802-1.732a1 1 0 01.39-1.27l1.586-.99a1 1 0 00.494-.727l.31-1.872a1 1 0 011.15-.815l1.872.31a1 1 0 00.9-.255l1.45-1.235zM12 15a3 3 0 100-6 3 3 0 000 6z"/></svg>
              </div>
              <div class="text-2xl md:text-3xl font-bold text-primary stat-number">{{ stat.value }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
            </div>
          </div>

          <!-- 规模数据图 -->
          <div class="relative bg-white rounded-2xl p-6 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
            <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/scale-data.webp"
              alt="发展规模数据"
              loading="lazy"
              class="w-full rounded-lg group-hover:scale-[1.01] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>

    <!-- 业务范围 -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container-custom">
        <div ref="appsEl" class="text-center mb-12 reveal-section" :class="{ 'is-visible': appsVisible }">
          <span class="text-primary font-semibold tracking-widest text-xs uppercase">Business Scope</span>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">业务范围</h2>
          <p class="text-gray-500 text-sm max-w-2xl mx-auto">
            开发内衣、泳衣、运动服、鞋包、塑身衣和汽车内饰的纱线辅料
          </p>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div v-for="(item, idx) in applications" :key="item.label"
            class="app-card group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative"
            :style="{ animationDelay: idx * 0.08 + 's' }">
            <!-- hover背景渐变 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:from-primary group-hover:to-primary-700 transition-all duration-500">
                <!-- 内衣 -->
                <svg v-if="item.iconKey === 'underwear'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4l-2 4v3a2 2 0 002 2h10a2 2 0 002-2V8l-2-4H7zM9 4v0M15 4v0M8 13l1 7h6l1-7"/></svg>
                <!-- 泳衣 -->
                <svg v-else-if="item.iconKey === 'swimwear'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12c0-3 1.5-5 3-6 1 1 2 1.5 3 1.5h4c1 0 2-.5 3-1.5 1.5 1 3 3 3 6 0 4-3.5 7-8 7s-8-3-8-7z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9.5c.5.5 1 .5 1.5 0M13.5 9.5c.5.5 1 .5 1.5 0"/></svg>
                <!-- 运动服 -->
                <svg v-else-if="item.iconKey === 'sportswear'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2L4 6v6l3 2v8h10v-8l3-2V6l-7-4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 13l2-3 2 3M12 10v6"/></svg>
                <!-- 鞋包 -->
                <svg v-else-if="item.iconKey === 'shoes'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h12a3 3 0 003-3v-1l-3-1-2-3-2 2H8L6 8 4 9l-1 5v3zM3 17v2M6 19h12"/></svg>
                <!-- 塑身衣 -->
                <svg v-else-if="item.iconKey === 'shapewear'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 3h8l-1 3v3l1 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8l1-2V6L8 3zM10 8h4M10 12h4"/></svg>
                <!-- 汽车内饰 -->
                <svg v-else-if="item.iconKey === 'automotive'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l1.5-5h11L19 13M5 13v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5M5 13h14M8 16.5h.01M16 16.5h.01"/><circle cx="12" cy="14.5" r="1.5"/></svg>
              </div>
              <p class="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">{{ item.label }}</p>
              <p class="text-[10px] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品质保障 - 用关于明芳里的车间实验室图片 -->
    <section class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">品质保障</h2>
        <p class="section-subtitle text-sm md:text-base">每款产品严格抽样检测，完整品质控制体系</p>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          <NuxtLink v-for="item in qualityItems" :key="item.title" to="/about#workshop"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div class="aspect-[3/2] overflow-hidden">
              <img :src="item.img" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"  loading="lazy">
            </div>
            <div class="p-3 text-center">
              <h3 class="font-bold text-gray-900 text-sm">{{ item.title }}</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/about#workshop" class="text-primary text-sm font-medium hover:underline">查看详情 →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 安全认证 - 点击查看大图 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">安全认证</h2>
        <p class="section-subtitle text-sm md:text-base">通过多项国际权威检测认证，产品符合婴儿一级安全标准（点击图片查看大图）</p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10">
          <div v-for="cert in certs" :key="cert.name"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            @click="openImage(cert.img)">
            <div class="aspect-[3/4] overflow-hidden bg-gray-50">
              <img :src="cert.img" :alt="cert.name" class="w-full h-full object-contain p-1 hover:scale-105 transition-transform duration-300"  loading="lazy">
            </div>
          </div>
        </div>
      </div>

      <!-- 大图弹窗 -->
      <div v-if="lightboxImg" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" @click="lightboxImg = ''">
        <img :src="lightboxImg" alt="证书大图" class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"  loading="lazy">
        <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300">×</button>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-800 text-white text-center">
      <div class="container-custom max-w-xl">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">期待与您合作</h2>
        <p class="text-blue-100 mb-6 text-sm md:text-base">无论您需要什么类型的纱线产品，我们都能提供专业解决方案</p>
        <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors">
          联系我们 →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const lightboxImg = ref('')

function openImage(img: string) {
  lightboxImg.value = img
}

// 滚动触发动画
const profileEl = ref<HTMLElement | null>(null)
const scaleEl = ref<HTMLElement | null>(null)
const appsEl = ref<HTMLElement | null>(null)
const profileVisible = ref(false)
const scaleVisible = ref(false)
const appsVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === profileEl.value) profileVisible.value = true
          if (entry.target === scaleEl.value) scaleVisible.value = true
          if (entry.target === appsEl.value) appsVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  if (profileEl.value) observer.observe(profileEl.value)
  if (scaleEl.value) observer.observe(scaleEl.value)
  if (appsEl.value) observer.observe(appsEl.value)
})

const stats = [
  { value: '2001', label: '建立年份', iconKey: 'year' },
  { value: '7000万', label: '总资产', iconKey: 'asset' },
  { value: '20亩+', label: '占地面积', iconKey: 'area' },
  { value: '1000吨', label: '年产能', iconKey: 'capacity' },
]

const heroSlides = [
  {
    tag: 'FACTORY STRENGTH',
    title: '明芳线业',
    description: '明芳产业园，集纺纱、染色、检测、运输于一体，月产量100吨以上',
    btnText: '了解我们',
    link: '/about',
    img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/pic2.webp',
  },
  {
    tag: 'SINCE 1997',
    title: '品质纱线 · 明芳制造',
    description: '14大产品系列，通过OEKO-TEX标准100婴儿一级认证',
    btnText: '查看产品',
    link: '/products',
    img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/pic4.webp',
  },
  {
    tag: 'PRODUCTS',
    title: '品种齐全 · 应用广泛',
    description: '14大产品系列，覆盖服装、玩具、运动器材、汽车内饰等行业',
    btnText: '了解产品',
    link: '/products',
    img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover2.webp',
  },
]

const applications = [
  { label: '内衣', iconKey: 'underwear', desc: '舒适透气' },
  { label: '泳衣', iconKey: 'swimwear', desc: '防水耐用' },
  { label: '运动服', iconKey: 'sportswear', desc: '弹力伸缩' },
  { label: '鞋包', iconKey: 'shoes', desc: '高强耐磨' },
  { label: '塑身衣', iconKey: 'shapewear', desc: '贴身塑形' },
  { label: '汽车内饰', iconKey: 'automotive', desc: '阻燃抗老化' },
]

const qualityItems = [
  { title: '生产车间', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/lab/lab3.webp' },
  { title: '染坊', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/lab/lab5.webp' },
  { title: '实验检测', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/lab/lab1.webp' },
  { title: '质检室', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/lab/lab2.webp' },
  { title: '样板间', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/lab/lab4.webp' },
]

const certs = [
  { name: 'OEKO-TEX Standard 100', desc: '瑞士TESTEX AG认证，婴儿一级安全标准', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert1.webp' },
  { name: 'GRS 全球回收标准', desc: 'SGS-CSTC颁发，可再生纱线认证', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert2.webp' },
  { name: 'GRS Scope Certificate', desc: 'SGS认证，涵盖生产、染色、包装、贸易', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert3.webp' },
  { name: 'SGS 测试报告', desc: 'SGS-CSTC检测，产品全部通过PASS', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert4.webp' },
  { name: 'GRS 产品附录', desc: 'SGS颁发，可再生纱线产品认证附录', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert5.webp' },
  { name: 'SGS 产品检测报告', desc: '2020年SGS检测，涵盖多款产品', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/certs/cert6.webp' },
]
</script>

<style scoped>
/* 滚动触发动画 */
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}
.reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
}
.reveal-section.is-visible .reveal-left,
.reveal-section.is-visible .reveal-right {
  opacity: 1;
  transform: translateX(0);
}

/* 数字滚动动画 */
.stat-card {
  opacity: 0;
  animation: statFadeIn 0.6s ease forwards;
}
@keyframes statFadeIn {
  to { opacity: 1; }
}
.stat-number {
  display: inline-block;
  animation: numberPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes numberPop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* 业务范围卡片入场动画 */
.app-card {
  opacity: 0;
  animation: cardFadeIn 0.5s ease forwards;
}
@keyframes cardFadeIn {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* Hero 轮播文字入场动画 - swiper每次切换都会重新触发 */
.swiper-slide-active .hero-tag,
.swiper-slide-active .hero-title,
.swiper-slide-active .hero-desc,
.swiper-slide-active .hero-cta {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-duration: 0.8s;
}
.swiper-slide-active .hero-tag {
  animation-name: heroTagIn;
  animation-delay: 0.1s;
}
.swiper-slide-active .hero-title {
  animation-name: heroTitleIn;
  animation-delay: 0.3s;
  animation-duration: 1s;
}
.swiper-slide-active .hero-desc {
  animation-name: heroDescIn;
  animation-delay: 0.6s;
}
.swiper-slide-active .hero-cta {
  animation-name: heroCtaIn;
  animation-delay: 0.85s;
}
@keyframes heroTagIn {
  0% { opacity: 0; transform: translateY(20px); letter-spacing: 0.1em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: normal; }
}
@keyframes heroTitleIn {
  0% { opacity: 0; transform: translateY(40px) scale(0.92); filter: blur(8px); }
  60% { opacity: 1; filter: blur(0); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}
@keyframes heroDescIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes heroCtaIn {
  0% { opacity: 0; transform: translateY(15px) scale(0.9); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* 标题文字光泽扫过效果 */
.hero-title {
  background: linear-gradient(120deg, #fff 30%, #bfdbfe 50%, #fff 70%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
