import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EtsyNavBar() {
    return (
        <Nav>
            <Nav.Item><Nav.Link as={Link} to="/list">Inventory List</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/add">Add Inventory</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/etsy">Etsy Tests</Nav.Link></Nav.Item>
        </Nav>
    );
}

export default EtsyNavBar;