<template>
  <div class="pt-20">
    <!-- Banner -->
    <section class="relative h-[300px] md:h-[350px]">
      <img src="/images/webp/company/cover1.webp" alt="关于明芳" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase">About Us</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">关于明芳</h1>
          <p class="text-base text-gray-200">MING FANG THREADS · SINCE 1997</p>
        </div>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">公司简介</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>明芳线业始创于<strong class="text-gray-900">1997年</strong>，是一家专业纱线生产制造商。公司生产的各种涤纶线、尼龙线、包芯线、全棉线、特品线、弹力线、绣花线、蓬松线、防水线、抗菌线以及再生纱线等，深受广大客户好评。</p>
              <p>公司全资收购广东肇庆鸿基织业有限公司，成立<strong class="text-gray-900">明芳产业园</strong>。集生产、染色、运输于一体，月产量达<strong class="text-gray-900">100吨以上</strong>。</p>
              <p>产品已通过<strong class="text-gray-900">瑞士TESTEX AG</strong>认证，获得<strong class="text-gray-900">OEKO-TEX婴儿一级认证</strong>。</p>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-8">
              <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <span class="text-xl">🏭</span>
                <div><div class="font-bold text-gray-900 text-sm">总资产7000万</div><div class="text-[10px] text-gray-500">2001年建立</div></div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <span class="text-xl">📦</span>
                <div><div class="font-bold text-gray-900 text-sm">年产能1000吨</div><div class="text-[10px] text-gray-500">1000万个缝纫线</div></div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <span class="text-xl">🌿</span>
                <div><div class="font-bold text-gray-900 text-sm">排污许可证</div><div class="text-[10px] text-gray-500">印染生产一体</div></div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <span class="text-xl">🏆</span>
                <div><div class="font-bold text-gray-900 text-sm">婴儿一级认证</div><div class="text-[10px] text-gray-500">OEKO-TEX 100</div></div>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/webp/company/profile.webp" alt="明芳线业" class="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section id="history" class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-3xl">
        <h2 class="section-title">发展历程</h2>
        <p class="section-subtitle text-sm md:text-base">从1997年至今，明芳线业不断发展壮大</p>
        <div class="mt-10">
          <div v-for="(item, idx) in timeline" :key="item.year" class="flex gap-5">
            <div class="flex-shrink-0 w-16 text-right pt-0.5">
              <span class="text-xl font-bold text-primary">{{ item.year }}</span>
            </div>
            <div class="flex-grow pb-8 pl-5 border-l-2 relative"
              :class="idx === timeline.length - 1 ? 'border-transparent' : 'border-blue-100'">
              <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white shadow"></div>
              <h3 class="font-bold text-gray-900 text-sm md:text-base">{{ item.title }}</h3>
              <p class="text-gray-500 text-xs md:text-sm mt-1">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工厂与车间 -->
    <section id="workshop" class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">工厂与车间</h2>
        <p class="section-subtitle text-sm md:text-base">集生产、染色、检测于一体</p>
        <div class="grid sm:grid-cols-2 gap-6 mt-10">
          <div v-for="item in workshopItems" :key="item.title" class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img :src="item.img" :alt="item.title" class="w-full aspect-[3/2] object-cover" />
            <div class="p-5">
              <h3 class="font-bold text-gray-900 mb-1">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 认证 -->
    <section id="certs" class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-6xl">
        <h2 class="section-title">安全认证</h2>
        <p class="section-subtitle text-sm md:text-base">通过多项国际权威检测认证，产品符合婴儿一级安全标准</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div v-for="cert in certItems" :key="cert.name"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="aspect-[3/4] overflow-hidden bg-gray-50">
              <img :src="cert.img" :alt="cert.name" class="w-full h-full object-contain" />
            </div>
            <div class="p-4 text-center">
              <h3 class="font-bold text-gray-900 text-sm">{{ cert.name }}</h3>
              <p class="text-xs text-gray-500 mt-1">{{ cert.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const timeline = [
  { year: '1997', title: '创立"明芳线厂"', desc: '明芳线厂正式成立，开启专业纱线制造之路' },
  { year: '2002', title: '获得瑞士OEKO-TEX认证', desc: '通过瑞士OEKO-TEX标准100认证，品质获得国际认可' },
  { year: '2003', title: '更名为"深圳市明芳内衣辅料有限公司"', desc: '公司正式更名，业务范围进一步扩大' },
  { year: '2011', title: '入驻政府环保工业园', desc: '入驻政府环保工业园，实现环保升级' },
  { year: '2022', title: '全资收购广东肇庆鸿基织业', desc: '成立"明芳产业园"，集生产、染色、运输于一体' },
]

const workshopItems = [
  { title: '明芳产业园', desc: '位于广东肇庆高要小湘，独立排污许可证，集生产、染色、运输于一体', img: '/images/webp/pic2.webp' },
  { title: '自动化生产车间', desc: '引进新型自动化高速线机，生产效率提高三倍', img: '/images/webp/company/workshop1.webp' },
  { title: '染坊', desc: '拥有1KG-500KG不同型号染色机40余台，满足大量生产需求', img: '/images/webp/company/dyehouse.webp' },
  { title: '质检实验室', desc: '拉力、粗细度、色牢度等全套检测设备，配置样板间匹配布料颜色', img: '/images/webp/lab/laboratory.webp' },
]

const certItems = [
  { name: 'OEKO-TEX Standard 100', desc: '瑞士TESTEX AG认证，婴儿一级安全标准', img: '/images/webp/certs/cert1.webp' },
  { name: 'GRS 全球回收标准', desc: 'SGS-CSTC颁发，可再生纱线认证', img: '/images/webp/certs/cert2.webp' },
  { name: 'GRS Scope Certificate', desc: 'SGS认证，涵盖生产、染色、包装、贸易', img: '/images/webp/certs/cert3.webp' },
  { name: 'SGS 测试报告', desc: 'SGS-CSTC检测，产品全部通过PASS', img: '/images/webp/certs/cert4.webp' },
  { name: 'GRS 产品附录', desc: 'SGS颁发，可再生纱线产品认证附录', img: '/images/webp/certs/cert5.webp' },
  { name: 'SGS 产品检测报告', desc: '2020年SGS检测，涵盖多款产品', img: '/images/webp/certs/cert6.webp' },
]
</script>
