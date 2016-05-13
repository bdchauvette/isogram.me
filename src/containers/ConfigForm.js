import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';

import updateIsogramConfig from '../actions/updateIsogramConfig';

import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';

export function ConfigForm({ dispatch, fields, errors }) {
  const handleFormChange = (field) => (event) => {
    const el = event.target;

    // Normalize value between checkboxes and other input types
    const newValue = (el.getAttribute('type') === 'checkbox')
      ? el.checked
      : el.value;

    dispatch(updateIsogramConfig, field, newValue);
  };

  return (
    <form className="form--config column one-qtr--lg">
      <div className="form__row column half--md full--lg">
        <Textbox
          label="Your Isogram"
          value={fields.chars}
          error={errors.chars}
          onChange={handleFormChange('chars')}
          required
        />
      </div>
      <div className="form__row column half--md full--lg">
        <Textbox
          label="Global Variable Name"
          value={fields.globalName}
          error={errors.globalName}
          onChange={handleFormChange('globalName')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Textbox
          label="Web Property ID"
          value={fields.id}
          onChange={handleFormChange('id')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Textbox
          label="Site Domain"
          value={fields.domain}
          onChange={handleFormChange('domain')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Checkbox
          label="Add tracking snippet"
          checked={fields.track}
          onChange={handleFormChange('track')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Checkbox
          label="Add script tag"
          checked={fields.scriptTag}
          onChange={handleFormChange('scriptTag')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Checkbox
          label="Use Single Quotes"
          checked={fields.singleQuotes}
          onChange={handleFormChange('singleQuotes')}
        />
      </div>
      <div className="form__row column half--md full--lg" >
        <Checkbox
          label="Minify Output"
          checked={fields.minify}
          onChange={handleFormChange('minify')}
        />
      </div>
    </form>
  );
}

ConfigForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    chars: PropTypes.string.isRequired,
    globalName: PropTypes.string.isRequired,
    id: PropTypes.string,
    domain: PropTypes.string,
    minify: PropTypes.bool.isRequired,
    scriptTag: PropTypes.bool.isRequired,
    singleQuotes: PropTypes.bool.isRequired,
    track: PropTypes.bool.isRequired,
  }).isRequired,
  errors: PropTypes.object,
};

export default branch(
  {
    fields: ['isogramConfig'],
    errors: ['errors'],
  },
  ConfigForm
);
