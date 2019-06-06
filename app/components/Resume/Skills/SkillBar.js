import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const {
    category, competency, title, description,
  } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter(cat => category.includes(cat.name))
      .map(cat => cat.color)[0],
  };

  let render;
  if (competency) {
    const barStyle = {
      ...titleStyle,
      width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
    };
    render = (
      <div className="skillbar clearfix">
        <div className="skillbar-title" style={titleStyle}>
          <span>{title}</span>
        </div>
        <div className="skillbar-bar" style={barStyle} />
        <div className="skill-bar-percent"> {competency} / 5 </div>
      </div>
    );
  } else {
    render = (
      <div className="skillbar clearfix">
        <div className="skillbar-title" style={titleStyle}>
          <span>{title}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return render;
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
