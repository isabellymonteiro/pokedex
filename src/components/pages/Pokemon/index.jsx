import { Outlet, useLocation, useParams } from 'react-router-dom'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import SubpagesNav from '@organisms/SubpagesNav'
import useFetchPokemon from '@hooks/useFetchPokemon'

import './styles.scss'

const Pokemon = () => {
  const { pokemonName } = useParams()
  const { state } = useLocation()
 
  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, state)
console.log(pokemonData)
  const subpages = [
    { subpageName: 'about', linkTo: 'about' },
    { subpageName: 'base stats', linkTo: 'base-stats' },
    { subpageName: 'evolution', linkTo: 'evolution' },
    { subpageName: 'moves', linkTo: 'moves' }
  ]

  return (
    <div className='pokemonPage'>
      {error && <ErrorMessage />}
      {loading && <LoadingSpinner />}
      {pokemonData && !loading &&
        <>
          <div className='pokemonPage__subpages'>
            <SubpagesNav subpages={subpages} dataToPass={pokemonData} />
            <Outlet />
          </div>
        </>
      }
    </div>
  )
}

export default Pokemon