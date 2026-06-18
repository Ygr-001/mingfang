<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-shadow duration-300" :class="{ 'shadow-md': scrolled }">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-3">
          <img src="/images/webp/pic3.webp" alt="明芳线业" class="h-14 w-auto" />
          <div class="hidden sm:block">
            <h1 class="text-lg font-bold text-gray-900 leading-tight">明芳线业</h1>
            <p class="text-xs text-gray-400 leading-tight tracking-wider">MING FANG THREADS</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="relative group"
            @mouseenter="item.children && (activeDropdown = item.label)"
            @mouseleave="item.children && (activeDropdown = null)"
          >
            <NuxtLink
              :to="item.to"
              class="px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200 rounded-lg flex items-center gap-1"
              :class="{ 'text-primary font-medium': isActive(item.to) }"
            >
              {{ item.label }}
              <svg
                v-if="item.children"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === item.label }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>

            <!-- Dropdown -->
            <div
              v-if="item.children"
              class="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="block px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors duration-150"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/contact" class="hidden md:inline-flex btn-primary text-sm px-4 py-2">
            联系我们
          </NuxtLink>
          <!-- Mobile menu button -->
          <button
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
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
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100">
        <div class="container-custom py-4 space-y-1">
          <template v-for="item in navItems" :key="item.label">
            <button
              v-if="item.children"
              class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              @click="toggleMobileSub(item.label)"
            >
              <span class="font-medium text-gray-700">{{ item.label }}</span>
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': openMobileSub === item.label }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="item.children && openMobileSub === item.label" class="ml-4 space-y-1">
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="block px-4 py-2.5 text-gray-600 hover:text-primary rounded-lg transition-colors"
                @click="mobileMenuOpen = false"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
            <NuxtLink
              v-else-if="!item.children"
              :to="item.to"
              class="block px-4 py-3 font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
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

const navItems = [
  { label: '首页', to: '/' },
  {
    label: '关于明芳',
    to: '/about',
    children: [
      { label: '公司简介', to: '/about' },
      { label: '发展历程', to: '/about#history' },
      { label: '认证资质', to: '/about#certs' },
      { label: '车间与实验室', to: '/about#workshop' },
    ],
  },
  { label: '产品中心', to: '/products' },
  { label: '合作客户', to: '/partners' },
  { label: '可持续发展', to: '/development' },
  { label: '联系我们', to: '/contact' },
]

function isActive(path: string) {
  return route.path === path
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
