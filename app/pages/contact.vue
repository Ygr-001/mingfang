<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover3.webp" alt="联系我们" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase">Contact</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">联系我们</h1>
          <p class="text-base text-gray-200">期待与您合作</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- 联系方式 -->
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-8">联系方式</h2>
            <div class="space-y-5">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-0.5">生产基地</p>
                  <p class="text-sm font-medium text-gray-900">广东肇庆高要小湘明芳产业园</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-0.5">联系电话</p>
                  <p class="text-sm font-medium text-gray-900">138 2872 9265 <span class="text-xs text-gray-400 font-normal">夏小姐</span></p>
                  <p class="text-sm font-medium text-gray-900">186 6581 9316 <span class="text-xs text-gray-400 font-normal">江先生</span></p>
                  <p class="text-sm font-medium text-gray-900">133 3293 9771 <span class="text-xs text-gray-400 font-normal">岑先生</span></p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-0.5">邮箱</p>
                  <p class="text-sm font-medium text-gray-900">mingfangsz@163.com</p>
                </div>
              </div>
            </div>
            <div class="mt-8 p-4 bg-gray-50 rounded-xl">
              <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/contact-card.webp" alt="明芳线业联系卡" class="w-full rounded-lg"  loading="lazy">
            </div>
          </div>

          <!-- 表单 -->
          <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 class="font-bold text-lg text-gray-900 mb-6">发送消息</h3>
            <form class="space-y-4" @submit.prevent>
              <div>
                <label class="block text-xs text-gray-500 mb-1">您的姓名 <span class="text-red-400">*</span></label>
                <input type="text" class="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">联系电话 <span class="text-red-400">*</span></label>
                <input type="tel" class="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">电子邮箱</label>
                <input type="email" class="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">咨询产品</label>
                <select class="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option value="">请选择产品</option>
                  <option>涤纶蓬松线</option>
                  <option>涤纶短纤</option>
                  <option>涤纶包芯</option>
                  <option>高强涤纶长丝线</option>
                  <option>尼龙邦迪线</option>
                  <option>尼龙弹力线</option>
                  <option>可再生纱线</option>
                  <option>绣花线</option>
                  <option>环保舒弹丝</option>
                  <option>其他产品</option>
                </select>
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">您的需求 <span class="text-red-400">*</span></label>
                <textarea rows="4" class="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
              </div>
              <button type="submit" class="w-full py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-700 transition-colors">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
