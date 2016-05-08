import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import isogram from 'isogram';
import CopyToClipboard from 'react-copy-to-clipboard';

import Maybe from '../components/Maybe';

function IsogramOutput({ isogramConfig }) {
  const { letters } = isogramConfig;
  const isogramCode = (isValidIsogram(letters))
    ? isogram(letters, isogramConfig)
    : null;

  const handleClick = (e) => {
    const numClicks = e.detail;

    if (numClicks === 3) {
      const range = document.createRange();
      range.selectNode(e.currentTarget);
      window.getSelection().addRange(range);
    }
  };

  return (
    <div className="container--output">
      <div className="container--isogram" onClick={handleClick}>
        <pre className="isogram-code">
          {isogramCode}
        </pre>
      </div>
      <Maybe condition={!!isogramCode}>
        <div className="container--clipboard">
          <CopyToClipboard
            text={isogramCode}
            onCopy={() => alert('Copied!')}
          >
            <button className="btn--clipboard">Copy to Clipboard</button>
          </CopyToClipboard>
          <span>or triple-click the colored area above to select the code</span>
        </div>
      </Maybe>
    </div>
  );
}

IsogramOutput.propTypes = {
  isogramConfig: PropTypes.shape({
    letters: PropTypes.string,
    id: PropTypes.string,
    domain: PropTypes.string,
    globalName: PropTypes.string,
    minify: PropTypes.bool,
    singleQuotes: PropTypes.bool,
    track: PropTypes.bool,
    color: PropTypes.bool,
  }),
};

export default branch({
  isogramConfig: ['isogram'],
}, IsogramOutput);

// =============================================================================

function isValidIsogram(text) {
  return (text.length > 2 && text.length < 8);
}
