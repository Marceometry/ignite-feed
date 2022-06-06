import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar, Comment } from '..'
import { AuthorModel, PostModel } from '../../App'
import styles from './styles.module.css'

export type CommentModel = {
  id: number
  author: AuthorModel
  content: string
  publishedAt: Date
  likes: number
}

type PostProps = {
  post: PostModel
}

const comments: CommentModel[] = [
  {
    id: 1,
    likes: 0,
    publishedAt: new Date('2022-06-05 02:00:00'),
    author: {
      name: 'Marcelino',
      avatarUrl: 'http://github.com/marceometry.png',
      role: 'Front-end Developer',
    },
    content: 'Muito bom!',
  },
  {
    id: 2,
    likes: 2,
    publishedAt: new Date('2022-06-05 01:00:00'),
    author: {
      name: 'Diego',
      avatarUrl: 'http://github.com/diego3g.png',
      role: 'CTO @Rocketseat',
    },
    content: 'Parabéns',
  },
]

export const Post = ({ post }: PostProps) => {
  const [commentList, setCommentList] = useState<CommentModel[]>(comments)
  const [newCommentText, setNewCommentText] = useState('')

  const { author, publishedAt } = post

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const deleteComment = (id: number) => {
    setCommentList(commentList.filter((c) => c.id !== id))
  }

  const handleCreateNewComment = (e: any) => {
    e.preventDefault()
    if (!newCommentText.length) return
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        content: newCommentText,
        publishedAt: new Date(),
        likes: 0,
        author: {
          name: 'Marcelino',
          avatarUrl: 'http://github.com/marceometry.png',
          role: 'Front-end Developer',
        },
      },
    ])
    setNewCommentText('')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>
          return (
            <p key={line.content}>
              <a href=''>{line.content}</a>
            </p>
          )
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          onChange={(e) => setNewCommentText(e.target.value)}
          value={newCommentText}
          required
        />

        {!!newCommentText && <button type='submit'>Publicar</button>}
      </form>

      <div className={styles.commentList}>
        {commentList.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={() => deleteComment(comment.id)}
          />
        ))}
      </div>
    </article>
  )
}
