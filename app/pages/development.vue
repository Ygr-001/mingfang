<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod03.webp" alt="可持续发展" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-green-200 text-sm tracking-[0.3em] mb-3 uppercase page-tag">Sustainability</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2 page-title">可持续发展</h1>
          <p class="text-base text-gray-200">绿色制造 · 环保再生 · 功能性纱线</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 section-bg-mesh-eco">
      <div class="container-custom max-w-5xl">
        <div class="section-heading">
          <span class="section-eyebrow-eco">Sustainability</span>
          <h2 class="section-title mt-3">可持续发展</h2>
          <p class="section-subtitle text-sm md:text-base">绿色制造 · 环保再生 · 功能性纱线</p>
          <p class="text-gray-600 leading-relaxed text-sm md:text-base mt-4 max-w-3xl">
            明芳线业致力于环保制造，从可再生纱线到功能性特殊线，践行可持续发展理念。公司拥有独立排污许可证，集生产、染色、运输于一体，实现全产业链环保管控。
          </p>
        </div>

        <div ref="gridEl" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 products-grid" :class="{ 'is-visible': gridVisible }">
          <div v-for="(p, idx) in ecoProducts" :key="p.name"
            class="lift-card product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group"
            :style="{ animationDelay: idx * 0.08 + 's' }">
            <!-- 图片 - 点击查看大图 -->
            <div class="aspect-[3/2] overflow-hidden relative cursor-pointer" @click.stop="openImage(p.img)">
              <img :src="p.img" :alt="p.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"  loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span class="text-white text-xs font-medium flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  查看大图
                </span>
              </div>
            </div>
            <!-- 内容 - 点击查看名片 -->
            <div class="p-5 flex-1 flex flex-col cursor-pointer" @click="selectedProduct = p">
              <h3 class="font-bold text-gray-900 text-sm md:text-base">{{ p.name }}</h3>
              <p class="text-[11px] text-green-600 font-medium mt-1 mb-2">{{ p.en }}</p>
              <p class="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{{ p.desc }}</p>
              <div class="flex flex-wrap gap-1 mt-3">
                <span v-for="f in p.features" :key="f" class="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] rounded-full">{{ f }}</span>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="text-[10px] text-gray-400">点击查看详情</span>
                <svg class="w-4 h-4 text-gray-300 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">环保认证</h3>
          <p class="text-gray-600 text-sm mb-8">通过多项国际环保认证，产品符合全球环保标准</p>
          <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div class="bg-white rounded-xl p-5 shadow-sm">
              <div class="text-xl font-bold text-green-700">OEKO-TEX</div>
              <p class="text-[10px] text-gray-500 mt-1">婴儿一级认证</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm">
              <div class="text-xl font-bold text-green-700">GRS</div>
              <p class="text-[10px] text-gray-500 mt-1">全球回收标准</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm">
              <div class="text-xl font-bold text-green-700">SGS</div>
              <p class="text-[10px] text-gray-500 mt-1">第三方检测</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 大图弹窗 -->
    <Transition name="fade">
      <div v-if="lightboxImg" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" @click="lightboxImg = ''">
        <img :src="lightboxImg" alt="产品大图" class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"  loading="lazy">
        <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300">×</button>
      </div>
    </Transition>

    <!-- 名片弹窗（纯文字） -->
    <Transition name="fade">
      <div v-if="selectedProduct" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" @click.self="selectedProduct = null">
        <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
              <h2 class="text-lg font-bold text-gray-900">{{ selectedProduct.name }}</h2>
              <p class="text-xs text-green-600 font-medium mt-0.5">{{ selectedProduct.en }}</p>
            </div>
            <button class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0" @click="selectedProduct = null">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div class="p-5 space-y-5">
            <p class="text-gray-600 text-sm leading-relaxed">{{ selectedProduct.desc }}</p>
            <div>
              <h3 class="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <span class="w-1 h-3 rounded bg-green-600"></span>产品特点
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="f in selectedProduct.features" :key="f" class="px-3 py-1.5 bg-green-50 text-green-700 text-xs rounded-lg font-medium">{{ f }}</span>
              </div>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <span class="w-1 h-3 rounded bg-green-600"></span>应用领域
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="a in selectedProduct.apps" :key="a" class="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg">{{ a }}</span>
              </div>
            </div>
            <div v-if="selectedProduct.cert" class="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span class="text-sm text-green-700 font-medium">{{ selectedProduct.cert }}</span>
            </div>
            <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
              <p class="text-xs text-gray-400">对这款产品感兴趣？</p>
              <NuxtLink to="/contact" class="btn-primary text-sm px-5 py-2" @click="selectedProduct = null">咨询报价 →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const lightboxImg = ref('')
