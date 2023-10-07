//importation, including react-bootstrap.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
       {/* This is a navbar*/}
        <Navbar bg="dark" variant="dark" expand="lg" data-bs-theme="dark">
       
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          
        </Navbar>

        <Container>
          <Row>
            <Col>
             {/* This is a heading */}
          
              <h1>Frontend development  </h1>
            </Col>
          </Row>

          <Row>
            <Col>
             {/* style card 1 */}
            <Card style={{
                                width: '300px',
                                height: '400px',
                                backgroundColor: 'lightgray',
                                border: '1px solid gray',
                                padding: '10px',
                                margin: '10px',
  
                        }}>
  
                <Card.Body>
                  {/* content of card 1 */}
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text >
                 
                  JavaScript is a high-level, interpreted programming language 
                  that is primarily used for creating interactive web pages 
                  and web applications. It is a versatile language 
                  that can be run on both the client-side  and the server-side .
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            {/* style card 2 */}
            <Card style={{
                                width: '300px',
                                height: '400px',
                                backgroundColor: 'lightgray',
                                border: '1px solid gray',
                                padding: '10px',
                                margin: '10px',
  
                        }}>
                <Card.Body>
                  <Card.Title>DOM</Card.Title>
                  <Card.Text >
                  DOM stands for Document Object Model.
                   It is a programming interface for HTML and XML documents.
                    The DOM represents the structure of a web page as a hierarchical tree of objects,
                     where each object represents a part of the document, such as elements, attributes, and text. With the DOM,
                      developers can dynamically access, manipulate, 
                      and update the content and structure of a web page using JavaScript or other programming languages.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            {/* style card 3 */}
            <Card style={{
                                width: '300px',
                                height: '400px',
                                backgroundColor: 'lightgray',
                                border: '1px solid gray',
                                padding: '10px',
                                margin: '10px',
  
                        }}>
                <Card.Body>
                  <Card.Title>React JS</Card.Title>
                  <Card.Text>
                  React.js is a popular JavaScript library for building user interfaces. 
                  It provides a component-based approach to developing interactive and reusable UI components. 
                  React allows developers to efficiently manage and update the user interface of web applications, 
                  making it easier to build complex, interactive, and responsive web applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
         
        </Container>
      </div>
      {/* footer with style*/}
      <footer style={{ marginTop: '20px', textAlign: 'center',background:'lightblue' }}>
            <p>&copy; 2023 B-reactjs. All rights reserved.</p>
          </footer>
    </>
    
  );
}

export default App;