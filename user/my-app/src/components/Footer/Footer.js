import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faHome} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center p-5 " >
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                            <h1 className="footerMainTitle" >Follow Me</h1>
                            <a className="footerDescLink" href=""> <FontAwesomeIcon icon={faFacebook} /> FaceBook</a> <br/>
                            <a className="footerDescLink" href=""> <FontAwesomeIcon icon={faLinkedin} /> Linkedin</a><br/>
                            <a className="footerDescLink" href=""> <FontAwesomeIcon icon={faGithub} /> GitHub</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                            <h1 className="footerMainTitle" >Address</h1>
                            <p className="footerAddressDesc" ><FontAwesomeIcon icon={faHome} /> 177 Tejkuni Para, Tejgaon. Dhaka-1215</p>
                            <p className="footerAddressDesc" ><FontAwesomeIcon icon={faEnvelope} /> hasibolislamnirob@gmail.com</p>
                            <p className="footerAddressDesc" ><FontAwesomeIcon icon={faPhone} /> +8801819979441</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                            <h1 className="footerMainTitle" >Information</h1>
                            <a className="footerDescLink" href=""> About Me</a><br/>
                            <a className="footerDescLink" href=""> My Resume</a><br/>
                            <a className="footerDescLink" href=""> Contact Me</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify " >
                            <h1 className="footerMainTitle" >Legal</h1>
                            <a className="footerDescLink" href=""> Privacy Policy </a><br/>
                            <a className="footerDescLink" href=""> Terms & Condition </a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center" >
                    <Row className="bg-dark" >
                        <Col lg={12} md={12} sm={12} >
                            <p className="copyRightTitle" > &copy; All Reserved 2021 </p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;