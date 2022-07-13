import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import SubpagesNav from '@organisms/SubpagesNav'
import { PokemonContext } from '@contexts/PokemonContext'
import { getPokemon } from '@services/api'

import './styles.scss'

const Pokemon = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { pokemonData, setPokemonData } = useContext(PokemonContext)
  const { pokemonName } = useParams()
  const { state } = useLocation()
 
  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const pokemon = await getPokemon(pokemonName.toLowerCase())
    
    if (pokemon) {
      setPokemonData(pokemon)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (state) {
      setPokemonData(state)
    } else {
      fetchPokemon()
    }
  }, [fetchPokemon])

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
            <SubpagesNav subpages={subpages} />
            <Outlet />
          </div>
        </>
      }
    </div>
  )
}

export default Pokemon