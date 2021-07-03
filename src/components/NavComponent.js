/** @format */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const activeStyle = { color: '#F15B2A' };

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand acti href='/'>
        Food Ontology 237
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='/'
            >
              Acceuil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='/recherche'
            >
              Recherche
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='/enrichir'
            >
              Enrichir
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='/validation'
            >
              Validation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='/collecte'
            >
              Collecte des faits
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <NavLink
            exact
            activeStyle={activeStyle}
            className='nav-link'
            to='/connexion'
          >
            Connexion
          </NavLink>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}
