import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Maybe from './Maybe';

function Textbox(props) {
  const {
    label,
    placeholder = label,
    value,
    error,
    onChange,
    required,
  } = props;

  const classes = classNames({
    'textbox': true,
    'has-text': value,
    'has-error': error,
    'is-required': required,
  });

  return (
    <div className={classes}>
      <input
        type="text"
        placeholder={(required) ? `${placeholder} (Required)` : placeholder}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
      <Maybe className="form__error" condition={error}>
        {error}
      </Maybe>
    </div>
  );
}

Textbox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Textbox;
