<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover3.webp" alt="合作客户" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase">Partners</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">合作客户与品牌</h1>
          <p class="text-base text-gray-200">携手全球知名品牌，共创品质未来</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="section-title">合作客户</h2>
          <p class="section-subtitle text-sm md:text-base">与众多国际知名品牌建立长期合作关系，产品远销全球</p>
        </div>

        <div class="space-y-8">
          <div v-for="(partner, idx) in partners" :key="partner.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
            :class="{ 'md:flex-row-reverse': idx % 2 === 1 }">
            <!-- 图片 -->
            <div class="md:w-1/2 overflow-hidden">
              <img :src="partner.img" :alt="partner.title" class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"  loading="lazy">
            </div>
            <!-- 文字 -->
            <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <p class="text-xs text-primary font-medium tracking-widest mb-2 uppercase">{{ partner.tag }}</p>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">{{ partner.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ partner.desc }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="b in partner.brands" :key="b"
                  class="px-2.5 py-1 bg-blue-50 text-primary-700 text-xs rounded-full">{{ b }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 品牌网格 -->
        <div class="mt-16 text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-6">合作品牌</h3>
          <div class="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            <span v-for="brand in brands" :key="brand"
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm shadow-sm hover:border-primary hover:text-primary transition-colors">
              {{ brand }}
            </span>
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
</script>
