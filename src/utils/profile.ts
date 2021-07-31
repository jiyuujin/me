export const positions: string[] = [
  'Web Developer 🔨',
  'Vue.js Advocator 😎',
  'React Enthusiast 😀',
]

export const skills: Array<{
  title: string
  rating: number
  items: Array<{
    text: string
    strong?: boolean
  }>
}> = [
  {
    title: 'Vue.js',
    rating: 5,
    items: [
      {
        text: 'Vue.js Advocator 😎',
        strong: true,
      },
      {
        text: 'Nuxt.js',
      },
    ],
  },
  {
    title: 'Node.js',
    rating: 4,
    items: [
      {
        text: 'TypeScript 💪',
        strong: true,
      },
      {
        text: 'Babel',
      },
        {
            text: 'Webpack',
        },
    ],
  },
  {
    title: 'React',
    rating: 3,
    items: [
      {
        text: 'React Enthusiast 😀',
        strong: true,
      },
      {
        text: 'Next.js',
      },
      {
        text: 'Gatsby.js',
      },
    ],
  },
  {
    title: 'VC & CI',
    rating: 4,
    items: [
      {
        text: 'Github Actions 🐙',
        strong: true,
      },
      {
        text: 'Circle CI',
      },
    ],
  },
  {
    title: 'Infrastructure',
    rating: 4,
    items: [
      {
        text: 'Serverless ⚡️️',
        strong: true,
      },
      {
        text: 'AWS',
      },
      {
        text: 'GCP / Firebase',
      },
    ],
  },
  {
    title: 'Scala',
    rating: 3,
    items: [
      {
        text: 'Challenger 😛',
        strong: true,
      },
      {
        text: 'Playframework',
      },
      {
        text: 'Akka HTTP',
      },
    ],
  },
]
