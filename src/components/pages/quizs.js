import data from "../../assets/data/quizs.json";
import CardQuiz from "../layout/cardQuiz";

const Quizs = () => {
    return (
        <div>
            {data.map((quiz) => (
                <CardQuiz key={quiz.id} quiz={quiz} />
            ))}
        </div>
    );
};

export default Quizs;