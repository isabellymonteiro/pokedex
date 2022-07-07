import PageTitle from '@atoms/PageTitle'
import Searchbar from '@molecules/Searchbar'

import './styles.scss'

const HomeHeader = () => {
  return (
    <div className='homeHeader'>
      <PageTitle>What Pokemon <span className='pageTitleBreak'>are you looking for?</span></PageTitle>
      <Searchbar/>
    </div>
  )
}

export default HomeHeader