/** @format */

import { FaSearch } from 'react-icons/fa';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import aliment from '../data';
import Result from './Result';

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <div className='Search'>
            <div>
              <div className='SearchSecond'>
                <span className='SearchSpan'>
                  <FaSearch />
                </span>
                <input
                  placeholder='Ontology Search'
                  className='SearchInput'
                  type='text'
                />
              </div>
              <div className='selectClass'>
                <FormGroup>
                  <Input
                    type='select'
                    name='selectMulti'
                    id='exampleSelectMulti'
                  >
                    <option>Aliment</option>
                    <option>Repas</option>
                    <option>Substance Organique</option>
                  </Input>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Container>
          <Col xs='12'>
            {aliment.map((aliment, index) => {
              return (
                <Result
                  title={aliment.food}
                  classe={aliment.classe}
                  description={aliment.description}
                />
              );
            })}
          </Col>
        </Container>
      </Row>
    </>
  );
}
