import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import {getApi} from '../../services/api'

export default function Home() {
   const { pokeData, pokeData2, pokeData3 } = getApi()
   console.log(pokeData)
   console.log(pokeData2)
   console.log(pokeData3)
   return (
      <>
         <Container>
            <Row>
               <Col>
                  <img
                     src={pokeData.sprites.other.dream_world.front_default}
                     alt={pokeData.name}
                  />
                  <img
                     src={pokeData2.sprites.other.dream_world.front_default}
                     alt={pokeData2.name}
                  />
                  <img
                     src={pokeData3.sprites.other.dream_world.front_default}
                     alt={pokeData3.name}
                  />
               </Col>
            </Row>
         </Container>
      </>
   );
}