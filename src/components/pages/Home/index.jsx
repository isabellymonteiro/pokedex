import Searchbar from '@molecules/Searchbar'
import HomePageCards from '../../molecules/HomePageCards'


import './styles.scss'

const Home = () => {

  return (
    <div className='homePage'>
      <div className='homePage__mainContent'>
        <h1 className='homePage__title'>What Pokemon <span className='homePage__titleBreak'>are you looking for?</span></h1>
        <Searchbar/>
        <HomePageCards/>
      </div>     
      <div className='homePage__news'>
        
      </div>
    </div>
  )
}

export default Home