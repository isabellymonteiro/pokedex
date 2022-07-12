import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
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

  return (
    <div className='pokemonPage'>
      {error && <ErrorMessage />}
      {loading && <LoadingSpinner />}
      {pokemon && !loading &&
        <>
          hi pokemon {pokemonName}!
          <div className='pokemonPage__subpages'>
            <ul>
              <li><Link to='about'>About</Link></li>
              <li><Link to='base-stats'>Base Stats</Link></li>
              <li><Link to='evolution'>Evolution</Link></li>
              <li><Link to='moves'>Moves</Link></li>
            </ul>
            <Outlet />
          </div>
        </>
      }
    </div>
  )
}

export default Pokemon