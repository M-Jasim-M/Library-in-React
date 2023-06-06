
import React from 'react'
import './Verification.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// pics
import verification from '../../Asserts/Img/signup1.svg'


// icon 
import { Icon } from '@iconify/react';

export default function Verification() {
  return (
    <div>
         <Container fluid>
        <Row>
            <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>

                    <img className='img-fluid' src={verification} alt="" />
                    <h4>The Power of Herbal Medicine</h4>
                    <p>Book Consultations with Expert Herbalists for <br /> Personalized Care</p>
                    <div className='line'> </div>
                    </Col>

                    <Col lg={7} md={12}>
                    
                    <div className='verificationmaindiv'>
                    <div className="icon-and-button-parentdiv">
                    <Icon className='worldverificationicon' icon="tabler:world" />
                    <button>Sign In</button>
                    </div>


                    <Container>
                        <div className='verifiacationcontent'>
                        <h3>We’ve send your verification <br /> Code to your email</h3>
                        <p>Your Email <a href ='/'> abc@xyx.com </a> <span> <Icon className='editicon' icon="solar:gallery-edit-outline" /></span></p>
                        
                        <div className='maininput'>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        </div>

                        <button>Verify</button>

                        </div>

                        <p id='copyright'>Copyright © 2023 Herbalist. All rights reserved.</p>
                        
                    </Container>







                    </div>
                
            </Col>

        </Row>
    </Container>
      
    </div>
  )
}
