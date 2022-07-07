import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@atoms/IconButton'
import SearchIcon from '@atoms/Icons/Search'
import { getAllPokemonBasicData } from '@services/api'

import './styles.scss'

const POKEMONS_LIMIT = 151

const Searchbar = () => {
  const navigate = useNavigate()
  const searchbarInputRef = useRef()

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') getPokemons()
  }

  const getPokemons = async () => {
    if (searchbarInputRef.current.value.trim() !== '') {
      const allPokemonBasicData = await getAllPokemonBasicData(POKEMONS_LIMIT)
      if (allPokemonBasicData) {
        const searchTerm = searchbarInputRef.current.value.trim()
        const filteredPokemonBasicData = filterPokemons(allPokemonBasicData, searchTerm)
        navigate('/pokedex', { state: { filteredPokemonBasicData } })
      } else {
        navigate('/pokedex', { state: { error: true } })
      }
    }
  }

  const filterPokemons = (pokemons, searchTerm) => {
    const filteredPokemons = pokemons.results.filter((pokemon) =>
      pokemon.name.includes(searchTerm.toLowerCase())
    )
    return filteredPokemons
  }

  return (
    <div className='searchbar'>
      <IconButton Icon={SearchIcon} handleOnClick={getPokemons} ariaLabel='Search'/>
      <label 
        htmlFor='searchbarInput'
        className='searchbar__inputLabel--visuallyHidden'
      >
        Search:
      </label>
      <input
        className='searchbar__input'
        type='search'
        id='searchbarInput'
        placeholder='Search Pokemon, Move, Ability etc'
        onKeyPress={handleOnKeyPress}
        ref={searchbarInputRef}
      />
    </div>
  )
}

export default Searchbar