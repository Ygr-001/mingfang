<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Company info -->
        <div>
          <h3 class="text-white text-lg font-bold mb-2">明芳线业</h3>
          <p class="text-xs text-gray-500 mb-4">MING FANG THREADS</p>
          <p class="text-sm leading-relaxed text-gray-400">
            始创于1997年，专业纱线生产制造商。全资收购广东肇庆鸿基织业有限公司，成立明芳产业园，集生产、染色、运输等系列完善服务于一体。
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-white font-medium mb-4">快速链接</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">关于明芳</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-white transition-colors">产品中心</NuxtLink></li>
            <li><NuxtLink to="/partners" class="hover:text-white transition-colors">合作客户</NuxtLink></li>
            <li><NuxtLink to="/development" class="hover:text-white transition-colors">可持续发展</NuxtLink></li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="text-white font-medium mb-4">产品系列</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/products" class="hover:text-white transition-colors">涤纶蓬松线</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-white transition-colors">涤纶短纤</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-white transition-colors">尼龙邦迪线</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-white transition-colors">可再生纱线</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-medium mb-4">联系我们</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>广东肇庆高要小湘明芳产业园</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>138 2872 9265（夏小姐）</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mingfangsz@163.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800">
      <div class="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} 明芳线业 Shenzhen Mingfang Lingerie Accessories Co., Ltd All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
