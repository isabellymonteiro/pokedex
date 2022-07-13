import { useEffect } from 'react'
import { useCallback } from 'react'
import { getPokemonAbout } from '../../../services/api'
import './styles.scss'

const PokemonAbout = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  
  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const pokemonData = await getPokemonAbout(bulbasaur)

    if (pokemonData) {
      setPokemons(pokemonData)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (state) {
      setPokemons(state)
    } else {
      fetchPokemon()
    }
  }, [fetchPokemon])
  return (
    <h2>Pokemon About</h2>
  )
}

export default PokemonAbout