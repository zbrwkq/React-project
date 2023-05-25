import Navigation from '../navigation/navigation'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main>{children}</main>

            <footer className='p-4 bg-light text-center mt-5'>
                SpaceX créé en ReactJS par Raphaël et Damien
            </footer>
        </>
    )
}

export default Layout
