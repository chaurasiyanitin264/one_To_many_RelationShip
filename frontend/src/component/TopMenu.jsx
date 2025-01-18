import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
           <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">RelationShip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default TopMenu;