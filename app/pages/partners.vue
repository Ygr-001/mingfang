<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/brands.webp" alt="合作客户" class="absolute inset-0 w-full h-full object-cover" />
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
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm mb-12">
          <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/customers.webp" alt="合作客户" class="w-full" />
        </div>
        <div class="text-center">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">部分合作品牌</h2>
          <p class="text-gray-500 text-sm mb-8">与众多国际知名品牌建立长期合作关系</p>
          <div class="flex flex-wrap justify-center gap-2.5">
            <span v-for="brand in brands" :key="brand"
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-xs md:text-sm shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const brands = [
  'FILA', 'Lululemon', 'Skechers', 'MUJI 无印良品', 'TESCO',
  'Bananain 蕉内', 'Beneunder 蕉下', 'Aimer 爱慕', 'Regina Miracle 维珍妮',
  '全棉时代', '水星家居', '安踏 ANTA', '利丰', '中山利丰',
]
</script>
