
import {Container,Navbar,Nav,NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShortStory from '../Page/ShortStory';
import MotivationalQoutes from '../Page/Qoutes';
import Sayari from '../Page/Sayari';
import AboutUs from '../Page/AboutUs'
import Home from '../Page/Home';

function Header() {
  return (
    <>
       <BrowserRouter>
    <Navbar expand="lg" style={{backgroundColor: "#eeac99"}} >
      <Container>
        <Navbar.Brand href="/">World of Words</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavItem>   <Link className="nav-link"   to="/" >Home</Link> </NavItem> 
          <NavItem>   <Link className="nav-link"   to="/sayari">Sayari</Link> </NavItem> 
          <NavItem>   <Link className="nav-link"   to="/motivationalQoutes">
                Motivational Qoutes</Link> </NavItem> 
          <NavItem>   <Link className="nav-link"   to="/shortStory">Sort Story</Link> </NavItem> 
          <NavItem>   <Link className="nav-link"   to="/aboutUs">About Us</Link> </NavItem> 
            {/* <Nav.Link href="/sayari">Sayari</Nav.Link>
            <Nav.Link href="/motivationalQoutes">
                Motivational Qoutes
              </Nav.Link>
              <Nav.Link href="/shortStory">Sort Story</Nav.Link> 
              <Nav.Link href="/aboutUs">About Us</Nav.Link>  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
            <Routes> 
            <Route exact path='/' element={< Home />}></Route> 
            <Route exact path='/sayari' element={< Sayari />}></Route> 
            <Route exact path='/sayari/:id' element={< Sayari />}></Route>
            <Route exact path='/motivationalQoutes' element={< MotivationalQoutes />}></Route> 
            <Route exact path='/motivationalQoutes/:id' element={< MotivationalQoutes />}></Route> 
            <Route exact path='/shortStory' element={< ShortStory />}></Route> 
            <Route exact path='/shortStory/:id' element={< ShortStory />}></Route> 
            <Route exact path='/aboutUs' element={< AboutUs />}></Route> 
            </Routes> 
      </BrowserRouter> 
    </>
  );
}

export default Header;