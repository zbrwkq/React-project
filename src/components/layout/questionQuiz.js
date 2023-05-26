import { Link } from 'react-router-dom';

const QuestionQuiz = ({ question }) => {
    return (
        <div className="mt-4">

            <p>{question.question}</p>

            <h4>Réponses :</h4>
            <ul>
                {question.reponses.map((reponse, index) => (
                    <li key={index}>{reponse.reponse}</li>
                ))}
            </ul>

        </div>
    );
};

export default QuestionQuiz;