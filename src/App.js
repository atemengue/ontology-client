/** @format */

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';
import './App.css';
const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Food Ontology 237</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Acceuil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                Enrichir
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                Validation
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Row>
        <Col>
          <div className='Search'>
            <div className='SearchSecond'>
              <span className='SearchSpan'>
                <FaSearch />
              </span>
              <input className='SearchInput' type='text' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
