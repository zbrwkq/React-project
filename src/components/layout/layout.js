import Navigation from '../navigation/navigation'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main className='mt-4 pt-4'>{children}</main>

            <footer className='p-4 text-center mt-5'>
                SpaceX créé en ReactJS par Raphaël et Damien
            </footer>
        </>
    )
}

export default Layout
