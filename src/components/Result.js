/** @format */

import React from 'react';
import { Badge, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Result = ({ title, classe, description }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>
            {title}
            <Badge className='ml-3'>{classe}</Badge>
          </CardTitle>
          <CardText>{description}</CardText>

          {/* <div>
            <Badge className='ml-1 mr-1'>Glucose</Badge>
            <Badge className='ml-1 mr-1'>Phosphate</Badge>
            <Badge className='ml-1 mr-1'>Vitamine A</Badge>
            <Badge className='ml-1 mr-1'>Calcuim</Badge>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;
