import React from 'react'
import {
   Container,
   Row,
   Button,
   ListGroup,
   ListGroupItem,
   ListGroupItemHeading,
   ListGroupItemText
} from 'reactstrap';

import './main.css';
// import API
import { useApi } from '../../hooks/useApi';

export default function PokeList() {
   const { data: poke} = useApi('https://pokeapi.co/api/v2/pokemon/')

   return (
      <>
         <Container>
            <Row>
               {poke.map(pokemon => {
                  return (
                     <>
                        <ListGroup className='container__list' key={pokemon}>
                           <ListGroupItem>
                              <ListGroupItemHeading>
                                 <h1>{pokemon.name}</h1>
                              </ListGroupItemHeading>
                              <ListGroupItemText>
                                 <Button
                                    color='info'
                                    outline
                                 >
                                    Know More!
                                 </Button>
                              </ListGroupItemText>
                           </ListGroupItem>
                        </ListGroup>
                     </>
                  )
               })}
            </Row>
         </Container>
      </>
   );
}