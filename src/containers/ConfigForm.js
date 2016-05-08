import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';

import updateIsogramConfig from '../actions/updateIsogramConfig';

import Maybe from '../components/Maybe';
import Checkbox from '../components/Checkbox';
import RadioGroup from '../components/RadioGroup';
import RadioOption from '../components/RadioOption';
import Textbox from '../components/Textbox';

export function ConfigForm({ dispatch, fields }) {
  const handleFormChange = (field) => (event) => {
    const el = event.target;

    // Normalize value between checkboxes and other input types
    const newValue = (el.getAttribute('type') === 'checkbox')
      ? el.checked
      : el.value;

    dispatch(updateIsogramConfig, field, newValue);
  };

  return (
    <div className="container container--config">
      <form className="form--config">
        <div className="form__row">
          <Textbox
            label="Letters"
            value={fields.letters}
            onChange={handleFormChange('letters')}
          />
        </div>
        <div className="form__row">
          <Textbox
            label="Google Analytics Global Variable Name"
            value={fields.globalName}
            onChange={handleFormChange('globalName')}
          />
        </div>
        <div className="form__row">
          <RadioGroup name="quotes" onChange={handleFormChange('quotes')}>
            <RadioOption
              label="Use Single Quotes"
              value="single"
              checked={fields.quotes === 'single'}
            />
            <RadioOption
              label="Use Double Quotes"
              value="double"
              checked={fields.quotes === 'double'}
            />
          </RadioGroup>
        </div>
        <div className="form__row">
          <Checkbox
            label="Minify Output"
            checked={fields.minify}
            onChange={handleFormChange('minify')}
          />
        </div>
        <div className="form__row">
          <Checkbox
            label="Include code to send page view"
            checked={fields.track}
            onChange={handleFormChange('track')}
          />
        </div>
        <Maybe className="form__row" condition={fields.track}>
          <Textbox
            label="Google Analytics Web Property ID"
            value={fields.id}
            onChange={handleFormChange('id')}
          />
        </Maybe>
        <Maybe className="form__row" condition={fields.track}>
          <Textbox
            label="Site Domain"
            value={fields.domain}
            onChange={handleFormChange('domain')}
          />
        </Maybe>
      </form>
    </div>
  );
}

ConfigForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    letters: PropTypes.string.isRequired,
    globalName: PropTypes.string.isRequired,
    id: PropTypes.string,
    domain: PropTypes.string,
    minify: PropTypes.bool.isRequired,
    singleQuotes: PropTypes.bool.isRequired,
    track: PropTypes.bool.isRequired,
  }).isRequired,
};

export default branch(
  { fields: ['isogram'] },
  ConfigForm
);
