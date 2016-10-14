import React from 'react';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import './assets/header.scss';

const Header = ({ page }) => (
  <Nav bsStyle="pills">
    <IndexLinkContainer to="/">
      <NavItem eventKey={1}>Home</NavItem>
    </IndexLinkContainer>
    <LinkContainer to={/photos/ + page.url}>
      <NavItem eventKey={2}>Photos</NavItem>
    </LinkContainer>
  </Nav>
);

Header.propTypes = {
  page: React.PropTypes.object,
};

export default Header;
