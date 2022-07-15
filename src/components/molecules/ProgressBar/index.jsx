import './styles.scss'

const ProgressBar = ({ status }) => {

  const statusColor = status >= 100 ? 'var(--green)' : 'var(--red)'

  const statusStyle = {
    width: (status / 255 * 100) + '%',
    backgroundColor: statusColor
  }
  
  return (
    <div className='progressBar'>
      <div className='progressBar__status' style={statusStyle}></div>
    </div>
  )
}

export default ProgressBar