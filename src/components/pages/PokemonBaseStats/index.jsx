import { useContext } from 'react'
import { PokemonContext } from '@contexts/PokemonContext'

import './styles.scss'

const PokemonBaseStats = () => {
  const { pokemonData } = useContext(PokemonContext)
  
  return (
    <div className='pokemonBaseStats'>
      <div className='pokemonBaseStats__progressBar'>
        <div 
          className='pokemonBaseStats__progressBarStatus'
          style={{ height: '24px', width: '75%'}}
        >
        </div>
      </div>
    </div>
  )
}

export default PokemonBaseStats