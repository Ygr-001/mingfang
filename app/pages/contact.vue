<template>
  <div class="pt-20">
    <section class="relative h-[300px] md:h-[350px]">
      <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/cover3.webp" alt="联系我们" class="absolute inset-0 w-full h-full object-cover"  loading="lazy">
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <p class="text-blue-200 text-sm tracking-[0.3em] mb-3 uppercase page-tag">Contact</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-2 page-title">联系我们</h1>
          <p class="text-base text-gray-200">期待与您合作</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-custom max-w-5xl">
        <!-- 联系方式 - 单列居中布局 -->
        <div ref="contactEl" class="reveal-section" :class="{ 'is-visible': contactVisible }">
          <!-- 区块标题 -->
          <div class="text-center mb-12">
            <span class="text-primary font-semibold tracking-widest text-xs uppercase">Get In Touch</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3">联系方式</h2>
            <p class="text-gray-500 text-sm max-w-2xl mx-auto">您可以通过以下任意方式联系我们，我们将在 24 小时内回复您的咨询</p>
          </div>

          <!-- 联系方式卡片网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <!-- 生产基地 -->
            <div class="contact-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-400 mb-1 tracking-wider uppercase">生产基地 / Factory</p>
                  <p class="text-base font-semibold text-gray-900 leading-relaxed group-hover:text-primary transition-colors">广东肇庆高要小湘明芳产业园</p>
                </div>
              </div>
            </div>

            <!-- 邮箱 -->
            <div class="contact-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-400 mb-1 tracking-wider uppercase">电子邮箱 / Email</p>
                  <a href="mailto:mingfangsz@163.com" class="text-base font-semibold text-gray-900 leading-relaxed group-hover:text-primary transition-colors break-all">mingfangsz@163.com</a>
                </div>
              </div>
            </div>

            <!-- 联系电话 - 跨两列 -->
            <div class="contact-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500 md:col-span-2">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-400 mb-3 tracking-wider uppercase">联系电话 / Hotline</p>
                  <div class="grid sm:grid-cols-3 gap-3">
                    <a v-for="(contact, idx) in contacts" :key="contact.phone"
                      :href="`tel:${contact.phone.replace(/\s/g, '')}`"
                      class="phone-item group/phone flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary hover:shadow-lg transition-all duration-300"
                      :style="{ animationDelay: (idx * 0.1 + 0.2) + 's' }">
                      <div class="w-9 h-9 rounded-lg bg-white group-hover/phone:bg-white/20 flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4 text-primary group-hover/phone:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-bold text-gray-900 group-hover/phone:text-white transition-colors tracking-wider">{{ contact.phone }}</p>
                        <p class="text-xs text-gray-500 group-hover/phone:text-white/80 transition-colors">{{ contact.name }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 行动提示 -->
          <div class="mt-10 max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div class="flex flex-col md:flex-row items-center gap-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div class="flex-1 text-center md:text-left">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">工作时间</h3>
                  <p class="text-sm text-gray-600">周一至周六  9:00 - 18:00  ·  欢迎来电咨询合作事宜</p>
                </div>
                <a href="tel:13828729265" class="btn-primary inline-flex items-center gap-2 text-sm whitespace-nowrap">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  立即拨打
                </a>
              </div>
            </div>
          </div>

          <!-- 联系名片 -->
          <div class="mt-10 max-w-2xl mx-auto">
            <div class="bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-500">
              <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/company/contact-card.webp" alt="明芳线业联系卡" class="w-full rounded-lg"  loading="lazy">
            </div>
          </div>
        </div>

        <!--
        ========================================
        以下为「发送消息」表单 - 暂时隐藏
        取消注释即可恢复显示
        ========================================
        <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
          <h3 class="font-bold text-lg text-gray-900 mb-6">发送消息</h3>
          <form class="space-y-4" @submit.prevent>
            ...
          </form>
        </div>
        -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  { phone: '138 2872 9265', name: '夏小姐' },
  { phone: '186 6581 9316', name: '姜先生' },
  { phone: '133 3293 9771', name: '夏涔' },
]

// 滚动触发动画
const contactEl = ref<HTMLElement | null>(null)
const contactVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  if (contactEl.value) observer.observe(contactEl.value)
})
</script>

<style scoped>
/* 滚动入场 */
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 联系方式卡片入场 */
.contact-card {
  opacity: 0;
  transform: translateY(20px);
  animation: contactFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.contact-card:nth-child(1) { animation-delay: 0.1s; }
.contact-card:nth-child(2) { animation-delay: 0.2s; }
.contact-card:nth-child(3) { animation-delay: 0.3s; }
@keyframes contactFadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* 电话项入场 */
.phone-item {
  opacity: 0;
  transform: scale(0.95);
  animation: phoneItemIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes phoneItemIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.phone-item:hover {
  transform: translateY(-2px);
}
</style>
