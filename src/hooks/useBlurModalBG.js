import { useState, useLayoutEffect } from 'react'

export default function useBlurModalBG(parent = document.body, size = '4px') {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(parent).filter
    // Prevent scrolling on mount
    parent.style.filter = `blur(${size})`
    // Re-enable scrolling when component unmounts
    return () => (parent.style.filter = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
