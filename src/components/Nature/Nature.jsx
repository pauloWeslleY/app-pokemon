import React from 'react'

// import CSS
import './main.css'

// Reactstrap
import {
   Container,
   Row,
   Card,
   CardGroup,
   CardBody,
   CardTitle,
   CardText,
   Col,
} from 'reactstrap'

// import API
import { useApi } from '../../hooks/useApi'

export default function Nature() {
   const { data: nature, isFacthing } = useApi('/nature/');

   return (
      <>
         <Container>
            <Row>
               <h1 className='title__nature'>Nature</h1>
               { isFacthing && <p>Loading...</p> }
               {nature.map(nature => {
                  return (
                     <>
                        <Col key={nature}>
                           <CardGroup>
                              <Card className='card__nature'>
                                 <CardBody>
                                    <CardTitle tag='h5'>
                                       {nature.name}
                                    </CardTitle>
                                    <CardText>
                                       {nature.name}
                                    </CardText>
                                 </CardBody>
                              </Card>
                           </CardGroup>
                        </Col>
                     </>
                  )
               })}
            </Row>
         </Container>
      </>
   )
}
