'use client'

import { motion } from 'motion/react'

export function DashboardWireframe() {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2 sm:p-4 bg-white dark:bg-zinc-900">
      <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">-- Flourish embed placeholder --</h3>
      
      <div className="grid grid-cols-12 gap-2 sm:gap-4">
        {/* Top controls */}
        <div className="col-span-12 flex flex-wrap sm:flex-nowrap gap-2 mb-2">
          <div className="h-8 sm:h-10 w-20 sm:w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
          <div className="h-8 sm:h-10 w-20 sm:w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
          <div className="h-8 sm:h-10 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
        </div>
        
        {/* Map Area */}
        <div className="col-span-12 md:col-span-8 h-64 sm:h-80 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center p-2 sm:p-4">
            <div className="mb-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Geographic Map</div>
            <div className="flex justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-400 dark:bg-zinc-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-500 dark:bg-zinc-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#61AAF2]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#EBDBBC]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#CC785C]"></div>
            </div>
            
            <div className="relative mx-auto w-48 sm:w-64 h-32 sm:h-40 border border-zinc-300 dark:border-zinc-600">
              <div className="absolute top-1/4 left-1/4 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-[#61AAF2] opacity-70"></div>
              <div className="absolute top-1/3 left-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#EBDBBC] opacity-70"></div>
              <div className="absolute top-1/2 right-1/4 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#CC785C] opacity-70"></div>
              <div className="absolute bottom-1/4 left-1/3 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#61AAF2] opacity-50"></div>
            </div>
          </div>
        </div>
        
        {/* Right sidebar */}
        <div className="col-span-12 md:col-span-4 space-y-3 sm:space-y-4">
          {/* Filters */}
          <div className="p-2 sm:p-3 rounded border border-zinc-200 dark:border-zinc-700">
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Filters</div>
            <div className="space-y-1 sm:space-y-2">
              <div className="h-5 sm:h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
              <div className="h-5 sm:h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
              <div className="h-5 sm:h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="p-2 sm:p-3 rounded border border-zinc-200 dark:border-zinc-700">
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Metrics</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-1.5 sm:p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">Herfindahl Index</div>
                <div className="text-sm sm:text-base font-medium">Highly Concentrated</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">O*NET Skills</div>
                <div className="text-sm sm:text-base font-medium">Job Zone 4</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">Top Occupation</div>
                <div className="text-sm sm:text-base font-medium">Data Analysts</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">AI Impact</div>
                <div className="text-sm sm:text-base font-medium">High (82%)</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom charts - Stack on mobile */}
        <div className="col-span-12 sm:col-span-6 h-40 sm:h-48 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-2">Charts</div>
            <div className="flex items-end justify-center h-20 sm:h-24 gap-1 sm:gap-2">
              <div className="h-1/4 w-4 sm:w-6 bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="h-1/2 w-4 sm:w-6 bg-zinc-400 dark:bg-zinc-500"></div>
              <div className="h-3/4 w-4 sm:w-6 bg-[#61AAF2]"></div>
              <div className="h-full w-4 sm:w-6 bg-[#EBDBBC]"></div>
              <div className="h-2/3 w-4 sm:w-6 bg-[#CC785C]"></div>
              <div className="h-1/3 w-4 sm:w-6 bg-zinc-300 dark:bg-zinc-600"></div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 sm:col-span-6 h-40 sm:h-48 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-2">Graphs</div>
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-[#61AAF2] opacity-40"></div>
              <div className="absolute inset-2 rounded-full border-2 sm:border-4 border-[#EBDBBC] opacity-40"></div>
              <div className="absolute inset-4 rounded-full border-2 sm:border-4 border-[#CC785C] opacity-40"></div>
              <div className="absolute inset-6 rounded-full border-2 sm:border-4 border-zinc-300 dark:border-zinc-600 opacity-40"></div>
              <div className="absolute inset-8 rounded-full border-2 sm:border-4 border-zinc-400 dark:border-zinc-500 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}