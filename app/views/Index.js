import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

/**
 * Index View
 * @const @export
 */
const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A beautiful, responsive, react app written with modern Javascript.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or view my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Based on <a href="https://github.com/artbur/personal-site">this repo</a>.</p>
    </article>
  </Main>
);

export default Index;
