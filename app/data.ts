type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
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
    name: 'Project 1',
    description:
      'Description of Project 1',
    link: 'Url of Project 2 title',
    video:
      'image/video of Project 1 (checkout cloudinary)',
    id: 'project1',
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2',
    link: 'url of Project 2 title',
    video:
      'image/video of Project 2',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Codefi and Codefi Foundation on Rural Innovation',
    title: 'Former Co-founder and Former Executive Director',
    start: '2014',
    end: '2024',
    link: 'https://www.codefiworks.com/',
    id: 'work1',
  },
  {
    company: 'Youth Coding League',
    title: 'Former Founder',
    start: '2018',
    end: '2024',
    link: 'https://www.youthcodingleague.com/',
    id: 'work2',
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
