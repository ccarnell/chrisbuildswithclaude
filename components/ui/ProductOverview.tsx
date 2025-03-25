'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'

// Type definition for product overview content
export interface ProductOverviewProps {
  title: string
  purpose: string
  target: string
  keyObjectives: string[]
  methodologies: string[]
  collaborators: string
  tripwire: string
  bookend: {
    adverse: string
    success: string
  }
  isDimmed?: boolean // For indicating completed/historical projects
  successColorOverride?: boolean // Controls if success bookend is green (default true)
}

// Format text with commas, handling line wrapping
function FormattedText({ text }: { text: string }) {
  // Split text by the pipe character
  const segments = text.split('|').map(segment => segment.trim())
  
  return (
    <span className="break-words hyphens-auto">
      {segments.map((segment, index) => (
        <span key={index} className="inline-block">
          {segment}
          {index < segments.length - 1 && (
            <span className="inline-block mr-1">,</span>
          )}
        </span>
      ))}
    </span>
  )
}

export function ProductOverview({
  title,
  purpose,
  target,
  keyObjectives,
  methodologies,
  collaborators,
  tripwire,
  bookend,
  isDimmed = false,
  successColorOverride = true
}: ProductOverviewProps) {
  // Base text color classes based on isDimmed
  const textBaseClass = isDimmed 
    ? "text-zinc-700 dark:text-zinc-300" 
    : "text-zinc-900 dark:text-zinc-100"
  
  // Content text classes - both states currently use the same style
  // but having separate variables allows for future customization
  const textContentClass = "text-zinc-700 dark:text-zinc-300"
  
  // Base background class based on isDimmed
  const bgClass = isDimmed 
    ? "bg-white/80 dark:bg-zinc-950/80 opacity-75" 
    : "bg-white dark:bg-zinc-950"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
    >
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div 
        className={`relative h-full w-full rounded-[15px] ${bgClass} p-4 md:p-6`}
        role="region"
        aria-label="Product Overview"
      >
        <h2 className={`text-2xl font-medium mb-6 ${textBaseClass}`}>Product Overview</h2>
        
        {/* Three-column layout for better space usage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Project details in first column */}
          <div className="lg:col-span-1">
            <dl className="space-y-4">
              <div>
                <dt className={`font-medium ${textBaseClass}`}>Project Title</dt>
                <dd className={textContentClass}>{title}</dd>
              </div>
              <div>
                <dt className={`font-medium ${textBaseClass}`}>Purpose</dt>
                <dd className={textContentClass}>{purpose}</dd>
              </div>
              <div>
                <dt className={`font-medium ${textBaseClass}`}>Target</dt>
                <dd className={textContentClass}>
                  <FormattedText text={target} />
                </dd>
              </div>
            </dl>
          </div>
          
          {/* Objectives column */}
          <div className="lg:col-span-1">
            <h3 className={`text-lg font-medium mb-4 ${textBaseClass}`}>Key Objectives</h3>
            <ul className="space-y-1.5 text-zinc-700 dark:text-zinc-300" aria-label="Key Objectives">
              {keyObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2" aria-hidden="true"></span>
                  <span className={textContentClass}>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
            
          {/* Methodology column */}
          <div className="lg:col-span-1">
            <h3 className={`text-lg font-medium mb-4 ${textBaseClass}`}>Tools & Methodologies</h3>
            <ul className="space-y-1.5 text-zinc-700 dark:text-zinc-300" aria-label="Tools and Methodologies">
              {methodologies.map((methodology, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2" aria-hidden="true"></span>
                  <span className={textContentClass}>{methodology}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Additional details that expand full width */}
          <div className="lg:col-span-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-4">
            <dl className="space-y-4">
              <div>
                <dt className={`font-medium ${textBaseClass}`}>Collaborators</dt>
                <dd className={textContentClass}>
                  <FormattedText text={collaborators} />
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className={`font-medium ${textBaseClass}`}>Tripwire</dt>
                  <dd className={textContentClass}>{tripwire}</dd>
                </div>
                <div>
                  <dt className={`font-medium ${textBaseClass}`}>Bookend</dt>
                  <dd className={textContentClass}>
                    <span>Adverse: {bookend.adverse}</span><br />
                    <span className={successColorOverride ? "text-green-600 dark:text-green-400 font-medium" : textContentClass}>Success: {bookend.success}</span>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  )
}