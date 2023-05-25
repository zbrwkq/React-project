import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"

import CardMembre from '../layout/cardMembre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronRight);

const Membre = () => {
    const [data, setData] = useState([])
    const { id = '' } = useParams()

    const fetchData = async () => {
        try {
            var url = `https://api.spacexdata.com/v4/crew/${id}`
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container mt-3'>
            <Link to="/equipage" className="link-secondary btnRetour"><FontAwesomeIcon icon={faChevronRight} className="btnRetour" flip="horizontal" /> Retour</Link>
            <ToastContainer />
            <CardMembre key={data.id} membre={data}></CardMembre>
        </div>
    )
}

export default Membre
