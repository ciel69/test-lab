import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Modal from '../Modal/Modal';

import imagePc from '../../assets/img/pc.png'

import './style.scss';

const InformationList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="app__information-list information-list">
      <Container>
        <Row>
          <Col lg={6} className="d-sm-none d-none d-lg-block">
            <img className="information-list__image" src={imagePc} alt="PC image"/>
          </Col>
          <Col lg={6} md={12}>
            <h3 className="information-list__title">Title text</h3>
            <ol>
              <li onClick={handleShow}>
                <span>
                  Duis aute irure dolor in reprehenderit<sup>1</sup> in voluptate velit
                </span>
              </li>
              <li onClick={handleShow}>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </span>
              </li>
              <li onClick={handleShow}>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation
                </span>
              </li>
              <li onClick={handleShow}>
                <span>
                  Et dolore magna aliqua
                </span>
              </li>
              <li onClick={handleShow}>
                <span>
                  Sed do eiusmod tempor<sup>2</sup> incididunt ut labore
                </span>
              </li>
              <li onClick={handleShow}>
                <span>
                  Lorem ipsum dolor sit amet<sup>3</sup> consectetur adipisicing elit
                </span>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onClose={handleClose}/>
    </div>
  )
};

export default InformationList;
