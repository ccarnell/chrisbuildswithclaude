'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { DecisionMatrix } from './DecisionMatrix'
import { Spotlight } from './spotlight'

type StrategicPivotProps = {
  title: string
  rationale: string[]
  preservedElements: string
  ctaText: string
  ctaLink: string
  decisionMatrixData: {
    title: string
    xAxis: string
    yAxis: string
    quadrants: Array<{
      position: 'upperLeft' | 'upperRight' | 'lowerLeft' | 'lowerRight'
      title: string
      description: string
      selected: boolean
    }>
  }
}

export function StrategicPivotSection({
  title,
  rationale,
  preservedElements,
  ctaText,
  ctaLink,
  decisionMatrixData
}: StrategicPivotProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 mb-12">
        <Spotlight
          className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
          size={64}
        />
        <div className="relative h-full w-full rounded-[15px] bg-white p-4 md:p-6 dark:bg-zinc-950">
          <h2 className="text-2xl font-medium mb-6">{title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rationale Section */}
            <div>
              <h3 className="text-xl font-medium mb-4">Rationale</h3>
              <ul className="space-y-4 mb-6">
                {rationale.map((point, index) => (
                  <li key={index} className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span className="text-zinc-700 dark:text-zinc-300">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium mb-2">What's Preserved</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">{preservedElements}</p>
              
                <Link
                  href={ctaLink}
                  className="inline-flex items-center rounded-lg bg-[#61AAF2] px-4 py-2 text-sm font-medium text-white hover:bg-[#4090e0] transition-colors duration-200"
                >
                  {ctaText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Decision Matrix */}
            <div>
              <DecisionMatrix
                title={decisionMatrixData.title}
                xAxis={decisionMatrixData.xAxis}
                yAxis={decisionMatrixData.yAxis}
                quadrants={decisionMatrixData.quadrants}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}