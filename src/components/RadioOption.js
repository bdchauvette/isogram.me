import React, { PropTypes } from 'react';

function RadioOption({ group, label, value, checked, onChange }) {
  return (
    <label className="label--radio">
      <input
        type="radio"
        name={group}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

RadioOption.propTypes = {
  group: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default RadioOption;
