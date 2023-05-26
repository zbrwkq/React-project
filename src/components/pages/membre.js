import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"

import CardMembre from '../layout/cardMembre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BoutonRetour from '../layout/boutonRetour';


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
            <BoutonRetour link="equipage"/>
            <ToastContainer />
            <CardMembre key={data.id} membre={data}></CardMembre>
        </div>
    )
}

export default Membre
