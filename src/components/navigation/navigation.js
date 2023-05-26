import { NavLink } from 'react-router-dom'
import img from '../../assets/images/logo_spacex.png'
import DarkMode from '../layout/darkmode'

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-md bg-dark p-2 fixed-top'>
            <div className='container-fluid'>
                <NavLink to='/' className='navbar-brand' href='#'>
                    <img src={img}></img>
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                to='/entreprise'
                                className='nav-link'
                                aria-current='page'
                                href='#'
                            >
                                Entreprise
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/histoire'
                                className='nav-link'
                                aria-current='page'
                                href='#'
                            >
                                Histoire
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/equipage'
                                className='nav-link'
                                aria-current='page'
                                href='#'
                            >
                                Équipage
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/rocket' className='nav-link' aria-current='page' href='#'>
                                Fusée
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/quizs' className='nav-link' aria-current='page' href='#'>
                                Quizs
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <DarkMode></DarkMode>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
