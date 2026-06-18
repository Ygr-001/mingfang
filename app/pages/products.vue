<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="/images/webp/company/cover2.webp" alt="产品中心" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase">Products</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">产品中心</h1>
          <p class="text-base text-gray-200">14大产品系列 · 品种齐全 · 应用广泛</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="p in products" :key="p.name"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
            <div class="aspect-[3/2] overflow-hidden">
              <img :src="p.img" :alt="p.name" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="font-bold text-gray-900 text-sm md:text-base">{{ p.name }}</h3>
              <p class="text-[11px] text-primary font-medium mt-1 mb-2">{{ p.en }}</p>
              <p class="text-gray-500 text-xs leading-relaxed flex-1">{{ p.desc }}</p>
              <div class="flex flex-wrap gap-1 mt-3">
                <span v-for="f in p.features" :key="f" class="px-2 py-0.5 bg-blue-50 text-primary-600 text-[10px] rounded-full">{{ f }}</span>
              </div>
              <div class="border-t border-gray-100 mt-3 pt-3">
                <p class="text-[10px] text-gray-400 mb-1.5">应用领域</p>
                <div class="flex flex-wrap gap-1">
                  <span v-for="a in p.apps" :key="a" class="px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">{{ a }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    name: '涤纶蓬松线', en: 'Textured Polyester', img: '/images/webp/products/textured-polyester.webp',
    desc: '覆盖效果佳、强力性好、手感柔软光滑、耐化学性强、颜色选择广泛。OEKO-TEX认证。',
    features: ['覆盖佳', '手感柔软', '颜色广泛'],
    apps: ['内衣', '泳衣', '针织品', '家纺', '童装'],
  },
  {
    name: '涤纶短纤', en: 'Staple Spun Polyester', img: '/images/webp/products/staple-spun-polyester.webp',
    desc: '耐磨性高、强力缝口美观、缝口平滑、避免跳针、色牢度高。适用于高速缝纫。',
    features: ['耐磨', '色牢度高', '高速缝纫'],
    apps: ['服装', '家纺', '鞋帽'],
  },
  {
    name: '涤纶包芯', en: 'Polyester Wrap', img: '/images/webp/products/polyester-wrap.webp',
    desc: '包芯结构强度优越，兼具涤纶高强度与棉线柔软手感。多种规格可选。',
    features: ['高强度', '柔软手感', '多规格'],
    apps: ['服装', '家纺', '皮革制品'],
  },
  {
    name: '高强涤纶长丝线', en: 'High Strength Polyester', img: '/images/webp/products/high-strength-polyester.webp',
    desc: '高强力聚酯化纤长丝制成，线质柔软光滑。耐热、耐光、耐损性强。OEKO-TEX认证。',
    features: ['耐热', '耐光', '耐损性强'],
    apps: ['真皮箱包', '真皮鞋类', '家居用品'],
  },
  {
    name: '汽车用品专用线', en: 'Automotive Thread', img: '/images/webp/products/automotive-thread.webp',
    desc: '高韧性、强力缝口美观、耐磨性好、颜色选择广泛、光泽典雅。OEKO-TEX认证。',
    features: ['高韧性', '耐磨', 'OEKO-TEX'],
    apps: ['安全气囊', '汽车座椅', '汽车中控'],
  },
  {
    name: '尼龙邦迪线', en: 'Nylon Bonded Thread', img: '/images/webp/products/nylon-bonded.webp',
    desc: '生产效率高、强度高、耐磨性好、颜色选择广泛、光泽典雅。',
    features: ['高强度', '耐磨', '光泽典雅'],
    apps: ['鞋类', '箱包', '体育用品', '户外用品'],
  },
  {
    name: '尼龙弹力线', en: 'Elastic Nylon', img: '/images/webp/products/elastic-nylon.webp',
    desc: '回弹力强、颜色选择广泛、光泽典雅。强力缝口、生产效率高。',
    features: ['回弹力强', '光泽典雅'],
    apps: ['紧身裤', '内衣', '运动服饰'],
  },
  {
    name: '高延伸长丝线', en: 'Eloflex', img: '/images/webp/products/eloflex.webp',
    desc: '延伸度高、润滑度高，适用于需要弹性和舒适度的产品。',
    features: ['延伸度高', '润滑度高'],
    apps: ['紧身裤', '泳衣', '运动服饰'],
  },
  {
    name: '高膨体涤纶线', en: 'High Bulk Polyester', img: '/images/webp/products/high-bulk-polyester.webp',
    desc: '覆盖效果佳、手感柔软、抗化学性强、颜色选择广泛。',
    features: ['覆盖佳', '手感柔软'],
    apps: ['婴儿服饰', '内衣', '防晒衣'],
  },
  {
    name: '橡筋线', en: 'Rubber Thread', img: '/images/webp/products/rubber-thread.webp',
    desc: '双股纤维丝双包庄而成，高强度拉力弹力。高环保性、亲肤。',
    features: ['高环保', '拉力稳定', '亲肤'],
    apps: ['袜子', '护腕', '羊毛衫', '鞋子'],
  },
  {
    name: '三防线', en: 'Three Defense Thread', img: '/images/webp/products/three-defense.webp',
    desc: '防泼水、防油、易去污。三防助剂处理后优异防水防油防污功能。',
    features: ['防泼水', '防油', '易去污'],
    apps: ['户外用品', '防护服', '功能性服装'],
  },
  {
    name: '可再生纱线', en: 'Recycled Yarns', img: '/images/webp/products/recycled-yarn.webp',
    desc: '从废弃矿泉水瓶和可乐瓶提取制成。减少污染、降低成本。OEKO-TEX认证。',
    features: ['高断裂强度', '耐磨', '环保再生'],
    apps: ['环保服装', '可再生织物'],
  },
  {
    name: '绣花线', en: 'Embroidery Thread', img: '/images/webp/products/embroidery-thread.webp',
    desc: '人造丝和涤纶绣花线，规格150D/2~75D/2。光泽极佳，颜色艳丽。OEKO-TEX认证。',
    features: ['耐用度高', '光泽好', 'OEKO-TEX'],
    apps: ['服装', '家纺', '工艺饰品', '鞋帽'],
  },
  {
    name: '环保舒弹丝', en: 'Eco Elastic Silk', img: '/images/webp/products/elastic-silk.webp',
    desc: '源于可再生生物质原料，微弹性纤维短丝。能耗低、可回收、可循环。OEKO-TEX认证。',
    features: ['高舒适度', '弹性好', '透气吸湿'],
    apps: ['运动鞋', '外套', '柔软面料'],
  },
]
</script>
