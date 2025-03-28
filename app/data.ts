type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Snapshot = {
  title: string
  description: string
  id: string
}

type PreviousWork = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  externalUrl: string;
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'v0.22: Economic Index Tool (WIP)',
    description:
      'Trigger v0.21 Success Bookend → Strategic pivot: AI Safety & Ethics Discovery + Anthropic\'s Economic Index + leverage personal econonomic development expertise.',
    link: '/economic-index',
    video: '/geographic-economic-index-tool-project-image.webp',
    id: 'project4',
  },
  {
    name: 'v0.21: AI Safety & Ethics page (pivoted)',
    description:
      'Add AI Safety & Ethics roadmap: 8-day strategic product management for AI Safety & Ethics prototype for devs, organizational leaders, and polymakers.',
    link: '/ai-safety-ethics',
    video: '/ai-safety-and-ethics-project-image.webp',
    id: 'project3',
  },
  {
    name: 'v0.2: chribuildswithclaude landing page (current)',
    description:
      'Deploy new Vercel boilerplate. Begin work with Next.js, Typescript, MongoDB, and setup Claude Code via Anthropic API. Give it some fancy clothes and submit resume.',
    link: '',
    video: '/v2-chrisbuildswithclaude-project-image.webp',
    id: 'project2',
  },
  {
    name: 'v0.1: Deploy first app prod (archived)',
    description:
      'Simply deploy first Next.js app via Vercel to domain through Cloudflare. Learn programming environment setup and GitHub workflow. Move to v2 quickly.',
    link: 'https://v1.chrisbuildswithclaude.com',
    video: '/v1-chrisbuildswithclaude-project-image.png',
    id: 'project1',
  },
]

