'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

type QuadrantPosition = 'upperLeft' | 'upperRight' | 'lowerLeft' | 'lowerRight'

type QuadrantData = {
  position: QuadrantPosition
  title: string
  description: string
  selected: boolean
}

type DecisionMatrixProps = {
  title: string
  xAxis: string
  yAxis: string
  quadrants: QuadrantData[]
}

export function DecisionMatrix({ title, xAxis, yAxis, quadrants }: DecisionMatrixProps) {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<QuadrantPosition | null>(null)
  
  // Find the selected quadrant
  const selectedQuadrant = quadrants.find(q => q.selected)
  
  return (
    <div className="w-full">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      {/* Axes labels - outside the matrix */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <span>{xAxis}</span>
          <div className="flex justify-center mt-1">
            <span className="text-xs">Low</span>
            <span className="flex-grow border-t border-dashed border-zinc-300 dark:border-zinc-600 mx-2 mt-2"></span>
            <span className="text-xs">High</span>
          </div>
        </div>
      </div>
      
      {/* Y-axis label */}
      <div className="flex">
        <div className="hidden md:block">
          <div className="flex flex-col items-center mr-3 mt-12">
            <div className="transform -rotate-90 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
              {yAxis}
            </div>
            <div className="h-20 flex flex-col items-center mt-2">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">High</span>
              <div className="h-full border-l border-dashed border-zinc-300 dark:border-zinc-600 my-2"></div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Low</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Y-axis label - shown only on small screens */}
        <div className="md:hidden mb-2 text-center w-full">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{yAxis}</div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <span className="text-xs">High</span>
              <div className="h-4 border-l border-dashed border-zinc-300 dark:border-zinc-600 my-1"></div>
              <span className="text-xs">Low</span>
            </div>
          </div>
        </div>
        
        {/* Matrix Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-3 border-0">
            {/* Upper row */}
            <div className="row-span-1 col-span-1">
              <div 
                className={`h-full p-3 md:p-4 border rounded-md relative transition-all duration-200 ${
                  quadrants[0].selected 
                    ? 'border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 shadow-md' 
                    : hoveredQuadrant === 'upperLeft'
                      ? 'border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-800/50'
                      : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900'
                }`}
                onMouseEnter={() => setHoveredQuadrant('upperLeft')}
                onMouseLeave={() => setHoveredQuadrant(null)}
              >
                {quadrants[0].selected && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#61AAF2] border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
                <h4 className="font-medium mb-1 text-sm md:text-base">{quadrants[0].title}</h4>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{quadrants[0].description}</p>
              </div>
            </div>
            
            <div className="row-span-1 col-span-1">
              <div 
                className={`h-full p-3 md:p-4 border rounded-md relative transition-all duration-200 ${
                  quadrants[1].selected 
                    ? 'border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 shadow-md' 
                    : hoveredQuadrant === 'upperRight'
                      ? 'border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-800/50'
                      : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900'
                }`}
                onMouseEnter={() => setHoveredQuadrant('upperRight')}
                onMouseLeave={() => setHoveredQuadrant(null)}
              >
                {quadrants[1].selected && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#61AAF2] border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
                <h4 className="font-medium mb-1 text-sm md:text-base">{quadrants[1].title}</h4>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{quadrants[1].description}</p>
              </div>
            </div>
            
            {/* Lower row */}
            <div className="row-span-1 col-span-1">
              <div 
                className={`h-full p-3 md:p-4 border rounded-md relative transition-all duration-200 ${
                  quadrants[2].selected 
                    ? 'border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 shadow-md' 
                    : hoveredQuadrant === 'lowerLeft'
                      ? 'border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-800/50'
                      : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900'
                }`}
                onMouseEnter={() => setHoveredQuadrant('lowerLeft')}
                onMouseLeave={() => setHoveredQuadrant(null)}
              >
                {quadrants[2].selected && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#61AAF2] border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
                <h4 className="font-medium mb-1 text-sm md:text-base">{quadrants[2].title}</h4>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{quadrants[2].description}</p>
              </div>
            </div>
            
            <div className="row-span-1 col-span-1">
              <div 
                className={`h-full p-3 md:p-4 border rounded-md relative transition-all duration-200 ${
                  quadrants[3].selected 
                    ? 'border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 shadow-md' 
                    : hoveredQuadrant === 'lowerRight'
                      ? 'border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-800/50'
                      : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900'
                }`}
                onMouseEnter={() => setHoveredQuadrant('lowerRight')}
                onMouseLeave={() => setHoveredQuadrant(null)}
              >
                {quadrants[3].selected && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#61AAF2] border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
                <h4 className="font-medium mb-1 text-sm md:text-base">{quadrants[3].title}</h4>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{quadrants[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Selected approach highlight - mobile friendly version */}
      {selectedQuadrant && (
        <div className="mt-4 p-3 border border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 rounded-md shadow-sm md:hidden">
          <div className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-[#61AAF2] flex items-center justify-center mr-2 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Selected Approach: {selectedQuadrant.title}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{selectedQuadrant.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}