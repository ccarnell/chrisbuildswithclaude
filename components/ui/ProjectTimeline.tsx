'use client'

import { useState } from 'react'

// Define unified task type that covers both timelines
type Task = {
  id?: string
  title: string
  description?: string
}

// Define unified milestone type that covers both timelines
type Milestone = {
  day: string | number
  date?: string
  title: string
  subtitle?: string
  status?: 'Complete' | 'WIP' | 'Backlog' | string
  tasks: Task[]
}

type ProjectTimelineProps = {
  milestones: Milestone[]
  currentPhase?: string
  title?: string
  defaultOpenIndex?: number
}

export function ProjectTimeline({ milestones, currentPhase, title = "Project Timeline", defaultOpenIndex = 0 }: ProjectTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(defaultOpenIndex) // Use the provided default index
  
  const toggleExpanded = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }
  
  // Get status color for a milestone
  const getStatusColor = (milestone: Milestone, index: number) => {
    // If the milestone has a status property, use it
    if (milestone.status) {
      const status = String(milestone.status).toLowerCase()
      
      if (status.includes('complete')) {
        return 'bg-[#61AAF2]' // Blue for completed
      } else if (status.includes('wip')) {
        return 'bg-[#EBDBBC]' // Tan for in progress
      } else if (status.includes('backlog')) {
        return 'bg-[#CC785C]' // Orange for not started
      }
    }
    
    // Otherwise, use the index-based approach from EconomicIndexTimeline
    return index === 0 ? 'bg-[#61AAF2]' : 'bg-zinc-300 dark:bg-zinc-700'
  }
  
  // Get the display number for the milestone circle
  const getMilestoneNumber = (milestone: Milestone, index: number) => {
    // If day is a number, use it
    if (typeof milestone.day === 'number') {
      return milestone.day
    }
    
    // Otherwise use the index + 1
    return index + 1
  }
  
  // Check if we should highlight a milestone based on status or index
  const shouldHighlightMilestone = (milestone: Milestone, index: number) => {
    if (milestone.status) {
      const status = String(milestone.status).toLowerCase()
      return status.includes('complete') || status.includes('wip')
    }
    
    return index === 0
  }
  
  // Check if milestone is interactive (can be expanded/collapsed)
  const isInteractive = (milestone: Milestone) => {
    if (milestone.status) {
      const status = String(milestone.status).toLowerCase()
      return status.includes('complete') || status.includes('wip')
    }
    return true
  }
  
  // Get interactive message for screen readers
  const getInteractiveMessage = (milestone: Milestone) => {
    if (isInteractive(milestone)) {
      return 'Click to expand milestone details'
    }
    return 'Milestone not yet active'
  }
  
  // Find the current phase if not provided
  const getCurrentPhase = () => {
    if (currentPhase) return currentPhase
    
    // Try to find a 'WIP' milestone
    const inProgressMilestone = milestones.find(m => {
      if (!m.status) return false
      return String(m.status).toLowerCase().includes('wip')
    })
    if (inProgressMilestone) return inProgressMilestone.title
    
    // Default to the first milestone
    return milestones[0]?.title || ''
  }
  
  return (
    <div className="w-full mb-8">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Current Phase: <span className="font-medium text-[#61AAF2] dark:text-[#61AAF2]">Validation Framework and Final Documentation</span> <span className="text-amber-500 dark:text-amber-400 text-xs font-medium ml-1">(Intentionally Incomplete)</span>
      </div>
      
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className={`border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden ${
              shouldHighlightMilestone(milestone, index) 
                ? 'bg-white dark:bg-zinc-900' 
                : 'bg-zinc-50 dark:bg-zinc-800/50'
            } ${!isInteractive(milestone) ? 'opacity-70' : ''}`}
          >
            {/* Milestone header */}
            <div 
              className={`p-4 flex items-center justify-between ${isInteractive(milestone) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={() => isInteractive(milestone) ? toggleExpanded(index) : null}
              role="button"
              aria-expanded={expandedIndex === index}
              aria-label={`${milestone.title} - ${getInteractiveMessage(milestone)}`}
              tabIndex={isInteractive(milestone) ? 0 : -1}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${getStatusColor(milestone, index)}`}>
                    <span className="text-xs font-medium text-white">{getMilestoneNumber(milestone, index)}</span>
                  </div>
                  
                  {/* Connecting line to next milestone */}
                  {index < milestones.length - 1 && (
                    <div className="w-px h-10 bg-zinc-300 dark:bg-zinc-700 mt-1"></div>
                  )}
                </div>
                
                {/* Milestone details */}
                <div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {typeof milestone.day === 'number' ? `Day ${milestone.day}` : milestone.day} 
                    {milestone.date && ` • ${milestone.date}`}
                  </div>
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {milestone.title}
                    {index === 2 && <span className="text-amber-500 dark:text-amber-400 text-xs font-bold ml-2">(Intentionally Incomplete)</span>}
                  </h4>
                  {milestone.subtitle && (
                    <p className="text-xs italic text-zinc-500 dark:text-zinc-400 mt-1">
                      {milestone.subtitle}
                    </p>
                  )}
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
                      key={task.id || taskIndex}
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