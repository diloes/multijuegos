import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.enlaces}>
        <div className={styles.box}>
          <a href="/memotest">
            {/* <img src="/memotest.webp" /> */}
            <h3>Memotest</h3>
          </a>
        </div>

        <div className={styles.box}>
          <a href="/wpm">
            {/* <img src="/teclado.jpg" /> */}
            <h3>Palabras por Minuto</h3>
          </a>
        </div>

        <div className={styles.box}>
          <a href="pokemon">
            {/* <img src="/pokemon.jpg" /> */}
            <h3>Adivina el Pokemon</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
