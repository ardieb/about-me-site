import React from 'react';
import PropTypes from 'prop-types';

/**
 * Cell View
 * A cell contains all the information about a project
 * @param {*} data the data for the given project
 * @const @export
 */
const Cell = ({ data }) => (
  <div>
    <article className="jobs-container">
      <header>
        <a href={data.link}><h4>{data.title}</h4></a>
        <p className="daterange">{data.date}</p>
      </header>
      <div>
        <p className="description">{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
