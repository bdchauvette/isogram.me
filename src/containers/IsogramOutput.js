import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import classNames from 'classnames';

import ClipboardHelper from '../components/ClipboardHelper';

function IsogramOutput({ analyticsCode, errors }) {
  const handleClick = (e) => {
    const numClicks = e.detail;

    if (numClicks === 3) {
      const range = document.createRange();
      range.selectNode(e.currentTarget);
      window.getSelection().addRange(range);
    }
  };

  const hasErrors = Object.keys(errors).length;
  let isogramContainerContent;

  if (hasErrors) {
    isogramContainerContent = (
      <div className="isogram-code has-error">
        Please fix the errors in the configuration form
      </div>
    );
  } else {
    isogramContainerContent = (
      <pre className="isogram-code">
        {analyticsCode}
      </pre>
    );
  }

  const isogramContainerClassNames = {
    'isogram-container': true,
    'full': true,
    'has-error': hasErrors,
  };

  return (
    <div className="output-container column three-qtr--lg">
      <div
        className={classNames(isogramContainerClassNames)}
        onClick={handleClick}
      >
        {isogramContainerContent}
      </div>
      <ClipboardHelper text={analyticsCode} />
    </div>
  );
}

IsogramOutput.propTypes = {
  analyticsCode: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default branch({
  analyticsCode: 'analyticsCode',
  errors: 'errors',
}, IsogramOutput);
