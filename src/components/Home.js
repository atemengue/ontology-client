/** @format */

import { FaSearch } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';
import aliment from '../data';
import Result from './Result';

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <div className='Search'>
            <div className='SearchSecond'>
              <span className='SearchSpan'>
                <FaSearch />
              </span>
              <input className='SearchInput' type='text' />
            </div>
            i`
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
