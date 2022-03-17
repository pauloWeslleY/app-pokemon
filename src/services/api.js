import axios from "axios"

// export function getApi(poke) {
//    axios.get(`https://pokeapi.co/api/v2/${poke}/`)
//       .then(response => {
//          console.log(response.data.results)
//       })
//       .catch(error => console.log(error))
// }

const api = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/'
})

export default api;