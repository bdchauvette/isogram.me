function updateIsogramConfig(tree, field, newValue) {
  tree.set(['isogramConfig', field], newValue);
  tree.commit();
}

export default updateIsogramConfig;
