import { Header, Sidebar } from './components'
import styles from './app.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </>
  )
}
