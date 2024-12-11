import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EtsyNavBar() {
    return (
        <Navbar>
            <Navbar.Brand>VK Helper</Navbar.Brand>
            <Nav>
                <Nav.Item><Nav.Link as={Link} to="/list">Inventory List</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/add">Add Inventory</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/etsy">Listing Test</Nav.Link></Nav.Item>
                <NavDropdown title="Tools" id="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/tools/margins">Margin Calculator</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/tools/duplicates">Duplicate Word Finder</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default EtsyNavBar;