import { apiURL } from "../API"

export const fetchNormal = async ( endpoint, method='GET', params = {} ) => {
    try {
        const url =`${apiURL}${endpoint}`
        console.log( url)
        if( method === 'GET') {
            const resp = await fetch( url )
            const body = await resp.json()
            return body

        } else {
            const resp = await fetch( url, {method, body: JSON.stringify( params )})
            const body = await resp.json()
            return body
        }
    } catch (error) {
        console.log('error')
    }
}
