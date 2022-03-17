import React from 'react'

// components
import Header from './../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Generation from '../../components/Generation/Generation'
import Nature from '../../components/Nature/Nature'

import {
   Container,
   Row
} from 'reactstrap'

// css
import '../../index.css'

export default function Main() {
   return (
      <>
         <Header />
         <Slider />
         <Container>
            <Row>
               <hr className='line__hr' />
               <Generation />
               <hr className='line__hr' />
               <Nature />
            </Row>
         </Container>
      </>
   )
}