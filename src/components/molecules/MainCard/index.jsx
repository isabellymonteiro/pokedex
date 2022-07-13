import { Link } from 'react-router-dom';

import './style.scss';

const MainCard = ({title, backgroundStyle, linkTo}) => {
    return (
        <Link to={linkTo} className="mainCard__link">
        <li className={`mainCard mainCard--${backgroundStyle}`}>
            
            <h2 className='mainCard__title'>{title}</h2>
            
        </li>
        </Link>
    )
}

export default MainCard