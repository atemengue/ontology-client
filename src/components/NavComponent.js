/** @format */
import { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand href='/'>Food Ontology 237</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href='/'>Acceuil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='enrichir'>Enrichir</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='validation'>Validation</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Groupe 4</NavbarText>
      </Collapse>
    </Navbar>
  );
}
