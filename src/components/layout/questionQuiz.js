const QuestionQuiz = ({ question, addReponse }) => {
    const handleClick = (e) => {
        addReponse(e.target.dataset.index)
    }
    const color = ['primary', 'danger', 'warning', 'success']
    return (
        <div className='mt-5 row d-flex justify-content-around gy-3'>
            <p className='h3 text-center'>{question.question}</p>
            {question.reponses.map((reponse, index) => (
                <button
                    key={index}
                    onClick={handleClick}
                    className={`col-5 btn btn-outline-${color[index]} py-3 px-5`}
                    data-index={index}
                >
                    {reponse.reponse}
                </button>
            ))}
        </div>
    )
}

export default QuestionQuiz
