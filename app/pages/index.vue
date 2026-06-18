<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative h-[500px] md:h-[650px]">
      <!-- SSR降级：Swiper未加载时显示第一张图 -->
      <div class="absolute inset-0">
        <img src="/images/webp/pic2.webp" alt="明芳线业" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/35" />
      </div>
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div class="max-w-2xl">
          <p class="text-blue-200 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase">FACTORY STRENGTH</p>
          <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight">明芳线业</h2>
          <p class="text-sm md:text-base text-gray-200 mb-6 md:mb-8 mx-auto">明芳产业园，集纺纱、染色、检测、运输于一体，月产量100吨以上</p>
          <NuxtLink to="/about" class="btn-primary text-sm md:text-base">了解我们</NuxtLink>
        </div>
      </div>

      <!-- Swiper 轮播（客户端激活后覆盖降级内容） -->
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="h-full absolute inset-0 z-20"
      >
        <SwiperSlide v-for="(slide, i) in heroSlides" :key="i">
          <div class="absolute inset-0">
            <img :src="slide.img" :alt="slide.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/35" />
          </div>
          <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
            <div class="max-w-2xl">
              <p class="text-blue-200 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase">{{ slide.tag }}</p>
              <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight">{{ slide.title }}</h2>
              <p class="text-sm md:text-base text-gray-200 mb-6 md:mb-8 mx-auto">{{ slide.description }}</p>
              <NuxtLink :to="slide.link" class="btn-primary text-sm md:text-base">{{ slide.btnText }}</NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- 公司简介 + 发展规模 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Enterprise Profile</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-6">公司简介</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                明芳线业始创于<strong class="text-gray-900">1997年</strong>，是一家专业纱线生产制造商。公司生产的各种涤纶线、尼龙线、包芯线、全棉线、特品线、弹力线、绣花线、蓬松线、防水线、抗菌线，以及再生纱线等，深受广大客户好评。
              </p>
              <p>
                公司现全资收购具有独立排污许可证的<strong class="text-gray-900">广东肇庆鸿基织业有限公司</strong>，成立明芳产业园。集生产、染色、运输等系列完善服务于一体，实力雄厚，<strong class="text-gray-900">月产量达100吨以上</strong>。
              </p>
              <p class="text-xs text-gray-400 italic">
                Mingfang threads was founded in 1997 and is a professional yarn production manufacturer. The company produces various polyester threads, nylon threads, cored threads, all cotton threads, specialty threads, elastic thread embroidery threads, fluffy threads, waterproof threads, antibacterial threads, and recycled yarns, which are highly praised by customers. The company is now fully purchasing Guangdong Zhaoqing Hongji Textile Co., Ltd., which has an independent pollution discharge license, to establish Mingfang Industrial Park. Integrating production, dyeing, transportation and other comprehensive services, with a monthly output of over 100 tons.
              </p>
            </div>
          </div>
          <div class="relative">
            <img src="/images/webp/scale-icon2.webp" alt="明芳线业" class="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg" />
            <div class="absolute -bottom-3 -left-3 bg-primary text-white px-3 py-1.5 rounded-lg shadow text-sm font-bold">
              始于 1997
            </div>
          </div>
        </div>

        <!-- 发展规模 -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div class="text-center mb-8">
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Development Scale</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">发展规模</h2>
            <p class="text-gray-500 text-sm max-w-2xl mx-auto">
              建立于2001年，总资产七千万元，有排污许可证，印染、生产一体，产业完整。占地20余亩，年产能1000吨或1000万个缝纫线。
            </p>
            <p class="text-xs text-gray-400 italic mt-1">
              Established in 2001, with a total asset of 70 million yuan, with a pollution discharge permit, printing and dyeing, and integrated production, the industry is complete. Covering an area of over 20 acres, with an annual production capacity of 1000 tons or 10 million sewing threads.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">2001</div>
              <div class="text-xs text-gray-500 mt-1">建立年份</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">7000万</div>
              <div class="text-xs text-gray-500 mt-1">总资产</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">20亩+</div>
              <div class="text-xs text-gray-500 mt-1">占地面积</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">1000吨</div>
              <div class="text-xs text-gray-500 mt-1">年产能</div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <img src="/images/webp/scale-data.webp" alt="发展规模数据" class="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- 业务范围 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom">
        <h2 class="section-title">业务范围</h2>
        <p class="section-subtitle text-sm md:text-base">开发内衣、泳衣、运动服、鞋包、塑身衣和汽车内饰的纱线辅料</p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10">
          <div v-for="item in applications" :key="item.label"
            class="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
            <span class="text-3xl">{{ item.icon }}</span>
            <p class="text-sm font-medium text-gray-700 mt-2">{{ item.label }}</p>
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
              <img :src="item.img" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
              <img :src="cert.img" :alt="cert.name" class="w-full h-full object-contain p-1 hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      <!-- 大图弹窗 -->
      <div v-if="lightboxImg" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" @click="lightboxImg = ''">
        <img :src="lightboxImg" alt="证书大图" class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
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

const heroSlides = [
  {
    tag: 'FACTORY STRENGTH',
    title: '明芳线业',
    description: '明芳产业园，集纺纱、染色、检测、运输于一体，月产量100吨以上',
    btnText: '了解我们',
    link: '/about',
    img: '/images/webp/pic2.webp',
  },
  {
    tag: 'SINCE 1997',
    title: '品质纱线 · 明芳制造',
    description: '14大产品系列，通过OEKO-TEX标准100婴儿一级认证',
    btnText: '查看产品',
    link: '/products',
    img: '/images/webp/pic4.webp',
  },
  {
    tag: 'PRODUCTS',
    title: '品种齐全 · 应用广泛',
    description: '14大产品系列，覆盖服装、玩具、运动器材、汽车内饰等行业',
    btnText: '了解产品',
    link: '/products',
    img: '/images/webp/company/cover2.webp',
  },
]

const applications = [
  { label: '内衣', icon: '👙' },
  { label: '泳衣', icon: '🏊' },
  { label: '运动服', icon: '⚽' },
  { label: '鞋包', icon: '👟' },
  { label: '塑身衣', icon: '🩱' },
  { label: '汽车内饰', icon: '🚗' },
]

const qualityItems = [
  { title: '生产车间', img: '/images/webp/lab/lab3.webp' },
  { title: '染坊', img: '/images/webp/lab/lab5.webp' },
  { title: '实验检测', img: '/images/webp/lab/lab1.webp' },
  { title: '质检室', img: '/images/webp/lab/lab2.webp' },
  { title: '样板间', img: '/images/webp/lab/lab4.webp' },
]

const certs = [
  { name: 'OEKO-TEX Standard 100', desc: '瑞士TESTEX AG认证，婴儿一级安全标准', img: '/images/webp/certs/cert1.webp' },
  { name: 'GRS 全球回收标准', desc: 'SGS-CSTC颁发，可再生纱线认证', img: '/images/webp/certs/cert2.webp' },
  { name: 'GRS Scope Certificate', desc: 'SGS认证，涵盖生产、染色、包装、贸易', img: '/images/webp/certs/cert3.webp' },
  { name: 'SGS 测试报告', desc: 'SGS-CSTC检测，产品全部通过PASS', img: '/images/webp/certs/cert4.webp' },
  { name: 'GRS 产品附录', desc: 'SGS颁发，可再生纱线产品认证附录', img: '/images/webp/certs/cert5.webp' },
  { name: 'SGS 产品检测报告', desc: '2020年SGS检测，涵盖多款产品', img: '/images/webp/certs/cert6.webp' },
]
</script>
