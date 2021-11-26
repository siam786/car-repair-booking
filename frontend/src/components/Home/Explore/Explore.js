import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const Explore = () => {
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
        <section id="services" className="text-center py-5">
            <NavBar/>
            <h1>Our Services</h1>
            <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                {
                    loading ? <Spinner animation="border" variant="danger" /> :
                        services.map(service => <ServiceDetail key={service._id} service={service} />)
                }
            </Row>
            <Footer/>
        </section>
    );
};

export default Explore;