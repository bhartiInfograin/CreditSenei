import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCalendarDay, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import logo from '../asset/image/creditsensei.png';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section style={{ background: "#d3d3d252" }} className='footersec' >
                <Container fluid>
                    <Row>
                        <Col lg={5} md={4}>
                            <div className="footerlogocontainer">
                                <Link to="/" className='navmenubutton'> <Image className='footer_logo ' src={logo} /></Link>
                            
                            </div>
                        </Col>
                        <Col lg={5} md={4} className='mt-3'>
                            <div className="footercol2 mt-3 ">
                                <h6 className='companyHeading '>Company</h6>
                                <p><FaCalendarDay className=' footericon' />Mon - Fri 9am to 5pm PST</p>
                                <p><FaEnvelopeOpen className='footericon' />support@creditsensei.com</p>
                                <p><FaPhoneAlt className='footericon' />(222) 999 - 3333</p>
                            </div>
                        </Col>
                        <Col lg={2}   md={4} className='mt-3'>
                            <div className="footerProduct mt-3  ">
                                <h5 className='companyHeading'>Product</h5>
                                <ul className='footercompanylist'>
                                    <li>Home</li>
                                    <li>How It Work</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </Col>
                       

                    </Row>
                  <hr />
                    <Row>
                    <Col lg={6} md={6} sm={12}>
                            <div className="footerProduct mt-3  ">
                                {/* <h6 className='companyHeading'>Follow us</h6> */}
                                <ul className='socialicon'>
                                    <li> <a href="/"><FaFacebook /></a></li>
                                    <li>  <a href="/"><FaInstagram /></a></li>
                                    <li> <a href="/"> <FaTwitter /></a></li>
                                    <li>  <a href="/"><FaYoutube /></a></li>
                                </ul>

                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                           
                            <div className='termpolicy' >
                                <ul className='socialtext'>
                                    <li><Link to="/termscondition" >Terms Of Use</Link></li>
                                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                    <li>© 2022 Credit Senei, All rights reserved.</li>
                                </ul>
                            </div>
                            
                        </Col>
                    </Row>
                   
                </Container>

            </section>
            


        </>
    )
}
