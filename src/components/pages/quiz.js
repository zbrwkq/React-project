import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import quizs from '../../assets/data/quizs.json'
import QuestionQuiz from '../layout/quiz/questionQuiz'
import Timer from '../layout/quiz/timer'
import PreQuiz from '../layout/quiz/preQuiz'
import QuizResult from '../layout/quiz/quizResult'
import Container from '../layout/container'

const Quiz = () => {
    const [data, setData] = useState(null)
    const [currQuestion, setCurrQuestion] = useState(-1)
    const [timer, setTimer] = useState(null)
    const maxTime = 30
    const [time, setTime] = useState(maxTime)
    const [reponseUser, setReponseUser] = useState([])
    const [finished, setFinished] = useState(false)
    const [title, setTitle] = useState(false)

    const { id = '' } = useParams()

    const fetchData = async () => {
        try {
            const selectedQuiz = quizs.filter((quiz) => quiz.id.toString() === id)[0]

            if (selectedQuiz) {
                const shuffledQuestions = selectedQuiz.questions.map((question) => ({
                    ...question,
                    reponses: shuffleArray(question.reponses),
                }))

                setTitle(selectedQuiz.nom)
                setData(shuffledQuestions)
            } else {
                toast.error('Quiz non trouvé')
            }
        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const nextQuestion = () => {
        clearInterval(timer)
        setTime(maxTime)
        if (currQuestion === data.length - 1) {
            setFinished(true)
        }
        setCurrQuestion(currQuestion + 1)

        setTimer(
            setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000),
        )
    }

    useEffect(() => {
        if (time < 0) {
            nextQuestion()
        }
    }, [time])

    const shuffleArray = (array) => {
        const compareRandom = () => Math.random() - 0.5
        const shuffledArray = [...array]
        shuffledArray.sort(compareRandom)

        return shuffledArray
    }

    const addReponse = (reponse) => {
        reponseUser[currQuestion] = reponse
        nextQuestion()
    }
    return (
        <Container>
            <ToastContainer />
            {currQuestion === -1 ? (
                <PreQuiz title={title} maxTime={maxTime} nextQuestion={nextQuestion}></PreQuiz>
            ) : (
                <>
                    {!finished ? (
                        <>
                            <Timer time={time} maxTime={maxTime} />
                            <QuestionQuiz question={data[currQuestion]} addReponse={addReponse} />
                        </>
                    ) : (
                        <QuizResult questions={data} reponsesUser={reponseUser} />
                    )}
                </>
            )}
        </Container>
    )
}

export default Quiz
