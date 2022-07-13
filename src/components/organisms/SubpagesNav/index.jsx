import { NavLink } from 'react-router-dom'

import './styles.scss'

const SubpagesNav = ({ subpages }) => {
  const subpagesItems = subpages.map((item) => {
    return (
      <li key={item.linkTo} className='subpagesNav__item'>
        <NavLink
          to={item.linkTo} 
          className={({ isActive }) =>
            (isActive ? 'subpagesNav__link subpagesNav__link--active' : 'subpagesNav__link')
          }>
          {item.subpageName}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className='subpagesNav__container'>
      <ul className='subpagesNav'>
        {subpagesItems}
      </ul>
    </nav>
  )
}

export default SubpagesNav