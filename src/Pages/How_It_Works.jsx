import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Work from '../Component/How_It_Work/Work';
import Curve from '../asset/image/curve-1 1.png';
import img2_1 from '../asset/image/img2 1.png';
import Curve2 from '../asset/image/curve-2 1.png';
import img1 from '../asset/image/img1 1.png';
import img3 from '../asset/image/img3 1.png';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Zoom, Slide } from "react-awesome-reveal";
import girl from "../asset/image/img7.jpg"
import AOS from 'aos';
import "aos/dist/aos.css";

export default function How_It_Works() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <Header />
      <div className='how_it_work_head '>
        <Container>
          <Row>
            <Col lg={{span: 6, order:'first'}} md={{span: 6, order:'first'}} xs={{ order: 'last' }}>
              <div className='work_head_content'>
                <Zoom duration={2000}>
                  <h1>Seriously, you can do this.</h1>
                  <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eaque saepe asperiores laborum molestias necessitatibus nulla debitis accusamus dignissimos consectetur soluta minus, consequatur doloribus. Exercitationem at nihil neque beatae facilis.</p>
                </Zoom>
              </div>
            </Col>
            <Col lg={{span: 6, order:'last'}} md={{span: 6, order:'last'}} xs={{ order: 'first' }}>
              <div className='how_it_work_head_img' data-aos={"fade-down"}>
                <Image className='girlImg' src={girl} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container >
        <Work image={img1} count={1} title={"Link your credit report"} />
        <Row>
          <Col lg={12}  md={12}>
            <div className='curveimg'>
            <Image src={Curve} style={{ height: "auto", width: "100%" }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 6, order:'first'}} md={{span: 6, order:'first'}} xs={{ order: 'last' }} >
            <Slide>
              <div className='work'>
                <div className='work_count'>2</div>
                <h3 className='work_heading'>Disputes that work</h3>
                <p className='work_content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aut a, alias illum officiis amet corrupti voluptas nemo esse voluptates. Libero tempora sequi vero officia. Nam numquam illo quasi provident?</p>
              </div>
              </Slide>
            </Col>
              <Col lg={{span: 6, order:'last'}} md={{span: 6, order:'last'}} xs={{ order: 'first' }} >
                <Zoom duration={2000}>
                  <Image src={img2_1} style={{ height: "auto", width: "100%" }} />
                </Zoom>
              </Col>
            </Row>
            <Row>
              <Col lg={12}  md={12}>
              <div className='curveimg'>
                <Image src={Curve2} style={{ height: "auto", width: "100%" }} />
                </div>
              </Col>
            </Row>
            <Work image={img3} count={3} title={"Track your results"} />
          </Container>
          <Footer />
        </>
        )
}





