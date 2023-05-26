import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PreQuiz = ({ title, maxTime, nextQuestion }) => {
    return (
        <div>
            <Link to="/quizs" className="link-secondary btnRetour"><FontAwesomeIcon icon={faChevronRight} className="btnRetour" flip="horizontal" /> Retour</Link>
            <div className='card mt-3 p-5 text-center bg-transparent'>
                <p className="h2">{title}</p>
                <p className="h5">4 réponses par question pour 10 questions, {maxTime} secondes par questions.</p>
                <button onClick={nextQuestion} className='btn btn-primary w-50 m-auto py-3 mt-3'>
                    Commencer
                </button>
            </div>
        </div>
    )
}

export default PreQuiz
