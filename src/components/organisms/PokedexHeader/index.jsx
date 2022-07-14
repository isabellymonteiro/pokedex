import { useNavigate } from 'react-router-dom'
import PageTitle from '@atoms/PageTitle'
import IconButton from '@atoms/IconButton'
import BackArrow from '@atoms/Icons/BackArrow'
import List from '@atoms/Icons/List'

import './styles.scss'

const PokedexHeader = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const openList = () => {
    console.log('list opened')
    //do nothing as of now
  }

  return (
    <div className='pokedexHeader'>
      <div className='pokedexHeader__tools'>
        <IconButton 
          Icon={BackArrow} 
          handleOnClick={goBack} 
          ariaLabel='Go back to home page'
          iconColor='#303943' />
        <IconButton Icon={List} handleOnClick={openList} ariaLabel='Open configuration list' />
      </div>
        <PageTitle>Pokedex</PageTitle>
    </div>
  )
}

export default PokedexHeader