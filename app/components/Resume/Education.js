import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

/**
 * Displays the information about a given degree or degree in progress
 * @param {arrayOf degree} data the degrees to initialize the data for this component
 * @const @export
 */
const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map(degree => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.string,
    gpa: PropTypes.string,
  })),
};

Education.defaultProps = {
  data: [],
};


export default Education;
