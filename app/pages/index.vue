<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative h-[500px] md:h-[650px]">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="h-full"
      >
        <SwiperSlide v-for="(slide, i) in heroSlides" :key="i">
          <div class="absolute inset-0">
            <img :src="slide.img" :alt="slide.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/35" />
          </div>
          <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
            <div class="max-w-3xl">
              <p class="text-blue-200 text-sm tracking-[0.3em] mb-4 uppercase">{{ slide.tag }}</p>
              <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">{{ slide.title }}</h2>
              <p class="text-base md:text-lg text-gray-200 mb-8 max-w-xl mx-auto">{{ slide.description }}</p>
              <NuxtLink :to="slide.link" class="btn-primary text-base md:text-lg">
                {{ slide.btnText }}
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- 公司简介 + 发展规模 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Enterprise Profile</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-6">公司简介</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                明芳线业始创于<strong class="text-gray-900">1997年</strong>，是一家专业纱线生产制造商。公司生产的各种涤纶线、尼龙线、包芯线、全棉线、特品线、弹力线、绣花线、蓬松线、防水线、抗菌线，以及再生纱线等，深受广大客户好评。
              </p>
              <p>
                公司现全资收购具有独立排污许可证的<strong class="text-gray-900">广东肇庆鸿基织业有限公司</strong>，成立明芳产业园。集生产、染色、运输等系列完善服务于一体，实力雄厚，<strong class="text-gray-900">月产量达100吨以上</strong>。
              </p>
              <p class="text-xs text-gray-400 italic">
                Mingfang threads was founded in 1997 and is a professional yarn production manufacturer. The company produces various polyester threads, nylon threads, cored threads, all cotton threads, specialty threads, elastic thread embroidery threads, fluffy threads, waterproof threads, antibacterial threads, and recycled yarns, which are highly praised by customers. The company is now fully purchasing Guangdong Zhaoqing Hongji Textile Co., Ltd., which has an independent pollution discharge license, to establish Mingfang Industrial Park. Integrating production, dyeing, transportation and other comprehensive services, with a monthly output of over 100 tons.
              </p>
            </div>
          </div>
          <div class="relative">
            <img src="/images/webp/scale-icon2.webp" alt="明芳线业" class="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg" />
            <div class="absolute -bottom-3 -left-3 bg-primary text-white px-3 py-1.5 rounded-lg shadow text-sm font-bold">
              始于 1997
            </div>
          </div>
        </div>

        <!-- 发展规模 -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div class="text-center mb-8">
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Development Scale</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">发展规模</h2>
            <p class="text-gray-500 text-sm max-w-2xl mx-auto">
              建立于2001年，总资产七千万元，有排污许可证，印染、生产一体，产业完整。占地20余亩，年产能1000吨或1000万个缝纫线。
            </p>
            <p class="text-xs text-gray-400 italic mt-1">
              Established in 2001, with a total asset of 70 million yuan, with a pollution discharge permit, printing and dyeing, and integrated production, the industry is complete. Covering an area of over 20 acres, with an annual production capacity of 1000 tons or 10 million sewing threads.
            </p>
          </div>

          <!-- 数据卡片 -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">2001</div>
              <div class="text-xs text-gray-500 mt-1">建立年份</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">7000万</div>
              <div class="text-xs text-gray-500 mt-1">总资产</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">20亩+</div>
              <div class="text-xs text-gray-500 mt-1">占地面积</div>
            </div>
            <div class="bg-white rounded-xl p-5 text-center shadow-sm">
              <div class="text-3xl font-bold text-primary">1000吨</div>
              <div class="text-xs text-gray-500 mt-1">年产能</div>
            </div>
          </div>

          <!-- 规模数据图 -->
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <img src="/images/webp/scale-data.webp" alt="发展规模数据" class="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- 业务范围 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom">
        <h2 class="section-title">业务范围</h2>
        <p class="section-subtitle text-sm md:text-base">开发内衣、泳衣、运动服、鞋包、塑身衣和汽车内饰的纱线辅料</p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10">
          <div v-for="item in applications" :key="item.label"
            class="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
            <span class="text-3xl">{{ item.icon }}</span>
            <p class="text-sm font-medium text-gray-700 mt-2">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品预览 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <h2 class="section-title">产品中心</h2>
        <p class="section-subtitle text-sm md:text-base">涤纶线、尼龙线、包芯线、全棉线、弹力线、绣花线、蓬松线、防水线、抗菌线及再生纱线</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div v-for="product in featuredProducts" :key="product.name"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="aspect-[3/2] overflow-hidden">
              <img :src="product.img" :alt="product.name" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-5">
              <h3 class="font-bold text-gray-900 text-sm md:text-base">{{ product.name }}</h3>
              <p class="text-[11px] text-primary font-medium mt-1">{{ product.en }}</p>
              <p class="text-gray-500 text-xs leading-relaxed mt-2 line-clamp-2">{{ product.desc }}</p>
              <div class="flex flex-wrap gap-1 mt-3">
                <span v-for="f in product.tags" :key="f" class="px-2 py-0.5 bg-blue-50 text-primary-600 text-[10px] rounded-full">{{ f }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/products" class="btn-outline text-sm">查看全部产品 →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 品质保障 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-5xl">
        <h2 class="section-title">品质保障</h2>
        <p class="section-subtitle text-sm md:text-base">每款产品严格抽样检测，完整品质控制体系</p>
        <div class="grid sm:grid-cols-2 gap-6 mt-10">
          <div v-for="item in qualityItems" :key="item.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
            <div class="sm:w-2/5 flex-shrink-0">
              <img :src="item.img" :alt="item.title" class="w-full h-48 sm:h-full object-cover" />
            </div>
            <div class="p-5 flex-1">
              <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ item.desc }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="d in item.details" :key="d"
                  class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-primary-700 text-[11px] rounded-full">
                  <span class="w-1 h-1 rounded-full bg-primary"></span>{{ d }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 国际认证 -->
    <section class="py-16 md:py-24">
      <div class="container-custom max-w-4xl">
        <h2 class="section-title">国际认证</h2>
        <p class="section-subtitle text-sm md:text-base">通过多项国际权威检测认证</p>
        <div class="grid sm:grid-cols-2 gap-8 mt-10">
          <div v-for="cert in certs" :key="cert.name"
            class="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center border border-gray-100">
            <div class="w-28 h-28 mx-auto mb-5 rounded-xl bg-gray-50 overflow-hidden">
              <img :src="cert.img" :alt="cert.name" class="w-full h-full object-contain p-2" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-500 mb-4">{{ cert.desc }}</p>
            <div class="flex flex-wrap justify-center gap-2">
              <span v-for="tag in cert.tags" :key="tag" class="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作品牌 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom max-w-4xl">
        <h2 class="section-title">合作客户与品牌</h2>
        <p class="section-subtitle text-sm md:text-base">与众多国际知名品牌建立长期合作关系</p>
        <div class="flex flex-wrap justify-center gap-2.5 mt-8">
          <span v-for="brand in brands" :key="brand"
            class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-xs md:text-sm shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
            {{ brand }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-800 text-white text-center">
      <div class="container-custom max-w-xl">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">期待与您合作</h2>
        <p class="text-blue-100 mb-6 text-sm md:text-base">无论您需要什么类型的纱线产品，我们都能提供专业解决方案</p>
        <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors">
          联系我们 →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const heroSlides = [
  {
    tag: 'FACTORY STRENGTH',
    title: '明芳线业',
    description: '明芳产业园，集纺纱、染色、检测、运输于一体，月产量100吨以上',
    btnText: '了解我们',
    link: '/about',
    img: '/images/webp/pic2.webp',
  },
  {
    tag: 'SINCE 1997',
    title: '品质纱线 · 明芳制造',
    description: '14大产品系列，通过OEKO-TEX标准100婴儿一级认证',
    btnText: '查看产品',
    link: '/products',
    img: '/images/webp/pic4.webp',
  },
  {
    tag: 'PRODUCTS',
    title: '品种齐全 · 应用广泛',
    description: '涤纶线、尼龙线、包芯线、全棉线、弹力线、绣花线、可再生纱线',
    btnText: '了解产品',
    link: '/products',
    img: '/images/webp/company/cover2.webp',
  },
]

const applications = [
  { label: '内衣', icon: '👙' },
  { label: '泳衣', icon: '🏊' },
  { label: '运动服', icon: '⚽' },
  { label: '鞋包', icon: '👟' },
  { label: '塑身衣', icon: '🩱' },
  { label: '汽车内饰', icon: '🚗' },
]

const featuredProducts = [
  { name: '涤纶蓬松线', en: 'Textured Polyester', img: '/images/webp/products/textured-polyester.webp', desc: '覆盖效果佳、强力性好、手感柔软光滑，适用于内衣泳衣针织品', tags: ['手感柔软', '覆盖佳', '颜色广泛'] },
  { name: '涤纶短纤', en: 'Staple Spun Polyester', img: '/images/webp/products/staple-spun-polyester.webp', desc: '耐磨性高、强力缝口美观、色牢度高，适用高速缝纫', tags: ['耐磨', '色牢度高', '高速缝纫'] },
  { name: '尼龙邦迪线', en: 'Nylon Bonded Thread', img: '/images/webp/products/nylon-bonded.webp', desc: '生产效率高、强度高、颜色选择广泛、光泽典雅', tags: ['高强度', '耐磨', '光泽典雅'] },
  { name: '可再生纱线', en: 'Recycled Yarns', img: '/images/webp/products/recycled-yarn.webp', desc: '从废弃矿泉水瓶提取制成，废物再利用，符合OEKO-TEX认证', tags: ['环保再生', '高强度', '耐磨'] },
]

const qualityItems = [
  {
    title: '生产车间', desc: '引进新型自动化高速线机，生产效率提高三倍。',
    img: '/images/webp/company/workshop1.webp',
    details: ['自动化高速线机', '产能提升300%', '20余亩厂房'],
  },
  {
    title: '染坊', desc: '拥有1KG至500KG不同型号染色机40余台。',
    img: '/images/webp/company/dyehouse.webp',
    details: ['40余台染色机', '多型号覆盖', '大批量生产'],
  },
  {
    title: '实验检测', desc: '所有客户的每款产品都会进行抽样严格检测。',
    img: '/images/webp/lab/testing.webp',
    details: ['抽样检测', '全品类覆盖', '严格品控'],
  },
  {
    title: '质检实验室', desc: '拉力、粗细度、色牢度等全套检测设备，配置样板间。',
    img: '/images/webp/lab/laboratory.webp',
    details: ['拉力检测', '色牢度检测', '样板间配置'],
  },
]

const certs = [
  {
    name: 'OEKO-TEX Standard 100',
    desc: '瑞士TESTEX AG认证，婴儿一级安全标准',
    img: '/images/webp/certs/oeko-tex.webp',
    tags: ['婴儿一级', 'TESTEX AG', '瑞士认证'],
  },
  {
    name: 'GRS & SGS 认证',
    desc: '全球回收标准认证，SGS-CSTC检测通过',
    img: '/images/webp/certs/sgs-grs.webp',
    tags: ['全球回收标准', 'SGS检测', '环保认证'],
  },
]

const brands = [
  'FILA', 'Lululemon', 'Skechers', 'MUJI 无印良品', 'TESCO',
  'Bananain 蕉内', 'Beneunder 蕉下', 'Aimer 爱慕', 'Regina Miracle 维珍妮',
  '全棉时代', '水星家居', '安踏 ANTA', '利丰',
]
</script>
