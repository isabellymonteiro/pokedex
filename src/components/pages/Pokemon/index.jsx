import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import SubpagesNav from '@organisms/SubpagesNav'
import { getPokemon } from '@services/api'

import './styles.scss'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { pokemonName } = useParams()
  const { state } = useLocation()
 
  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const pokemonData = await getPokemon(pokemonName.toLowerCase())
    
    if (pokemonData) {
      setPokemon(pokemonData)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (state) {
      setPokemon(state)
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
      {pokemon && !loading &&
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