<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-shadow duration-300" :class="{ 'shadow-md': scrolled }">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-2 md:gap-3">
          <img src="/images/webp/pic3.webp" alt="明芳线业" class="h-10 md:h-14 w-auto" />
          <div class="hidden sm:block">
            <h1 class="text-base md:text-lg font-bold text-gray-900 leading-tight">明芳线业</h1>
            <p class="text-[10px] md:text-xs text-gray-400 leading-tight tracking-wider">MING FANG THREADS</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <NuxtLink to="/" class="px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-lg"
            :class="{ 'text-primary font-medium': isActive('/') }">
            首页
          </NuxtLink>

          <!-- 关于明芳 下拉 -->
          <div class="relative group"
            @mouseenter="activeDropdown = 'about'"
            @mouseleave="activeDropdown = null">
            <button class="px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-lg flex items-center gap-1"
              :class="{ 'text-primary font-medium': route.path.startsWith('/about') }">
              关于明芳
              <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': activeDropdown === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NuxtLink to="/about#history" class="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors">发展历程</NuxtLink>
              <NuxtLink to="/about#workshop" class="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors">染坊与实验室</NuxtLink>
              <NuxtLink to="/about#certs" class="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors">安全认证</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/products" class="px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-lg"
            :class="{ 'text-primary font-medium': isActive('/products') }">
            产品中心
          </NuxtLink>

          <NuxtLink to="/partners" class="px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-lg"
            :class="{ 'text-primary font-medium': isActive('/partners') }">
            合作客户
          </NuxtLink>

          <NuxtLink to="/development" class="px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors rounded-lg"
            :class="{ 'text-primary font-medium': isActive('/development') }">
            可持续发展
          </NuxtLink>
        </nav>

        <!-- Right action -->
        <div class="flex items-center gap-2">
          <NuxtLink to="/contact" class="hidden md:inline-flex btn-primary text-xs md:text-sm px-4 py-2">
            联系我们
          </NuxtLink>
          <!-- Mobile menu button -->
          <button class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
        <div class="container-custom py-4 space-y-1">
          <NuxtLink to="/" class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors" @click="mobileMenuOpen = false">
            首页
          </NuxtLink>

          <button class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" @click="toggleMobileSub('about')">
            <span class="text-sm font-medium text-gray-700">关于明芳</span>
            <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': openMobileSub === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openMobileSub === 'about'" class="ml-4 space-y-1">
            <NuxtLink to="/about#history" class="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg transition-colors" @click="mobileMenuOpen = false">发展历程</NuxtLink>
            <NuxtLink to="/about#workshop" class="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg transition-colors" @click="mobileMenuOpen = false">染坊与实验室</NuxtLink>
            <NuxtLink to="/about#certs" class="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg transition-colors" @click="mobileMenuOpen = false">安全认证</NuxtLink>
          </div>

          <NuxtLink to="/products" class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors" @click="mobileMenuOpen = false">
            产品中心
          </NuxtLink>
          <NuxtLink to="/partners" class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors" @click="mobileMenuOpen = false">
            合作客户
          </NuxtLink>
          <NuxtLink to="/development" class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors" @click="mobileMenuOpen = false">
            可持续发展
          </NuxtLink>
          <NuxtLink to="/contact" class="block px-4 py-3 text-sm font-bold text-primary rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors" @click="mobileMenuOpen = false">
            联系我们
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const openMobileSub = ref<string | null>(null)

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function toggleMobileSub(label: string) {
  openMobileSub.value = openMobileSub.value === label ? null : label
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
