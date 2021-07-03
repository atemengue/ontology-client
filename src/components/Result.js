/** @format */

import React from 'react';

const Result = ({ title, classe, description, onClick }) => {
  return (
    <div onClick={onClick} style={{ marginTop: 10, cursor: 'pointer' }}>
      <div class='card1'>
        <h3>{title}</h3>
        <p class='small'>{description}</p>
        <div class='go-corner' href='#'>
          <div class='go-arrow'>→</div>
        </div>
      </div>
      {/* <Card onClick={onClick}>
        <CardBody>
          <CardTitle tag='h5'>
            {title}
            <Badge className='ml-3'>{classe}</Badge>
          </CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default Result;
