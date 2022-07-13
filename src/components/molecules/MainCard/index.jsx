import { Link } from 'react-router-dom';

import './style.scss';

const MainCard = ({title, backgroundStyle, linkTo}) => {
    return (
        <li className={`mainCard mainCard--${backgroundStyle}`}>
            <Link to={linkTo} className="mainCard__link">
                <h2 className='mainCard__title'>{title}</h2>
            </Link>
        </li>
    )
}

export default MainCard