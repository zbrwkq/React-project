import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BoutonRetour = ({ link }) => {
    return (
        <Link to={`/${link}`} className='link-secondary btnRetour'>
            <FontAwesomeIcon icon={faChevronRight} className='btnRetour' flip='horizontal' /> Retour
        </Link>
    )
}

export default BoutonRetour
