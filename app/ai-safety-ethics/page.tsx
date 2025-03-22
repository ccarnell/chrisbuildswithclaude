'use client'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'

// Define animation variants for sections
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

// Timeline component types
type Task = {
  id: string
  title: string
  description: string
}

type Milestone = {
  day: number
  title: string
  status: 'completed' | 'in-progress' | 'not-started'
  tasks: Task[]
}

type VerticalTimelineProps = {
  startDate: Date
  milestones: Milestone[]
}

// Vertical Timeline component to visualize the 14-day plan
function VerticalTimeline({ startDate, milestones }: VerticalTimelineProps) {
  const today = new Date()
  
  // Calculate what day of the project we're on (1-indexed)
  const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  // Find the current milestone (or default to WIP milestone)
  const currentMilestoneIndex = Math.max(
    0,
    milestones.findIndex(m => m.day >= daysSinceStart) - 1
  )
  
  // Find the "in-progress" milestone index or default to the current one
  const findInProgressIndex = () => {
    const wipIndex = milestones.findIndex(m => m.status === 'in-progress')
    return wipIndex >= 0 ? wipIndex : (currentMilestoneIndex >= 0 ? currentMilestoneIndex : 0)
  }
  
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(findInProgressIndex)
  
  // For desktop hover functionality
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  
  // Format day display 
  const formatDayDisplay = (day: number): string => {
    return `Day ${day}`
  }
  
  // Get date for a specific day
  const getDateForDay = (day: number): string => {
    const date = new Date(startDate)
    // Using a lookup to match specific days to specific dates
    if (day === 1) { // Day 1 is Mar 21
      date.setFullYear(2025, 2, 21) // Month is 0-indexed, so 2 = March
    } else if (day === 3) { // Day 3 is Mar 22
      date.setFullYear(2025, 2, 22)
    } else if (day === 4) { // Day 4 is Mar 24
      date.setFullYear(2025, 2, 24)
    } else if (day === 6) { // Day 6 is Mar 26
      date.setFullYear(2025, 2, 26)
    } else if (day === 8) { // Day 8 is Mar 27
      date.setFullYear(2025, 2, 27)
    } else {
      date.setDate(startDate.getDate() + day - 1)
    }
    return formatDate(date)
  }
  
  const getStatusColor = (status: Milestone['status']) => {
    switch(status) {
      case 'completed':
        return 'bg-[#61AAF2] dark:bg-[#61AAF2]' // Blue for completed
      case 'in-progress':
        return 'bg-[#EBDBBC] dark:bg-[#EBDBBC]' // Tan for in progress
      case 'not-started':
        return 'bg-[#CC785C] dark:bg-[#CC785C]' // Orange for not started
    }
  }
  
  // Determine which index to show (hover takes precedence on desktop)
  // For WIP milestone, we only allow interaction with completed or in-progress milestones
  const isInteractive = (index: number) => {
    const status = milestones[index]?.status
    return status === 'completed' || status === 'in-progress'
  }
  
  const activeIndex = hoveredIndex !== null && isInteractive(hoveredIndex) 
    ? hoveredIndex 
    : isInteractive(selectedMilestoneIndex) ? selectedMilestoneIndex : findInProgressIndex()

  return (
    <div className="mb-10 w-full">
      {/* Desktop layout - two separate sections */}
      <div className="hidden lg:block space-y-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Timeline sidebar - standalone */}
          <div className="col-span-4">
            <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                onClick={() => isInteractive(index) ? setSelectedMilestoneIndex(index) : null}
                onMouseEnter={() => isInteractive(index) ? setHoveredIndex(index) : null}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative mb-0 p-4 rounded-none ${isInteractive(index) ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'} transition-colors duration-200 bg-white dark:bg-zinc-900 shadow-sm ${
                  index === activeIndex 
                    ? 'ring-2 ring-zinc-200 dark:ring-zinc-700' 
                    : ''
                }`}
              >
                <div className="flex items-start">
                  {/* Date & milestone circle */}
                  <div 
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${
                      index === activeIndex 
                        ? 'ring-2 ring-white dark:ring-zinc-900'
                        : ''
                    } ${getStatusColor(milestone.status)}`}
                  >
                    <span className="text-xs font-medium text-white">{milestone.day}</span>
                  </div>
                  
                  {/* Milestone details */}
                  <div className="ml-4">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {formatDayDisplay(milestone.day)} • {getDateForDay(milestone.day)}
                    </p>
                    <h4 className={`text-lg font-medium ${
                      index === activeIndex ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'
                    }`}>
                      {milestone.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* Tasks (desktop) - standalone */}
          <div className="col-span-8">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-6">
              
              {/* Tasks list */}
              <div className="grid grid-cols-1 gap-4">
                {/* Ensure we have valid tasks to display */}
                {activeIndex >= 0 && milestones[activeIndex]?.tasks?.map((task) => (
                  <div 
                    key={task.id}
                    className="flex flex-col h-full p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                  >
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {task.title}
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-300 mt-2 text-base flex-grow">
                      {task.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile layout (accordion style) */}
      <div className="lg:hidden space-y-6">
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} 
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm"
              id={`milestone-${index}`}
            >
              {/* Milestone heading (clickable) */}
              <div 
                className={`py-4 px-4 ${isInteractive(index) ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'} ${
                  index === selectedMilestoneIndex ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800/50'
                }`}
                onClick={() => isInteractive(index) ? setSelectedMilestoneIndex(prevIndex => prevIndex === index ? -1 : index) : null}
              >
                <div className="flex items-start">
                  {/* Date & milestone circle */}
                  <div 
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      index === selectedMilestoneIndex 
                        ? 'ring-2 ring-white dark:ring-zinc-900' 
                        : ''
                    } ${getStatusColor(milestone.status)}`}
                  >
                    <span className="text-xs font-medium text-white">{milestone.day}</span>
                  </div>
                  
                  {/* Milestone details */}
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {formatDayDisplay(milestone.day)} • {getDateForDay(milestone.day)}
                    </p>
                    <h4 className={`text-lg font-medium ${
                      index === selectedMilestoneIndex ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'
                    }`}>
                      {milestone.title}
                    </h4>
                  </div>
                  
                  {/* Expand/collapse indicator */}
                  <div className="ml-2 self-center">
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
                      className={`transition-transform duration-200 ${index === selectedMilestoneIndex ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Tasks (collapsible) */}
              {index === selectedMilestoneIndex && milestone.tasks && (
                <div className="bg-white dark:bg-zinc-900 p-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="grid grid-cols-1 gap-4">
                    {milestone.tasks.map((task) => (
                      <div 
                        key={task.id}
                        className="flex flex-col h-full p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                      >
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                          {task.title}
                        </h4>
                        <p className="text-zinc-700 dark:text-zinc-300 mt-2 text-base flex-grow">
                          {task.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
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

export default function AiSafetyEthics() {
  // State for scrolling to top
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Check scroll position to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  // Set the start date to today for the timeline component
  const today = new Date()
  const startDate = new Date(today)
  
  // Define our milestones with tasks
  const milestones: Milestone[] = [
    { 
      day: 1, // Day 1
      title: 'Project Setup', 
      status: 'completed',
      tasks: [
        {
          id: 'task1-1',
          title: 'Framework 1',
          description: 'Setup tracking and visualization tool in Next.js project for transparency.'
        },
        {
          id: 'task1-2',
          title: 'Planning 1',
          description: 'Finalize Project overview, key objectives, methodologies, collaborators, Tripwire, and Bookend.'
        },
        {
          id: 'task1-3',
          title: 'Framework 2',
          description: 'Deploy initial Product Overview to website.'
        },
        {
          id: 'task1-5',
          title: 'Planning 2',
          description: 'Create Project Timeline component, Milestones, and Tasks.'
        },
        {
          id: 'task1-6',
          title: 'Operations 1',
          description: 'Create project processes and workflows.'
        },
        {
          id: 'task1-7',
          title: 'Planning 3',
          description: 'Define tripwires and bookends for triggering events.'
        },
        {
          id: 'task1-8',
          title: 'Planning 3',
          description: 'Set reflection methodology.'
        }
      ]
    },
    { 
      day: 3, 
      title: 'Discovery & Research', 
      status: 'in-progress',
      tasks: [
        {
          id: 'task2-1',
          title: 'Research 1',
          description: 'Review AI safety and ethical traits critical to Anthropic.'
        },
        {
          id: 'task2-2',
          title: 'Research 2',
          description: 'Research current societal dimensions and governance approaches.'
        },
        {
          id: 'task2-3',
          title: 'Evaluate 1',
          description: 'Document key principles from major, reputable and authoritative organizations.'
        },
        {
          id: 'task2-4',
          title: 'Evaluate 2',
          description: 'Conduct discussions with researching, policy, and engineering teams.'
        },
        {
          id: 'task2-5',
          title: 'Operations 1',
          description: 'Create documentation templates for reporting.'
        },
        {
          id: 'task2-6',
          title: 'Operations 2',
          description: 'Establish progress tracking and visibility.'
        },
        {
          id: 'task2-7',
          title: 'Operations 3',
          description: 'Set communication channels and schedules.'
        },
        {
          id: 'task2-8',
          title: 'Operations 4',
          description: 'Define escalation procedures for challenges.'
        }
      ]
    },
    { 
      day: 4, // Day 4
      title: 'Business Modeling & Problem/Solution Fit', 
      status: 'not-started',
      tasks: [
        {
          id: 'task3-1',
          title: 'Synthesize 1',
          description: 'Analyze customer segments with archetypes.'
        },
        {
          id: 'task3-2',
          title: 'Synthesize 2',
          description: 'Analyze customer hiring, firing, and tradeoff criteria.'
        },
        {
          id: 'task3-3',
          title: 'Modeling 1',
          description: 'Sketch lean canvas.'
        },
        {
          id: 'task3-4',
          title: 'Modeling 2',
          description: 'Run fermi estimates for revenue models.'
        },
        {
          id: 'task3-5',
          title: 'Modeling 3',
          description: 'Identify potential business model innovations.'
        }
      ]
    },
    { 
      day: 6, // Day 6
      title: 'Rapid Prototype', 
      status: 'not-started',
      tasks: [
        {
          id: 'task4-1',
          title: 'Solution Design 1',
          description: 'After determining best problem/customer - flesh out user story board and journey map.'
        },
        {
          id: 'task4-2',
          title: 'Customer Development 1',
          description: 'Validate flows with potential early adopters - make adjustments as necessary.'
        },
        {
          id: 'task4-3',
          title: 'Customer Development 2',
          description: 'Task groom and narrow in on minimum desireable viable feasiable product. Move all other cards to below v0.1.'
        },
        {
          id: 'task4-4',
          title: 'Solution Design 2',
          description: 'Gather feedback from engineering, research, and policy teams.'
        },
        {
          id: 'task4-5',
          title: 'Solution Design 3',
          description: 'Determine tools necessary for MDVFP.'
        },
        {
          id: 'task4-6',
          title: 'Solution Design 4',
          description: 'Build prototype v0.1.'
        },
      ]
    },
    { 
      day: 8, 
      title: 'Solution/Customer & Product/Market Fit', 
      status: 'not-started',
      tasks: [
        {
          id: 'task5-1',
          title: 'Go-to-market 1',
          description: 'Work with GTM to determine resource capacity.'
        },
        {
          id: 'task5-2',
          title: 'Go-to-market 2',
          description: 'Develop initial testing plan and required feedback.'
        },
        {
          id: 'task5-3',
          title: 'Go-to-market 3',
          description: 'Determine pass/go, successful/failure, and/or tripwire/bookend for trial.'
        },
        {
          id: 'task5-4',
          title: 'Operations 1',
          description: 'Complete self-assessments and peer reviews with Effectiveness Scale.'
        },
        {
          id: 'task5-5',
          title: 'Operations 2',
          description: 'Begin reflection with evaluating what went well and areas for improvement.'
        },
        {
          id: 'task5-6',
          title: 'Operations 3',
          description: 'Evaluate assessments and review and create plan of action to update Standard Operating Procedures.'
        },
      ]
    },
      ]

  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Safety & Ethics</h1>
        <p className="text-lg md:text-xl text-zinc-700 text-decoration: dark:text-zinc-300 max-w-3xl mx-auto">
        An 8-day journey to prototype for AI safety engineering, applications, and governance
        </p>
      </motion.section>
      
      {/* Product Overview Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-white p-4 md:p-6 dark:bg-zinc-950">
            <h2 className="text-2xl font-medium mb-6">Product Overview</h2>
            
            {/* Three-column layout for better space usage */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Project details in first column */}
              <div className="lg:col-span-1">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Project Title</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">AI Safety & Ethics Prospectus</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Purpose</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">Review and solve for AI safety and ethics applications</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Target</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      <FormattedText text="AI developers | Organizational leaders | Policymakers" />
                    </dd>
                  </div>
                </dl>
              </div>
              
              {/* Objectives column */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium mb-4">Key Objectives</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Research AI safety and ethics' foundations and governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Explore dev, org leadership, and policymaker domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Conduct Customer Discovery and competitive analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Calculate TAM, SAM, SOM and identify early adopters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Identify, quantify, design, and build MDVFP</span>
                  </li>
                </ul>
              </div>
                
              {/* Methodology column */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-medium mb-4">Methodologies</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Customer Development with Lean Canvas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Fermi estimates for revenue modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Ten Types of Innovation Frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>User Stories and Journey Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                    <span>Kanban for workflow management</span>
                  </li>
                </ul>
              </div>
              
              {/* Additional details that expand full width */}
              <div className="lg:col-span-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-4">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Collaborators</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      <FormattedText text="Research (Anthropic whitepapers + Deep Research) | Policy (policymaking.ai) | Engineering (Claude Code) | UI/UX (Claude) | Communications (Claude) | Strategic Product Manager (Chris Carnell)" />
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <dt className="font-medium text-zinc-900 dark:text-zinc-100">Tripwire</dt>
                      <dd className="text-zinc-700 dark:text-zinc-300">If 2 days pass without completing A-priority task; signals potential timeline/scope issues requiring immediate communications and reassessment to either break problems down further or consider the depth and breadth of our continued work</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-zinc-900 dark:text-zinc-100">Bookend</dt>
                      <dd className="text-zinc-700 dark:text-zinc-300">Adverse: Inconclusive findings require transparency and open questions for areas needing further research.<br />Success: Identification of a problem worth developing a lean canvans, business modeling, fermi estimate for feasibility</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Timeline Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="text-2xl font-medium mb-6">Project Timeline</h2>
        <VerticalTimeline startDate={startDate} milestones={milestones} />
      </motion.section>
      
      {/* Navigation Links */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex justify-between items-center"
      >
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200 flex items-center"
        >
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
            className="mr-1"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </Link>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200 flex items-center"
        >
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
            className="mr-1"
          >
            <path d="M12 19V5"></path>
            <path d="M5 12l7-7 7 7"></path>
          </svg>
          Back to Top
        </button>
      </motion.section>
      
      {/* Floating Back to Top button (only shows when scrolled down) */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full shadow-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
            aria-label="Back to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-zinc-600 dark:text-zinc-400"
            >
              <path d="M12 19V5"></path>
              <path d="M5 12l7-7 7 7"></path>
            </svg>
          </button>
        </motion.div>
      )}
    </motion.main>
  )
}