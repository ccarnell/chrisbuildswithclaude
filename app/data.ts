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
    name: 'Version 0.21 (WIP 16)',
    description:
      'Added AI Safety & Ethics page: 8-day strategic product management for AI safety and ethics applications for devs, organizational leaders, and polymakers.',
    link: '/ai-safety-ethics',
    video: '/ai-safety-and-ethics-project-image.webp',
    id: 'project3',
  },
  {
    name: 'Version 0.2 (this Home page)',
    description:
      'Deployed new Vercel boilerplate. Began working with Next.js, Typescript, MongoDB, and setup Claude Code via Anthropic API. Gave it some fancy clothes before submitting my resume.',
    link: '',
    video: '/v2-chrisbuildswithclaude-project-image.webp',
    id: 'project2',
  },
  {
    name: 'Version 0.1',
    description:
      'Simply deployed my first Next.js app via Vercel to hosted domain purchased through Cloudflare to learn programming environment setup and GitHub workflow. Moving on to v2 quickly.',
    link: 'https://v1.chrisbuildswithclaude.com',
    video: '/v1-chrisbuildswithclaude-project-image.png',
    id: 'project1',
  },
]

export const SNAPSHOT: Snapshot[] = [
  {
    title: "Backlog | Ideate Update X",
    description: "The initial <strong>Idea Concept</strong> to purchase the domain and learn to setup a local environment, Vercel, and GitHub workflow to deploy was completed on the first day. I then spent some time working through various additional technical functionality for self-interest and to continue showing technical learning.\n\nSince I have applied for the Strategic Product Management position, I am now going to take a step back from the demonstration of quickly learning technical implementation details to showcase more holistic and intentional strategic product management capabilities.\n\nAfter discussing the importance of AI safety and ethics I will:\n1.) Within v2, display past work, tools, and frameworks used for strategic product management\n2.) Begin v3. A prototype. I will showcase managing the strategy of a real product for Anthropic. With my background, I will focus on Anthropic's Economic Index and display systematically going through the process as if I were working within a collaborative team.",
    id: "snapshot17",
  },
  {
    title: "WIP Update 16: AI Safety & Ethics prototype and prospectus",
    description: "Currently working on v0.21 Milestones. 👉 <a href='/ai-safety-ethics' class='text-[#EBDBBC] hover:text-[#CC785C] underline transition-colors'>Click here to view the AI Safety & Ethics page</a>",
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
    description: "Move static site to new v1 Vercel project and create v1 branch in GitHub to keep versioning records. Keep main branch for most update-to-date project. Learn clone, add, commmit, push flow for v2 on Vercel and GitHub",
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
