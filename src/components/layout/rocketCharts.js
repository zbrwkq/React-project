import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

const RocketCharts = ({ data }) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    }

    const labels = data.map((data) => data.name)
    console.log()
    const heightData = {
        labels,
        datasets: [
            {
                label: 'Hauteur (m)',
                data: data.map((data) => data.height.meters),
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
            },
        ],
    }
    const diameterData = {
        labels,
        datasets: [
            {
                label: 'Diamètre (m)',
                data: data.map((data) => data.diameter.meters),
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
            },
        ],
    }
    const massData = {
        labels,
        datasets: [
            {
                label: 'Masse (kg)',
                data: data.map((data) => data.mass.kg),
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
            },
        ],
    }

    return (
        <div className='mt-5'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link active'
                        id='height-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#height'
                        type='button'
                        role='tab'
                        aria-controls='height'
                        aria-selected='true'
                    >
                        Hauteur
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='diameter-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#diameter'
                        type='button'
                        role='tab'
                        aria-controls='diameter'
                        aria-selected='false'
                    >
                        Diamètre
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='mass-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#mass'
                        type='button'
                        role='tab'
                        aria-controls='mass'
                        aria-selected='false'
                    >
                        Masse
                    </button>
                </li>
            </ul>
            <div className='tab-content p-3 border-end border-start' id='myTabContent'>
                <div
                    className='tab-pane show active'
                    id='height'
                    role='tabpanel'
                    aria-labelledby='height-tab'
                >
                    <Bar options={options} data={heightData} />
                </div>
                <div
                    className='tab-pane'
                    id='diameter'
                    role='tabpanel'
                    aria-labelledby='diameter-tab'
                >
                    <Bar options={options} data={diameterData} />
                </div>
                <div
                    className='tab-pane'
                    id='mass'
                    role='tabpanel'
                    aria-labelledby='mass-tab'
                >
                    <Bar options={options} data={massData} />
                </div>
            </div>
        </div>
    )
}

export default RocketCharts
