/** @format */
import { Client } from 'graphql-ld';
import { QueryEngineSparqlEndpoint } from 'graphql-ld-sparqlendpoint';
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

  const sparlRequest = async () => {
    const { data } = await client.query({ query });
    console.log(data);
  };

  // Define a JSON-LD context
  const context = {
    '@context': {
      Food: { '@id': 'http://localhost/ontologies/2021/food#' },
      Aliment: { '@id': 'http://localhost/ontologies/2021/food#Aliment' },
      TypeSubstanceOrganique: {
        '@id': 'http://localhost/ontologies/2021/food#TypeSubstanceOrganique',
      },
      label: { '@id': 'http://www.w3.org/2000/01/rdf-schema#label' },
      rdfs: { '@id': 'http://www.w3.org/2000/01/rdf-schema#rdfs' },
    },
  };

  // Create a GraphQL-LD client based on a SPARQL endpoint
  const endpoint = 'http://localhost:3030/ds/sparql';
  // const endpoint = 'http://dbpedia.org/sparql';

  const client = new Client({
    context,
    queryEngine: new QueryEngineSparqlEndpoint(endpoint),
  });

  // Define a query
  const query = `
query @single {
  Aliment @single {
    TypeSubstanceOrganique
  }
}`;

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
              to='recherche'
            >
              Recherche
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='enrichir'
            >
              Enrichir
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='validation'
            >
              Validation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              activeStyle={activeStyle}
              className='nav-link'
              to='collecte'
            >
              Collecte des faits
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText onClick={() => sparlRequest()}>
          <NavLink
            exact
            activeStyle={activeStyle}
            className='nav-link'
            to='connexion'
          >
            Connexion
          </NavLink>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}
