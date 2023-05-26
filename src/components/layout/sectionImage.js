const SectionImage = ({image, children}) => {
    return ( 
        <section className="fullSizeSection" style={{backgroundImage: `url(${image})`}}>
            {children}
        </section>
     );
}
 
export default SectionImage;