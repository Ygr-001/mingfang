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

    <!-- 发展历程 - 前端代码绘制 -->
    <section id="history" class="py-16 md:py-24">
      <div class="container-custom max-w-6xl">
        <h2 class="section-title">发展历程</h2>
        <p class="section-subtitle text-sm md:text-base">从1997年至今，明芳线业不断发展壮大</p>

        <!-- 横向时间线 -->
        <div class="mt-16 relative">
          <!-- 底线 -->
          <div class="absolute top-8 left-0 right-0 h-0.5 bg-blue-100 hidden md:block"></div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            <div v-for="(item, idx) in timeline" :key="item.year" class="relative text-center md:text-left">
              <!-- 圆点 -->
              <div class="flex md:block items-center gap-3">
                <div class="w-16 h-16 md:mx-auto rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10 shadow-lg ring-4 ring-white">
                  {{ item.year }}
                </div>
                <div class="md:mt-4">
                  <h3 class="font-bold text-gray-900 text-sm md:text-xs leading-snug">{{ item.title }}</h3>
                  <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 染坊与实验室 -->
    <section id="workshop" class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">染坊与实验室</h2>
        <p class="section-subtitle text-sm md:text-base">先进的染整设备与完善的检测体系，保障每一根纱线的品质</p>
        <div class="grid gap-8 mt-10">
          <!-- 生产车间 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab3.webp" alt="生产车间" class="w-full object-cover" style="max-height:400px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">生产车间</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                引进新型自动化高速线机，生产效率提高了三倍。车间占地20余亩，配备完整的自动化生产线，从纺纱到成品一站式完成。
              </p>
            </div>
          </div>

          <!-- 染坊 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab5.webp" alt="染坊" class="w-full object-cover" style="max-height:400px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">染坊</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                拥有设备1KG-500KG不同型号染色机40余台，满足大量生产需求。从打样到大货染色，快速响应客户颜色需求，确保每批次颜色一致性。
              </p>
            </div>
          </div>

          <!-- 实验检测 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab1.webp" alt="实验检测" class="w-full object-cover" style="max-height:350px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">实验检测</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                所有客户的每款产品都会进行抽样严格检测。配备专业检测设备，对纱线的拉力、粗细度、色牢度等关键指标进行全面测试，确保品质达标。
              </p>
            </div>
          </div>

          <!-- 质检室 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab2.webp" alt="质检室" class="w-full object-cover" style="max-height:400px" />
            <div class="p-6 md:p-8">
              <h3 class="font-bold text-xl text-gray-900 mb-2">质检室</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                质检室拥有拉力、粗细度、色牢度等一系列检测设备来保证产品质量。每批产品出厂前都经过严格质检，不合格产品绝不流入市场。
              </p>
            </div>
          </div>

          <!-- 样板间 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/webp/lab/lab4.webp" alt="样板间" class="w-full object-cover" style="max-height:400px" />
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

    <!-- 安全认证 - 点击查看大图 -->
    <section id="certs" class="py-16 md:py-24">
      <div class="container-custom max-w-6xl">
        <h2 class="section-title">安全认证</h2>
        <p class="section-subtitle text-sm md:text-base">通过多项国际权威检测认证，产品符合婴儿一级安全标准（点击图片查看大图）</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div v-for="cert in certItems" :key="cert.name"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            @click="openImage(cert.img)">
            <div class="aspect-[3/4] overflow-hidden bg-gray-50">
              <img :src="cert.img" :alt="cert.name" class="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-4 text-center">
              <h3 class="font-bold text-gray-900 text-sm">{{ cert.name }}</h3>
              <p class="text-xs text-gray-500 mt-1">{{ cert.desc }}</p>
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
  </div>
</template>

<script setup lang="ts">
const lightboxImg = ref('')

function openImage(img: string) {
  lightboxImg.value = img
}

const certItems = [
  { name: 'OEKO-TEX Standard 100', desc: '瑞士TESTEX AG认证，婴儿一级安全标准', img: '/images/webp/certs/cert1.webp' },
  { name: 'GRS 全球回收标准', desc: 'SGS-CSTC颁发，可再生纱线认证', img: '/images/webp/certs/cert2.webp' },
  { name: 'GRS Scope Certificate', desc: 'SGS认证，涵盖生产、染色、包装、贸易', img: '/images/webp/certs/cert3.webp' },
  { name: 'SGS 测试报告', desc: 'SGS-CSTC检测，产品全部通过PASS', img: '/images/webp/certs/cert4.webp' },
  { name: 'GRS 产品附录', desc: 'SGS颁发，可再生纱线产品认证附录', img: '/images/webp/certs/cert5.webp' },
  { name: 'SGS 产品检测报告', desc: '2020年SGS检测，涵盖多款产品', img: '/images/webp/certs/cert6.webp' },
]
</script>
