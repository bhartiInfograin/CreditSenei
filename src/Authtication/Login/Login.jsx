import React, { useState } from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <>
            <AuthHeader text={"Don’t have an account?"} action={"Signup"} url={"/createAccount"} />
            <section className="login_section">
            <Container className='mt-3'>
                <Row>
                    <Col lg={4} md={4} >

                        <div className="singupform">
                            <h4>Credit Repair used to be hard</h4>
                            <p>We made it easy</p>
                            <h2>Your beginning to a better credit score !</h2>
                        </div>
                    </Col>
                    <Col lg={8} md={8}>
                        <div className='mainform'>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Your Email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}/>
                                
                                <p className='error' id="email"> *Enter Your Email</p>
                                <Form.Label className="mt-3 fromlabel">Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Your Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)} />
                                  <p className='error' id="password"> *Enter Your Password</p>
                                <Form.Group className="mb-3 fromlabel" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Label className="fromlabel"><Link to="/forgotpwd" className='forgotpwd'>Forgot Your Password ?</Link></Form.Label>
                                <Link to="/useHome" className='navmenubutton'><Button className='signBtn btn-dark fromlabel'> Login </Button></Link> 
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
