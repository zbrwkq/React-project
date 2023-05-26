import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { fetchData } from '../../utils/fonctions'

import CardEquipage from '../layout/cardEquipage'

const Equipage = () => {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams()
    let filtre = searchParams.get('filtre')
    let filteredMembers = []

    useEffect(() => {
        const q = fetchData('crew')
        q.then((res) => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                toast.error(`Une erreur s'est produite : ${res.message}`)
            }
        })
    }, [])

    if (filtre) {
        data.map((membre) => {
            if (
                membre.name.toLocaleLowerCase().includes(filtre) ||
                membre.agency.toLocaleLowerCase().includes(filtre)
            ) {
                filteredMembers.push(membre)
            }
        })
    } else {
        filteredMembers = data
    }
    console.log(filteredMembers)
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center mt-4'>

            <form className='searchBar col-9' method='GET' action='?'>
                <input id="search" className='form-control ps-4' placeholder='Rechercher par nom ou agence' aria-label='Rechercher' name="filtre" />
                <button className='btn p-0 me-3' type='submit'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <ToastContainer />

            <ul className='list-group listCards col-7 mt-3'>
                {filteredMembers && filteredMembers.length > 0 ? (
                    filteredMembers.map((membre) => {
                        return <CardEquipage key={membre.id} membre={membre}></CardEquipage>
                    })
                ) : (
                    <div className='errorFiltre'>Aucun membre d&apos;équipage n&apos;as pu être récupéré avec le filtre actuel</div>
                )}
            </ul>
        </div>
    )
}

export default Equipage
