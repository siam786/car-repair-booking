import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProfilePopper from '../ProfilePopper/ProfilePopper';

const NavBar = () => {
    const { loggedInUser: { isSignedIn } } = useContext(UserContext);
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-2 bg-white"}>

            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5"
                style={{ color: "#3a4256", fontSize: "1.55rem" }}>
                <img style={{width:"100%"}}
                    alt="Logo"
                    src="https://i.ibb.co/594NyV9/logo-black.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
                
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/explore"
                        className="mr-md-5" active>
                        Explore
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/dashboard/profile"
                        className="mr-md-5" active>
                        Dashboard
                    </Nav.Link>
                    {isSignedIn ?
                        <div style={{ marginRight: "5.5rem" }}>
                            <ProfilePopper />
                        </div>
                        :
                        <Nav.Link
                            as={Link}
                            to="/login"
                            className="mr-md-5 px-4 btn btn-main" active>
                            Login
                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;