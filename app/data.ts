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
    name: 'Name_WIP1',
    description:
      'description_wip1',
    link: 'Url of Project 2 title',
    video:
      'image/video of Project 1 (checkout cloudinary)',
    id: 'project1',
  },
  {
    name: 'Name_WIP2',
    description: 'description_wip2',
    link: 'url of Project 2 title',
    video:
      'image/video of Project 2',
    id: 'project2',
  },
]

export const SNAPSHOT: Snapshot[] = [
  {
    title: "Setup, local deployment, and hosting",
    description: "Setup domain via Cloudflare, deployed a boilerplate static project via Vercel, updated DNS and verified SSL. Setup GitHub, installed Git, node.js, etc, and setup VS Code. Learned to deploy and test localhost",
    id: "snapshot1",
  },
  {
    title: "Email forwarding",
    description: "Set ImprovMX & added SPF records in GoDaddy to setup Gmails SMTP for personal domain",
    id: "snapshot2",
  },
  {
    title: "Git workflow",
    description: "Moved static site to new v1 Vercel project and created v1 branch in GitHub to keep versioning records. Kept main branch for most updated project. Learned clone, add, commmit, push flow for v2 on Vercel and GitHub",
    id: "snapshot3",
  },
  {
    title: "Packages and Dependencies",
    description: "Learned difference between local and global packages. Resolved depency issues",
    id: "snapshot4",
  },
  {
    title: "Folders files, and functions",
    description: "Reviewed pages, public, styles, components, package.json and navigated making updates to mainly HTML/CSS. Learning more about Next.js and Tailwind",
    id: "snapshot5",
  },
  {
    title: "When to take a breather",
    description: "Ran into some npm Git, Next.js, command-line and environment file issues while trying to setup MongoDB with a v3. Decided to abandon and overwrite v2. Moved on to easier tasks with updating favicon, and hosting SVG icons while custom developing an email sig with HTML",
    id: "snapshot6",
  },
  {
    title: "Claude Code",
    description: "On Windows PC today, so setup WSL. Generated Anthropic API key and setup Code with Claude. Holding off on integrating into VS Code. Made first changes with Claude Code and committed updates",
    id: "snapshot7",
  }
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
