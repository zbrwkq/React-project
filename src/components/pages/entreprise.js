import React, { useState, useEffect } from 'react'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Entreprise = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/company');
            setData(response.data);
        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='d-flex justify-content-center mt-4'>
            <ToastContainer />
            {data.headquarters && (
                <div className=''>
                    <div>{data.name} a été fondé en {data.founded} par {data.founder}</div>
                    <div>Son siège social se trouve l'adresse {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}</div>
                    <div>
                        L'entrepris compte actuellement : 
                        <ul>
                            <li>{data.employees} employés</li>
                            <li>{data.vehicles} fusées</li>
                            <li>{data.launch_sites} site de lancement</li>
                            <li>{data.test_sites} site de test</li>
                        </ul>
                    </div>
                    <div>{data.summary}</div>
                    <div>Sa valorisation est estimé à {data.valuation}$</div>
                    <div>
                        <div>CEO : {data.ceo}</div>
                        <div>CTO : {data.cto}</div>
                        <div>COO : {data.coo}</div>
                        <div>CTO Prpulsion : {data.cto_propulsion}</div>
                    </div>
                    <div>Liens utiles :
                        <a href={data.links.website}>Site</a>
                        <a href={data.links.flickr}>Flickr</a>
                        <a href={data.links.twitter}>Twitter</a>
                        <a href={data.links.elon_twitter}>Twitter d'Elon</a>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Entreprise