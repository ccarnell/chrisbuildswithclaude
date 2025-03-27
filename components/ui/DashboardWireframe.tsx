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
      {/* Top controls moved to top */}
      <div className="mb-4 flex flex-wrap sm:flex-nowrap gap-2">
        <div className="h-8 sm:h-10 w-20 sm:w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
        <div className="h-8 sm:h-10 w-20 sm:w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
        <div className="h-8 sm:h-10 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
      </div>
      
      {/* Datawrapper embed - title comes from within the iframe */}
      <div className="mb-6">
        <iframe 
          title="Economic Index Data" 
          aria-label="Map" 
          id="datawrapper-chart-aD2yT" 
          src="https://datawrapper.dwcdn.net/aD2yT/1/" 
          scrolling="no" 
          frameBorder="0" 
          style={{ width: 0, minWidth: '100%', border: 'none' }} 
          height="416" 
          data-external="1"
        />
      </div>
      
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {/* Charts section - same height as Graphs */}
        <div className="col-span-12 md:col-span-8 h-64 sm:h-72 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center w-full p-4">
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4">Charts</div>
            <div className="flex items-end justify-center h-40 sm:h-48 gap-2 sm:gap-4">
              <div className="h-1/4 w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="h-1/2 w-8 sm:w-12 bg-zinc-400 dark:bg-zinc-500"></div>
              <div className="h-3/4 w-8 sm:w-12 bg-[#61AAF2]"></div>
              <div className="h-full w-8 sm:w-12 bg-[#EBDBBC]"></div>
              <div className="h-2/3 w-8 sm:w-12 bg-[#CC785C]"></div>
              <div className="h-1/3 w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-600"></div>
            </div>
          </div>
        </div>
        
        {/* Metrics box - spans full height of Charts + Graphs */}
        <div className="col-span-12 md:col-span-4 md:row-span-2 p-4 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
          <div className="h-full flex flex-col">
            <div className="mb-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Metrics</div>
            <div className="flex-grow space-y-3 sm:space-y-6">
              <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Herfindahl Index</div>
                <div className="text-sm sm:text-base font-medium">--</div>
              </div>
              <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">O*NET Skills</div>
                <div className="text-sm sm:text-base font-medium">--</div>
              </div>
              <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Top Occupation</div>
                <div className="text-sm sm:text-base font-medium">--</div>
              </div>
              <div className="p-2 sm:p-3 rounded bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">AI Impact</div>
                <div className="text-sm sm:text-base font-medium">--</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Graphs section - same height as Charts */}
        <div className="col-span-12 md:col-span-8 h-64 sm:h-72 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mt-3 sm:mt-0">
          <div className="text-center w-full p-4">
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4">Graphs</div>
            <div className="relative w-40 sm:w-48 h-36 sm:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-[#61AAF2] opacity-40"></div>
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 sm:border-4 border-[#EBDBBC] opacity-40"></div>
              <div className="absolute inset-4 sm:inset-8 rounded-full border-2 sm:border-4 border-[#CC785C] opacity-40"></div>
              <div className="absolute inset-6 sm:inset-12 rounded-full border-2 sm:border-4 border-zinc-300 dark:border-zinc-600 opacity-40"></div>
              <div className="absolute inset-8 sm:inset-16 rounded-full border-2 sm:border-4 border-zinc-400 dark:border-zinc-500 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}