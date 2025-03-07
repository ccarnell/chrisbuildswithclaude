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
    name: 'PumpTrakr',
    description:
      'IoT irrigation automation web and mobile platform',
    link: 'https://pumptrakr.com/',
    video:
      'https://pumptrakr.com/wp-content/uploads/2025/03/header-devices.webp',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
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
    title: 'Founder',
    start: '2018',
    end: '2024',
    link: 'https://www.youthcodingleague.com/',
    id: 'work2',
  },

]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What is chrisbuildswithclaude.com?',
    description: 'A living document',
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
