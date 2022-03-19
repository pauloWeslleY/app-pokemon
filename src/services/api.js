/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios"
import { useEffect, useState } from "react"

export function getApi() {
   const [pokeData, setPokeData] = useState([])
   const [pokeData2, setPokeData1] = useState([])
   const [pokeData3, setPokeData2] = useState([])
   useEffect(() => {
      Promise.all([
         fetchPoke('1'),
         fetchPoke('2'),
         fetchPoke('3'),
      ]).then(response => {
         setPokeData(response[0].data)
         setPokeData1(response[1].data)
         setPokeData2(response[2].data)
      })
   }, [])
   return {pokeData, pokeData2, pokeData3}
}

export const fetchPoke = (params) => {
   return axios.get(`https://pokeapi.co/api/v2/pokemon/${params}`)
}


