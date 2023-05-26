import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { fetchData, bigNumber } from '../../utils/fonctions'

import RocketCharts from '../layout/rocketCharts'

const Rocket = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const q = fetchData('rockets')
        q.then((res) => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                toast.error(`Une erreur s'est produite : ${res.message}`)
            }
        })
    }, [])

    return (
        <div className='container my-3'>
            <ToastContainer />
            {data !== null ? (
                <>
                    <div className='row justify-content-between gy-5'>
                        {data.map((data) => (
                            <div key={data.id} className='card col-5 col-lg-3 mx-1'>
                                <Link to={`${data.id}`} className='text-dark text-decoration-none'>
                                    <img
                                        src={data.flickr_images[0]}
                                        className='card-img-top'
                                        alt={data.name}
                                    />
                                    <div className='card-body text-center'>
                                        <p>{data.name}</p>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                                Hauteur : <span>{data.height.meters}m</span>
                                            </li>
                                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                                Diamètre : <span>{data.diameter.meters}m</span>
                                            </li>
                                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                                Masse : <span>{bigNumber(data.mass.kg)}kg</span>
                                            </li>
                                        </ul>
                                        <p></p>
                                        <p></p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <RocketCharts data={data} />
                </>
            ) : null}
        </div>
    )
}

export default Rocket
