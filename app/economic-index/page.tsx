'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { MatrixPlaceholder } from '@/components/ui/MatrixPlaceholder'
import { ProjectTimeline } from '@/components/ui/ProjectTimeline'
import { DashboardWireframe } from '@/components/ui/DashboardWireframe'
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

export default function EconomicIndex() {
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
  
  // Timeline data
  const timelineMilestones = [
    {
      day: "Day 1-2",
      date: "Mar 23-24",
      title: "Strategic Foundation, Product Definition and Conceptualization",
      status: "Complete" as const,
      tasks: [
        {
          title: "✅ Write content for Home Page projects and snapshots sections for strategic pivot from AI Safety (v0.21) to Economic Index Tool (v0.22)"
        },
        {
          title: "✅ Create new StrategicPivotSection component (for future reusability) to document rationale for v0.21 → v0.22 with insights gained and link to new page"
        },
        {
          title: "✅ Create new DecisionMatrix component and add to Strategic Pivot section on v0.21 page for additional context and insights"
        },
        {
          title: "✅ Update v0.21 Product Overview to close out project. Highlight successful Bookend to document outcome of v0.21"
        },
        {
          title: "✅ Add new v0.22 page and complete Product Overview: purpose, target, key objectives, and tools & methodologies"
        },
        {
          title: "✅ Create new ProjectTimeline component. Refactor AI Safety & Ethics page Project Timeline to use the new component for UI consistency."
        },
        {
          title: "✅ Add v0.22 Timeline Milestones, Tasks, Timeframe, and Dates for first Milestone Days 1-2"
        },
        {
          title: "✅ Add Product Concept section to v0.22"
        },
        {
          title: "✅ Run tests and push commit for Day 1"
        },
        {
          title: "✅ Add to v0.22 Product Overview: collaborators, tripwire, and bookends"
        },
        {
          title: "✅ Create data strategy plan for connecting occupations to ethical dimensions"
        },
        {
          title: "✅ Draft user stories and journey mapping for economic developers and sales teams"
        },
        {
          title: "Begin mapping between occupational categories and ethical considerations"
        },
      ]
    },
    {
      day: "Day 3-4",
      date: "Mar 25-26",
      title: "Framework Design and Prototype Development",
      status: "WIP" as const,
      tasks: [
        {
          title: "✅ Download Anthropic's Economic Index data via Huggingface and review"
        },
        {
          title: "✅ Gather BLS occupational codes data by GEO (determine type)"
        },
        {
          title: "✅ Create JOIN for overlap of Economic Index and BLS occupational codes"
        },
        {
          title: "✅ Define breakdown and/or combinations that will be mapped geographically"
        },
        {
          title: "✅ Prepare data for Flourish"
        },
        {
          title: "✅ Build first GEO data visualization"
        },
        {
          title: "Add explanatory elements to visualization"
        },
        {
          title: "Create Methodology and Limitations components"
        }
      ]
    },
    {
      day: "Day 5-6",
      date: "Mar 27-28",
      title: "Validation Framework and Final Documentation",
      status: "Backlog" as const,
      tasks: [
        {
          title: "Finalize functional prototype display"
        },
        {
          title: "Finalize test criteria with internal users"
        },
        {
          title: "Work with GTM to plan for distribution and gathering feedback"
        },
        {
          title: "Set bookend for analysis"
        },
        {
          title: "Complete reflection of project"
        },
        {
          title: "Develop plans for next sprint"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Geographic Economic Index Tool</h1>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          A 6-day journey to prototype for Economic Index and AI Safety and Ethics
        </p>
      </motion.section>
      
      {/* Product Overview */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mb-8"
      >
        <ProductOverview
          title="Geographic Economic Index Tool"
          purpose="Map Economic Index occupations to GEO. Overlay with UNESCO AI Ethics framework"
          target="Economic developers | Anthropic sales teams | Organizational leaders | Researchers"
          keyObjectives={[
            "Map geographic distribution of occupations from Economic Index",
            "Visualize geographic concentration of occupations from Economic Index",
            "Connect UNESCO AI Ethics framework of scenario dilemmas & suggested responses",
            "Introduce economic development tool for potential AI job displacement planning",
            "Provide Anthropic internal Sales teams potential hypertargeted segments"
          ]}
          methodologies={[
            "Anthropic's Economic Index, UNESCO AI Ethics framework, BLS & Census data",
            "Customer development with Lean Canvas and Ten Types of Innovation frameworks",
            "Continuous Innovation framework with Fermi estimates for revenue modeling",
            "User Stories and Journey Mapping, and Kanban for workflow management",
            "Flourish, Kaggle"
          ]}
          collaborators="Research (Anthropic Economic Index team) | Policy (policymaking.ai) | Engineering (Claude Code) | UI/UX (Claude) | Strategic Product Management (Chris Carnell)"
          tripwire="The proposed solution was a geographical view. After mapping data to plot, gather insights on if any other visualization type may be more necessary."
          bookend={{
            adverse: "Flourish integration is too difficult within 6-days. Input static infographic",
            success: "Anthropic Economic Index Research team identifies project as valuable input for ongoing research."
          }}
          isDimmed={false}
          successColorOverride={false}
        />
      </motion.section>

      {/* Executive Summary & Dashboard */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
          <div className="relative h-full w-full rounded-[15px] bg-white p-3 sm:p-4 md:p-6 dark:bg-zinc-950 overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Product Concept</h2>
            
            {/* Dashboard Wireframe only */}
            <div className="overflow-x-hidden">
              <DashboardWireframe />
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Timeline Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <ProjectTimeline 
          milestones={timelineMilestones}
          currentPhase="Framework Design and Prototype Development"
          defaultOpenIndex={1}
        />
      </motion.section>
      
      {/* Navigation Links */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex justify-between items-center"
      >
        {/* Links */}
        <div className="flex space-x-4">
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
          
          <Link 
            href="/ai-safety-ethics" 
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
            Back to AI Safety & Ethics
          </Link>
        </div>
        
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
      
    </motion.main>
  )
}