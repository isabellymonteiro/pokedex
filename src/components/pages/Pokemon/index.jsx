import { Outlet, useLocation, useParams } from 'react-router-dom'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import SubpagesNav from '@organisms/SubpagesNav'
import PokemonPageMain from '@organisms/PokemonPageMain'
import useFetchPokemon from '@hooks/useFetchPokemon'
import { getPokemon } from '@services/api'

import './styles.scss'

const Pokemon = () => {
  const { pokemonName } = useParams()
  const { state } = useLocation()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, getPokemon, state)

  const subpages = [
    { subpageName: 'about', linkTo: 'about' },
    { subpageName: 'base stats', linkTo: 'base-stats' },
    { subpageName: 'evolution', linkTo: 'evolution' },
    { subpageName: 'moves', linkTo: 'moves' }
  ]

  return (
    <>
      {error && <ErrorMessage />}
      {loading && <LoadingSpinner />}
      {Object.keys(pokemonData).length > 0 && !error && !loading &&
        <div className={`pokemonPage pokemonPage--${pokemonData.types[0].type.name}`}>
          <div className='pokemonPage__mainContent'>
            <PokemonPageMain data={pokemonData} />
          </div>
          <div className='pokemonPage__subpages'>
            <div className='pokemonPage__subpagesContent'>
              <SubpagesNav subpages={subpages} dataToPass={pokemonData} />
              <Outlet />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Pokemon