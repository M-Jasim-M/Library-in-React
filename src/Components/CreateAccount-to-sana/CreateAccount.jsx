import React from 'react'
import './CreateAccount.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// pics
import signuptosana from '../../Asserts/Img/signup.svg'
import facebook from '../../Asserts/Img/facebook.svg'
import google from '../../Asserts/Img/google.svg'


// icon 
import { Icon } from '@iconify/react';

export default function CreateAccount() {
    return (
        <div>

    <Container fluid>
        <Row>
            <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>

                <img className='img-fluid' src={signuptosana} alt="" />
                    <h4>Health with Herbal Solutions</h4>
                    <p>Book Consultations with Expert Herbalists <br /> for Personalized Care</p>
                    <div className='line'> </div>
                    </Col>

                    <Col lg={7} md={12}>

                    <div className="leftsidemain-createaccount-to-sana">

                    <div className="icon-and-button-parentdiv">
                    <Icon id='worldicon1' icon="tabler:world" />
                    <button id='btncreateaccount'>Sign In</button>
                    </div>

                    <div className='createaccounth4andpdiv'>
                        <h4>Create an Account</h4>
                        <p>Discover a world of natural remedies with our expert <br /> herbalists</p>
                        
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

                        <button>Sign Up</button>

                        <div className="signupline">
                        <span>--- Or Sign in With ---</span>
                        </div>

                        <div className='facebookbtndiv'>
                            <img src={facebook} alt="" />
                            <span>Sign up With Facebook</span>
                        </div>

                        <div id='googlebtndiv' className='facebookbtndiv'>
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
