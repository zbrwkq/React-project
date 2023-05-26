import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { fetchData, bigNumber } from '../../utils/fonctions'
import header from "../../assets/images/SpaceXBackground2.jpg"
import 'react-toastify/dist/ReactToastify.css'
import SectionImage from '../layout/sectionImage'
import { Link } from 'react-router-dom'

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
        <div className=''>
            <ToastContainer />
            {data.headquarters && (
                <SectionImage image={header}>
                    <div className='divEntreprise'>
                        <div className="company-info">
                            <div className="info">
                                <div className="company-name">
                                    <span className='spaceX'>{data.name}</span>, fondé en {data.founded} par {data.founder}
                                </div></div>
                            <div className="info">
                                Siège social : {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}
                            </div>
                            <div className="info">
                                L&apos;entreprise compte actuellement :
                                <ul>
                                    <li>{bigNumber(data.employees)} employés</li>
                                    <li>{data.vehicles} fusées</li>
                                    <li>{data.launch_sites} site de lancement</li>
                                    <li>{data.test_sites} site de test</li>
                                </ul>
                            </div>
                            <div className="summary">{data.summary}</div>
                            <div className="valuation">Valorisation : {bigNumber(data.valuation)}$</div>
                        </div>
                        <div className='card'>
                            <div className="executives">
                                <div>CEO : {data.ceo}</div>
                                <div>CTO : {data.cto}</div>
                                <div>COO : {data.coo}</div>
                                <div>CTO Propulsion : {data.cto_propulsion}</div>
                            </div>
                            <div className="useful-links">
                                Liens utiles :
                                <a href={data.links.website}>Site</a>
                                <a href={data.links.flickr}>Flickr</a>
                                <a href={data.links.twitter}>Twitter</a>
                                <a href={data.links.elon_twitter}>Twitter d&apos;Elon</a>
                            </div>
                        </div>

                    </div>
                </SectionImage >

            )}
        </div>
    )
}
export default Entreprise
