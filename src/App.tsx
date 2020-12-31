import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,  Redirect} from "react-router-dom";
import {Location, LocationDetail, LocationForm} from './pages'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/locations">Mockup Exam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route exact path="/" render={() => <Redirect to="/locations" />} />
          <Route path="/locations">
            <Location />
          </Route>
          <Route path="/details/:id">
            <LocationDetail />
          </Route>
          <Route path="/add">
            <LocationForm />
          </Route>
          <Route path="/edit/:id">
            <LocationForm />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
