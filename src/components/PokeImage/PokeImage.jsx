import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import PokeThumb from './PokeThumb'



export default function PokeImage() {
   const [allPokemons, setAllPokemon] = useState([])
   const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

   const getAllPokemon = async () => {
      const response = await fetch(loadMore)
      const data = await response.json()

      setLoadMore(data.next)

      function createPokemonObject(result) {
         result.forEach(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()

            setAllPokemon(currentList => [...currentList, data])
         })
      }
      createPokemonObject(data.results)
      await console.log(allPokemons)
   }

   useEffect(() => {
      getAllPokemon()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <>
         {allPokemons.map((pokemon, index) => {
            return (
               <>
                  <Container>
                     <Row>
                        <Col key={index}>
                           <PokeThumb
                              id={pokemon.id}
                              name={pokemon.name}
                              type={pokemon.type}
                              image={pokemon.sprites.other.dream_world.front_default}
                           />
                        </Col>
                     </Row>
                  </Container>
               </>
            )
         })}
      </>
   )
}
