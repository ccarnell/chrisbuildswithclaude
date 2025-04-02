'use client'

import { motion } from 'motion/react'
import { useEffect } from 'react'

export function DashboardWireframe() {
  // Handle responsive height functionality for Datawrapper embed
  useEffect(() => {
    const handleDatawrapperMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object' && 'datawrapper-height' in event.data) {
        const iframes = document.querySelectorAll('iframe')
        for (const key in event.data['datawrapper-height']) {
          for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i]
            if (iframe.contentWindow === event.source) {
              const height = event.data['datawrapper-height'][key] + 'px'
              iframe.style.height = height
            }
          }
        }
      }
    }

    window.addEventListener('message', handleDatawrapperMessage)
    return () => {
      window.removeEventListener('message', handleDatawrapperMessage)
    }
  }, [])

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2 sm:p-4 bg-white dark:bg-zinc-900">
      {/* Disclaimer */}
      <p className="font-bold italic mt-2 text-sm text-zinc-600 dark:text-zinc-400 pt-2 p-4">DISCLAIMER: THESE VISUALIZATIONS ARE SPECIFICALLY FOR DEMONSTRATION PURPOSES ONLY. THE UNDERLYING DATA IS PRELIMINARY, HAS BEEN USER-MODIFIED, AND WILL NOT REFLECT FINAL RESULTS.</p>
      
      {/* Weighted visualization - shown first */}
      <div className="mb-8">
        <div className="overflow-hidden rounded-md">
          <iframe 
            title="Weighted Economic Index by MSA" 
            aria-label="Map" 
            id="datawrapper-chart-aD2yT" 
            src="https://datawrapper.dwcdn.net/aD2yT/5/" 
            scrolling="no" 
            frameBorder="0" 
            style={{ border: 'none', width: '100%' }} 
            height="720" 
            data-external="1">
          </iframe>
      </div>
    </div>
      
      {/* Log10 visualization - shown second */}
      <div className="mb-6">
        <div className="overflow-hidden rounded-md">
          <iframe 
            title="Log10 Economic Index by MSA" 
            aria-label="Map" 
            id="datawrapper-chart-h71nE" 
            src="https://datawrapper.dwcdn.net/h71nE/4/" 
            scrolling="no" 
            frameBorder="0" 
            style={{ border: 'none', width: '100%' }} 
            height="720" 
            data-external="1">
          </iframe>
        </div>
      </div>
      
      {/* Top 25 MSAs chart section - below disclaimer */}
      <div className="mt-6">
        <div className="flex flex-col lg:flex-row gap-4 overflow-hidden">
          {/* Chart container - takes 75% width on desktop */}
          <div className="w-full lg:w-3/4 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden p-4">
            <iframe
              title="Top 25 MSAs Weighted by AI Economic Index"
              aria-label="List"
              id="datawrapper-chart-NWZvW"
              src="https://datawrapper.dwcdn.net/NWZvW/1?dark=true"
              scrolling="no"
              frameBorder="0"
              style={{ border: 'none', width: '100%', minWidth: '100%' }}
              height="666"
              data-external="1">
            </iframe>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            </div>
          </div>
          
          {/* Metrics box - takes 25% width on desktop */}
          <div className="w-full lg:w-1/4 p-4 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
            <div className="h-full flex flex-col">
              <div className="mb-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Metrics</div>
              <div className="flex-grow space-y-3 sm:space-y-6">
                <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Top Occupation</div>
                  <div className="text-sm sm:text-base font-medium">--</div>
                </div>
                <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">AI Impact</div>
                  <div className="text-sm sm:text-base font-medium">--</div>
                </div>
                <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">O*NET Skills</div>
                  <div className="text-sm sm:text-base font-medium">--</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}