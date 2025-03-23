'use client'

import { motion } from 'motion/react'

export function DashboardWireframe() {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900">
      <h3 className="text-xl font-medium mb-4">-- Flourish embed placeholder --</h3>
      
      <div className="grid grid-cols-12 gap-4">
        {/* Top controls */}
        <div className="col-span-12 flex gap-2 mb-2">
          <div className="h-10 w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
          <div className="h-10 w-24 rounded bg-zinc-100 dark:bg-zinc-800"></div>
          <div className="h-10 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
        </div>
        
        {/* Map Area */}
        <div className="col-span-12 md:col-span-8 h-80 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">Geographic Map</div>
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-500"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-500 dark:bg-zinc-400"></div>
              <div className="w-3 h-3 rounded-full bg-[#61AAF2]"></div>
              <div className="w-3 h-3 rounded-full bg-[#EBDBBC]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CC785C]"></div>
            </div>
            
            <div className="relative mx-auto w-64 h-40 border border-zinc-300 dark:border-zinc-600">
              <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-[#61AAF2] opacity-70"></div>
              <div className="absolute top-1/3 left-1/2 w-10 h-10 rounded-full bg-[#EBDBBC] opacity-70"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-[#CC785C] opacity-70"></div>
              <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-[#61AAF2] opacity-50"></div>
            </div>
          </div>
        </div>
        
        {/* Right sidebar */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          {/* Filters */}
          <div className="p-3 rounded border border-zinc-200 dark:border-zinc-700">
            <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">Filters</div>
            <div className="space-y-2">
              <div className="h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
              <div className="h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
              <div className="h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800"></div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="p-3 rounded border border-zinc-200 dark:border-zinc-700">
            <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">Metrics</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Herfindahl–Hirschman Index</div>
                <div className="font-medium">Highly Concentrated</div>
              </div>
              <div className="p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">O*NET Skills</div>
                <div className="font-medium">Job Zone 4</div>
              </div>
              <div className="p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Top Occupation</div>
                <div className="font-medium">Data Analysts</div>
              </div>
              <div className="p-2 rounded bg-zinc-50 dark:bg-zinc-800">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">AI Impact</div>
                <div className="font-medium">High (82%)</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom charts */}
        <div className="col-span-6 h-48 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Charts</div>
            <div className="flex items-end justify-center h-24 gap-2">
              <div className="h-1/4 w-6 bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="h-1/2 w-6 bg-zinc-400 dark:bg-zinc-500"></div>
              <div className="h-3/4 w-6 bg-[#61AAF2]"></div>
              <div className="h-full w-6 bg-[#EBDBBC]"></div>
              <div className="h-2/3 w-6 bg-[#CC785C]"></div>
              <div className="h-1/3 w-6 bg-zinc-300 dark:bg-zinc-600"></div>
            </div>
          </div>
        </div>
        
        <div className="col-span-6 h-48 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Graphs</div>
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-[#61AAF2] opacity-40"></div>
              <div className="absolute inset-2 rounded-full border-4 border-[#EBDBBC] opacity-40"></div>
              <div className="absolute inset-4 rounded-full border-4 border-[#CC785C] opacity-40"></div>
              <div className="absolute inset-6 rounded-full border-4 border-zinc-300 dark:border-zinc-600 opacity-40"></div>
              <div className="absolute inset-8 rounded-full border-4 border-zinc-400 dark:border-zinc-500 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}