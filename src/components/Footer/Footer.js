import React from 'react';
import {Container} from 'react-bootstrap';

import './style.scss';

const Footer = () => (
  <footer className="app__footer footer">
    <Container className="footer__content">
      <p><sup>1</sup> Reprehenderit - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
      <p><sup>2</sup> Tempor - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p><sup>3</sup> Amet - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </Container>
  </footer>
);

export default Footer;
