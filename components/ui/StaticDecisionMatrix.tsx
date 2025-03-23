'use client'

type StaticDecisionMatrixProps = {
  title: string
  xAxis: string
  yAxis: string
  selectedQuadrant: 'upperLeft' | 'upperRight' | 'lowerLeft' | 'lowerRight'
}

export function StaticDecisionMatrix({ 
  title, 
  xAxis, 
  yAxis,
  selectedQuadrant = 'upperRight'
}: StaticDecisionMatrixProps) {
  // Define the labels for each quadrant
  const quadrantLabels = {
    upperLeft: "Regional Economic Dashboard",
    upperRight: "Economic Index Geographic Tool",
    lowerLeft: "Generic AI Demo",
    lowerRight: "Pure AI Safety Framework"
  }
  
  // Define descriptions
  const quadrantDescriptions = {
    upperLeft: "Leverages your expertise but less connected to Anthropic's research",
    upperRight: "Combines Anthropic research with your economic development expertise",
    lowerLeft: "Neither maximizes alignment nor leverages your unique skills",
    lowerRight: "Aligned with Anthropic's values but doesn't maximize your unique background"
  }
  
  return (
    <div className="w-full mb-4">
      <h3 className="text-xl font-medium mb-5">{title}</h3>
      
      <div className="relative mx-auto max-w-md">
        {/* SVG Matrix */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect x="0" y="0" width="400" height="400" fill="none" />
          
          {/* Grid Lines */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="#e5e7eb" strokeWidth="2" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#e5e7eb" strokeWidth="2" />
          
          {/* Quadrant boxes */}
          <g>
            {/* Upper Left */}
            <rect
              x="10" y="10" width="180" height="180"
              rx="8" ry="8"
              fill={selectedQuadrant === 'upperLeft' ? "#f8fafc" : "#ffffff"}
              stroke={selectedQuadrant === 'upperLeft' ? "#61AAF2" : "#e5e7eb"}
              strokeWidth="2"
            />
            <text x="20" y="40" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">{quadrantLabels.upperLeft}</text>
            <text x="20" y="70" fontFamily="sans-serif" fontSize="12" fill="#71717a" width="160">
              <tspan x="20" dy="0">Leverages your expertise</tspan>
              <tspan x="20" dy="20">but less connected to</tspan>
              <tspan x="20" dy="20">Anthropic's research</tspan>
            </text>
          </g>
          
          {/* Upper Right */}
          <g>
            <rect
              x="210" y="10" width="180" height="180"
              rx="8" ry="8"
              fill={selectedQuadrant === 'upperRight' ? "#f8fafc" : "#ffffff"}
              stroke={selectedQuadrant === 'upperRight' ? "#61AAF2" : "#e5e7eb"}
              strokeWidth="2"
            />
            {selectedQuadrant === 'upperRight' && (
              <circle cx="380" cy="20" r="12" fill="#61AAF2" />
            )}
            <text x="220" y="40" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">{quadrantLabels.upperRight}</text>
            <text x="220" y="70" fontFamily="sans-serif" fontSize="12" fill="#71717a">
              <tspan x="220" dy="0">Combines Anthropic</tspan>
              <tspan x="220" dy="20">research with your</tspan>
              <tspan x="220" dy="20">economic expertise</tspan>
            </text>
          </g>
          
          {/* Lower Left */}
          <g>
            <rect
              x="10" y="210" width="180" height="180"
              rx="8" ry="8"
              fill={selectedQuadrant === 'lowerLeft' ? "#f8fafc" : "#ffffff"}
              stroke={selectedQuadrant === 'lowerLeft' ? "#61AAF2" : "#e5e7eb"}
              strokeWidth="2"
            />
            <text x="20" y="240" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">{quadrantLabels.lowerLeft}</text>
            <text x="20" y="270" fontFamily="sans-serif" fontSize="12" fill="#71717a">
              <tspan x="20" dy="0">Neither maximizes</tspan>
              <tspan x="20" dy="20">alignment nor leverages</tspan>
              <tspan x="20" dy="20">your unique skills</tspan>
            </text>
          </g>
          
          {/* Lower Right */}
          <g>
            <rect
              x="210" y="210" width="180" height="180"
              rx="8" ry="8"
              fill={selectedQuadrant === 'lowerRight' ? "#f8fafc" : "#ffffff"}
              stroke={selectedQuadrant === 'lowerRight' ? "#61AAF2" : "#e5e7eb"}
              strokeWidth="2"
            />
            <text x="220" y="240" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">{quadrantLabels.lowerRight}</text>
            <text x="220" y="270" fontFamily="sans-serif" fontSize="12" fill="#71717a">
              <tspan x="220" dy="0">Aligned with Anthropic's</tspan>
              <tspan x="220" dy="20">values but doesn't</tspan>
              <tspan x="220" dy="20">maximize your background</tspan>
            </text>
          </g>
          
          {/* Axis Labels */}
          <text x="200" y="395" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#71717a">{xAxis}</text>
          <text x="10" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#71717a" transform="rotate(-90, 10, 200)">{yAxis}</text>
          
          {/* Check mark in selected quadrant */}
          {selectedQuadrant === 'upperRight' && (
            <path 
              d="M375 15 L380 25 L390 10" 
              stroke="white" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
          
          {/* Arrows */}
          <text x="392" y="200" textAnchor="end" fontFamily="sans-serif" fontSize="18" fill="#71717a">→</text>
          <text x="200" y="12" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fill="#71717a">↑</text>
          
          {/* Low-High Labels */}
          <text x="20" y="200" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#71717a">Low</text>
          <text x="380" y="200" textAnchor="end" fontFamily="sans-serif" fontSize="10" fill="#71717a">High</text>
          <text x="200" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#71717a">High</text>
          <text x="200" y="380" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#71717a">Low</text>
        </svg>
        
        {/* Selection explanation - mobile view only */}
        <div className="mt-4 p-3 border border-[#61AAF2] bg-zinc-50/80 dark:bg-zinc-800/80 rounded-md shadow-sm md:hidden">
          <div className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-[#61AAF2] flex items-center justify-center mr-2 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Selected Approach: {quadrantLabels[selectedQuadrant]}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{quadrantDescriptions[selectedQuadrant]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}