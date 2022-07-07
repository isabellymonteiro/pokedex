import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '@molecules/ErrorMessage'

import './styles.scss'

const Pokedex = () => {
  const [fetchError, setFetchError] = useState(false)

  const { state } = useLocation()

  useEffect(() => {
    if (state) {
      if (state.error) {
        setFetchError(true)
      } else if (state.filteredPokemonBasicData) {
        console.log(state.filteredPokemonBasicData)
      }
    }
  }, [])
  
  // sem o state acima, performar fetch de pouco a pouco para buscar todos (com infinite scroll)

  return (
    <div className='pokedexPage'>
      {fetchError ?
        <ErrorMessage /> :
        <p>Pokedex</p>
      }
    </div>
  )
}

export default Pokedex