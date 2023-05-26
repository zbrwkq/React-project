import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import BoutonRetour from '../boutonRetour'

library.add(faXmark, faCheck)

const QuizResult = ({ questions, reponsesUser }) => {
    const calculateScore = () => {
        let score = 0
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i]
            const reponseIndex = reponsesUser[i]
            const reponse = question.reponses[reponseIndex]
            if (reponse && reponse.etat) {
                score++
            }
        }
        return score
    }

    const totalQuestions = questions.length
    const score = calculateScore()

    return (
        <div className='quiz-result'>
            <BoutonRetour link='quizs' />
            <h2 className='text-center titreResult'>Résultat</h2>
            <div className='text-center'>
                Score: {score}/{totalQuestions}
            </div>
            <ul className='question-list'>
                {questions.map((question, index) => (
                    <li className='question-card' key={index}>
                        <div className='card-header'>{question.question}</div>
                        <ul className='reponse-list'>
                            {question.reponses.map((reponse, reponseIndex) => (
                                <li
                                    className={`reponse-item 
                        ${
                            reponse.etat
                                ? 'trueResponse'
                                : reponseIndex === reponsesUser[index]
                                ? 'falseResponse'
                                : ''
                        }`}
                                    key={reponseIndex}
                                >
                                    <div className='reponse-text'>{reponse.reponse}</div>
                                    {reponseIndex === reponsesUser[index] && reponse.etat && (
                                        <div className='reponse-indicator'>
                                            <FontAwesomeIcon
                                                className='iconQuiz'
                                                icon={faCheck}
                                                style={{ color: '#fff' }}
                                            />
                                        </div>
                                    )}
                                    {reponseIndex === reponsesUser[index] && !reponse.etat && (
                                        <div className='reponse-indicator'>
                                            <FontAwesomeIcon
                                                className='iconQuiz'
                                                icon={faXmark}
                                                style={{ color: '#fff' }}
                                            />
                                        </div>
                                    )}
                                    {reponseIndex !== reponsesUser[index] && reponse.etat && (
                                        <div className='reponse-indicator'>
                                            <span className='textBR'>Bonne réponse</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuizResult
