import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@pages/Home'
import Pokedex from '@pages/Pokedex'
import Pokemon from '@pages/Pokemon'
import PokemonAbout from '@pages/PokemonAbout'
import PokemonBaseStats from '@pages/PokemonBaseStats'
import PokemonEvolution from '@pages/PokemonEvolution'
import PokemonMoves from '@pages/PokemonMoves'

//import { PokemonProvider } from '@contexts/PokemonContext'

import './App.scss'

const App = () => {
  
  return (
    <div className="App">
      {/* <PokemonProvider> */}
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:pokemonName/*' element={<Pokemon />}>
            <Route path='about' element={<PokemonAbout />} />
            <Route path='base-stats' element={<PokemonBaseStats />} />
            <Route path='evolution' element={<PokemonEvolution />} />
            <Route path='moves' element={<PokemonMoves />} />
          </Route>
        </Routes>
      {/* </PokemonProvider> */}
    </div>
  )
}

export default App