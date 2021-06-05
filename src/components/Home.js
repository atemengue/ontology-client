/** @format */

import { FaSearch } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';
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
          </div>
        </Col>
      </Row>
      <Row>
        <Container>
          <Col xs='12'>
            <Result
              title='Gombo'
              classe='aliment'
              description='Some quick example text to build on the card title and make up the bulk'
            />
            <Result title='Tomate' classe='aliment' />
          </Col>
        </Container>
      </Row>
    </>
  );
}
