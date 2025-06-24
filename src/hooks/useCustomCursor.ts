'use client'

import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addHoverEffect = () => cursor.classList.add('hover')
    const removeHoverEffect = () => cursor.classList.remove('hover')

    document.addEventListener('mousemove', moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect)
      el.addEventListener('mouseleave', removeHoverEffect)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect)
        el.removeEventListener('mouseleave', removeHoverEffect)
      })
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])
}