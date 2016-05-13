import isogram from 'isogram';
import isVarName from 'is-var-name';
import { configCursor } from '../stateTree';
import { setError, clearErrors } from './errors';

function generateCode(tree) {
  const isogramConfig = configCursor.get();
  const { chars, globalName } = isogramConfig;
  let analyticsCode = '';

  // This is a hacky way of determining if the thrown error belongs to the
  // characters field. Rather than testing the isogram input ourselves, we
  // parse whatever exception has been thrown and assign the error output
  // based on what we know of isogram's error messages.
  //
  // This is certainly brittle, but it's easier than having to maintain our
  // own input validation, which would also be brittle and could just as
  // easily fall out of sync with the underlying libraries.
  try {
    clearErrors(tree);
    analyticsCode = isogram(chars, isogramConfig);
  } catch (err) {
    // A RegExp that matches potential error messages for the Chars input
    const charsErrorPattern = new RegExp([
      // If the `chars` field contains chars that cannot be used as JS variable
      // names, isogram throws a normal Error whose message contains 'parameter
      // name'
      'parameter name',

      // If the `chars` field contains duplicates, isogram throws a normal Error
      // whose message contains 'duplicated'
      'duplicated',
    ].join('|'));

    // If the isogram field does not have enough characters, isogram throws
    // a RangeError
    if (err instanceof RangeError) {
      setError(tree, 'chars', err);
    } else if (charsErrorPattern.test(err.message)) {
      setError(tree, 'chars', err);
    }

    // isogram processes the chars first and throws on the first error, so if
    // both the isogram characters and the global variable name are invalid,
    // isogram will only throw an error for the characters.
    //
    // This means that we have to explicitly check if the global variable name
    // is valid, or the global name field might appear on the front end as valid
    // even when it's not.
    if (!isVarName(globalName)) {
      setError(tree, 'globalName', err);
    }
  }

  tree.set('analyticsCode', analyticsCode);
}

export default generateCode;