export const SNAPSHOT: Snapshot[] = [
  {
    title: "Backlog | ESSENCE: Economic Strategy System for Ethical Navigation & Commercial Engagement",
    description: "The initial <strong>Idea Concept</strong>, domain purchase, and demo to learn local environment setup, Vercel, and GitHub deployment was completed Day One. Additional technical functionality was explored for self-interest and to document learning agility.\n\nTo align more with the position's responsibilities, I will now demonstrate strategic product management capabilities.\n\nAfter the 6-day sprint is complete for the Geographic Economic Index Tool, the documentation will be left here for showcasing, but I will be moving on to an even more comprehensive (2-4 week) strategic workflow.",
    id: "snapshot24",
  },
  {
    title: "Backlog: v0.22 Validation Framework and Final Documentation",
    description: "After completing the working prototype phase, we will need to create validation framework and final documentation for the Geographic Economic Index Tool.",
    id: "snapshot23",
  },
  {
    title: "WIP Update 23: Out of Office 3/27",
    description: "Begin wrapup of v0.22 on 3/28",
    id: "snapshot23a",
  },
  {
    title: "3/26 Update 22: Geographic Economic Index Tool - Day 4",
    description: "Move to Datawrapper for simplicity to add choropleth mapping Economic Index to occupational codes by MSA and create new Economic_MSA_Index, Economic_Occupation_Index, and log10 and z-scores for both MSA's and occupations. The rest of the data can be later utilized or shared with Anthropic. The current mock prototype has been pushed to prod.\n 🎉 <a href='/economic-index' class='text-[#61AAF2] underline transition-colors'>Click here to view the Economic Index project</a>",
    id: "snapshot22",
  },
  {
    title: "3/25 Update 21: Geographic Economic Index Tool - Day 3",
    description: "Clone Anthropic's Economic Index Python project and run locally. Input BLS occupational data and create Python script to JOIN Anthropic's percentages with BLS' MSA's",
    id: "snapshot21",
  },
  {
    title: "3/22 Update 20: Begin ideation for v0.22",
    description: "Begin v0.22 product roadmap. Begin draft of user stories for economic developers and sales teams.",
    id: "snapshot20",
  },
  {
    title: "3/22 Update 19: Add new Geographic Economic Index Tool page",
    description: "Create multiple new components to reuse for potential future products. Add Geographic Economic Index Tool page with Product Overview, Product Concept, and Project Timeline",
    id: "snapshot19",
  },
  {
    title: "3/22 Update 18: Strategic Pivot to GEO Economic Index Tool",
    description: "AI Safety & Ethics research complete. Pivot after Success Bookend triggered.\n 🎉 <a href='/economic-index' class='text-[#EBDBBC] underline transition-colors'>Click here to view the Economic Index project</a>",
    id: "snapshot18",
  },
  {
    title: "3/21 Update 17: AI Safety & Ethics - Day 2",
    description: "Complete Disovery & Research for AI Safety & Ethics",
    id: "snapshot17",
  },
  {
    title: "3/19 Update 16: AI Safety & Ethics - Day 1",
    description: "Set up project structure for v0.21\n 🎉 <a href='/ai-safety-ethics' class='text-[#61AAF2] underline transition-colors'>Click here to view the AI Safety & Ethics page</a>",
    id: "snapshot16",
  },
  {
    title: "3/18 Update 15: Mobile responsiveness and Previous Work Samples",
    description: "Updated the view to be more friendly on mobile and added a couple more work samples",
    id: "snapshot15",
  },
  {
    title: "3/17 Update 14: Replicating animation and component functionality",
    description: "Add cover letter and resume links. Use styles and motions from existing codebase",
    id: "snapshot14",
  },
  {
    title: "3/16 Update 13: Create new component and update Typescript files",
    description: "Add PreviousWorkSection with past products, projects, and startup company experience",
    id: "snapshot13",
  },
  {
    title: "3/15 Update 12: Organize branches and break code to stress test",
    description: "Backup project locally. Create recovery branch. Force commits, resolve merge conflicts, and recover deleted repos",
    id: "snapshot12",
  },

  {
    title: "3/14 Update 11: Add Expand/Collapse functionality",
    description: "Work with Claude Code for better UI/UX.",
    id: "snapshot11",
  },
  {
    title: "3/12 Update 10: Update components and addional Typescript files. Add analytics",
    description: "Utilize Claude Code to better understand codebase. Add tel: and sms: functionality (Edit: removed per Claude's recommendation)",
    id: "snapshot10",
  },
  {
    title: "3/12 Update 9: Update animations and content",
    description: "Update motion-primitive animations and other styling in Typescript files. Add Anthropic accent colors. Don't change the entire color palette after discussing with Claude that it would probably raise some ethical concerns with trademark/brand identity and potential confusion. Completely understandable",
    id: "snapshot9",
  },
  {
    title: "3/11 Update 8: Update Typescript files",
    description: "Update Learning Snapshots for better readability. Learn additional Git commands and functionality",
    id: "snapshot8",
  },
  {
    title: "3/10 Update 7: Incorporate Claude Code",
    description: "On Windows PC today—setup WSL. Generate Anthropic API key and setup Claude Code. Hold off on VS Code integration for now. Make first changes with Claude Code: update constants, variables, text, comment out the blog and commit",
    id: "snapshot7",
  },
  {
    title: "3/7 Update 6: When to take a breather",
    description: "Start to add MongoDB with another Vercel boilerplate. Work through npm, Git, Next.js, command-line, and environment file issues. Since a database isn't critical right now, change course. Overwrite v2. Achieve at least a small win—complete simpler tasks: update favicon, and create custom HTML email sig. Use /public to host SVG icons",
    id: "snapshot6",
  },
  {
    title: "3/7 Update 5: Folders, files, and functions",
    description: "Review /app, /data, /footer, /header, /layout, /page, /public, /components, /package.json, and review CSS styles. Update strictly string/text in Typescript files. Learn more about Next.js and Tailwind. Add Anthropic's mission to footer",
    id: "snapshot5",
  },
  {
    title: "3/6 Update: Packages and dependencies",
    description: "Learn difference between local and global packages. Resolve dependency issues",
    id: "snapshot4",
  },
  {
    title: "3/6 Update 3: Git workflows",
    description: "Move static site to new v1 Vercel project and create v1 branch in GitHub to keep versioning records. Keep main branch for most update-to-date project. Learn clone, add, commmit, push flow for v2 on Vercel and GitHub.\n 🎉 <a href='/' class='text-[#61AAF2] underline transition-colors'>Click here to view v0.2</a>",
    id: "snapshot3",
  },
  {
    title: "3/5 Update 2: Email forward",
    description: "Set ImprovMX & add SPF records in GoDaddy to setup Gmail SMTP for personal domain",
    id: "snapshot2",
  },  
  {
    title: "3/4 Update 1: Environment setup, local host, and deploy",
    description: "Setup domain via Cloudflare. Deploy boilerplate static project via Vercel. Update DNS and verify SSL. Setup GitHub, install Git, node.js, etc, and setup VS Code. Learn to deploy and test localhost",
    id: "snapshot1",
  },
]

