import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

/**
 * Maps course data from an array of course objects to an array of
 * Course components
 * @param {arrayOf course} courses the courses to map
 * @const @export
 */
const getRows = courses => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.unversity < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

/**
 * A component for visualizing a list of courses
 * @param {arrayOf courses} data the courses to initalize the component with
 * @export @const 
 */
const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    univerity: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
