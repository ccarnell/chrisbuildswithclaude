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
  
  // Find the current milestone (or default to first milestone if before start date)
  const currentMilestoneIndex = Math.max(
    0,
    milestones.findIndex(m => m.day >= daysSinceStart) - 1
  )
  
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(
    currentMilestoneIndex >= 0 ? currentMilestoneIndex : 0
  )
  
  // For desktop hover functionality
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  
  // Get date for a specific day
  const getDateForDay = (day: number): string => {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + day - 1)
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
  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedMilestoneIndex

  return (
    <div className="mb-10 w-full">
      {/* Desktop layout - two separate sections */}
      <div className="hidden lg:block space-y-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Timeline sidebar - standalone */}
          <div className="col-span-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                onClick={() => index === 0 ? setSelectedMilestoneIndex(index) : null}
                // Comment out hover functionality to hide tasks
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
                className={`relative mb-3 p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                  index === activeIndex 
                    ? 'bg-white dark:bg-zinc-900 shadow-sm' 
                    : 'bg-zinc-100 dark:bg-zinc-800/50'
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
                      Day {milestone.day} • {getDateForDay(milestone.day)}
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
          
          {/* Tasks (desktop) - standalone */}
          <div className="col-span-8">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-6">
                {/* Tasks header removed as requested */}
              <div className="space-y-4">
                {/* Ensure we have valid tasks to display */}
                {activeIndex >= 0 && milestones[activeIndex]?.tasks?.map((task) => (
                  <div 
                    key={task.id}
                    className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                  >
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {task.title}
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-300 mt-2 text-sm">
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
                className={`py-4 px-4 cursor-pointer ${
                  index === selectedMilestoneIndex ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800/50'
                }`}
                onClick={() => index === 0 ? setSelectedMilestoneIndex(prevIndex => prevIndex === index ? -1 : index) : null}
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
                      Day {milestone.day} • {getDateForDay(milestone.day)}
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
                  <div className="space-y-4">
                    {milestone.tasks.map((task) => (
                      <div 
                        key={task.id}
                        className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                      >
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                          {task.title}
                        </h4>
                        <p className="text-zinc-700 dark:text-zinc-300 mt-2 text-sm">
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

      {/* Project Management Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-16"
      >
        <h2 className="text-2xl font-medium mb-6">Project Management</h2>
        <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
          <div className="flex flex-col items-center space-y-4">
            {/* Retro GIFs stacked vertically */}
           {/* <img 
              src="http://textfiles.com/underconstruction/HeartlandPrairie1139notusingconstructionbar.gif" 
              alt="Under Construction" 
              className="max-w-full h-auto"
            />
            <img 
              src="http://textfiles.com/underconstruction/HeHeartlandPark2601underconstructionbar9.gif" 
              alt="Under Construction" 
              className="max-w-full h-auto"
            />
            <img 
              src="http://textfiles.com/underconstruction/CaCapitolHill1114Under_Construction.gif" 
              alt="Under Construction" 
              className="max-w-full h-auto"
            />
            <img 
              src="http://textfiles.com/underconstruction/deafatlanticconstruct16.gif" 
              alt="Under Construction" 
              className="max-w-full h-auto"
            />
            */}
          </div>
        </div>
      </motion.section>
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
      day: 1, 
      title: 'Project Setup', 
      status: 'in-progress',
      tasks: [
        {
          id: 'task1-1',
          title: 'Structure 1',
          description: 'Setup tracking and visualization tool in Next.js project for transparency.'
        },
        {
          id: 'task1-2',
          title: 'Structure 2',
          description: 'Create Timeline component showing 14-day plan.'
        },
        {
          id: 'task1-3',
          title: 'Structure 3',
          description: 'Add very simple kanban board for task visualization.'
        },
        {
          id: 'task1-4',
          title: 'Structure 4',
          description: 'Deploy initial version to website.'
        },
        {
          id: 'task1-5',
          title: 'Scope 1',
          description: 'Define project scope, constraints, and success criteria.'
        },
        {
          id: 'task1-6',
          title: 'Scope 2',
          description: 'Establish tripwire(s) and bookend(s) triggers.'
        },
        {
          id: 'task1-7',
          title: 'Scope 3',
          description: 'Consensus on reflection time-period and methodology for end of project.'
        }
      ]
    },
    { 
      day: 3, 
      title: 'Define AI Safety Principles', 
      status: 'not-started',
      tasks: [
        {
          id: 'task2-1',
          title: 'Research existing AI safety frameworks',
          description: 'Compile and analyze prominent frameworks from academic and industry sources.'
        },
        {
          id: 'task2-2',
          title: 'Identify key theoretical concepts',
          description: 'Extract foundational principles that appear across multiple frameworks.'
        },
        {
          id: 'task2-3',
          title: 'Map intersection of safety and ethics concerns',
          description: 'Create visualization showing relationship between technical safety and ethical considerations.'
        },
        {
          id: 'task2-4',
          title: 'Draft working definitions',
          description: 'Develop clear, operational definitions for key terms and concepts.'
        },
        {
          id: 'task2-5',
          title: 'Identify measurement challenges',
          description: 'Document difficulties in quantifying and evaluating abstract safety concepts.'
        }
      ]
    },
    { 
      day: 5, 
      title: 'Map Effectiveness Scale', 
      status: 'not-started',
      tasks: [
        {
          id: 'task3-1',
          title: 'Define effectiveness criteria',
          description: 'Establish measurable indicators for evaluating AI safety measures.'
        },
        {
          id: 'task3-2',
          title: 'Create evaluation rubric',
          description: 'Develop scoring system and assessment methodology.'
        },
        {
          id: 'task3-3',
          title: 'Identify benchmark examples',
          description: 'Select representative cases demonstrating different effectiveness levels.'
        },
        {
          id: 'task3-4',
          title: 'Test scale with historical cases',
          description: 'Apply effectiveness scale to documented AI incidents and safety successes.'
        },
        {
          id: 'task3-5',
          title: 'Refine scale based on feedback',
          description: 'Incorporate stakeholder input to improve evaluation framework.'
        }
      ]
    },
    { 
      day: 8, 
      title: 'Case Studies Analysis', 
      status: 'not-started',
      tasks: [
        {
          id: 'task4-1',
          title: 'Identify representative case studies',
          description: 'Select diverse examples spanning different AI applications and safety challenges.'
        },
        {
          id: 'task4-2',
          title: 'Apply effectiveness scale to cases',
          description: 'Evaluate selected cases using the developed measurement framework.'
        },
        {
          id: 'task4-3',
          title: 'Document success patterns',
          description: 'Identify common elements in highly effective safety implementations.'
        },
        {
          id: 'task4-4',
          title: 'Analyze failure modes',
          description: 'Categorize and examine patterns in safety breakdowns.'
        },
        {
          id: 'task4-5',
          title: 'Extract practical lessons',
          description: 'Derive actionable insights from case analysis.'
        }
      ]
    },
    { 
      day: 11, 
      title: 'Governance Framework', 
      status: 'not-started',
      tasks: [
        {
          id: 'task5-1',
          title: 'Research existing governance models',
          description: 'Survey approaches from technology, healthcare, finance and other high-risk domains.'
        },
        {
          id: 'task5-2',
          title: 'Identify key governance components',
          description: 'Outline essential elements of effective AI safety governance.'
        },
        {
          id: 'task5-3',
          title: 'Draft layered governance framework',
          description: 'Design model addressing organizational, technical and procedural layers.'
        },
        {
          id: 'task5-4',
          title: 'Map stakeholder responsibilities',
          description: 'Define roles and accountabilities across the governance structure.'
        },
        {
          id: 'task5-5',
          title: 'Develop implementation roadmap',
          description: 'Create phased approach for adopting governance framework.'
        }
      ]
    },
    { 
      day: 13, 
      title: 'Final Synthesis', 
      status: 'not-started',
      tasks: [
        {
          id: 'task6-1',
          title: 'Integrate findings across work streams',
          description: 'Connect insights from principles, effectiveness scale, case studies and governance.'
        },
        {
          id: 'task6-2',
          title: 'Draft comprehensive report',
          description: 'Compile findings, methodology, analysis and recommendations.'
        },
        {
          id: 'task6-3',
          title: 'Create executive summary',
          description: 'Prepare concise overview highlighting key insights and actionable recommendations.'
        },
        {
          id: 'task6-4',
          title: 'Develop presentation materials',
          description: 'Design slides and supporting visuals for stakeholder communication.'
        },
        {
          id: 'task6-5',
          title: 'Prepare implementation guidelines',
          description: 'Create practical guidance for applying findings in real-world contexts.'
        }
      ]
    },
    { 
      day: 14, 
      title: 'Reflection', 
      status: 'not-started',
      tasks: [
        {
          id: 'task7-1',
          title: 'Conduct project retrospective',
          description: 'Evaluate process, outcomes and lessons learned.'
        },
        {
          id: 'task7-2',
          title: 'Document limitations and constraints',
          description: 'Acknowledge boundaries of findings and remaining open questions.'
        },
        {
          id: 'task7-3',
          title: 'Identify future research directions',
          description: 'Outline promising areas for additional exploration.'
        },
        {
          id: 'task7-4',
          title: 'Share findings with broader community',
          description: 'Prepare materials for knowledge sharing beyond immediate stakeholders.'
        },
        {
          id: 'task7-5',
          title: 'Develop continued learning plan',
          description: 'Create structure for ongoing monitoring and incorporation of new insights.'
        }
      ]
    }
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
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          A 14-day journey through AI safety principles, applications, and governance frameworks
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
            
            <div className="space-y-8">
              {/* Project details */}
              <div>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Project Title</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">AI Safety & Ethics Prospectus</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Purpose</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">To discuss and showcase AI safety principles and their practical applications</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Target</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      <FormattedText text="AI developers | Organizational leaders | Policymakers" />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Collaborators</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      <FormattedText text="Research (Anthropic whitepapers + Deep Research) | Policy (policymaking.ai) | Engineering (Claude Code) | UI/UX (Claude) | Communications (Claude) | Strategic Product Manager (Chris Carnell)" />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Tripwire</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">If 2 days pass without completing A-priority task; signals potential timeline/scope issues requiring immediate communications and reassessment to either break problems down further or consider the depth and breadth of our continued work</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900 dark:text-zinc-100">Bookend</dt>
                    <dd className="text-zinc-700 dark:text-zinc-300">Adverse: Inconclusive findings require transparency and open questions for areas needing further research.<br /><br />Success: Identification of a problem worth developing a lean canvans, business modeling, fermi estimate for feasibility</dd>
                  </div>
                </dl>
              </div>
              
              {/* Objectives and Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objectives */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Objectives</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Establish theoretical foundations of AI safety and ethics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Analyze practical applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Apply the Effectiveness Scale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Explore governance frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Synthesize Insights</span>
                    </li>
                  </ul>
                </div>
                
                {/* Methodology */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Methodologies</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>ABC123 prioritization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Story point complexity estimation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>Kanban workflow management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-white mt-2 mr-2"></span>
                      <span>14-day sprint</span>
                    </li>
                  </ul>
                </div>
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