/**
 * 数字滚动 count-up composable
 * 用法:
 *   useCountUp(refEl, "1000吨", { duration: 1600, threshold: 0.4 })
 *   - 滚动到视口时,数字 0→target 在 1.6s 内递增
 *   - 非数字部分(吨、+、亩)保留原样
 *   - 完成后给元素加 is-counted class 触发 CSS pop
 */
export function useCountUp(
  elRef: MaybeRefOrGetter<HTMLElement | null | undefined>,
  target: string | number,
  options: { duration?: number; threshold?: number } = {}
) {
  if (import.meta.server) return
  const { duration = 1600, threshold = 0.4 } = options

  // 解析 target: 拆出 数字段 + 后缀段
  const targetStr = String(target)
  const match = targetStr.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return  // 不含数字,无需动画

  const prefix = match[1] || ''
  const num = parseFloat(match[2])
  const suffix = match[3] || ''
  const decimals = (match[2].split('.')[1] || '').length

  let triggered = false
  let observer: IntersectionObserver | null = null

  const resolveEl = (): HTMLElement | null => {
    const v = toValue(elRef)
    return (v as HTMLElement | null | undefined) ?? null
  }

  onMounted(() => {
    const el = resolveEl()
    if (el) setupObserver(el)
  })

  // 兼容 ref 回调赋值: 监听 ref 变化, 元素挂上后再建立 observer
  watch(elRef, () => {
    const el = resolveEl()
    if (!el) return
    if (observer) observer.disconnect()
    setupObserver(el)
  })

  function setupObserver(el: HTMLElement) {
    if (triggered) return
    // 初始显示 prefix + '0' + suffix
    el.textContent = prefix + (0).toFixed(decimals) + suffix

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true
            observer?.disconnect()
            animate()
          }
        })
      },
      { threshold }
    )
    observer.observe(el)
  }

  function animate() {
    const el = resolveEl()
    if (!el) return
    const start = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    function step(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = num * eased
      el.textContent = prefix + current.toFixed(decimals) + suffix
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        el.textContent = prefix + num.toFixed(decimals) + suffix
        el.classList.add('is-counted')
      }
    }
    requestAnimationFrame(step)
  }
}
