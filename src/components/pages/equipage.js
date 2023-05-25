import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardEquipage from '../layout/cardEquipage';

const Equipage = () => {

    const [data, setData] = useState([])
    const [searchParams] = useSearchParams();
    let filtre = searchParams.get("filtre");
    let filteredMembers = [];

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/crew');
            setData(response.data);
        } catch (error) {
            toast.error(`Une erreur s'est produite : ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (filtre) {
        data.map((membre) => {
            if(membre.name.toLocaleLowerCase().includes(filtre) || membre.agency.toLocaleLowerCase().includes(filtre)) {
                filteredMembers.push(membre);
            }
        })
    }
    else {
        filteredMembers = data
    }

    return (
        <div className='container d-flex flex-column justify-content-center mt-4'>

            <form className='d-flex' method='GET' action='?'>
                <input id="search" className='form-control me-2' type='search' placeholder='Rechercher' aria-label='Rechercher' name="filtre" />
                <button className='btn btn-outline-success' type='submit'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <ToastContainer />
            <div className='listCards mt-3'>
                {filteredMembers ? (
                    filteredMembers.map((membre) => {
                        return <CardEquipage
                            key={membre.id}
                            membre={membre}
                        ></CardEquipage>
                    })
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default Equipage