const selectedProduct = ref<any>(null)

function openImage(img: string) { lightboxImg.value = img }

// 滚动触发卡片入场
const gridEl = ref<HTMLElement | null>(null)
const gridVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gridVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  if (gridEl.value) observer.observe(gridEl.value)
})

const ecoProducts = [
  {
    name: '可再生纱线', en: 'Recycled Yarns', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod03.webp',
    desc: '从废弃矿泉水瓶和可乐瓶中提取制成，废物再利用。减少污染、降低成本。高断裂强度、耐磨性好、收缩率低。OEKO-TEX认证。',
    features: ['高断裂强度', '耐磨', '收缩率低', 'OEKO-TEX'],
    apps: ['环保服装', '可再生织物', '可持续产品'],
    cert: 'OEKO-TEX Standard 100 认证',
  },
  {
    name: '环保舒弹丝', en: 'Eco Elastic Silk', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod13.webp',
    desc: '源于可再生资源的生物质原料，微弹性可再生纤维短丝。能耗低、余料可回收、可循环使用。高舒适度、弹性好、透气吸湿。OEKO-TEX认证。',
    features: ['高舒适度', '弹性好', '透气吸湿', '可循环'],
    apps: ['运动鞋', '外套', '柔软面料'],
    cert: 'OEKO-TEX Standard 100 认证',
  },
  {
    name: '三防线', en: 'Three Defense Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod06.webp',
    desc: '防泼水、防油、易去污功能。经三防助剂处理后具有优异的防水、防油、防污功能，可长期保持干爽和洁净。',
    features: ['防泼水', '防油', '易去污', '抗污渍'],
    apps: ['户外用品', '防护服', '功能性服装'],
    cert: '',
  },
  {
    name: '橡筋线', en: 'Rubber Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod05.webp',
    desc: '由优质双股纤维丝双包庄而成，具有高强度拉力和弹力。高环保性、拉力稳定、高色牢度、亲肤性。适用于需要弹性的产品。',
    features: ['高环保', '拉力稳定', '高色牢度', '亲肤'],
    apps: ['袜子', '护腕护肤', '羊毛衫', '鞋子'],
    cert: '',
  },
  {
    name: '水溶线', en: 'Water Soluble Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod04.webp',
    desc: '绿色环保功能性纱线，遇水溶解、无污染、无残留。水溶呈无色透明状，短时间内能自然生物降解。适用于绣花、缝纫、拼缝等。',
    features: ['无污染', '遇水溶解', '生物降解', '应用广泛'],
    apps: ['绣花定位', '临时缝纫', '拼缝固定'],
    cert: '',
  },
  {
    name: '抗菌线', en: 'Antimicrobial Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod15.webp',
    desc: '集抗菌和吸湿快干两种功能于一身的功能性健康纺织品。综合棉的吸湿性和涤纶的快干性，有效除去有害细菌和汗味。',
    features: ['抗菌性能佳', '防异味', '防汗', '吸湿快干'],
    apps: ['工作服', '床品', '汽车座椅'],
    cert: '',
  },
]
</script>

<style scoped>
/* 滚动入场 */
.products-grid .product-card {
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  animation: productCardIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes productCardIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 弹窗淡入 + 缩放 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-enter-active img,
.fade-leave-active img {
  transition: transform 0.4s ease;
}
.fade-enter-from img,
.fade-leave-to img {
  transform: scale(0.9);
}
</style>
