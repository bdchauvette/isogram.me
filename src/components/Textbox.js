import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Textbox(props) {
  const {
    label,
    placeholder = label,
    value,
    onChange,
  } = props;

  const classes = classNames({
    'textbox': true,
    'textbox--has-text': value,
  });

  return (
    <div className={classes}>
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
