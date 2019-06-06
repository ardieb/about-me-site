import React from 'react';
import PropTypes from 'prop-types';

/**
 * Degree View
 * A Degree contains all the data for a given degree (in progress or completed)
 * @param {*} data the data for a degree
 * @const @export
 */
const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>, {data.year}, GPA: {data.gpa}
        <p>{data.detail}</p>
      </p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
