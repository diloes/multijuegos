import { useState } from 'react'

const POKEMONS = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
]

// calculamos un numero al azar con límite numero de pokemons en nuestro array
const MATCH = Math.floor(Math.random() * POKEMONS.length)

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement
}

const Pokemon = () => {
  const [hasWon, toggleWon] = useState(false)

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault()

    const { pokemon } = event.currentTarget

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true)
      alert('¡Has ganado!')
    } else {
      alert('¡Has perdido!')
    }
  }

  return (
    <div>
      <h1>Adivina el Pokemon</h1>
      <img
        height={512}
        width={512}
        style={{ imageRendering: 'pixelated', filter: hasWon ? '' : 'brightness(0) invert(1)' }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
        alt=""
      />
      {hasWon ? (
        <button style={{ width: '100%' }} onClick={() => location.reload()}>
          Jugar otra vez
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="pokemon" autoFocus />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  )
}

export default Pokemon
