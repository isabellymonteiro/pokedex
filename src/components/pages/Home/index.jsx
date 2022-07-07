import HomePageCards from '@organisms/HomePageCards'
import HomeHeader from '@organisms/HomeHeader'

import './styles.scss'

const Home = () => {

  return (
    <div className='homePage'>
      <div className='homePage__mainContent'>
        <HomeHeader />
        <HomePageCards/>
      </div>     
      <div className='homePage__news'></div>
    </div>
  )
}

export default Home