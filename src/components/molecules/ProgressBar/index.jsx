import './styles.scss'

const ProgressBar = ({ status }) => {

  const statusColor = status > 50 ? 'var(--green)' : 'var(--red)'

  const statusStyle = {
    width: status + '%',
    backgroundColor: statusColor
  }
  
  return (
    <div className='progressBar'>
      <div className='progressBar__status' style={statusStyle}></div>
    </div>
  )
}

export default ProgressBar