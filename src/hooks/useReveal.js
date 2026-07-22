import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observed = new WeakSet()

    if (reduceMotion) {
      document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    const observeNewElements = () => {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element)
          observer.observe(element)
        }
      })
    }

    observeNewElements()
    const mutationObserver = new MutationObserver(observeNewElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
