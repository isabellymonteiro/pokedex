import './style.scss';

const MainCard = ({title, backgroundStyle}) => {
    return (
        <li className={`cardBackground ${backgroundStyle}`}>
            <h2>{title}</h2>
        </li>
    )
}

export default MainCard