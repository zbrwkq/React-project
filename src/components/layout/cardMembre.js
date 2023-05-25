import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";

import logoNasa from "../../assets/images/logo_nasa.png"
import logoEsa from "../../assets/images/logo_esa.png"
import logoJaxa from "../../assets/images/logo_jaxa.png"
import logoSpaceX from "../../assets/images/logo_spacex.png"
import logoAxiom from "../../assets/images/logo_axiom.png"
import logoRoscosmos from "../../assets/images/logo_roscosmos.png"

library.add(faCircle, faChevronRight);


const CardMembre = ({ membre }) => {
    var statut = membre.status
    if (statut) { statut = statut.charAt(0).toUpperCase() + membre.status.slice(1) }

    return (
        <div className="card cardMembre mt-4">
            <img className="cardImageMembre" src={membre.image} alt={membre.name}></img>
            <div className="nomMembre">{membre.name}</div>
            <div className="d-flex flex-column align-items-center w-100">
                <div className="d-flex align-items-center">
                    <div>{statut}</div>
                    {membre.status === "active" ? (
                        <FontAwesomeIcon className="faCircle ms-2" icon={faCircle} style={{ color: "#00CE22", }} />
                    ) : (
                        <FontAwesomeIcon className="faCircle ms-2" icon={faCircle} style={{ color: "#db0000", }} />
                    )}
                </div>
                <div className="d-flex align-items-center justify-content-between w-100 px-4 my-2">
                    {/* {membre.agency} */}
                    {membre.agency === "NASA" ? (
                        <img className="agencyIcon ms-2" src={logoNasa}></img>
                    ) : membre.agency === "ESA" ? (
                        <img className="agencyIcon ms-2" src={logoEsa}></img>
                    ) : membre.agency === "JAXA" ? (
                        <img className="agencyIcon ms-2" src={logoJaxa}></img>
                    ) : membre.agency === "SpaceX" ? (
                        <img className="agencyIcon ms-2" src={logoSpaceX}></img>
                    ) : membre.agency === "Axiom Space" ? (
                        <img className="agencyIcon ms-2" src={logoAxiom}></img>
                    ) : membre.agency === "Roscosmos" ? (
                        <img className="agencyIcon ms-2" src={logoRoscosmos}></img>
                    ) : ""
                    }
                    <a className="faWikipedia" href={membre.wikipedia}> <i className="fa-brands fa-wikipedia-w"></i></a>
                </div>
            </div>
        </div>

    )
}

export default CardMembre;