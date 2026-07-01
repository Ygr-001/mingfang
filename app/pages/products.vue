<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover2.webp" alt="产品中心" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase page-tag">Products</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2 page-title">产品中心</h1>
          <p class="text-base text-gray-200">10大产品系列 · 点击图片查看大图 · 点击卡片查看详情</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 section-bg-mesh">
      <div class="container-custom">
        <div class="section-heading">
          <span class="section-eyebrow">Our Products</span>
          <h2 class="section-title mt-3">产品中心</h2>
          <p class="section-subtitle text-sm md:text-base">10大产品系列 · 点击图片查看大图 · 点击卡片查看详情</p>
        </div>
        <div ref="gridEl" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 products-grid" :class="{ 'is-visible': gridVisible }">
          <div v-for="(p, idx) in products" :key="p.name"
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
              <p class="text-[11px] text-primary font-medium mt-1 mb-2">{{ p.en }}</p>
              <p class="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{{ p.desc }}</p>
              <div class="flex flex-wrap gap-1 mt-3">
                <span v-for="f in p.features" :key="f" class="px-2 py-0.5 bg-blue-50 text-primary-600 text-[10px] rounded-full">{{ f }}</span>
              </div>
              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span class="text-[10px] text-gray-400">点击查看详情</span>
                <svg class="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </div>
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

    <!-- 产品名片弹窗（纯文字，无图片） -->
    <Transition name="fade">
      <div v-if="selectedProduct" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" @click.self="selectedProduct = null">
        <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <!-- 关闭按钮 -->
          <div class="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
              <h2 class="text-lg font-bold text-gray-900">{{ selectedProduct.name }}</h2>
              <p class="text-xs text-primary font-medium mt-0.5">{{ selectedProduct.en }}</p>
            </div>
            <button class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0" @click="selectedProduct = null">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <!-- 内容 -->
          <div class="p-5 space-y-5">
            <!-- 描述 -->
            <p class="text-gray-600 text-sm leading-relaxed">{{ selectedProduct.desc }}</p>

            <!-- 特点 -->
            <div>
              <h3 class="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <span class="w-1 h-3 rounded bg-primary"></span>产品特点
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="f in selectedProduct.features" :key="f"
                  class="px-3 py-1.5 bg-blue-50 text-primary-700 text-xs rounded-lg font-medium">{{ f }}</span>
              </div>
            </div>

            <!-- 技术规格 -->
            <div v-if="selectedProduct.specs && selectedProduct.specs.length">
              <h3 class="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <span class="w-1 h-3 rounded bg-primary"></span>技术规格
              </h3>
              <div class="overflow-hidden rounded-lg border border-gray-200">
                <table class="w-full text-xs">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-3 py-2 text-left text-gray-500 font-medium" v-for="h in selectedProduct.specHeaders" :key="h">{{ h }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr v-for="row in selectedProduct.specs" :key="row[0]" class="hover:bg-gray-50">
                      <td class="px-3 py-2 text-gray-700" v-for="(cell, i) in row" :key="i">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 应用领域 -->
            <div>
              <h3 class="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <span class="w-1 h-3 rounded bg-primary"></span>应用领域
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="a in selectedProduct.apps" :key="a"
                  class="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg">{{ a }}</span>
              </div>
            </div>

            <!-- 认证 -->
            <div v-if="selectedProduct.cert" class="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span class="text-sm text-green-700 font-medium">{{ selectedProduct.cert }}</span>
            </div>

            <!-- CTA -->
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

function openImage(img: string) {
  lightboxImg.value = img
}

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

