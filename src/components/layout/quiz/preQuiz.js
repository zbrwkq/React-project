import BoutonRetour from '../boutonRetour'

const PreQuiz = ({ title, maxTime, nextQuestion }) => {
    return (
        <div>
            <BoutonRetour link='quizs' />
            <div className='card mt-3 p-5 text-center bg-transparent'>
                <p className='h2'>{title}</p>
                <p className='h5'>
                    4 réponses par question pour 10 questions, {maxTime} secondes par questions.
                </p>
                <button onClick={nextQuestion} className='btn btn-primary w-50 m-auto py-3 mt-3'>
                    Commencer
                </button>
            </div>
        </div>
    )
}

export default PreQuiz
