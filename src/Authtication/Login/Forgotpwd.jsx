import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Forgotpwd() {
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
                        <div className='mainform '>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                                <Link to="/resetpassword" className='navmenubutton'><Button className='signBtn mt-4 btn-dark fromlabel'> Send Otp </Button></Link> 
                                {/* <Button className='signBtn mt-4 btn-dark '> <Link to="/resetpassword" className='navmenubutton'>Send Otp</Link> </Button> */}
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

