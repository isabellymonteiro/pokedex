import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import Pokedex from '@pages/Pokedex'
import './App.scss'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokedex' element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
