import { Header, Post, Sidebar } from './components'
import styles from './app.module.css'

export type ContentModel = {
  type: 'paragraph' | 'link'
  content: string
}

export type AuthorModel = {
  avatarUrl: string
  name: string
  role: string
}

export type PostModel = {
  id: number
  author: AuthorModel
  publishedAt: Date
  content: ContentModel[]
}

const posts: PostModel[] = [
  {
    id: 1,
    publishedAt: new Date('2022-06-05 02:00:00'),
    author: {
      name: 'Marcelino',
      avatarUrl: 'http://github.com/marceometry.png',
      role: 'Front-end Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
  },
  {
    id: 2,
    publishedAt: new Date('2022-06-05 01:00:00'),
    author: {
      name: 'Diego',
      avatarUrl: 'http://github.com/diego3g.png',
      role: 'CTO @Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala dev!',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
  },
]

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Sidebar />
          <main>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
