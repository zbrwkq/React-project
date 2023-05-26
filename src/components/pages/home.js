import SectionImage from '../layout/sectionImage'
import header from '../../assets/images/SpaceXBackground.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <SectionImage image={header}>
            <div className='position-absolute bottom-0 start-0 p-3'>
                <h1 className='text-white'>Bienvenue à SpaceX</h1>
                <Link
                    to='/entreprise'
                    className='text-white h2'
                >
                    Découvrir l&apos;entreprise
                </Link>
            </div>
        </SectionImage>
    )
}

export default Home
