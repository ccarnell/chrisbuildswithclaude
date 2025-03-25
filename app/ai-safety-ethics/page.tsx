'use client'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { MatrixPlaceholder } from '@/components/ui/MatrixPlaceholder'
import { ProjectTimeline } from '@/components/ui/ProjectTimeline'
import { ProductOverview } from '@/components/ui/ProductOverview'

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
  
  // Strategic Pivot Data
  const strategicPivotData = {
    title: "Strategic Pivot: From AI Safety & Ethics Prospectus to Geographic Economic Index Tool",
    rationale: [
      "While working through Discovery & Research for the AI Safety & Ethics (v0.21) project, it became clear that incorporating Anthropic's Economic Index presented an opportunity to create more direct value by:",
      "1. Building on Anthropic's existing research rather than creating a parallel framework",
      "2. Creating a tool with potential dual value: public economic visualization and internal sales targeting",
      "3. Leveraging my expertise building ecosystems alongside the planned strategic product management demonstration"
    ],
    preservedElements: "We triggered our successful Bookend by identifying a concept that could showcase additional strategic product management frameworks and even further, incorporate real-world data and potential value to Anthropic - the ethical dimensions and governance framework developed here will integrate directly into the Economic Index tool as a critical layer of analysis.",
    ctaText: "View Strategic Pivot",
    ctaLink: "/economic-index"
  }
  
  // Decision Matrix Data
  const decisionMatrixData = {
    title: "Product Evolution Decision Matrix",
    xAxis: "Alignment with Anthropic Research",
    yAxis: "Leverages My Expertise",
    quadrants: [
      {
        position: "upperLeft",
        title: "Regional Economic Dashboard",
        description: "Leverages your expertise but less connected to Anthropic's research",
        selected: false
      },
      {
        position: "upperRight",
        title: "Economic Index Geographic Tool",
        description: "Combines Anthropic research with your economic development expertise",
        selected: true // This is the selected approach
      },
      {
        position: "lowerLeft",
        title: "Generic AI Demo",
        description: "Neither maximizes alignment nor leverages your unique skills",
        selected: false
      },
      {
        position: "lowerRight",
        title: "Pure AI Safety Framework",
        description: "Aligned with Anthropic's values but doesn't maximize your unique background",
        selected: false
      }
    ]
  }
  
  // Define our milestones with tasks
  const milestones = [
    { 
      day: 1, // Day 1
      title: 'Project Setup', 
      date: 'Mar 21',
      status: 'Complete' as const,
      tasks: [
        {
          id: 'task1-1',
          title: 'Framework 1',
          description: '✅ Setup tracking and visualization tool in Next.js project for transparency.'
        },
        {
          id: 'task1-2',
          title: 'Planning 1',
          description: '✅ Finalize Project overview, key objectives, methodologies, collaborators, Tripwire, and Bookend.'
        },
        {
          id: 'task1-3',
          title: 'Framework 2',
          description: '✅ Deploy initial Product Overview to website.'
        },
        {
          id: 'task1-5',
          title: 'Planning 2',
          description: '✅ Create Project Timeline component, Milestones, and Tasks.'
        },
        {
          id: 'task1-6',
          title: 'Operations 1',
          description: '✅ Create project processes and workflows.'
        },
        {
          id: 'task1-7',
          title: 'Planning 3',
          description: '✅ Define tripwires and bookends for triggering events.'
        },
        {
          id: 'task1-8',
          title: 'Planning 3',
          description: '✅ Set reflection methodology.'
        }
      ]
    },
    { 
      day: 3, 
      title: 'Discovery & Research', 
      date: 'Mar 22',
      status: 'Complete' as const,
      tasks: [
        {
          id: 'task2-1',
          title: 'Research 1',
          description: '✅ Review AI safety and ethical traits critical to Anthropic.'
        },
        {
          id: 'task2-2',
          title: 'Research 2',
          description: '✅ Research current societal dimensions and governance approaches.'
        },
        {
          id: 'task2-3',
          title: 'Evaluate 1',
          description: '✅ Document key principles from major, reputable and authoritative organizations.'
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
        },
        {
          id: 'task2-9',
          title: 'Strategic Pivot Decision',
          description: '✅ Incorporating lessons learned within AI Safety & Ethics and pivoting to Geographic Economic Index Tool. Visit the Economic Index Tool to see the new approach.'
        }
      ]
    },
    { 
      day: 4, // Day 4
      title: 'Business Modeling & Problem/Solution Fit', 
      date: 'Mar 24',
      status: 'Backlog' as const,
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
      date: 'Mar 26',
      status: 'Backlog' as const,
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
          description: 'Task groom and narrow in on minimum desirable viable feasible product. Move all other cards to below v0.1.'
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
      date: 'Mar 27',
      status: 'Backlog' as const,
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
      
      {/* Strategic Pivot Section */}
      <motion.div
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#61AAF2]/50 p-[1px] dark:bg-[#61AAF2]/60 mb-12">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-[#61AAF2]/10 p-4 md:p-6 dark:bg-[#61AAF2]/20">
            <div className="flex items-center mb-6">
              <div className="bg-[#61AAF2] text-white p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div className="text-2xl font-medium text-[#61AAF2]">Strategic Pivot</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rationale Section */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-[#61AAF2]">Rationale</h3>
                <div className="space-y-4 mb-6">
                  {/* First item without bullet since it's the introduction */}
                  <p className="text-zinc-700 dark:text-zinc-300">{strategicPivotData.rationale[0]}</p>
                  
                  {/* Numbered items without bullets */}
                  <div className="ml-4 space-y-2">
                    {strategicPivotData.rationale.slice(1).map((point, index) => (
                      <p key={index} className="text-zinc-700 dark:text-zinc-300">{point}</p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-2 text-[#61AAF2]">Insights Gained</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6">{strategicPivotData.preservedElements}</p>
                
                  <Link
                    href={strategicPivotData.ctaLink}
                    className="inline-flex items-center rounded-lg bg-[#61AAF2] px-4 py-2 text-sm font-medium text-white hover:bg-[#4090e0] transition-colors duration-200"
                  >
                    {strategicPivotData.ctaText}
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
                <h3 className="text-xl font-medium mb-4 text-[#61AAF2]">{decisionMatrixData.title}</h3>
                <img
                  src="/decision-matrix-mockup-graphic.svg"
                  alt="Product Evolution Decision Matrix showing the Economic Index Geographic Tool as the selected approach"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Product Overview Section - dimmed to indicate historical context */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <ProductOverview
          title="AI Safety & Ethics Prospectus"
          purpose="Review and solve for AI safety and ethics applications"
          target="AI developers | Organizational leaders | Policymakers"
          keyObjectives={[
            "Research AI safety and ethics' foundations and governance",
            "Explore dev, org leadership, and policymaker domains",
            "Conduct Customer Discovery and competitive analysis",
            "Calculate TAM, SAM, SOM and identify early adopters",
            "Identify, quantify, design, and build MDVFP"
          ]}
          methodologies={[
            "Customer Development with Lean Canvas",
            "Fermi estimates for revenue modeling",
            "Ten Types of Innovation Frameworks",
            "User Stories and Journey Mapping",
            "Kanban for workflow management"
          ]}
          collaborators="Research (Anthropic whitepapers + Deep Research) | Policy (policymaking.ai) | Engineering (Claude Code) | UI/UX (Claude) | Communications (Claude) | Strategic Product Manager (Chris Carnell)"
          tripwire="If 2 days pass without completing A-priority task; signals potential timeline/scope issues requiring immediate communications and reassessment to either break problems down further or consider the depth and breadth of our continued work"
          bookend={{
            adverse: "Inconclusive findings require transparency and open questions for areas needing further research.",
            success: "Identification of a problem worth developing a lean canvas, business modeling, fermi estimate for feasibility"
          }}
          isDimmed={true}
        />
      </motion.section>
      
      {/* Timeline Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <ProjectTimeline 
          milestones={milestones} 
          currentPhase="Discovery & Research"
          title="Project Timeline"
        />
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