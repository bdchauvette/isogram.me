import React, { PropTypes } from 'react';

function Maybe({ className, condition, children }) {
  if (!condition) {
    return null;
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Maybe.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Maybe;
