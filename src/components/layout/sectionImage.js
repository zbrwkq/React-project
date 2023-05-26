const SectionImage = ({ image, children }) => {
    return (
        <section className='fullSizeSection position-relative' style={{ backgroundImage: `url(${image})` }}>
            {children}
        </section>
    )
}

export default SectionImage
