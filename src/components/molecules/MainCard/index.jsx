import './style.scss';

const MainCard = ({title, backgroundStyle, pokeball}) => {
    return (
        <li className={`cardBackground cardBackground--${backgroundStyle}`}>
            <h2>{title}</h2>
            <img src={pokeball} className="cardBackground__pokeballImg"/>
        </li>
    )
}

export default MainCard