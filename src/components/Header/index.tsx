import logo from '../../assets/logo.svg'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Ignite Logo' />
      <h1>Ignite Feed</h1>
    </header>
  )
}
