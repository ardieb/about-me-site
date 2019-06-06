import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

/**
 * Nav Bar View
 * @const @export
 */
const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Arthur M Burke</h2>
        <p><a href="mailto:me@artbur.com">me@artbur.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Arthur. I&apos;m interested in the way things work.
            I am an undergraduate at <a href="https://as.cornell.">Cornell&apos;s College of Arts and Sciences</a> where I study physics and computer science.
            I am currently developing software for <a href="https://cislunarexplorers.wordpress.com/">SSDS CisLunar Explorers Mission</a>. Apart from my studies,
            I am a passionate cook and weightlifter.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
