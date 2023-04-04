import Card from '../components/Card'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div style={{ display: 'grid', justifyContent: 'center' }}>
      <h3 className={styles.title}>¡Elige uno de los tres juegos y diviértete!</h3>
      <div className={styles.container}>
        <a href="/memotest" style={{ textDecoration: 'none' }}>
          <Card gameName="Memotest" image="/memotest.webp" />
        </a>
        <a href="/wpm" style={{ textDecoration: 'none' }}>
          <Card gameName="Mecanografía" image="/teclado.jpg" />
        </a>

        <a href="/pokemon" style={{ textDecoration: 'none' }}>
          <Card gameName="Adivina Pokemon" image="/pokemon.jpg" />
        </a>
      </div>
    </div>
  )
}

export default Home
