import axios from 'axios'

/**
 * The function formats a Unix timestamp into a date string in the format of "DD/MM/YYYY".
 */
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

/**
 * This is an asynchronous function that fetches data from the SpaceX API endpoint and returns the
 */
export async function fetchData(endpoint) {
    try {
        const res = await axios.get('https://api.spacexdata.com/v4/' + endpoint)
        return res
    } catch (error) {
        return error
    }
}

/**
 * The function takes an integer and returns it as a string with spaces between every three digits.
 */
export function bigNumber(int){
        return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}