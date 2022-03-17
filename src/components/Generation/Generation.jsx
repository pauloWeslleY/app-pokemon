import React from 'react'

import {
   Container,
   Row,
   Col,
   Card,
   CardBody,
   CardTitle
} from 'reactstrap'

// import styles
import './main.css'
// import API
import { useApi } from '../../hooks/useApi'

export default function Section() {
   const { data: generation } = useApi('https://pokeapi.co/api/v2/generation/')
   return (
      <>
         <Container>
            <Row>
               <h1 className='title__section'>Generation</h1>
               {generation.map(gene => {
                  return (
                     <>
                        <Col key={gene}>
                           <Card
                              body
                              color='info'
                              outline
                           >
                              <CardBody>
                                 <CardTitle tag='h5'>
                                    {gene.name}
                                 </CardTitle>
                              </CardBody>
                           </Card>
                        </Col>
                     </>
                  )
               })}
            </Row>
         </Container>
      </>
   )
}
