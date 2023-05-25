import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardMembre from '../layout/cardMembre';

const Membre = () => {
    const [data, setData] = useState([])
    const { id = '' } = useParams()

    const fetchData = async () => {
        try {
            var url = `https://api.spacexdata.com/v4/crew/${id}`
            const response = await axios.get(url)
            setData(response.data)

        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container'>
            <ToastContainer />
            <CardMembre key={data.id} membre={data}></CardMembre>
        </div>
    )
}

export default Membre