import React from 'react';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Header = () => (

  <Nav bsStyle="pills">
    <IndexLinkContainer to="/">
      <NavItem eventKey={1}>Home</NavItem>
    </IndexLinkContainer>
    <LinkContainer to="/photos">
      <NavItem eventKey={2}>Photos</NavItem>
    </LinkContainer>
  </Nav>

);

export default Header;
