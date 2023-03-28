import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'

export default function App() {
  const [name, setName] = useState(null);
  const [nameFieldText, setNameFieldText] = useState("");

  const [favoriteName, setFavoriteName] = useState(null);

  if (name == null) return <div style={{ padding: "15px" }}>
    <h1>Welcome, Guest!</h1>
    <h5>Please set a name!</h5>
    <Stack direction="horizontal" gap={2}>
      <Form.Control value={nameFieldText} onChange={e => setNameFieldText(e.target.value)} required placeholder="Name" type="text"></Form.Control>
      <Button variant="outline-primary" onClick={e => setName(nameFieldText)}>Set</Button>
    </Stack>
  </div>;

  return <div style={{ padding: "15px" }}>
    <Navbar bg="dark" variant="primary">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <h1>Welcome, {name}!</h1>
    <p>Thanks for using <b>bddy</b>'s react + bootstrap template!</p>
    <hr />
    <h4>Here's some bootstap examples!</h4>
    <hr />


    <br />

    <hr />
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    <hr />
    <Button variant="outline-primary">Primary</Button>{' '}
    <Button variant="outline-secondary">Secondary</Button>{' '}
    <Button variant="outline-success">Success</Button>{' '}
    <Button variant="outline-warning">Warning</Button>{' '}
    <Button variant="outline-danger">Danger</Button>{' '}
    <Button variant="outline-info">Info</Button>{' '}
    <Button variant="outline-light">Light</Button>{' '}
    <Button variant="outline-dark">Dark</Button>{' '}
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
  </div>
}