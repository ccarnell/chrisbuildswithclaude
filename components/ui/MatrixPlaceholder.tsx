'use client'

type MatrixPlaceholderProps = {
  title: string
}

export function MatrixPlaceholder({ title }: MatrixPlaceholderProps) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-4 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center p-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-auto mb-4 text-zinc-400 dark:text-zinc-600"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="3" y1="15" x2="21" y2="15"></line>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="15" y1="3" x2="15" y2="21"></line>
          </svg>
          <p className="text-zinc-500 dark:text-zinc-400 mb-2">Decision Matrix Visualization</p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Image to be added
          </p>
          <div className="flex justify-center mt-3">
            <div className="text-xs px-2 py-1 rounded-full bg-[#61AAF2]/20 text-[#61AAF2] dark:bg-[#61AAF2]/10">
              Selected: Economic Index Geographic Tool
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}