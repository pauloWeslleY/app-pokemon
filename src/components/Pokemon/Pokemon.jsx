import React from 'react'
import {
   Container,
   Row,
   Col,
   Button,
   Card,
   CardColumns,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   CardImg,
} from 'reactstrap';

// import PokeImage from './../PokeImage/PokeImage'

import './main.css';
// import API
import { useApi } from '../../hooks/useApi'

export default function PokeList() {
   const { data: poke } = useApi(`/pokemon/`)
   console.log(poke)

   return (
      <>
         <Container>
            <Row xs='4'>
               {poke.map((pokemon) => {
                  return (
                     <>
                        <Col key={pokemon}>
                           <CardColumns className='card__container'>
                              <Card>
                                 <CardImg
                                    alt='Card'
                                    // src={}
                                    top
                                    width="100%"
                                 />
                                 <CardBody>
                                    <CardTitle>
                                       <h1>{ pokemon.name }</h1>
                                    </CardTitle>
                                    <CardSubtitle>
                                       <p>pokemons</p>
                                       <p></p>
                                    </CardSubtitle>
                                    <CardText>
                                       <Button
                                          color='info'
                                          outline
                                       >
                                          Know More!
                                       </Button>
                                    </CardText>
                                 </CardBody>
                              </Card>
                           </CardColumns>
                        </Col>
                     </>
                  )
               })}
            </Row>
         </Container>
      </>
   );
}