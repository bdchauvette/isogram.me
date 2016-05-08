import React, { PropTypes } from 'react';

function Maybe({ condition, children }) {
  if (!condition) {
    return null;
  }

  return (
    <div>
      {children}
    </div>
  );
}

Maybe.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Maybe;
