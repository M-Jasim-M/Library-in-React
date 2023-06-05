import React from 'react'
import './Signuptosana.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// pics
import signuptosana from '../../Asserts/Img/signup1.svg'
import pic1 from '../../Asserts/Img/1.svg'
import pic2 from '../../Asserts/Img/2.svg'
import pic3 from '../../Asserts/Img/3.svg'

// icon 
import { Icon } from '@iconify/react';

export default function Signuptosana() {
  return (
    <>

<Container fluid>
      <Row>
        <Col lg={5} md={12} id='maindiv-signup-to-sana'> 
            <img className='img-fluid' src={signuptosana} alt="" />
            <h4>The Power Of Herbal Medicine</h4>
            <p>Book Consultations with Expert Herbalists for Personalized Care</p>
            <div className='line'> </div>
         </Col>

         <Col lg={7} md={12}> 

                <div className="leftsidemain-sinup-to-sana">
               
                    <div className="icon-and-button-parentdiv">
                         <Icon className='worldicon' icon="tabler:world" />
                         <button>Sign In</button>
                    </div>


                    <div className="left-sign-up-to-sana">
                      <h2>Sign Up To, Sana!</h2>
                      <p>how do you want join our wide community by becoming?</p>

                      <div id='picandtext'  className='Picandtextmaindiv'>

                            <div>
                                <img id='pic1' src={pic1} alt="" />
                            </div>

                            <div className='heading6andparagraph'>
                                <h6>Join As Practitioner</h6>
                                <p>Unlock Your Expertise, Empower Lives.</p>
                            </div>
                      </div>

                      <div className='Picandtextmaindiv'>
                       
                        <div>
                            <img id='pic1' src={pic2} alt="" />
                        </div>

                        <div className='greencheckiconparentdiv'>
                        <div className='heading6andparagraph'>
                            <h6>Join As Patient</h6>
                            <p id='secondpara'>Discover Compassionate Care, Find Healing.</p>
                        </div>

                        <div className='greencheckicon'>
                        <Icon icon="solar:verified-check-broken" />
                        </div>
                        </div>

                        
                  </div>

                  <div id='picandtext'  className='Picandtextmaindiv'>
                        
                        <div>
                            <img id='pic3' src={pic3} alt="" />
                        </div>

                        <div className='heading6andparagraph'>
                            <h6>Join As Seller</h6>
                            <p>Tap into the Market of Possibilities.</p>
                        </div>
                  </div>


                    </div>

                    <div id='copyrightlastlinep' className='copyrightp'>
                        <p>Copyright © 2023 Herbalist. All rights reserved.</p>
                    </div>



                </div>
         </Col>

      </Row>
    </Container>

    </>
  )
}
