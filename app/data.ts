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
    name: 'Version 1',
    description:
      'Simply deployed my first Next.js app via Vercel to hosted domain. Moving on to v2 quickly.',
    link: 'https://www.v1.chrisbuildswithclaude.com',
    video: '/v1-chrisbuildswithclaude-project-image.png',
    id: 'project1',
  },
  // Comment out the second project until we have content for it
  /*
  {
    name: 'Name_WIP2',
    description: 'description_wip2',
    link: 'url of Project 2 title',
    video: 'image/video of Project 2',
    id: 'project2',
  },
  */
]

export const SNAPSHOT: Snapshot[] = [
  {
    title: "Backlog: Ideating Update 11",
    description: "The <strong>Deployment Objective</strong> I set out to do was completed on the first day. I then spent some time randomly working through different additional technical functionality for self-interest and to continue showing technical learning. Since I have applied for the Strategic Product Management position, I am now going to take a step back from the demonstration of quickly learning technical implementation details to showcase more intentional and holistic product management capabilities.\n\nAfter discussing the importance of AI safety and ethics I will showcase how I actually go about strategic product development.\n1.) Within v2, display past work, tools, and frameworks used\n2.) v3. I will then showcase actually managing the strategy of a real product for Anthropic. With my background, I will focus on the Economic Index and display systematically going through the process as if I were working within a team collaborating.",
    id: "snapshot11",
  },
  {
    title: "WIP Update 10: Discuss importance of AI safety and Ethics",
    description: "Writing narrative",
    id: "snapshot10",
  },
  {
    title: "Update 9: Add Previous Work section",
    description: "Continued to work with Claude Code. Added a few startups and products that I have previously either helped build from scratch or worked directly with technical and non-technical founders. Added Vercel Analytics so we have measurements in place as a tool to identify if the product is successful in its objective. Added an Expand/Collapse functionality with a preview display directly above, and dressed up some of the site's styling.",
    id: "snapshot9",
  },
  {
    title: "Update 8: Update styling and better component comprehension",
    description: "Updated motion-primitive animations under the Selected Projects section to accept image and/or video formats. Added title, image, link, and description to v1 site. Updated phone number in Header to include sms: and tel: icons and functionality. Threw in some Anthropic accent colors but didn't change the entire color palette after discussing with Claude that it would probably raise some ethical concerns with trademark/brand identity and potential confusion. Completely understandable",
    id: "snapshot8",
  },
  {
    title: "Update 7: Claude Code",
    description: "On Windows PC today, so setup WSL. Generated Anthropic API key and setup Claude Code. Holding off on integrating into VS Code. Made first changes with Claude Code: changed constants, variables, text, commented out the blog and committed updates",
    id: "snapshot7",
  },
  {
    title: "Update 6: When to take a breather",
    description: "Ran into some npm Git, Next.js, command-line and environment file issues while trying to setup MongoDB with a v3. Since a database isn't critical right now, decided to abandon and overwrite v2. Wanted at least a small win, so completed some easier tasks with updating favicon, and hosting SVG icons while custom developing an email sig with HTML",
    id: "snapshot6",
  },
  {
    title: "Update 5: Folders files, and functions",
    description: "Reviewed pages, public, styles, components, package.json and navigated making updates to mainly Typescript files. Learning more about Next.js and Tailwind. Changed some initial text from boilerplate. Added Anthropic's mission to footer",
    id: "snapshot5",
  },
  {
  title: "Update 4: Packages and dependencies",
  description: "Learned difference between local and global packages. Resolved depency issues",
  id: "snapshot4",
  },
  {
    title: "Update 3: Git workflow",
    description: "Moved static site to new v1 Vercel project and created v1 branch in GitHub to keep versioning records. Kept main branch for most updated project. Learned clone, add, commmit, push flow for v2 on Vercel and GitHub",
    id: "snapshot3",
  },
  {
    title: "Update 2: Email forwarding",
    description: "Set ImprovMX & added SPF records in GoDaddy to setup Gmail's SMTP for personal domain",
    id: "snapshot2",
  },  
  {
    title: "Update 1: Setup, local deployment, and hosting",
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
    description: "Multi-modal AI-powered newsroom focused on revitalizaing newsroom deserts",
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
    description: "Brand-focused AI platform for companies to manage entire brand systems",
    imageUrl: "/sho-ai-previous-work-screenshot.webp",
    externalUrl: "https://www.sho.ai/"
  },
  {
    id: "previouswork5",
    title: "Swipesum",
    description: "Over $30B in OCR payment processing from fortune 500 companies to small businesses",
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
