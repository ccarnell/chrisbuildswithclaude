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
  
  // Handle loading the Datawrapper script when the component is mounted
  useEffect(() => {
    // For the visualization
    const script = document.createElement('script')
    script.src = 'https://datawrapper.dwcdn.net/aD2yT/embed.js'
    script.async = true
    script.defer = true
    script.charset = 'utf-8'
    
    const targetEl = document.getElementById('datawrapper-vis-aD2yT')
    if (targetEl) {
      targetEl.innerHTML = ''; // Clear previous content
      targetEl.appendChild(script)
    }
    
    return () => {
      if (targetEl && script.parentNode) {
        script.parentNode.removeChild(script)
      }
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
      
      {/* Datawrapper embed - single visualization */}
      <div className="mb-6">
        <div className="overflow-hidden rounded-md">
          <div style={{minHeight: "416px"}} id="datawrapper-vis-aD2yT">
            <noscript><img src="https://datawrapper.dwcdn.net/aD2yT/full.png" alt="Weighted Economic Index by MSA" /></noscript>
          </div>
        </div>
      </div>
      
      {/* Formula explanation */}
      <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="mb-2">Weighted Economic Index by MSA calculation: Economic_MSA_Score = Σ (Employment_i / Total_MSA_Employment) × Economic_Index_i</p>
        {/* <p className="mb-2">Log10 Economic Index by MSA calculation: Log10_Economic_MSA_Score = log10(Economic_MSA_Score)</p> */}
        <p className="font-bold italic">DISCLAIMER: THESE VISUALIZATION ARE SPECIFICALLY FOR DEMONSTRATION PURPOSES ONLY. THE UNDERLYING DATA IS PRELIMINARY, HAS BEEN USER-MODEFIED, AND WILL NOT REFLECT FINAL RESULTS.</p>
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