
import React from 'react'
import './Profilestep2.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// pics
import profile2 from '../../Asserts/Img/profile2.svg'


// icon 
import { Icon } from '@iconify/react';



export default function Profilestep2() {
  return (
    <div>

<Container fluid>
        <Row>
            <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>

                    <img className='img-fluid' id='profile2' src={profile2} alt="" />
                    <h4>Nature's for Optimal Health</h4>
                    <p>Unlock the Benefits of Nature for Your <br />
                     Well-Being</p>
                    <div className='line'> </div>
                    </Col>

                    <Col lg={7} md={12}>

                        <div className="profilemaindiv">
                            <div className='profileicon'>
                            <Icon className='profileiconworld' icon="tabler:world" />
                            </div>

                            <div className="profilecontentmaindiv">
                                <h6><a href="/">Step 02 / <a href="/"> 02</a></a></h6>
                                <h3>Setup Your Profile</h3>
                                <p>Get Started with a Comprehensive Herbal Health <br /> Profile</p>

                                <div>
                                    <div className='uploadfile'>
                                   <span> <Icon className='cameraicon' icon="solar:camera-broken" /></span>
                                    </div>

                                    <div className='uploadfilediv'>
                                    <input type="file" name='Upload' />
                                    </div>
                                </div>

                                <div className='backandfinishbuttondiv'>

                                   <div className='backbtn'>
                                    <button>Back</button>
                                    </div>

                                    <div className='finishbtn'>
                                    <button>Finish</button>
                                    </div>

                             

                                </div>

                                <div className='profile2copyright'>
                                <p>Copyright © 2023 Herbalist. All rights reserved.</p>
                                </div>

                                </div>
                                </div>
                    
                   
            </Col>

        </Row>
    </Container>
      
    </div>
  )
}
