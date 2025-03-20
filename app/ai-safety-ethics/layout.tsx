'use client'

import { useEffect } from 'react'

export default function AiSafetyEthicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Use a client-side effect to modify the parent container's max-width
  useEffect(() => {
    // Find the container with max-width-screen-sm class
    const parentContainer = document.querySelector('.max-w-screen-sm') as HTMLElement
    
    if (parentContainer) {
      // Store original max-width to restore when unmounting
      const originalMaxWidth = parentContainer.style.maxWidth
      
      // Override the max-width
      parentContainer.style.maxWidth = '80rem' // ~1280px, equivalent to max-w-6xl
      
      // Cleanup when unmounting
      return () => {
        if (parentContainer) {
          parentContainer.style.maxWidth = originalMaxWidth
        }
      }
    }
  }, [])

  return (
    // Additional wrapper for our content
    <div className="w-full">
      {children}
    </div>
  )
}