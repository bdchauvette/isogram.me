const config = {
  extends: 'airbnb',
  rules: {
    'no-use-before-define': ['error', { functions: false }],
    'quote-props': ['error', 'consistent-as-needed'],
  },
};

module.exports = config;
