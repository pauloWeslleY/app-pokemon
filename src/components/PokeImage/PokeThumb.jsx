import React from 'react'
import {
   Container,
   Row,
   Col,
   Card,
   CardColumns,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   CardImg
} from 'reactstrap'

export default function PokeThumb({ id, name, image, type }) {
   return (
      <>
         <Container>
            <Row xs='6'>
               <Col>
                  <CardColumns>
                     <Card>
                        <CardImg
                           alt={name}
                           src={image}
                           top
                           width="100%"
                        />
                        <CardBody>
                           <CardTitle>
                              <h3>{name}</h3>
                           </CardTitle>
                           <CardSubtitle
                              className='text-muted'
                              tag='h6'
                           >
                              <p>#{ id }</p>
                           </CardSubtitle>
                           <CardText>
                              <small>Type: {type}</small>
                           </CardText>
                        </CardBody>
                     </Card>
                  </CardColumns>
               </Col>
            </Row>
         </Container>
      </>
   )
}
