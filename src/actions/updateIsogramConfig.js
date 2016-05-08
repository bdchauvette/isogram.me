function updateIsogramConfig(tree, field, newValue) {
  tree.set(['isogram', field], newValue);
  tree.commit();
}

export default updateIsogramConfig;
