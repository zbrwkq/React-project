import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchData, bigNumber } from '../../utils/fonctions'
import { ToastContainer, toast } from 'react-toastify'
import BoutonRetour from '../layout/boutonRetour'

const RocketDetails = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const q = fetchData('rockets/' + id)
        q.then((res) => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                toast.error(`Une erreur s'est produite  : ${res.message}`)
            }
        })
    }, [id])

    return (
        <div className='container my-3'>
            <BoutonRetour link="rocket"/>
            <ToastContainer />
            {data !== null ? (
                <>
                    <h1>{data.name}</h1>
                    <h2>
                        {data.company} - {data.country}
                    </h2>
                    <p>{data.description}</p>
                    <p>
                        Lien wikipedia : <a href={data.wikipedia}>{data.wikipedia}</a>
                    </p>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-4'>
                            <div id='carouselExampleIndicators' className='carousel slide'>
                                <div className='carousel-indicators'>
                                    <button
                                        type='button'
                                        data-bs-target='#carouselExampleIndicators'
                                        data-bs-slide-to='0'
                                        className='active'
                                        aria-current='true'
                                        aria-label='Slide 1'
                                    ></button>

                                    {data.flickr_images.slice(1).map((image, index) => (
                                        <button
                                            key={index}
                                            type='button'
                                            data-bs-target='#carouselExampleIndicators'
                                            data-bs-slide-to={index + 1}
                                            aria-label={`Slide ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                                <div className='carousel-inner'>
                                    <div className='carousel-item active'>
                                        <img
                                            src={data.flickr_images[0]}
                                            className='d-block w-100'
                                            alt='...'
                                        />
                                    </div>
                                    {data.flickr_images.slice(1).map((image, index) => (
                                        <div className='carousel-item' key={index}>
                                            <img
                                                src={image}
                                                className='d-block w-100'
                                                alt={data.name}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className='carousel-control-prev'
                                    type='button'
                                    data-bs-target='#carouselExampleIndicators'
                                    data-bs-slide='prev'
                                >
                                    <span
                                        className='carousel-control-prev-icon'
                                        aria-hidden='true'
                                    ></span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                                <button
                                    className='carousel-control-next'
                                    type='button'
                                    data-bs-target='#carouselExampleIndicators'
                                    data-bs-slide='next'
                                >
                                    <span
                                        className='carousel-control-next-icon'
                                        aria-hidden='true'
                                    ></span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-12 col-md-8'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item d-flex justify-content-between align-items-center'>
                                    Premier lancé : <span>{data.first_flight}</span>
                                </li>
                                <li className='list-group-item d-flex justify-content-between align-items-center'>
                                    Coût par lancé : <span>{bigNumber(data.cost_per_launch)}$</span>
                                </li>
                                <li className='list-group-item d-flex justify-content-between align-items-center'>
                                    Nombre d&apos;étages : <span>{data.stages}</span>
                                </li>
                                <li className='list-group-item d-flex justify-content-between align-items-center'>
                                    <span>Hauteur : {data.height.meters}m</span>-<span>diamètre :{' '}
                                    {data.diameter.meters}m</span>
                                    <span>-</span>
                                    <span>masse : {bigNumber(data.mass.kg)}kg</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card mt-5 p-3'>
                        <b>Propulseurs type {data.engines.type}</b>
                        <div className='row justify-content-beteween px-3 py-1'>
                            <p className='col-12 col-sm-6'>
                                Nombre de propulseur : {data.engines.number}
                                <br />
                                Combustible 1 : {data.engines.propellant_1}
                                <br />
                                Combustible 2 : {data.engines.propellant_2}
                                <br />
                            </p>
                            <p className='col-12 col-sm-6'>
                                Poussée au niveau de la mer : {data.engines.thrust_sea_level.kN}
                                kN
                                <br />
                                Poussée dans le vide : {data.engines.thrust_vacuum.kN}kN
                                <br />
                                Ratio poussée/poid : {data.engines.thrust_to_weight}
                            </p>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default RocketDetails
