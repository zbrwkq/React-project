import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Card = ({ link, children }) => {
    return (
        <div className='card col-5 col-lg-3 mx-1'>
            {link != undefined ? (
                <Link to={`${link}`} className='position-absolute top-0 end-0 m-1 btn btn-primary'>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
            ) : null}
            {children}
        </div>
    )
}

export default Card
