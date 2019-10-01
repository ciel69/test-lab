import React from 'react';
import {Container} from 'react-bootstrap';

import Posts from '../Posts/Posts';
import InformationList from '../InformationList/InformationList';

import './style.scss';

const Body = () => {
  return (
    <div className="app__body body">
      <Container>
        <Posts/>
      </Container>
      <InformationList/>
    </div>
  )
};

export default Body;
