'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="block">
          <TextEffect
            preset="fade"
            per="char"
            className="font-medium text-black dark:text-white"
            delay={0.3}
          >
            Chris Carnell
          </TextEffect>
        </Link>
      </div>
      <div>
          {/*
          <TextEffect
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500 block mt-1"
            delay={0.5}
          >
            +1 (573) 275-6799
          </TextEffect>
          <div className="flex gap-3 mt-1">
            <a href="sms:+15732756799" className="flex items-center">
              <TextEffect
                preset="fade"
                per="element"
                className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 flex items-center"
                delay={0.7}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                SMS
              </TextEffect>
            </a>
            <a href="tel:+15732756799" className="flex items-center">
              <TextEffect
                preset="fade"
                per="element"
                className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 flex items-center"
                delay={0.7}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </TextEffect>
              </a>
          </div>
        </div>
        */}
      </div>
    </header>
  );
}
