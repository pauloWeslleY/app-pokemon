import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './page/Main'
import PokeItem from './page/PokeItem'
import PokeDex from './page/PokeDex'
import Evolution from './page/Evolution'
import Ability from './page/Ability'
import Region from './page/Region'

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Main/>} />
            <Route path="/pokeitem" element={<PokeItem/>} />
            <Route path="/pokedex" element={<PokeDex/>} />
            <Route path="/evolution" element={<Evolution/>} />
            <Route path="/ability" element={<Ability/>} />
            <Route path="/region" element={<Region/>} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router;