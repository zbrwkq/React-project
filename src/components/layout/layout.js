import Navigation from "../navigation/navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>SpaceX créé en ReactJS par Raphaël et Damien</footer>
    </>
  );
};

export default Layout;
