import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { formatDate, fetchData } from '../../utils/fonctions'
import BoutonRetour from '../layout/boutonRetour'

const HistoryDetails = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const q = fetchData('history/' + id)
        q.then((res) => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                toast.error(`Une erreur s'est produite : ${res.message}`)
            }
        })
    }, [id])

    return (
        <div className='container my-3'>
            <ToastContainer />
            <BoutonRetour link="histoire"/>
            
            {data !== null ? (
                <>
                    <h1>{data.title}</h1>
                    <h2 className='text-secondary h3'>{formatDate(data.event_date_unix)}</h2>
                    <p>{data.details}</p>
                    {data.links !== null ? (
                        <p>
                            Article associé:{' '}
                            <a href={data.links.article} target='_blank' rel='noreferrer'>
                                {data.links.article}
                            </a>
                        </p>
                    ) : null}
                </>
            ) : null}
        </div>
    )
}

export default HistoryDetails
