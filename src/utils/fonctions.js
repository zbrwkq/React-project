import axios from 'axios'

export function formatDate(date) {
    var d = new Date(0)
    d.setUTCSeconds(date)
    return (
        (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
        '/' +
        (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) +
        '/' +
        d.getFullYear()
    )
}

export async function fetchData(endpoint) {
    try {
        const res = await axios.get('https://api.spacexdata.com/v4/' + endpoint)
        return res
    } catch (error) {
        return error
    }
}
