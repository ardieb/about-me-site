import React from 'react';
import PropTypes from 'prop-types';

import Extracurricular from './Extracurricular/Extracurricular';

const Extracurriculars = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="activities" />
    <div className="title">
      <h3>Extracurricular Activities</h3>
    </div>
    {data.map(activity => (
      <Extracurricular
        data={activity}
        key={activity.name}
      />
    ))}
  </div>
);

Extracurriculars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Extracurriculars;
