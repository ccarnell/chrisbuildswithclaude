'use client'

import React, { useState } from 'react'
import { Magnetic } from './magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from './morphing-dialog'
import { XIcon } from 'lucide-react'

type PdfViewerProps = {
  label: string
  pdfPath: string
}

export function PdfViewerLink({ label, pdfPath }: PdfViewerProps) {
  // Use the MorphingDialog for displaying the PDF
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <div
            className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            {label}
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
          </div>
        </Magnetic>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-auto h-auto w-[90vw] max-w-5xl rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="relative w-full h-full">
            {/* For desktop */}
            <iframe 
              src={`${pdfPath}#view=Fit&navpanes=0`} 
              className="h-[85vh] w-full rounded-xl hidden sm:block"
              title={`${label} PDF`}
              style={{ minHeight: '500px' }}
              frameBorder="0"
            />
            {/* For mobile - direct link to PDF */}
            <div className="block sm:hidden h-[70vh] w-full rounded-xl flex flex-col items-center justify-center p-4">
              <p className="text-center mb-6 text-zinc-700 dark:text-zinc-300">
                For the best viewing experience on mobile devices, please tap the button below:
              </p>
              <a 
                href={pdfPath} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                Open {label} in new tab
              </a>
            </div>
          </div>
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
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export function PdfViewerSection({ pdfLinks }: { pdfLinks: Array<{ label: string; path: string }> }) {
  return (
    <div className="flex items-center justify-start space-x-3">
      {pdfLinks.map((pdf) => (
        <PdfViewerLink 
          key={pdf.label} 
          label={pdf.label} 
          pdfPath={pdf.path} 
        />
      ))}
    </div>
  )
}