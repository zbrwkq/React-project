import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, faChevronRight);

const CardEquipage = ({ membre }) => {
    return (
        <li className="list-group-item liEquipage m-2">
            <div className="d-flex align-items-center">
                <img className="cardImage" src={membre.image} alt={membre.name}></img>
                <div className="ms-3">{membre.name}</div>
                {membre.status === "active" ? (
                    <FontAwesomeIcon className="faCircle ms-2" icon={faCircle} style={{ color: "#00CE22", }} />
                ) : (
                    <FontAwesomeIcon className="faCircle ms-2" icon={faCircle} style={{ color: "#db0000", }} />
                )}
            </div>
            <div className="d-flex">
                <div className="me-4">{membre.agency}</div>
                <Link className="text-decoration-none" key={membre.id} to={{ pathname: `/membre/${membre.id}` }}>
                    <FontAwesomeIcon className="faChevron" icon={faChevronRight} style={{ color: "#000000", }} />
                </Link>
            </div>
        </li>

    )
}

export default CardEquipage
