import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NaveBar.css";
import { Link as ScrollLink } from "react-scroll";

const NaveBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary Navbar">
      <Container>
        <Navbar.Brand >
          <img className="brand_logo" src="assets/main logo w.svg" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="responsive-navbar"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav_Link_blur">__</Nav.Link>
          </Nav>
          <Nav>
            <ScrollLink
              className="nav_Link"
              to="Reservations"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              Reservations
            </ScrollLink>

            <ScrollLink
              className="nav_Link"
              to="AboutUs"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              About us
            </ScrollLink>

            <ScrollLink
              className="nav_Link"
              to="Activities"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              Activities
            </ScrollLink>

            <ScrollLink
              className="nav_Link"
              to="Privileges"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              Privileges
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaveBar;
