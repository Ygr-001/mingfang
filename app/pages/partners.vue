<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover3.webp" alt="合作客户" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase page-tag">Partners</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2 page-title">合作客户与品牌</h1>
          <p class="text-base text-gray-200">携手全球知名品牌，共创品质未来</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 section-bg-mesh">
      <div class="container-custom max-w-5xl">
        <div class="section-heading">
          <span class="section-eyebrow">Our Partners</span>
          <h2 class="section-title mt-3">合作客户</h2>
          <p class="section-subtitle text-sm md:text-base">与众多国际知名品牌建立长期合作关系，产品远销全球</p>
        </div>

        <div class="space-y-8">
          <div v-for="(partner, idx) in partners" :key="partner.title"
            class="lift-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row group reveal-section"
            :class="[{ 'md:flex-row-reverse': idx % 2 === 1 }, { 'is-visible': visible }]"
            :style="{ transitionDelay: idx * 0.12 + 's' }">
            <!-- 图片 -->
            <div class="md:w-1/2 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img :src="partner.img" :alt="partner.title" class="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"  loading="lazy">
              <!-- 角标悬浮效果 -->
              <div class="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {{ partner.tag }}
              </div>
            </div>
            <!-- 文字 -->
            <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <p class="text-xs text-primary font-medium tracking-widest mb-2 uppercase flex items-center gap-2">
                <span class="inline-block w-6 h-px bg-primary"></span>
                {{ partner.tag }}
              </p>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{{ partner.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ partner.desc }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="(b, bIdx) in partner.brands" :key="b"
                  class="px-2.5 py-1 bg-blue-50 text-primary-700 text-xs rounded-full brand-tag"
                  :style="{ animationDelay: (idx * 0.12 + bIdx * 0.05) + 's' }">
                  {{ b }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 合作品牌 - 优化动画版 -->
        <div ref="brandsEl" class="mt-20 text-center reveal-section" :class="{ 'is-visible': brandsVisible }">
          <!-- 装饰光晕 -->
          <div class="relative inline-block mb-6">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-200/40 via-primary/20 to-indigo-200/40 rounded-full blur-2xl opacity-60 animate-pulse-slow"></div>
            <h3 class="relative text-2xl md:text-3xl font-bold text-gray-900">
              合作品牌
              <span class="block mx-auto mt-2 w-12 h-1 bg-gradient-to-r from-primary to-primary-400 rounded-full origin-left transform scale-x-0 animate-line-grow"></span>
            </h3>
          </div>
          <p class="text-gray-500 text-sm mb-8 max-w-xl mx-auto">与全球高端品牌深度合作，涵盖奢侈品、运动服饰、零售、家居等多个领域</p>

          <!-- 品牌网格 - 优化动效 -->
          <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <div v-for="(brand, idx) in brands" :key="brand"
              class="brand-card group relative px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm shadow-sm cursor-default overflow-hidden"
              :style="{ animationDelay: idx * 0.05 + 's' }">
              <!-- hover 渐变背景 -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <!-- hover 闪光效果 -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <span class="relative z-10 group-hover:text-white group-hover:font-semibold transition-all duration-300 inline-block group-hover:scale-110">
                {{ brand }}
              </span>
            </div>
          </div>

          <!-- 底部装饰 -->
          <div class="mt-12 flex items-center justify-center gap-2 text-xs text-gray-400">
            <span class="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></span>
            <span>Trusted by world-class brands</span>
            <span class="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const partners = [
  {
    tag: 'Cooperative customers',
    title: '合作客户',
    desc: '明芳线业与国际知名品牌建立长期合作关系，涵盖服装、内衣、运动、鞋包、家纺等多个行业。',
    img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/partner1.webp',
    brands: ['Regina Miracle', 'Aimer', '全棉时代', '安踏 ANTA', 'Skechers'],
  },
  {
    tag: 'Cooperative brands',
    title: '合作品牌',
    desc: '与全球高端品牌深度合作，涵盖奢侈品、运动服饰、零售、家居等多个领域，产品远销全球。',
    img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/partner2.webp',
    brands: ['FILA', 'Lululemon', 'MUJI 无印良品', 'TESCO', 'Bananain 蕉内'],
  },
]

const brands = [
  'FILA', 'Lululemon', 'Skechers', 'MUJI 无印良品', 'TESCO',
  'Bananain 蕉内', 'Beneunder 蕉下', 'Aimer 爱慕', 'Regina Miracle 维珍妮',
  '全棉时代', '水星家居', '安踏 ANTA', 'Crystal International 利丰',
]

// 滚动触发动画
const visible = ref(false)
const brandsVisible = ref(false)
const brandsEl = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === brandsEl.value) {
            brandsVisible.value = true
          } else {
            visible.value = true
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  // 监听合作客户卡片
  document.querySelectorAll('.reveal-section').forEach((el) => {
    observer.observe(el)
  })
  if (brandsEl.value) observer.observe(brandsEl.value)
})
</script>

<style scoped>
/* 合作客户卡片入场动画 */
.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 品牌标签瀑布流弹出 */
.brand-tag {
  opacity: 0;
  animation: tagPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes tagPop {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(10px);
  }
  60% {
    transform: scale(1.1) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 品牌卡片入场动画 */
.brand-card {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  animation: brandCardIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
}
@keyframes brandCardIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.brand-card:hover {
  transform: translateY(-4px) scale(1.05);
  border-color: #1a56db;
  box-shadow: 0 10px 25px -5px rgba(26, 86, 219, 0.3);
}

/* 标题下划线展开 */
.animate-line-grow {
  animation: lineGrow 0.8s 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes lineGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/* 光晕呼吸 */
.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}
</style>
