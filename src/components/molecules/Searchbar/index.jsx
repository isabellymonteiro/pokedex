import IconButton from '@atoms/IconButton'
import SearchIcon from '@atoms/Icons/SearchIcon'
import { useRef } from 'react'

import './styles.scss'

const Searchbar = () => {

  const searchbarInputRef = useRef()

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') searchTerm()
  }

  const searchTerm = () => {
    console.log(searchbarInputRef.current.value)
  }

  return (
    <div className='searchbar'>
      <IconButton Icon={SearchIcon} handleOnClick={searchTerm} ariaLabel='Search'/>
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


