'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type PreviousWorkProps = {
  items: {
    id: string
    title: string
    description: string
    imageUrl: string
    externalUrl: string
  }[]
}

function PreviousWorkImage({ src }: { src: string }) {
  const isImage = src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.gif') || src.endsWith('.webp')
  
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
            className="aspect-[4/3] sm:aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        ) : (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-[4/3] sm:aspect-video w-full cursor-zoom-in rounded-xl"
          />
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-auto rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isImage ? (
            <img
              src={src}
              alt="Project screenshot"
              className="h-[60vh] w-full rounded-xl object-contain md:h-[70vh]"
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="h-[60vh] w-full rounded-xl md:h-[70vh]"
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

export default function PreviousWorkSection({ items }: PreviousWorkProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Show only first 4 items plus partial view of next row when collapsed
  const displayItems = isExpanded ? items : items.slice(0, 4)
  const peekItems = !isExpanded && items.length > 4 ? items.slice(4, 6) : []

  return (
    <div>
      <h3 className="mb-5 text-2xl font-medium">Previous Work Samples</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {displayItems.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="relative">
              <PreviousWorkImage src={item.imageUrl} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={item.externalUrl}
                target="_blank"
              >
                {item.title}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Partial view of next row */}
        {!isExpanded && peekItems.map((item) => (
          <div 
            key={`peek-${item.id}`} 
            className="space-y-2 relative overflow-hidden"
            style={{ height: '50px' }}
          >
            <div className="relative opacity-60">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="aspect-[4/3] sm:aspect-video w-full rounded-xl object-cover"
                style={{ height: '40px', objectFit: 'cover' }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-zinc-900 opacity-95"
              ></div>
            </div>
            <div className="px-1 truncate opacity-40">
              <p className="font-[450] text-zinc-900 dark:text-zinc-50 truncate text-xs">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {items.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors duration-200"
        >
          {isExpanded ? "--- collapse ---" : "+++ expand +++"}
        </button>
      )}
    </div>
  )
}