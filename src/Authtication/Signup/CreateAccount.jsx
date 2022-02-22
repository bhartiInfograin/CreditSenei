import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import Step2 from './Step2';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { KeyState } from "../../Context/KeyProvider";
import axios from 'axios';




export default function Carosel() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { clientKey, trackingToken } = KeyState();

    // console.log("clientKey",clientKey)
    // console.log("trackingToken",trackingToken.trackingToken)


    useEffect(() => {
        $("#firstName").hide()
        $("#lastName").hide()
        $("#email1").hide()
        $("#emailcheck").hide();
        $("#password1").hide();

    }, []);



    const submitHander = async () => {

     const article = { clientKey: clientKey, trackingToken: trackingToken.trackingToken, firstName: name,middleName:"xzy",lastName: lastName, email: email, password: password };
     const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization':  "Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw==",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":"*",
        "Accept": "application/vnd.cd.signup-api.v1.1+json;charset=UTF-8, */*; q=0.01",
        // "Host":"stage-sc.consumerdirect.com",
        // "Origin":"https://stage-sc.consumerdirect.com",
        // "Sec-Fetch-Mode":"cors"
      }

      console.log("article",article)
      axios.post('https://stage-sc.consumerdirect.com/api/signup/customer/create',article,{headers})
      .then(response =>{
          console.log("response",response)
      } )
      .catch(error => {
        console.log("error",error)
      });
     
       
    }

    return (
        <>
            <AuthHeader text={"Already a member"} action={"Log In"} url={"/login"} />
            <section className="login_section">
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
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                name="first_name"
                                                type="text"
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        <p className='error' id="firstName"> *Enter Your FirstName</p>


                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label className="mt-3" >Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                name="last_name"
                                                type="text"
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        <p className='error' id="lastName"> *Enter Your LastName</p>
                                    </Row>

                                    <Form.Label className="mt-3">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <p className='error' id="email1">*Enter Valid Email</p>
                                    <p className='error' id="emailcheck">*Email already exist</p>

                                    <Form.Label className="mt-3">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Your Password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <p className='error' id="password1"> *Enter Password</p>
                                    <div className='checkbox'>
                                        <Form.Check className="mt-3" />
                                        <p>I agree to the <Link to="/termscondition" >Terms Of Use</Link> and <Link to="/privacypolicy">Privacy Policy</Link> </p>
                                    </div>

                                    <div className='contactform_next'>
                                        {/* <Link to="/addProfile" className='navmenubutton'> <Button className='signBtn btn-dark mt-3' onClick={submitHander}>Next </Button></Link> */}
                                        <Button className='signBtn btn-dark mt-3' onClick={submitHander}>Next </Button>
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

 //     try {

    //         const config = {
    //             headers: {
    //                 "Authorization": "Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw==",
    //                 "Access-Control-Allow-Origin": "http://localhost:3000",
    //                 'content-type': 'application/x-www-form-urlencoded',
    //                 'Access-Control-Allow-Credentials':'true', 

    //             },
    //         };
        
    //         await axios.post("https://stage-sc.consumerdirect.com/api/signup/customer/create", article,config)
    //             .then(resp => {
    //                 console.log("data", resp);
    //             })
    //             .catch(error => {
    //                 console.log("error", error)
    //             })
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }