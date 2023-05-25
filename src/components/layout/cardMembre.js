import { Link } from 'react-router-dom'

const CardMembre = ({ membre }) => {
    return (
        <div className='card cardMembre mt-4'>
            <img className='cardImageMembre' src={membre.image} alt={membre.name}></img>
            <div className='text-center'>{membre.name}</div>
            <div className='text-center'>Agence : {membre.agency}</div>
            <a className='text-center' href={membre.wikipedia}>
                Page wikipédia
            </a>
            <div className='text-center'>Status : {membre.status}</div>
        </div>
    )
}

export default CardMembre
