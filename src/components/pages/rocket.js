import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { fetchData, bigNumber } from '../../utils/fonctions'

import RocketCharts from '../layout/rocketCharts'
import Container from '../layout/container'
import CardList from '../layout/cardList'
import Card from '../layout/card'

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
        <Container>
            <ToastContainer />
            {data !== null ? (
                <>
                    <CardList>
                        {data.map((data) => (
                            <Card link={`${data.id}`} key={data.id}>
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
                            </Card>
                        ))}
                    </CardList>
                    <RocketCharts data={data} />
                </>
            ) : null}
        </Container>
    )
}

export default Rocket
