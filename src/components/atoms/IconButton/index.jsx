import './styles.scss'

const IconButton = ({ Icon, handleOnClick, ariaLabel }) => {
  return (
    <button className='iconButton' onClick={handleOnClick} aria-label={ariaLabel}>
      <Icon/>
    </button>
  )
}

export default IconButton


