import { Nav, Navbar, NavLink, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const BSNav = ({ showBSNav }) => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        collapsed={showBSNav}
      />
      <Collapse in={showBSNav}>
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <NavLink eventKey="1" as={Link} to="/">
              Home
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/work">
              My Work
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Collapse>
    </Navbar>
  );
};

export default BSNav;
