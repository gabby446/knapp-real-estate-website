"use client"

import { useEffect } from "react"

// Scroll Animation Hook - call this in any page to enable animations
export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-in, .animate-on-scroll'
    )

    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Scroll Animation Provider Component - wrap your content with this
export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimation()
  return <>{children}</>
}
