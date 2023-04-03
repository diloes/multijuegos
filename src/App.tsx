import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Memotest from './screens/Memotest'
import Pokemon from './screens/Pokemon'
import WordsPerMinute from './screens/WordsPerMinute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/wpm" element={<WordsPerMinute />} />
    </Routes>
  )
}

export default App
