import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import Step2 from './Step2';
import { Link } from 'react-router-dom'
// import { Slide } from "react-awesome-reveal";



export default function Carosel() {
    return (
        <>
            <AuthHeader text={"Already a member"} action={"Log In"} url={"/login"} />
            <section  className="login_section">
            <Container className='mt-3'>
                <Row>
                    <Col lg={4} md={4}>
                        <div className="singupform">
                            <h4>Creting your account only takes a few seconds.</h4>
                            <p>Let's start with some basic info.</p>
                        </div>
                    </Col>
                    <Col lg={8} md={8} >
                        <div className='sigup_form'>

                            <Step2 progress={0} style={{}} />
                            <div className="p-3">
                                <Row >
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className="mt-3">First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label className="mt-3" >Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Form.Label className="mt-3">Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                                <Form.Label className="mt-3">Password</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <div className='checkbox'>
                                <Form.Check className="mt-3"/>
                                <p>I agree to the <Link to="/termscondition" >Terms Of Use</Link> and <Link to="/privacypolicy">Privacy Policy</Link> </p>
                                </div>
                               
                                <div className='contactform_next'>
                                <Link to="/addProfile" className='navmenubutton'> <Button className='signBtn btn-dark mt-3' >Next </Button></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
        
            <Footer />
        </>
    )
}