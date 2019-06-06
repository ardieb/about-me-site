import React from 'react';
import PropTypes from 'prop-types';

/**
 * Extracurricular
 * Contains all the information about a given extracurricular activity
 * @param {*} data the data for a given extracurricular activity
 * @const @export 
 */
const Extracurricular = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.name}</h4>
      <p className="daterange">{data.daterange}</p>
    </header>
    <div>
      <p className="description">{data.description}</p>
    </div>
  </article>
);

Extracurricular.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    datarange: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Extracurricular;
