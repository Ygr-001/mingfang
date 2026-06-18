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

    <!-- 发展历程 - 横图 -->
    <section id="history" class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">发展历程</h2>
        <p class="section-subtitle text-sm md:text-base">从1997年至今，明芳线业不断发展壮大</p>
        <div class="mt-10 mb-10">
          <img src="/images/webp/company/history.webp" alt="发展历程" class="w-full rounded-2xl shadow-lg" />
        </div>
        <div class="max-w-2xl mx-auto">
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

    <!-- 工厂与车间 - 新图片+文字描述 -->
    <section id="workshop" class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">染坊与实验室</h2>
        <p class="section-subtitle text-sm md:text-base">先进的染整设备与完善的检测体系，保障每一根纱线的品质</p>
        <div class="grid gap-8 mt-10">
          <!-- 生产车间 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab3.webp" alt="生产车间" class="w-full object-cover" style="max-height:350px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">生产车间</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                引进新型自动化高速线机，生产效率提高了三倍。车间占地20余亩，配备完整的自动化生产线，从纺纱到成品一站式完成。
              </p>
            </div>
          </div>

          <!-- 染坊 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab5.webp" alt="染坊" class="w-full object-cover" style="max-height:350px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">染坊</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                拥有设备1KG-500KG不同型号染色机40余台，满足大量生产需求。从打样到大货染色，快速响应客户颜色需求，确保每批次颜色一致性。
              </p>
            </div>
          </div>

          <!-- 实验检测 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab1.webp" alt="实验检测" class="w-full object-cover" style="max-height:300px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">实验检测</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                所有客户的每款产品都会进行抽样严格检测。配备专业检测设备，对纱线的拉力、粗细度、色牢度等关键指标进行全面测试，确保品质达标。
              </p>
            </div>
          </div>

          <!-- 质检实验室 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab2.webp" alt="质检室" class="w-full object-cover" style="max-height:300px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">质检室</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                质检室拥有拉力、粗细度、色牢度等一系列检测设备来保证产品质量。每批产品出厂前都经过严格质检，不合格产品绝不流入市场。
              </p>
            </div>
          </div>

          <!-- 样板间 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab4.webp" alt="样板间" class="w-full object-cover" style="max-height:300px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">样板间</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                拥有自己的小样板房，为了适应客户需求来为其配置与布料匹配颜色的纱线。快速打样，精准调色，为客户提供最匹配的纱线解决方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 认证 -->
    <section id="certs" class="py-16 md:py-24">
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

const certItems = [
  { name: 'OEKO-TEX Standard 100', desc: '瑞士TESTEX AG认证，婴儿一级安全标准', img: '/images/webp/certs/cert1.webp' },
  { name: 'GRS 全球回收标准', desc: 'SGS-CSTC颁发，可再生纱线认证', img: '/images/webp/certs/cert2.webp' },
  { name: 'GRS Scope Certificate', desc: 'SGS认证，涵盖生产、染色、包装、贸易', img: '/images/webp/certs/cert3.webp' },
  { name: 'SGS 测试报告', desc: 'SGS-CSTC检测，产品全部通过PASS', img: '/images/webp/certs/cert4.webp' },
  { name: 'GRS 产品附录', desc: 'SGS颁发，可再生纱线产品认证附录', img: '/images/webp/certs/cert5.webp' },
  { name: 'SGS 产品检测报告', desc: '2020年SGS检测，涵盖多款产品', img: '/images/webp/certs/cert6.webp' },
]
</script>
