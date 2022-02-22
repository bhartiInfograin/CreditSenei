import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import AuthFooter from '../AuthCommon/AuthFooter'
import Step2 from './Step2';
import { Link } from 'react-router-dom'
import $ from 'jquery';




export default function Carosel() {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phonenum, setPhonenum] = useState("");


    useEffect(() => {
        $("#address").hide()
        $("#city").hide()
        $("#state").hide()
        $("#zip").hide();
        $("#phonenum").hide();

    }, []);






    return (
        <>
            <AuthHeader text={"Already a member"} action={"Log In"} url={"/login"} />

            <section className="login_section">
                <Container className='mt-3'>
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="singupform">
                                <h4>Great job,
                                    Username!</h4>
                                <p>You're almost done.</p>
                                <p>What contact info would you like the credit bureaus to use?</p>
                            </div>
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='sigup_form'>
                                <Step2 progress={1} />
                                <div className="p-3">
                                    <Form.Label className="mt-3">Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Address"
                                        name="address"
                                        type="text"
                                        onChange={(e) => setAddress(e.target.value)} />
                                    <p className='error' id="address"> *Enter Your Address</p>
                                    <Row >

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label className="mt-3" >City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your City"
                                                name="city"
                                                onChange={(e) => setCity(e.target.value)} />
                                            <p className='error' id="city"> *Enter Your City</p>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label className="mt-3">State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your State"
                                                name="state"
                                                onChange={(e) => setState(e.target.value)} />
                                            <p className='error' id="state"> *Enter Your State</p>
                                        </Form.Group>


                                    </Row>
                                    <Row >
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label className="mt-3" >Zip</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your City"
                                                name="zip"
                                                onChange={(e) => setZip(e.target.value)} />
                                            <p className='error' id="zip"> *Enter Your Zip</p>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label className="mt-3">Phone Number</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Your phone number"
                                                name="phonenum"
                                                onChange={(e) => setPhonenum(e.tartget.value)}
                                            />
                                             <p className='error' id="phonenum"> *Enter Your PhoneNumber</p>
                                        </Form.Group>


                                    </Row>


                                    <div className='activte_back_button'>

                                        <Link to="/creditreport" className='navmenubutton'><Button className='signBtn btn-dark mt-3'> Next  </Button></Link>
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