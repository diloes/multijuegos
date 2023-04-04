import styles from './Card.module.css'

interface Props {
  gameName: string
  image: string
}

const Card = ({ gameName, image }: Props) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt={gameName} />
      <h3 className={styles.card__title}>{gameName}</h3>
    </div>
  )
}

export default Card
