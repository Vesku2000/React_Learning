import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'

export default function App() {
  const [name, setName] = useState(null);
  const [nameFieldText, setNameFieldText] = useState("");



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
    <h1>Button examples</h1>
    <hr />
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-primary">Primary</button>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>

    <hr />
    <h1>Color variants</h1>
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