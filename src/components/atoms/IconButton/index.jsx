import './styles.scss'

const IconButton = ({ Icon, handleOnClick, ariaLabel, iconColor = false }) => {
  return (
    <button className='iconButton' onClick={handleOnClick} aria-label={ariaLabel}>
      <Icon color={iconColor} />
    </button>
  )
}

export default IconButton


