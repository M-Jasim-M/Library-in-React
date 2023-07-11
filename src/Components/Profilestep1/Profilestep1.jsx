import React from 'react'
import './Profilestep1.css'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// pics
import profile1 from '../../Asserts/Img/profile1.svg'
import signinto from  '../../Asserts/Img/lipic.png'

// icon 
import { Icon } from '@iconify/react';



export default function Profilestep1() {
  return (
    <div>
   <Container fluid>
        <Row>
            <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>

                    <img className='img-fluid' id='profilepic' src={signinto} alt="" />
                    <h4>Library for Getting Knowledge</h4>
                    <p>Unlock the Benefits Books for Your <br />
                     Well-Being</p>
                    <div className='line'> </div>
                    </Col>

                    <Col lg={7} md={12}>

                        <div className="profilemaindiv">
                            <div className='profileicon'>
                            <Icon className='profileiconworld' icon="tabler:world" />
                            </div>

                            <div className="profilecontentmaindiv">
                                <h6><a href="/">Step 01 / <a href="/"> 02</a></a></h6>
                                <h3>Setup Your Profile</h3>
                                <p>Get Started with a Comprehensive Books <br /> Profile</p>

                               
                                <div className='smallandinputmaindiv'>
                                    <small>Full Name</small>
                                    <input type="text" placeholder='Enter Name' />
                                </div>

                                <div className='smallandinputmaindiv'>
                                    <small>Birth Date</small>
                                    <input type="date" name="" id="" />
                                </div>

                                <div className='smallandinputmaindiv'>
                                    <small>Gender</small>
                                    <select placeholder='Select Gender'>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                            <div className='profilebtn1'>
                            <button>Next</button>
                            </div>

                            <div className='profiledivlastlinecopyright'>
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
