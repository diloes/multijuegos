import { useEffect, useState } from 'react'

/**
 * Utilizamos flatMap porque el map por cada item del array nos daría un array, lo que
 * hace que haya varios arrays anidados en el array superior, flatMap nos lo aplana
 * todo en un único array para poder mapear sin problemas(aplana en uno y mapea también).
 */
const IMAGES = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor',
]
  // por cada imagen sacamos un arrary con dos elementos, el primero 'a|url' y el segundo 'b|url'
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  // ordenamos aleatoriamente para que no estén siempre juntos en la cuadricula
  .sort(() => Math.random() - 0.5)

function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    // cuando haya dos iconos en el state 'selected'...
    if (selected.length === 2) {
      // ...si son iguales quitandoles la parte de 'a|' y 'b|' ...
      if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
        //...los guardamos en 'guessed' para que se muestren siempre como resueltos
        setGuessed((guessed) => guessed.concat(selected))
      }
      setTimeout(() => setSelected([]), 1000)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert('¡Has ganado!')
      location.reload() // refresca la página
    }
  }, [guessed])

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr)',
        gap: '24px',
      }}
    >
      {IMAGES.map((image) => {
        /*
         * devuelve un array de dos items separados por '|' y por destructuring extraemos el segundo elemento
         * que le llamamos 'url'
         */
        const [, url] = image.split('|') // [ 'a|', 'https://...' ]

        const handleClick = () => {
          selected.length < 2 && setSelected((selected) => selected.concat(image))
        }

        return (
          <li
            key={image}
            style={{
              cursor: 'pointer',
              padding: 12,
              border: '1px solid #666',
              borderRadius: 12,
            }}
            onClick={handleClick}
          >
            {selected.includes(image) || guessed.includes(image) ? (
              <img src={url} alt="icon" />
            ) : (
              <img src="https://icongr.am/clarity/dot-circle.svg?size=128&color=currentColor" alt="icon" />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Memotest
