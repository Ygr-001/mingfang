<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="/images/webp/products/prod03.webp" alt="可持续发展" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-green-200 text-sm tracking-[0.3em] mb-3 uppercase">Sustainability</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">可持续发展</h1>
          <p class="text-base text-gray-200">绿色制造 · 环保再生 · 功能性纱线</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <p class="text-gray-600 leading-relaxed text-sm md:text-base">
            明芳线业致力于环保制造，从可再生纱线到功能性特殊线，践行可持续发展理念。公司拥有独立排污许可证，集生产、染色、运输于一体，实现全产业链环保管控。
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <div v-for="p in ecoProducts" :key="p.name"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
            <div class="aspect-[3/2] overflow-hidden cursor-pointer" @click="openImage(p.img)">
              <img :src="p.img" :alt="p.name" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="font-bold text-gray-900 text-sm md:text-base">{{ p.name }}</h3>
              <p class="text-[11px] text-green-600 font-medium mt-1 mb-2">{{ p.en }}</p>
              <p class="text-gray-500 text-xs leading-relaxed flex-1">{{ p.desc }}</p>
              <div class="flex flex-wrap gap-1 mt-3">
                <span v-for="f in p.features" :key="f" class="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] rounded-full">{{ f }}</span>
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
    <div v-if="lightboxImg" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" @click="lightboxImg = ''">
      <img :src="lightboxImg" alt="产品大图" class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
      <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const lightboxImg = ref('')
function openImage(img: string) { lightboxImg.value = img }

const ecoProducts = [
  {
    name: '可再生纱线', en: 'Recycled Yarns', img: '/images/webp/products/prod03.webp',
    desc: '从废弃矿泉水瓶和可乐瓶中提取制成，废物再利用。减少污染、降低成本。高断裂强度、耐磨性好、收缩率低。OEKO-TEX认证。',
    features: ['高断裂强度', '耐磨', '收缩率低', 'OEKO-TEX'],
  },
  {
    name: '环保舒弹丝', en: 'Eco Elastic Silk', img: '/images/webp/products/prod13.webp',
    desc: '源于可再生资源的生物质原料，微弹性可再生纤维短丝。能耗低、余料可回收、可循环使用。高舒适度、弹性好、透气吸湿。OEKO-TEX认证。',
    features: ['高舒适度', '弹性好', '透气吸湿', '可循环'],
  },
  {
    name: '三防线', en: 'Three Defense Thread', img: '/images/webp/products/prod04.webp',
    desc: '防泼水、防油、易去污功能。经三防助剂处理后具有优异的防水、防油、防污功能，可长期保持干爽和洁净。',
    features: ['防泼水', '防油', '易去污', '抗污渍'],
  },
  {
    name: '橡筋线', en: 'Rubber Thread', img: '/images/webp/products/prod05.webp',
    desc: '由优质双股纤维丝双包庄而成，具有高强度拉力和弹力。高环保性、拉力稳定、高色牢度、亲肤性。适用于需要弹性的产品。',
    features: ['高环保', '拉力稳定', '高色牢度', '亲肤'],
  },
  {
    name: '水溶线', en: 'Water Soluble Thread', img: '/images/webp/products/prod06.webp',
    desc: '绿色环保功能性纱线，遇水溶解、无污染、无残留。水溶呈无色透明状，短时间内能自然生物降解。适用于绣花、缝纫、拼缝等。',
    features: ['无污染', '遇水溶解', '生物降解', '应用广泛'],
  },
  {
    name: '抗菌线', en: 'Antimicrobial Thread', img: '/images/webp/products/prod15.webp',
    desc: '集抗菌和吸湿快干两种功能于一身的功能性健康纺织品。综合棉的吸湿性和涤纶的快干性，有效除去有害细菌和汗味。',
    features: ['抗菌性能佳', '防异味', '防汗', '吸湿快干'],
  },
]
</script>
