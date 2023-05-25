import { Link } from 'react-router-dom'

const CardEquipage = ({ membre }) => {
    return (
        <Link
            className='text-decoration-none'
            key={membre.id}
            to={{ pathname: `/membre/${membre.id}` }}
        >
            <div className='card m-1'>
                <img className='cardImage' src={membre.image} alt={membre.name}></img>
                <div className='text-center'>{membre.name}</div>
                <div className='text-center'>{membre.agency}</div>
            </div>
        </Link>
    )
}

export default CardEquipage
