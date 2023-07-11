
import React from 'react'
import './Welcometosana.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// pics
import Welcomepic from '../../Asserts/Img/welcomepic.svg'
import facebook from '../../Asserts/Img/facebook.svg'
import google from '../../Asserts/Img/google.svg'
import welpic from '../../Asserts/Img/lipic.png'

// icon 
import { Icon } from '@iconify/react';

export default function Welcometosana() {
  return (
    <div>
       <Container fluid>
        <Row>
            <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>

                <img className='img-fluid' id='welcomepic' src={welpic} alt="" />
                    <h4>Nature's for Optimal Health</h4>
                    <p>Unlock the Benefits of books for Your <br /> Well-Being</p>
                    <div className='line'> </div>
                    </Col>

                    <Col lg={7} md={12}>

                    <div className="leftsidemain-createaccount-to-sana">

                    <div className="icon-and-button-parentdiv">
                    <Icon id='welcomesignupicon' icon="tabler:world" />
                    <button id='welcomesignupbutton'>Sign In</button>
                    </div>

                    <div className='createaccounth4andpdiv'>
                        <h4>Welcome Back!</h4>
                        <p>Discover a world of Library with <br /> our expert Profers</p>
                        
                        <div className='smallandinput'>
                            <small>Your Email</small>
                            </div>
                        <input type="text" placeholder='Enter Email Here' />

                        <div className='smallandinput'>
                            <small>Password</small>
                            </div>
                        <input type="text" placeholder='Enter Password Here' />

                        <div className='smallandinput'>
                            <small>Confirm Password</small>
                            </div>
                        <input type="text" placeholder=' Confirm Password' />

                        <button id='signbtn'>Sign Up</button>

                        <div className="signupline">
                        <span>--- Or Sign in With ---</span>
                        </div>

                        <div className='facebookbtndiv1'>
                            <img src={facebook} alt="" />
                            <span>Sign up With Facebook</span>
                        </div>

                        <div id='googlebtndiv' className='facebookbtndiv1'>
                            <img src={google} alt="" />
                            <span>Sign up With Google</span>
                        </div>

                    </div>

                    <div className='copyrightp'>
                        <p>Copyright © 2023 Herbalist. All rights reserved.</p>
                    </div>

                            





                    </div>
            </Col>

        </Row>
    </Container>
    </div>
  )
}
