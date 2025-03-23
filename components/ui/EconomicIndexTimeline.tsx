'use client'

import { useState } from 'react'

type Task = {
  title: string
  description?: string
}

type Milestone = {
  day: string
  date: string
  title: string
  tasks: Task[]
}

type EconomicIndexTimelineProps = {
  milestones: Milestone[]
  currentPhase: string
}

export function EconomicIndexTimeline({ milestones, currentPhase }: EconomicIndexTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0) // First milestone expanded by default
  
  const toggleExpanded = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }
  
  return (
    <div className="w-full mb-8">
      <h3 className="text-xl font-medium mb-6">Project Timeline</h3>
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Current Phase: <span className="font-medium text-[#61AAF2]">{currentPhase}</span></div>
      
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className={`border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden ${
              index === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50 dark:bg-zinc-800/50'
            }`}
          >
            {/* Milestone header */}
            <div 
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpanded(index)}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline indicator */}
                <div className={`flex flex-col items-center`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-[#61AAF2]' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}>
                    <span className="text-xs font-medium text-white">{index + 1}</span>
                  </div>
                  
                  {/* Connecting line to next milestone */}
                  {index < milestones.length - 1 && (
                    <div className="w-px h-10 bg-zinc-300 dark:bg-zinc-700 mt-1"></div>
                  )}
                </div>
                
                {/* Milestone details */}
                <div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {milestone.day} • {milestone.date}
                  </div>
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {milestone.title}
                  </h4>
                </div>
              </div>
              
              {/* Expand/collapse indicator */}
              <div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </div>
            
            {/* Tasks (collapsible) */}
            {expandedIndex === index && (
              <div className="px-4 pb-4 pt-1 border-t border-zinc-200 dark:border-zinc-700">
                <div className="pl-10 space-y-3">
                  {milestone.tasks.map((task, taskIndex) => (
                    <div 
                      key={taskIndex}
                      className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg"
                    >
                      <div className="font-medium mb-1">{task.title}</div>
                      {task.description && (
                        <div className="text-sm text-zinc-700 dark:text-zinc-300">
                          {task.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}