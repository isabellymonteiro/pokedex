import Error from '@atoms/Icons/Error'

import './styles.scss'

const ErrorMessage = () => {
  return (
    <div className='errorMessage'>
      <Error />
      <p className='errorMessage__text'>Something went wrong!</p> 
    </div>
  )
}

export default ErrorMessage