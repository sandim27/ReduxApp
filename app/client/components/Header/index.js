import React from 'react';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import './assets/header.scss';

const Header = ({ defaultSettings }) => (
  <Nav bsStyle="pills">
    <IndexLinkContainer to="/">
      <NavItem eventKey={1}>Home</NavItem>
    </IndexLinkContainer>
    <LinkContainer to={/photos/ + defaultSettings.url}>
      <NavItem eventKey={2}>Photos</NavItem>
    </LinkContainer>
  </Nav>
);

Header.propTypes = {
  defaultSettings: React.PropTypes.object,
};

export default Header;
