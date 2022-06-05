import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/marceometry.png' alt='Marcelino Teixeira' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelino Teixeira</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-06-05 08:13:30'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button type='button'>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
