import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

/**
 * Stats View
 * @export @const
 */
const Stats = () => (
  <Main>
    <Helmet title="Stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Stats;
