import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Login() {

    return (
        <>
            <AuthHeader text={"Don’t have an account?"} action={"Signup"} url={"/createAccount"} />
            <section className="login_section">
            <Container className='mt-3'>
                <Row>
                    <Col lg={4} className='' md={4}>

                    <div className="singupform">
                            <h4>Credit Repair used to be hard</h4>
                            <p>We made it easy</p>
                            <h1>You Got This!</h1>
                        </div>
                    </Col>
                    <Col lg={8} md={8}>
                        <div className='mainform  '>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >OTP</Form.Label>
                                <Form.Control type="number" placeholder="Enter valid Otp" />
                                <Form.Label className="mt-3 fromlabel"> New Password</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Label className="mt-3 fromlabel"> Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Group className="mb-3 mt-2 fromlabel" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Link to="/login" className='navmenubutton'><Button className='signBtn btn-dark fromlabel'> Reset </Button></Link> 
                                {/* <Button className='signBtn btn-dark fromlabel'> <Link to="/login" className='navmenubutton'>Reset</Link> </Button> */}
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
