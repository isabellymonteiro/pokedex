import './style.scss';

const MainCard = ({title, backgroundStyle}) => {
    return (
        <li className={`mainCard mainCard--${backgroundStyle}`}>
            <h2 className='mainCard__title'>{title}</h2>
        </li>
    )
}

export default MainCard