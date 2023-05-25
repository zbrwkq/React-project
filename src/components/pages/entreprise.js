import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { fetchData, bigNumber } from '../../utils/fonctions'
import 'react-toastify/dist/ReactToastify.css'

const Entreprise = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const q = fetchData('company')
        q.then((res) => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                toast.error(`Une erreur s'est produite : ${res.message}`)
            }
        })
    }, [])

    return (
        <div className='d-flex justify-content-center mt-4'>
            <ToastContainer />
            {data.headquarters && (
                <div className=''>
                    <div>
                        {data.name} a été fondé en {data.founded} par {data.founder}
                    </div>
                    <div>
                        Son siège social se trouve l&apos;adresse {data.headquarters.address},{' '}
                        {data.headquarters.city}, {data.headquarters.state}
                    </div>
                    <div>
                        L&apos;entrepris compte actuellement :
                        <ul>
                            <li>{bigNumber(data.employees)} employés</li>
                            <li>{data.vehicles} fusées</li>
                            <li>{data.launch_sites} site de lancement</li>
                            <li>{data.test_sites} site de test</li>
                        </ul>
                    </div>
                    <div>{data.summary}</div>
                    <div>Sa valorisation est estimé à {bigNumber(data.valuation)}$</div>
                    <div>
                        <div>CEO : {data.ceo}</div>
                        <div>CTO : {data.cto}</div>
                        <div>COO : {data.coo}</div>
                        <div>CTO Propulsion : {data.cto_propulsion}</div>
                    </div>
                    <div>
                        Liens utiles :<a href={data.links.website}>Site</a>
                        <a href={data.links.flickr}>Flickr</a>
                        <a href={data.links.twitter}>Twitter</a>
                        <a href={data.links.elon_twitter}>Twitter d&apos;Elon</a>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Entreprise
