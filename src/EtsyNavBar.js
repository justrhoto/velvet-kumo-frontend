import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EtsyNavBar() {
    return (
        <Navbar>
            <Navbar.Brand>VK Helper</Navbar.Brand>
            <Nav>
                <Nav.Item><Nav.Link as={Link} to="/list">Inventory List</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/add">Add Inventory</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/etsy">Listing Test</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default EtsyNavBar;