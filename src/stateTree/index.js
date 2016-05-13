import Baobab from 'baobab';
import isogram from 'isogram';

import validate from './validate';
import generateCode from '../actions/generateCode';

const defaultState = {
  isogramConfig: {
    chars: 'isogram',
    globalName: 'ga',
    id: '',
    domain: '',
    minify: false,
    singleQuotes: true,
    track: true,
    scriptTag: true,
    color: false,
  },
  errors: {},
};

// The generated code relies on other values from the configuration object, so
// we have to set it separately, rather than in the object literal.
defaultState.analyticsCode = isogram(
  defaultState.isogramConfig.chars,
  defaultState.isogramConfig
);

const stateTree = new Baobab(defaultState, {
  validate,
  immutable: (process.env.NODE_ENV === 'production'),
});

// Update the analytics code whenever the config is updated
const configCursor = stateTree.select('isogramConfig');
configCursor.on('update', (e) => generateCode(e.target.tree));

export default stateTree;
export {
  defaultState,
  configCursor,
};
