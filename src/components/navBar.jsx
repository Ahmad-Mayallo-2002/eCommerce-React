import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const linkStyle = ({isActive}) => ({color: isActive ? "black" : "grey"});

export const NavBar = () => {
    const selector = useSelector(state => state.one.cart);
    return (
        <Navbar expand="lg" className="shadow">
            <Container>
                <Navbar.Brand className="text-uppercase fw-bold fs-3">la collection</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between bg-white">
                    <Nav className="my-2 my-lg-0 gap-4 justify-content-center" style={{ flex: "1" }} navbarScroll>
                        <NavLink to="/home" style={linkStyle}>Home</NavLink>
                        <NavLink to="/products" style={linkStyle}>Product</NavLink>
                        <NavLink to="/about" style={linkStyle}>About</NavLink>
                        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
                    </Nav>
                    <div className="buttons d-flex gap-2">
                            <Button variant="outline-dark">
                                <FontAwesomeIcon icon={faRightToBracket} className="me-2" />
                                Login
                            </Button>
                            <Button variant="outline-dark">
                                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                                Register
                            </Button>
                            <Link className="btn btn-outline-dark">
                                <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                                Cart ({selector.length})
                            </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}