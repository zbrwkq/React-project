import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { fetchData } from '../../utils/fonctions'

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
                <div className='row justify-content-around gy-5'>
                    {data.map((data) => (
                        <div key={data.id} className='card col-5'>
                            <Link to={`${data.id}`}>
                                <img
                                    src={data.flickr_images[0]}
                                    className='card-img-top'
                                    alt={data.name}
                                />
                                <div className='card-body'>
                                    <p>{data.name}</p>
                                    <p>
                                        Hauteur: {data.height.meters}m<br />
                                        diamètre: {data.diameter.meters}m<br />
                                        masse: {data.mass.kg}kg
                                    </p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default Rocket
