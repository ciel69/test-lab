import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'

import FormWrap from '../Form/FormWrap'

import './style.scss';
import '../../assets/img/bg-header.png';

const Header = () => (
  <header className="app__header header">
    <Container className="header__container">
      <Row>
        <Col lg={8}>
          <h2 className="header__title">Banner header</h2>
          <p className="header__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </p>
        </Col>
        <Col lg={4}>
          <FormWrap />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;