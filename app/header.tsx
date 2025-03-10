'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white block">
          Chris Carnell
        </Link>
        <TextEffect
          as="a"
          href="tel:+15732756799"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 hover:underline block mt-1"
          delay={0.5}
        >
        (573) 275-6799
        </TextEffect>
      </div>
    </header>
  )
}
