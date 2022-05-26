import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Register from './Register';
import './search.css';
import {
  BrowserRouter,
  Link
} from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import {useState} from 'react';
// import cigarscity from '../images/cigarscity.jpg'\
//import cigarscity form "../src/images/cigarscity.png";


function App() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }   
    setValidated(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {/* <Link to ="/">Home</Link>
        <Link to="/register">Register</Link> */}

          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
            
              <img src="./images/cigarscity.png"/>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">




<div id="drop">
<i class="fa fa-truck" aria-hidden="true">
<li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Delivery to
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                      </ul>
                    </li>
  </i> 
</div>

                  <form class="d-flex" >
                    <input class="sear" type="search" aria-disabled="true" placeholder="Search by product ,category or brand" aria-label="Search" />
                    <button type="submit" id="search_btn" ><i class="fa fa-search"></i></button>

                  </form>

                  <div class="user">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hello user
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                      </ul>
                    </li>

                  </div>

                  <div>
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <div>
                      cart
                    </div>

                  </div>



                </ul>

              </div>
            </div>
          </nav>
          <hr></hr>
          {/* <row>
    <col className='card-footer' style={{color:"#FF0000"}}></col>
  </row> */}
        </div>
        <nav>
          <span class="tobacco">Tobacco</span>
          <span class="hemp">Hemp</span>
          <span class="hemp">Vape</span>
          <span class="hemp">Alternative</span>
          <span class="hemp">General Merchandise</span>
          <span class="hemp">Brand</span>
          <span class="hemp">Articles</span>

        </nav>
        <hr></hr>
        {/* <row>
    <col className='card-footer' style={{color:"#FF0000"}}></col>
  </row> */}
        <div>

          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Home </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <span>&#62;</span>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>


        <div class="container">
          <div class="row">
            <div class="col-4" id="col-class">

            </div>
            <div class="col-8"></div>

          </div>
        </div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>My  Account</Card.Title>
            <Card.Text>

              <Navbar expand="lg" variant="light">
              
                <Nav.Link href="/#" >My Account</Nav.Link>
              
              </Navbar>
              <Navbar>
              
                <Nav.Link href="/#">My Order</Nav.Link>
              
              </Navbar>

              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">My Wishlist</Nav.Link>
              </Nav.Item>
              </Navbar>
<br/>
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Account Information</Nav.Link>
              </Nav.Item>
              </Navbar>
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#" ><b>Address Book</b></Nav.Link>
              </Nav.Item>
              </Navbar>
<br/>
<Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Company profile</Nav.Link>
              </Nav.Item>
              </Navbar>

              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Company structure</Nav.Link>
              </Nav.Item>
              </Navbar>

              
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Company user</Nav.Link>
              </Nav.Item>
              </Navbar>

              
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Roles and Permisions</Nav.Link>
              </Nav.Item>
              </Navbar>
              <br/>

              
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">Product Questions</Nav.Link>
              </Nav.Item>
              </Navbar>

              
              <Navbar>
              <Nav.Item>
                <Nav.Link href="/#">My subscriptions</Nav.Link>
              </Nav.Item>
              </Navbar>


            </Card.Text>
          </Card.Body>
        </Card>
<div id="forms">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3 id="h2s">Add store</h3><br/>
        <h5>Business Information</h5>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nick name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nick name"          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Legal name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Legal name"
            
          />
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <br/>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Feaderal Tax ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Feaderal Tax ID"          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Bussiness email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Bussiness email"
            
          />
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <br/>
        <h5><a id="ship"><u>Shipping address</u></a> <a id="add"><u>Assign address</u></a></h5>
        <h5></h5>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Address Line</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address Line"          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Select user</Form.Label>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select user
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">user1</a></li>
    <li><a class="dropdown-item" href="#">user2</a></li>
    <li><a class="dropdown-item" href="#">user3</a></li>
  </ul>
</div>
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <br/>
        </Row>

          <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Address Line2</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address Line2"          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>      
        </Row> 

        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>State code</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="state code"          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Zipcode"
            
          />
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>

    </div>
      </div>


    </BrowserRouter>
  );
}

export default App;
