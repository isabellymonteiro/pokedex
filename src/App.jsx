import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import './App.scss'

const App = () => {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          {/*<Route path='/pokedex' element={<Pokedex />} /> */}
      </Routes>
    </div>
  )
}

export default App
