import React, { PropTypes } from 'react';

function Maybe({ className, condition, children }) {
  if (!!condition) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return null;
}

Maybe.propTypes = {
  condition: PropTypes.any,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  children: PropTypes.node,
};

export default Maybe;
