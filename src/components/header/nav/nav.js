import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Container>
);
//      <li>
//        <Link to="/blog">Blog</Link>
//      </li>
//
// <li>
// <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
// </li>

export default Nav;
