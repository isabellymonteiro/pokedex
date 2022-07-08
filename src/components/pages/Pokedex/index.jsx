import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '@molecules/ErrorMessage'
import PokedexHeader from '@organisms/PokedexHeader'

import './styles.scss'
import { getTwelvePokemons } from '@services/api'

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

  const getTwelve = async() => {
      const twelvePokemonsData = await getTwelvePokemons();

      if (twelvePokemonsData){
        console.log(twelvePokemonsData)
      } else {
        setFetchError(true)
      }

  }
  
  // sem o state acima, performar fetch de pouco a pouco para buscar todos (com infinite scroll)

  return (
    <div className='pokedexPage'>
      {fetchError ?  <ErrorMessage /> : (
        <>
          <PokedexHeader />
          <button onClick={getTwelve}>Click Me!</button>
        </>
        
      )}
    </div>
  )

}


export default Pokedex