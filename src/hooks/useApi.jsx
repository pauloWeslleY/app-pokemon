import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
   baseURL: `https://pokeapi.co/api/v2/`
})

export function useApi(url) {
   const [data, setData] = useState([])
   const [isFetching, setIsFatching] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      api.get(url)
         .then(response => {
            setData(response.data.results)
         })
         .catch(err => {
            setError(err)
         })
         .finally(() => {
            setIsFatching(false)
         })
   }, [url])

   return { data, error, isFetching}
}