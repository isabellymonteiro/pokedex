import './styles.scss'

const PageTitle = ({ children }) => {
  return (
    <h1 className='pageTitle'>
      {children}
    </h1>
  )
}

export default PageTitle