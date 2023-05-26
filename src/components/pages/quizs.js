import data from '../../assets/data/quizs.json'
import Card from '../layout/card'
import CardList from '../layout/cardList'
import Container from '../layout/container'

const Quizs = () => {
    return (
        <Container>
            <CardList>
                {data.map((quiz) => (
                    <Card key={quiz.id} link={`/quiz/${quiz.id}`}>
                        <div className='card-body text-center py-5 px-4'>{quiz.nom}</div>
                    </Card>
                ))}
            </CardList>
        </Container>
    )
}

export default Quizs
