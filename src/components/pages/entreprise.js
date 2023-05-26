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
                        <div className="company-info blur">
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
                        <div className='card company-info2 blur'>
                            <div className="executives">
                                <div className="">
                                    <img className='portraitExecutives' src='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'></img><div className='m-3'>CEO & CTO : {data.ceo}</div>
                                </div>
                                <div className="">
                                    <img className='portraitExecutives' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gwynne_Shotwell_at_pre-launch_briefing_for_CRS-2_mission_%28KSC-2013-1704%29.jpg/800px-Gwynne_Shotwell_at_pre-launch_briefing_for_CRS-2_mission_%28KSC-2013-1704%29.jpg"></img><div className='m-3'>COO : {data.coo}</div>
                                </div>
                                <div className="">
                                    <img className='portraitExecutives' src='https://www.uidaho.edu/-/media/UIdaho-Responsive/Images/engr/news/features/tom-mueller/tom-mueller-profile.jpg'></img><div className='m-3'>CTO Propulsion : {data.cto_propulsion}</div>
                                </div>
                            </div>
                            <div className="useful-links text-center mt-2">
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
