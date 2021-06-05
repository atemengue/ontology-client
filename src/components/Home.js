/** @format */

import { FaSearch } from 'react-icons/fa';
import { Col, Row } from 'reactstrap';

export default function Home() {
  return (
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
  );
}
