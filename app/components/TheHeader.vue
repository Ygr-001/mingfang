<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 header-glass" :class="{ 'header-scrolled': scrolled, 'header-top': !scrolled }">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-2 md:gap-3 group">
          <img src="https://cdn.jsdelivr.net/gh/Ygr-001/mingfang@main/public/images/webp/pic3.webp" alt="明芳线业" class="h-10 md:h-14 w-auto logo-img" />
          <div class="hidden sm:block">
            <h1 class="text-base md:text-lg font-bold text-gray-900 leading-tight transition-colors group-hover:text-primary">明芳线业</h1>
            <p class="text-[10px] md:text-xs text-gray-400 leading-tight tracking-wider">MING FANG THREADS</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <NuxtLink to="/" class="nav-item" :class="{ 'nav-active': isActive('/') }">
            <span>首页</span>
          </NuxtLink>

          <!-- 关于明芳 下拉 -->
          <div class="relative group"
            @mouseenter="activeDropdown = 'about'"
            @mouseleave="activeDropdown = null">
            <button class="nav-item flex items-center gap-1" :class="{ 'nav-active': isAboutActive() }">
              <span>关于明芳</span>
              <svg class="w-3 h-3 transition-transform duration-300" :class="{ 'rotate-180': activeDropdown === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-show="activeDropdown === 'about'" class="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px]">
                <NuxtLink to="/about#history" class="dropdown-item">发展历程</NuxtLink>
                <NuxtLink to="/about#workshop" class="dropdown-item">染坊与实验室</NuxtLink>
                <NuxtLink to="/about#certs" class="dropdown-item">安全认证</NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/products" class="nav-item" :class="{ 'nav-active': isActive('/products') }">
            <span>产品中心</span>
          </NuxtLink>

          <NuxtLink to="/development" class="nav-item" :class="{ 'nav-active': isActive('/development') }">
            <span>可持续发展</span>
          </NuxtLink>

          <NuxtLink to="/partners" class="nav-item" :class="{ 'nav-active': isActive('/partners') }">
            <span>合作客户</span>
          </NuxtLink>
        </nav>

        <!-- Right action -->
        <div class="flex items-center gap-2">
          <NuxtLink to="/contact" class="hidden md:inline-flex btn-primary text-xs md:text-sm px-4 py-2 nav-cta">
            联系我们
          </NuxtLink>
          <button class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all active:scale-95" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
        <div class="container-custom py-4 space-y-1">
          <NuxtLink to="/" class="mobile-item" @click="mobileMenuOpen = false">首页</NuxtLink>

          <button class="mobile-item w-full flex items-center justify-between" @click="toggleMobileSub('about')">
            <span>关于明芳</span>
            <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': openMobileSub === 'about' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Transition name="mobile-sub">
            <div v-if="openMobileSub === 'about'" class="ml-4 space-y-1 overflow-hidden">
              <NuxtLink to="/about#history" class="mobile-item text-sm" @click="mobileMenuOpen = false">发展历程</NuxtLink>
              <NuxtLink to="/about#workshop" class="mobile-item text-sm" @click="mobileMenuOpen = false">染坊与实验室</NuxtLink>
              <NuxtLink to="/about#certs" class="mobile-item text-sm" @click="mobileMenuOpen = false">安全认证</NuxtLink>
            </div>
          </Transition>

          <NuxtLink to="/products" class="mobile-item" @click="mobileMenuOpen = false">产品中心</NuxtLink>
          <NuxtLink to="/development" class="mobile-item" @click="mobileMenuOpen = false">可持续发展</NuxtLink>
          <NuxtLink to="/partners" class="mobile-item" @click="mobileMenuOpen = false">合作客户</NuxtLink>
          <NuxtLink to="/contact" class="mobile-item font-bold text-primary bg-blue-50" @click="mobileMenuOpen = false">联系我们</NuxtLink>
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
  if (path === '/') return route.path === '/' || route.path === '/mingfang/' || route.path === '/mingfang'
  return route.path.startsWith(path)
}

function isAboutActive() {
  return route.path.startsWith('/about')
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
/* Header 背景过渡 */
.header-glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
}
.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Logo 图片旋转动画 */
.logo-img {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.group:hover .logo-img {
  transform: rotate(-8deg) scale(1.05);
}

/* 导航项样式 */
.nav-item {
  position: relative;
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  color: #374151;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
}
.nav-item span {
  position: relative;
  z-index: 2;
}
.nav-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 86, 219, 0.08), rgba(26, 86, 219, 0.12));
  border-radius: 0.5rem;
  transform: scale(0.7);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.nav-item:hover {
  color: #1a56db;
  transform: translateY(-1px);
}
.nav-item:hover::before {
  transform: scale(1);
  opacity: 1;
}

/* 导航项底部下划线 */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1a56db, #3b82f6);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}
.nav-item:hover::after {
  width: calc(100% - 1.5rem);
}

/* 当前页激活 */
.nav-active {
  color: #1a56db;
  font-weight: 500;
}
.nav-active::after {
  width: calc(100% - 1.5rem);
}

/* 下拉菜单项 */
.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  transition: all 0.2s;
}
.dropdown-item:hover {
  color: #1a56db;
  background: linear-gradient(90deg, #eff6ff, transparent);
  padding-left: 1.25rem;
}

/* 联系按钮 hover 效果 */
.nav-cta {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.nav-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #1e40af, #1a56db);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
  z-index: -1;
}
.nav-cta:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* 移动菜单 */
.mobile-item {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  border-radius: 0.5rem;
  transition: all 0.2s;
  background: transparent;
  border: none;
  text-align: left;
  width: 100%;
  cursor: pointer;
}
.mobile-item:hover {
  color: #1a56db;
  background: #eff6ff;
  padding-left: 1.25rem;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 80vh;
  overflow: hidden;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-sub-enter-active,
.mobile-sub-leave-active {
  transition: all 0.25s ease;
  max-height: 300px;
}
.mobile-sub-enter-from,
.mobile-sub-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
