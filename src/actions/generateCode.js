import isogram from 'isogram';
import { configCursor } from '../stateTree';
import { setError, clearErrors } from './errors';

function generateCode(tree) {
  const isogramConfig = configCursor.get();
  const chars = isogramConfig.chars;
  let analyticsCode = '';

  try {
    analyticsCode = isogram(chars, isogramConfig);
    clearErrors(tree);
  } catch (err) {
    // isogram (currently) only validates the character input, so we can hard
    // code that path into the error object. It would probably be a better long
    // term solution to have more flexible error handling, but for now this
    // keeps things nice and simple.
    setError(tree, 'chars', err);
  }

  tree.set('analyticsCode', analyticsCode);
}

export default generateCode;
