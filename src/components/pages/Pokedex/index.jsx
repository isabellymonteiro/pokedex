import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '@molecules/ErrorMessage'
import PokedexHeader from '@organisms/PokedexHeader'
import PokedexCards from '@organisms/PokedexCards'
import { getTwentyPokemons, getFilteredPokemons } from '@services/api'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'

import './styles.scss'

export const MAX_POKEMONS = 151

const Pokedex = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const { state } = useLocation()
  const observer = useRef()

  const lastPokemonRef = useCallback(node => {
    if (loading || state) return
    if (observer.current) observer.current.disconnect()
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && pokemons.length < MAX_POKEMONS) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
        console.log('Visible')
      }
    }, options)

    if (node) observer.current.observe(node)
  }, [loading])

  const fetchTwentyPokemons = useCallback(async () => {
    setLoading(true)
    const twelvePokemonsData = await getTwentyPokemons(pageNumber * 20 - 19)

    if (twelvePokemonsData) {
      if (pokemons.length === 0) {
        setPokemons(twelvePokemonsData)
      } else {
        setPokemons(prevPokemons => {
          return [...prevPokemons, ...twelvePokemonsData]
        })
      }
    } else {
      setError(true)
    }
    setLoading(false)
  }, [pageNumber])

  const fetchFilteredPokemons = useCallback(async (filteredPokemonBasicData) => {
    setLoading(true)
    const pokemonsData = await getFilteredPokemons(filteredPokemonBasicData)

    if (pokemonsData) {
      setPokemons(pokemonsData)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])
  
  useEffect(() => {
    if (state) {
      if (state.error) {
        setError(true)
      } else if (state.filteredPokemonUrls) {
        fetchFilteredPokemons(state.filteredPokemonUrls)
      }
    } else {
      fetchTwentyPokemons()
    }
  }, [fetchTwentyPokemons, fetchFilteredPokemons, pageNumber])

  return (
    <div className='pokedexPage'>
      {error && <ErrorMessage />}
      {!error &&
        <>
          <PokedexHeader />
          {!!pokemons.length && (
            <PokedexCards data={pokemons} lastCardRef={lastPokemonRef} />
          )}
          {loading && 
            <div className='pokedexPage__loading'>
              <LoadingSpinner />
            </div>
          }
        </>
      }
    </div>
  )
}

export default Pokedex