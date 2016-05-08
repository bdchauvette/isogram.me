import React, { PropTypes } from 'react';

function Textbox(props) {
  const {
    label,
    placeholder = label,
    value,
    onChange,
  } = props;

  const classNames = {
    'textbox': true,
    'textbox--has-text': value,
  };

  return (
    <div className={classNames}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
}

Textbox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textbox;