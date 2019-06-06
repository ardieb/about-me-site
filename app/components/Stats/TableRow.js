import React from 'react';
import PropTypes from 'prop-types';

/**
 * A row in a table that has a label and a value to display
 * @param {string} label the label of the row to display 
 * @param {string} link the link the label references
 * @param {*} value the value to display in the labeled row
 * @const @export
 */
const TableRow = ({ label, link, value }) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link.length ? (<a href={link}>{value}</a>) : value}</td>
  </tr>
);

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  link: PropTypes.string,
};

TableRow.defaultProps = {
  link: '',
};

export default TableRow;