const products = [
  {
    name: '高延伸长丝线', en: 'Eloflex', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod11.webp',
    desc: '延伸度高、润滑度高，适用于需要弹性和舒适度的产品。适用于紧身裤、泳衣、女士内衣和运动服饰。',
    features: ['延伸度高', '润滑度高'],
    apps: ['紧身裤', '泳衣', '女士内衣', '运动服饰'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.'],
    specs: [['Tex 27', 'Ticket 120']],
  },
  {
    name: '聚酯包芯线', en: 'Polyester Wrap', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod02.webp',
    desc: '绝佳的相对强度、耐磨性高、耐化学性。强力缝口外观美观、避免跳针、生产效率高。色牢度高、颜色选择广泛，适用于高速缝纫。',
    features: ['绝佳强度', '耐磨性高', '缝口平滑', '避免跳针', '色牢度高'],
    apps: ['服装', '家纺', '皮革制品', '工业缝纫'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.'],
    specs: [['Tex 18', 'Ticket 180'], ['Tex 21', 'Ticket 150'], ['Tex 27', 'Ticket 120'], ['Tex 40', 'Ticket 80'], ['Tex 60', 'Ticket 40']],
  },
  {
    name: '绣花线', en: 'Embroidery Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod07.webp',
    desc: '人造丝绣花线和涤纶绣花线，常用规格150D/2、120D/2、108D/2、75D/2。拥有极佳的光泽以及车缝时用线顺畅的特点。颜色选择广泛，颜色艳丽。符合OEKO-TEX标准100认证。',
    features: ['耐用度高', '良好光泽', '颜色艳丽', '用线顺畅'],
    apps: ['服装', '家纺家居', '工艺饰品', '鞋帽'],
    cert: 'OEKO-TEX Standard 100 认证',
    specHeaders: ['规格', '常用规格'],
    specs: [['150D/2', '人造丝绣花线'], ['120D/2', '最常用规格'], ['108D/2', '涤纶绣花线最常用'], ['75D/2', '精细绣花']],
  },
  {
    name: '高强涤纶长丝线', en: 'High Strength Polyester', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod08.webp',
    desc: '高强力聚酯化纤长丝制成的缝纫线，也称高强线。线质柔软光滑，色牢度强。耐热、耐光、耐损性强，拉断强度大，弹性较小。符合OEKO-TEX标准100认证。',
    features: ['耐热', '耐光', '耐损性强', '拉断强度大', '弹性较小'],
    apps: ['真皮箱包', '真皮鞋类', '家居用品'],
    cert: 'OEKO-TEX Standard 100 认证',
    specHeaders: ['Tex No.', '规格', '拉断强度', '断裂伸长率%'],
    specs: [['Tex 16', '70D/3', '21.5', '11-20'], ['Tex 16', '120D/2', '21.5', '11-20'], ['Tex 35', '100D/3', '22.3', '11-20'], ['Tex 35', '120D/3', '22.3', '11-20']],
  },
  {
    name: '尼龙邦迪线', en: 'Nylon Bonded Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod09.webp',
    desc: '生产效率高、强力缝口外观美观、耐磨性好、强度高。颜色选择广泛、光泽典雅。适用于鞋类、箱包、体育用品、户外用品和皮革制品等多种高强度场景。',
    features: ['生产效率高', '高强度', '耐磨性好', '光泽典雅'],
    apps: ['鞋类', '家具装饰', '箱包', '体育用品', '户外用品', '皮革制品'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.', '规格'],
    specs: [['Tex 45', 'Ticket 60/3', '150D/3'], ['Tex 75', 'Ticket 40', '210D/3'], ['Tex 90', 'Ticket 30', '280D/3'], ['Tex 135', 'Ticket 20', '420D/3'], ['Tex 210', 'Ticket 15', '630D/3']],
  },
  {
    name: '汽车用品专用线', en: 'Automotive Thread', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod10.webp',
    desc: '高韧性、强力缝口外观美观、耐磨性好。强力高、颜色选择广泛、光泽典雅。延伸性好，符合OEKO-TEX标准100认证。适用于安全气囊、汽车座椅和汽车中控。',
    features: ['高韧性', '耐磨性好', '延伸性好', '光泽典雅'],
    apps: ['安全气囊', '汽车座椅', '汽车中控'],
    cert: 'OEKO-TEX Standard 100 认证',
    specHeaders: ['Tex No.', '规格', '拉断强度', '断裂伸长率%'],
    specs: [['Tex 45', '210D/2', '22.9', '26-36'], ['Tex 70', '210D/3', '23.8', '25-35'], ['Tex 90', '280D/3', '25.6', '25-35'], ['Tex 135', '420D/3', '28.8', '25-34'], ['Tex 210', '630D/3', '211.2', '24-33']],
  },
  {
    name: '涤纶短纤蓬松线', en: 'Textured Polyester', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod01.webp',
    desc: '耐磨性高、强力缝口外观美观、耐化学性。缝口平滑、避免跳针、生产效率高。色牢度高，适用于高速缝纫。颜色选择广泛。',
    features: ['耐磨性高', '色牢度高', '缝口平滑', '避免跳针', '高速缝纫'],
    apps: ['各类服装', '家纺', '鞋帽', '工业用线'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.', '本地号'],
    specs: [['Tex 18', 'Ticket 180', '602'], ['Tex 21', 'Ticket 140', '803'], ['Tex 27', 'Ticket 120', '603'], ['Tex 40', 'Ticket 80', '302'], ['Tex 60', 'Ticket 50', '604']],
  },
  {
    name: '涤纶柔软蓬松线', en: 'High Bulk Textured Polyester', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod12.webp',
    desc: '覆盖效果佳、强力性好、接缝轻。手感柔软、抗化学性强、颜色选择广泛。适用于婴儿服饰、内衣、防晒衣和女士内衣。',
    features: ['覆盖效果佳', '强力性好', '手感柔软', '抗化学性'],
    apps: ['婴儿服饰', '内衣', '防晒衣', '女士内衣'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.'],
    specs: [['Tex 18', 'Ticket 160'], ['Tex 21', 'Ticket 140']],
  },
  {
    name: '涤纶短纤线', en: 'Staple Spun Polyester', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod14.webp',
    desc: '耐磨性高、强力缝口外观美观、耐化学性。缝口平滑、避免跳针、生产效率高。色牢度高，适用于高速缝纫。颜色选择广泛。',
    features: ['耐磨性高', '色牢度高', '缝口平滑', '避免跳针', '高速缝纫'],
    apps: ['各类服装', '家纺', '鞋帽', '工业用线'],
    cert: '',
    specHeaders: ['Tex No.', 'Ticket No.', '本地号'],
    specs: [['Tex 18', 'Ticket 180', '602'], ['Tex 21', 'Ticket 140', '803'], ['Tex 27', 'Ticket 120', '603'], ['Tex 40', 'Ticket 80', '302'], ['Tex 60', 'Ticket 50', '604']],
  },
  {
    name: '尼龙弹力线', en: 'Elastic Nylon', img: 'https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/products/prod16.webp',
    desc: '回弹力强、颜色选择广泛、光泽典雅。强力缝口外观美观、生产效率高、耐磨性好。适用于紧身裤、内衣和运动服饰。',
    features: ['回弹力强', '光泽典雅', '强力缝口', '生产效率高'],
    apps: ['紧身裤', '内衣', '运动服饰'],
    cert: '',
    specHeaders: ['规格'],
    specs: [['75D×2 / 150D'], ['100D×2 / 200D'], ['150D×2 / 300D'], ['150D×3 / 450D']],
  },
]
</script>

<style scoped>
/* 滚动入场 */
.products-grid {
  opacity: 1;
}
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

/* 大图弹窗专属 */
.fade-enter-active img,
.fade-leave-active img {
  transition: transform 0.4s ease;
}
.fade-enter-from img,
.fade-leave-to img {
  transform: scale(0.9);
}
</style>
