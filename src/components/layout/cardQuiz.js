import { Link } from 'react-router-dom';

const CardQuiz = ({ quiz }) => {
    return (
        <div className="card cardMembre mt-4">
            <Link className="text-decoration-none" to={{ pathname: `/quiz/${quiz.id}` }}>
                <div>
                    {quiz.nom}
                </div>
                {/* Ajoutez ici le rendu des autres informations du quiz, comme les questions, réponses, etc. */}

            </Link>
        </div>
    );
};

export default CardQuiz;