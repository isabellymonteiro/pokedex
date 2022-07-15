import { useNavigate } from 'react-router-dom'
import IconButton from '@atoms/IconButton'
import Arrow from '@atoms/Icons/Arrow'
import LikeButton from '@atoms/Icons/LikeButton'

import './styles.scss'

const PokemonHeader = ({ pokemonData }) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/pokedex')
  }

  return (
    <div className='pokemonHeader'>
      <div className='pokemonHeader__tools'>
        <IconButton Icon={Arrow} handleOnClick={goBack} ariaLabel='Go back to pokedex' iconColor='#FFFFFF'/>
        <LikeButton />
      </div>
      <div className='pokemonHeader__title'>
        <h1 className='pokemonHeader__name'>{pokemonData.name}</h1>
        <span className='pokemonHeader__id'>#{pokemonData.id.toString().padStart(3, '0')}</span>
      </div>
      <div className='pokemonHeader__info'>
        <div className='pokemonHeader__type'>
          <span className='pokemonHeader__type--1'>{pokemonData.types[0].type.name}</span>
          {pokemonData.types[1] && <span className='pokemonHeader__type--2'>{pokemonData.types[1].type.name}</span>}
        </div>
        {/* span for the pokemon type (eg.: bulbasaur - Seed Pokemon) */}
      </div>
    </div>
  )
}

export default PokemonHeader