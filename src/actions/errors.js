function setError(tree, errorPath, error) {
  tree.set(['errors', errorPath], error.message);
}

function clearErrors(tree) {
  tree.set('errors', {});
}

export {
  setError,
  clearErrors,
};
