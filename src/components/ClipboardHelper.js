import React, { PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Alert from 'react-s-alert';

function ClipboardHelper({ text }) {
  const handleCopy = () => {
    Alert.success('Copied code to clipboard', {
      position: 'bottom',
      effect: 'stackslide',
      timeout: 1500,
    });
  };

  return (
    <div className="clipboard-container">
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button className="clipboard__button" disabled={!text}>
          Copy to Clipboard
        </button>
      </CopyToClipboard>
      <p className="clipboard__instructions">
        or triple-click the colored area above to select the code
      </p>
    </div>
  );
}

ClipboardHelper.propTypes = {
  text: PropTypes.string,
};

export default ClipboardHelper;
