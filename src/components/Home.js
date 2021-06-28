/** @format */

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import aliment from '../data';
import { getClasses } from '../helpers/classeHelper';
import Result from './Result';

export default function Home() {
  const [classes, setClasses] = useState([]);

  const { isLoading, data } = useQuery('classes', () => getClasses());

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
                    {data?.data?.records.map((classe, index) => {
                      return (
                        <option key={index} value={classe.label}>
                          {classe.label}
                        </option>
                      );
                    })}
                    <option>Aliment</option>
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
