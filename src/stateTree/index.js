import Baobab, { monkey } from 'baobab';

const DEFAULT_STATE = {
  isogram: {
    letters: 'isogram',
    globalName: 'ga',
    id: '',
    domain: '',
    minify: false,
    quotes: 'single',
    singleQuotes: monkey(
      ['isogram', 'quotes'],
      (quotes) => quotes === 'single'
    ),
    track: true,
    color: false,
  },
};

const stateTree = new Baobab(DEFAULT_STATE);

export default stateTree;
export { DEFAULT_STATE };
