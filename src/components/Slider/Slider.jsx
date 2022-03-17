import React from 'react'

// Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
// Image
import Image3 from './../../assets/image.svg'

// style
import './index.css';

export default function Slider() {
   return (
      <>
         <Carousel>
            <div>
               <img src={Image3} alt=''/>
               <p className="legend">Legend 1</p>
            </div>
            <div>
               <img src={Image3} alt=''/>
               <p className="legend">Legend 2</p>
            </div>
            <div>
               <img src={Image3} alt=''/>
               <p className="legend">Legend 3</p>
            </div>
         </Carousel>
      </>
   )
}