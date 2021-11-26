import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import './ServicePricing.css';

const ServicePricing = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://mighty-coast-60510.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section className="pricing-section" id="pricing">
            <Fade bottom duration={2500} distance="40px">
                <Container fluid className="my-md-5">
                    <Col xs={12}>
                        <div className="pricing-title text-center">
                            <span>Find US</span>
                            <h2>Our Location</h2>
                        </div>
                    </Col>
                    <Row>
                        <Col xs={12}>
                            <iframe width="100%" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href="https://maps-generator.com/">maps generator</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=7484fb8e3ac2a4e10b0d1ac6c5fed564328ea093'></script>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section>
    );
};

export default ServicePricing;