'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import PreviousWorkSection from '@/components/ui/PreviousWorkSection'
import {
  PROJECTS,
  SNAPSHOT,
  PREVIOUS_WORK,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  // Check if the source is a video or an image
  const isImage = src.includes('-image') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.gif')
  
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isImage ? (
          <img
            src={src}
            alt="Project screenshot"
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        ) : (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isImage ? (
            <img
              src={src}
              alt="Project screenshot"
              className="aspect-video h-[50vh] w-full rounded-xl object-contain md:h-[70vh]"
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="list-disc ml-4 text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
          <strong>March 4th, 2025 at 4:41pm CST:</strong> Idea concept
          <br/><strong>March 11, 2025 at 6:13pm CST:</strong> Resume submitted & received confirmation email
          <br /><br />
          Hi Anthropic.<br />
          This was built specifically for and shared only with <strong><span style={{ color: '#CC785C' }}> you.</span></strong><br />
          <br />With a decade in software, I've collaborated with founders (technical and non-technical), researchers, UI/UX designers, developers, and GTM teams to solve problems and build solutions. I've built low-code automations and have technical knowledge, but my resume and GitHub won't reflect much past, "Hello World!"<br />
          <br />While I have deep strategic product management experience, I've been fortunate to grow talented technical teams who I believe you should trust and defer to on their technical expertise—meaning before this Idea Concept on March 4th, I had never personally deployed a project. From my research, Anthropic values technical capabilities and urgency in rapid internal prototyping. To align with the team, I'm using this as a demonstration project of real-time work and deeper technical learning.<br />
          <br />
          This is my commitment to:<br />
          - Express shared values<br />
          - Showcase learning speed and capabilities under ambiguity<br />
          - Gain trust & confidence. I do whatever it takes to succeed<br />
          <br />Thank you for your considerations.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium">Demonstration Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="mb-3 text-zinc-700 dark:text-zinc-400">~46 hours spent on project to-date<br />
        ( Note 1: <strong>Time</strong><em>, or</em> <strong>time alone</strong><em> at least, is not a great metric to measure with software productivity. I began tracking this simply to show how long it's taken for me to go from never deploying code to learning and prototyping the different technical concepts below. </em>)<br />
        <br />( Note 2: <em>This obviously turned into something much more shiny than a quick prototype, but since you only get one first impression, I wanted to shoot for hopefully being more likely a love-at-first-sight thing rather than jumpscare. I hope The Office fans can reminisce cringe with me about the blind date episode with Michael. </em>)</p>
        <h3 className="mb-5 text-2xl font-medium">Learning Snapshots</h3>
        {(() => {
          const [isExpanded, setIsExpanded] = useState(false)

          // Define how many snapshots to show initially
          const visibleCount = 3; // Backlog, WIP, and first Update

          // Create separate arrays for fully visible and partially visible
          const fullyVisibleSnapshots = isExpanded 
            ? SNAPSHOT 
            : SNAPSHOT.slice(0, visibleCount);
            
          // Get next item to show partially (if not expanded)
          const peekItem = !isExpanded && SNAPSHOT.length > visibleCount 
            ? SNAPSHOT[visibleCount] 
            : null;

          return (
            <>
              <div className="flex flex-col space-y-2">
                {/* Fully visible snapshots */}
                {fullyVisibleSnapshots.map((item) => (
                  <div
                    className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                    key={item.id}
                  >
                    <Spotlight
                      className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                      size={64}
                    />
                    <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                      <div className="relative w-full">
                        <h4 className="font-normal dark:text-zinc-100">
                          {item.title.startsWith("Update") ? (
                            <span style={{ color: '#61AAF2' }}>{item.title}</span>
                          ) : item.title.startsWith("WIP") ? (
                            <span style={{ color: '#EBDBBC' }}>{item.title}</span>
                          ) : item.title.startsWith("Backlog") ? (
                            <span style={{ color: '#CC785C' }}>{item.title}</span>
                          ) : (
                            item.title
                          )}
                        </h4>
                        <div className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line" 
                             dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br />') }}>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Partial view of next item - just a peek */}
                {peekItem && !isExpanded && (
                  <div 
                    className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                    key={`peek-${peekItem.id}`}
                  >
                    <div 
                      className="relative rounded-[15px] bg-white dark:bg-zinc-950 overflow-hidden"
                      style={{ maxHeight: '70px' }} // Strict height limit
                    >
                      <div className="relative p-4">
                        {/* Title only */}
                        <h4 className="font-normal dark:text-zinc-100 truncate">
                          {peekItem.title.startsWith("Update") ? (
                            <span style={{ color: '#61AAF2' }}>{peekItem.title}</span>
                          ) : peekItem.title.startsWith("WIP") ? (
                            <span style={{ color: '#EBDBBC' }}>{peekItem.title}</span>
                          ) : peekItem.title.startsWith("Backlog") ? (
                            <span style={{ color: '#CC785C' }}>{peekItem.title}</span>
                          ) : (
                            peekItem.title
                          )}
                        </h4>
                        
                        {/* First ~10% of content */}
                        <div 
                          className="text-zinc-600 dark:text-zinc-300 whitespace-nowrap overflow-hidden text-ellipsis opacity-80 text-sm" 
                          style={{ maxWidth: '100%' }}
                        >
                          {peekItem.description.substring(0, 50).replace(/\n/g, ' ')}...
                        </div>
                        
                        {/* Gradient overlay to cut off abruptly */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white dark:from-zinc-950 to-transparent"
                          style={{ opacity: 0.9 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors duration-200"
              >
                {isExpanded ? "--- collapse ---" : "+++ expand +++"}
              </button>
            </>
          )
        })()}
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        data-parallax-speed="1.5"
      >
        <PreviousWorkSection items={PREVIOUS_WORK} />
      </motion.section>
      

      {/* Blog section commented out temporarily
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
      */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium">Connect</h3>
        <p className="mb-5 text-zinc-700 dark:text-zinc-300">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}