import React from 'react';
import PropTypes from 'prop-types';

/**
 * CategoryButton is a button for handling labeled click events
 * @param {func} handleClick the callback function on click
 * @param {bool} active whether the button is active
 * @param {string} label the label for the button
 * @const @export
 */
const CategoryButton = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default CategoryButton;
