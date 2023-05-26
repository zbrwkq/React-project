import SectionImage from "../layout/sectionImage";
import header from "../../assets/images/SpaceXBackground.jpg"
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <SectionImage image={header}>
            <h1 className="text-white">Bienvenue à SpaceX</h1>
            <Link to="/entreprise" className="text-white h2 text-decoration-none">
                Découvrir l&apos;entreprise
            </Link>
        </SectionImage >
     );
}
 
export default Home;