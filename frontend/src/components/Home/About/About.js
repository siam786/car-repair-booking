import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src="https://i.ibb.co/tYdY70Z/340-3406826-car-vector.jpg" fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            
                            <h3>Why Chose Us</h3>
                            <p className="text-muted my-4 pr-md-5">USA Auto Repair offers auto inspections to give you a better picture of how your vehicle operates. Get the answers you deserve by scheduling an auto inspection. Call 631-243-1173 now. You will love our reasonable prices!,</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;