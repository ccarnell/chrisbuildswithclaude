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
    name: 'Version 2 (current version)',
    description:
      'Deployed new Vercel boilerplate. Began working with Next.js, Typescript, MongoDB, and setup Claude Code via Anthropic API. Gave it some fancy clothes before submitting my resume.',
    link: 'https://chrisbuildswithclaude.com',
    video: '/v2-chrisbuildswithclaude-project-image.webp',
    id: 'project2',
  },
  {
    name: 'Version 1',
    description:
      'Simply deployed my first Next.js app via Vercel to hosted domain purchased through Cloudflare to learn programming environment setup and GitHub workflow. Moving on to v2 quickly.',
    link: 'https://v1.chrisbuildswithclaude.com',
    video: '/v1-chrisbuildswithclaude-project-image.png',
    id: 'project1',
  },
]

export const SNAPSHOT: Snapshot[] = [
  {
    title: "Backlog: Ideate Update 11",
    description: "The initial <strong>Idea Concept</strong> to purchase the domain and learn to setup a local environment, Vercel, and GitHub workflow to deploy was completed on the first day. I then spent some time working through various additional technical functionality for self-interest and to continue showing technical learning.\n\nSince I have applied for the Strategic Product Management position, I am now going to take a step back from the demonstration of quickly learning technical implementation details to showcase more holistic and intentional strategic product management capabilities.\n\nAfter discussing the importance of AI safety and ethics I will:\n1.) Within v2, display past work, tools, and frameworks used for strategic product management\n2.) Begin v3. A prototype. I will showcase managing the strategy of a real product for Anthropic. With my background, I will focus on Anthropic's Economic Index and display systematically going through the process as if I were working within a collaborative team.",
    id: "snapshot11",
  },
  {
    title: "WIP Update 10: Discuss importance of AI safety and Ethics",
    description: "Writing narrative",
    id: "snapshot10",
  },
  {
    title: "Update 9: Add new component, animation, and analytics",
    description: "Continued to work with Claude Code. Added Previous Work section with a few products and startup founders I've worked with.",
    id: "snapshot9",
  },
  {
    title: "Update 8: Update Typescript files and styling",
    description: "Updated motion-primitive animations and other styling in Typescript files. Added Anthropic accent colors, but didn't change the entire color palette after discussing with Claude that it would probably raise some ethical concerns with trademark/brand identity and potential confusion. Completely understandable",
    id: "snapshot8",
  },
  {
    title: "Update 7: Claude Code",
    description: "On Windows PC today, so setup WSL. Generated Anthropic API key and setup Claude Code. Holding off on integrating into VS Code. Made first changes with Claude Code: changed constants, variables, text, commented out the blog and committed updates",
    id: "snapshot7",
  },
  {
    title: "Update 6: When to take a breather",
    description: "Ran into some npm Git, Next.js, command-line and environment file issues while trying to setup MongoDB with a v3. A database isn't critical right now—decided to overwrite v2. Wanted at least a small win—completed some easier tasks: updated favicon, and created custom HTML email sig using /public to host SVG icons",
    id: "snapshot6",
  },
  {
    title: "Update 5: Folders, files, and functions",
    description: "Reviewed pages, public, styles, components, package.json and navigated making updates to mainly Typescript files. Learning more about Next.js and Tailwind. Changed some initial text from boilerplate. Added Anthropic's mission to footer",
    id: "snapshot5",
  },
  {
  title: "Update 4: Packages and dependencies",
  description: "Learned difference between local and global packages. Resolved depency issues",
  id: "snapshot4",
  },
  {
    title: "Update 3: Git workflows",
    description: "Moved static site to new v1 Vercel project and created v1 branch in GitHub to keep versioning records. Kept main branch for most updated project. Learned clone, add, commmit, push flow for v2 on Vercel and GitHub",
    id: "snapshot3",
  },
  {
    title: "Update 2: Email forward",
    description: "Set ImprovMX & added SPF records in GoDaddy to setup Gmail's SMTP for personal domain",
    id: "snapshot2",
  },  
  {
    title: "Update 1: Environment setup, local host, and deploy",
    description: "Setup domain via Cloudflare, deployed a boilerplate static project via Vercel, updated DNS and verified SSL. Setup GitHub, installed Git, node.js, etc, and setup VS Code. Learned to deploy and test localhost",
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
]

export const BLOG_POSTS: BlogPost[] = [
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
]

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

export const EMAIL = 'chris@questioningrural.com'