export const PREVIOUS_WORK: PreviousWork[] = [
  {
    id: "previouswork1",
    title: "Code Labs",
    description: "Custom LMS for adult computer programming training with agile incorporated into curriculum environment",
    imageUrl: "/code-labs-previous-work-screenshot.webp",
    externalUrl: "https://www.codefiworks.com/codelabs/"
  },
  {
    id: "previouswork2",
    title: "PubGen.AI",
    description: "Multi-modal AI-powered platform focused on revitalizaing newsroom deserts across the U.S.",
    imageUrl: "/pubgen-ai-previous-work-screenshot.webp",
    externalUrl: "https://www.pubgen.ai/"
  },
  {
    id: "previouswork3",
    title: "PumpTrakr",
    description: "IoT irrigation management with AI prediction and self-healing devices",
    imageUrl: "/pumptrakr-previous-work-screenshot.webp",
    externalUrl: "https://www.pubgen.ai/"
  },
  {
    id: "previouswork4",
    title: "Sho.AI",
    description: "Design-focused AI platform for companies to manage entire brand systems",
    imageUrl: "/sho-ai-previous-work-screenshot.webp",
    externalUrl: "https://www.sho.ai/"
  },
  {
    id: "previouswork5",
    title: "Swipesum",
    description: "OCR payment processing from fortune 500 companies to small businesses",
    imageUrl: "/swipesum-previous-work-screenshot.webp",
    externalUrl: "https://www.swipesum.com/"
  },
  {
    id: "previouswork6",
    title: "Youth Coding League",
    description: "Innovative, project-based introduction to CS using a youth sports model",
    imageUrl: "/youth-coding-league-previous-work-screenshot.webp",
    externalUrl: "https://www.youthcodingleague.com/"
  },
  {
    id: "previouswork7",
    title: "Vizient",
    description: "Developed training program for nation's largest healthcare GPO",
    imageUrl: "/vizient-previous-work-screenshot.webp",
    externalUrl: "https://www.vizientinc.com/"
  },
  {
    id: "previouswork8",
    title: "Supreme Rice",
    description: "Real-time ticketing and reconciliation for rice harvesting logistics",
    imageUrl: "/supreme-rice-previous-work-screenshot.webp",
    externalUrl: "https://supremerice.com/"
  }
]

/*export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What is chrisbuildswithclaude.com?',
    description: 'An evergreen, versioned project',
    link: '/blog/what-is-chrisbuildswithclaude-intro',
    uid: 'blog-1',
  },
  {
    title: 'The reasons I exited the company I co-founded after 10 years',
    description:
      'A new chapter',
    link: '/blog/the-reason-i-exited-the-company-i-co-founded-after-10-years',
    uid: 'blog-2',
  },
  */

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ccarnell',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cacarnell/',
  },
]

export type PdfLink = {
  label: string
  path: string
}

export const PDF_LINKS: PdfLink[] = [
  {
    label: 'cover letter',
    path: '/chris-carnell-anthropic-cover-letter.pdf',
  },
  {
    label: 'resume',
    path: '/chris-carnell-anthropic-resume-strategic-product-management.pdf',
  }
]

export const EMAIL = 'chris@questioningrural.com'
