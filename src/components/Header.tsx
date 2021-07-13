import {FC} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Header_a() {
  return (
    <header className="header">
      <h1>User Management</h1>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">View using drilling props</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/view">View using Route</Nav.Link>
          <Nav.Link href="/add">View using Redux</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header_a;
