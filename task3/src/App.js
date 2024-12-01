import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className='d-flex justify-content-center'>
        <Navbar.Brand href="#home">STOCK MARKET PORTFOLIO</Navbar.Brand>
        {/* <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
      </Navbar>
    </div>
  );
}

export default App;
