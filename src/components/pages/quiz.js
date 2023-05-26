import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import quizs from '../../assets/data/quizs.json'
import { ToastContainer, toast } from 'react-toastify';
import QuestionQuiz from '../layout/questionQuiz';
import QuizResult from '../layout/quizResult';

const Quiz = () => {
    const [data, setData, currQuestion] = useState([])
    const [shuffledQuestions, setShuffledArray] = useState([]);
    const { id = '' } = useParams()

    const fetchData = async () => {
        try {
            const selectedQuiz = quizs.filter((quiz) => quiz.id.toString() === id)[0];

            if (selectedQuiz) {
                const shuffledQuestions = selectedQuiz.questions.map((question) => ({
                    ...question,
                    reponses: shuffleArray(question.reponses),
                }));

                setData(shuffledQuestions);
                setShuffledArray(shuffledQuestions);
            } else {
                toast.error("Quiz non trouvé");
            }
        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const shuffleArray = (array) => {
        const compareRandom = () => Math.random() - 0.5;
        const shuffledArray = [...array];
        shuffledArray.sort(compareRandom);

        return shuffledArray;
    };

    return (
        <div className='container mt-5'>
            <ToastContainer />

            {currQuestion <= 10 ? (
                // <QuestionQuiz />
                <div>QuestionQuiz</div>
            ) : (
                <div className=''>
                    <QuizResult questions={shuffledQuestions} reponsesUser={reponsesUser} />
                </div>
            )}
        </div>
    );

}

export default Quiz

const reponsesUser = [1, 3, 2, 1, 1, 3, 0, 2, 1, 2]