import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={2000} distance="40px">
                        <h1>Reliable Auto Repair Center</h1>
                        <p className="text-muted my-4 pr-md-5">
There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                        <Button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src="https://i.ibb.co/rddgXvq/210-2104092-transparent-luxury-car-png-vector-car-images-free.jpg" fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;