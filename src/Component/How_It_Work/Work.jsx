import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
// import img1 from '../../asset/image/img1 1.png'
import {Zoom,Slide } from "react-awesome-reveal";

export default function Work(props) {
    return (
        <>
        <div className='work_main '>
        <Row >
                <Col lg={6} md={6} >
                     <Slide>
                         <div className="workimg1">
                         <Image src={props.image} style={{height:"auto",width:"100%"}} />
                         </div>
                     </Slide>
                </Col>
                <Col lg={6} md={6}  >
                    <Zoom>
                    <div className='work'>
                        <div className='work_count'>{props.count}</div>
                        <h3 className='work_heading '>{props.title}</h3>
                        <p className='work_content '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nihil veniam qui, quaerat, harum libero modi totam, hic animi blanditiis eius officia architecto corrupti ullam consequatur unde ad aut error?</p>
                    </div>
                    </Zoom>
                   
                </Col>
            </Row>

        </div>
         

        </>
    )
}


// xs={{ order: 'first' }}