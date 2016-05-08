import React, { Children, PropTypes } from 'react';
import RadioOption from './RadioOption';

function RadioGroup({ name, onChange, children }) {
  const options = Children.map(children, (option) => React.cloneElement(
    option,
    {
      group: name,
      onChange,
    }
  ));

  return (
    <div className="form__radio-group">
      {options}
    </div>
  );
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
