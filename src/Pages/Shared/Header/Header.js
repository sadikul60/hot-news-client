import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // log Out from site handle event
    const handleLogOut = () => {
        logOut()
        .then( () =>{ })
        .catch( error => console.error("Error", error));
    }
    return (
        <div className=' bg-dark'>
            <Navbar  bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to='/'>HotNews</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="" />
                    <Navbar.Collapse id="">
                    <Nav
                        className="me-auto my-2 my-lg-0" >
                        <Nav.Link href="#action1">All News</Nav.Link>
                        <Nav.Link href="#action2">Regular News</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <div>
                            {
                                user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogOut} variant='outline-dark' className='mx-3'>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link className='me-3' to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            }
                        </div>
                        <div>
                            <Link to="/profile">
                                {
                                    user?.photoURL  ?
                                    <Image
                                        roundedCircle
                                        style={{height: "35px", width: "35px"}}
                                        src={user?.photoURL}
                                    ></Image>
                                    : 
                                    <FaUser className='w-4'></FaUser>
                                }
                            </Link>
                        </div>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>

                    </Navbar.Collapse>
                </Container>
    </Navbar>
        </div>
    );
};

export default Header;