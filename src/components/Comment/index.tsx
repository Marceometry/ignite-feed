import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar, CommentModel } from '..'
import styles from './styles.module.css'

type CommentProps = {
  comment: CommentModel
  onDeleteComment: () => void
}

export const Comment = ({ comment, onDeleteComment }: CommentProps) => {
  const { author, content, likes, publishedAt } = comment
  const [likeCount, setLikeCount] = useState(likes)

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleLikeComment = () => {
    setLikeCount((state) => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} alt={author.name} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button title='Deletar comentário' onClick={onDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type='button' onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
