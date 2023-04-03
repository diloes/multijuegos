# Multijuegos - React

Esta webapp consiste en una SPA con tres mini juegos:

- Memotest(Juego de memoria).
- WPM
- Pokemon

## Memotest

El juego consiste en adivinar descubrir donde están las parejas de imágenes que son iguales.
Tenemos 10 imagenes repetidas 2 veces.
Por ejemplo: hago click en un cuadrado y sale el logo de JS, pues tengo que buscar donde está el otro logo de JS.
Si no acierto, se vuelven a ocultar ambas. Si acierto se quedan descubiertas y sigo el juego hasta que descubro todas.

### Cómo funciona la lógica de nuestro Memotest(por orden de código)

1. Tenemos un array con las urls de las imagenes que vamos a utilizar.
2. Necesitamos tener una copia de cada imagen, para ello iteramos sobre dicho array, por cada elemento
   devolvemos un array con dos elementos que contienen 'a|' o 'b|' + la url [ 'a|url', 'b|url' ].
   Utilizamos `flatMap` para en primera medida que nos aplane los arrays anidados que hemos ido creando
   por cada imagen en un solo array. Y en segunda medida actua como el `map` ordenando aleatoriamente con el
   método `sort` las urls para que no estén juntas las mismas imagenes y tampoco estén todas las veces en el mismo sitio.
3. Tenemos dos estados en nuestra app. Uno llamado **selected** donde vamos a guardar las imagenes que clickemos, y
   otro llamado **guessed** donde vamos a guardar las imagenes que vayamos resolviendo.
4. El primer useEffect actúa cuando cambia **selected**. Valora si las dos imágenes(url) son iguales, si es así, las
   guardamos en el estado **guessed** para que se muestren siempre. Si no, pasado 1 seg convierte **selected** en un array vacío
   y las imágenes se vuelven a ocultar.
5. El segundo useEfecct valora si están todas las imagenes descubiertas, muestra un alert y recarga la página.
6. El componente retorna un <ul>. Dentro de este iteramos sobre las imagenes mediante `map`. Por cada elemento
   retornamos un <li>, este <li> tiene un evento de click, el cual valora que en **selected** haya siempre como máximo dos
   elementos y si son iguales las guarda en **guessed**.
   Dentro del <li> valoramos si la imagen está clickada o solucionada para mostrarla. Si no, muestra la imagen que oculta la imagen
   a descubrir.

## Words Per Minute

El juego consiste en escribir el mayor número de palabras posible en un minuto.

### Cómo funciona la lógica de nuestro WordsPerMinute(por orden de código)

1. Tenemos un arrary con una serie de palabras que vamos a utilizar para jugar.
2. Hay 4 estados en esta aplicación:
   - **word** -> Esta es la palabra que tenemos que teclear.
   - **characterCount** -> Vamos guardando aquí las letras que vamos tecleando correctamente.
   - **buffer** -> Es el value del input, lo que estamos tecleando mientras jugamos.
   - **time** -> Mide el minuto que tenemos para teclear las palabras.
3. La función `handleSubmit` con la que manejamos el submit del form:
   - Evita la recarga de la página con `preventDefatult`.
   - Valora si la palabra escrita en el input es igual que la que tenemos en **word**. Si es así
     cambia el estado **word** por otra palabra de nuestro array y suma el número de letras de la palabra ya resuleta
     en nuestro contador.
   - Pone el **buffer** vacío para que volvamos a escribir en el input la nueva palabra.
4. Un `useEffect` que nos resta el tiempo hasta llegar a 0.
5. El componente retorna varios headers y un formulario.

## Adivina el Pokemon

El juego consiste en que sale la sombra de un pokemon y hay que adivinarlo.

### Cómo funciona la lógica de Adivina el Pokemon(por orden de código)

1. Disponemos de un array con los pokemons que vamos a tener para que el jugador adivine.
2. Un estado **hasWon** para comprobar si el jugador ha acertado el pokemon.
3. Al hacer submit del <form> comprobamos si el valor del input es igual al pokemon que hay que adivinar.
   Y muestra un `alert()` con el mensaje correspondiente.
