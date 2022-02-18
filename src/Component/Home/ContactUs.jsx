import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaStreetView, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import { Zoom, Roll } from "react-awesome-reveal";

export default function ContactUs() {
    return (
        <>
            <section style={{ background: "#a8d8da" }} className=''>
                <Zoom duration={2000}>
                    <Container>
                        <Row>
                            <Col lg={12}  md={12}>
                                <h4 className='contactus_heading'>Contact Us</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}  md={6}>
                                <div className='contact_box1'>
                                    <h6 className='contact_box1_heading'>YOU CAN FIND US HERE</h6>
                                    <div className='contact_box1_content mt-3'>
                                        <p className="mb-3"> <FaStreetView className='steetview' /> Street address</p>
                                        <p className="mb-3"><FaEnvelopeOpen className='mail' />support@creditsensei.com</p>
                                        <p className="mb-3"><FaPhoneAlt className='phone' />(222) 999 - 3333</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}  md={6} >
                                <div className='contactus_form'>
                                    <Form.Control type="text" placeholder="Your Name" className="mb-3" />
                                    <Form.Control type="text" placeholder="Your Email" className="mb-3" />
                                    <Form.Control type="text" placeholder="Your Number" className="mb-3" />
                                    <Form.Control as="textarea" rows={3} className="mb-3" placeholder="Your Message" />
                                    <Button className=' messagebtn mb-3 ' style={{background:"#004C4D" ,border:"none"}}>SEND MESSAGE</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Zoom>
            </section>


        </>
    )
}
