// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

var lowestCommonAncestor = function(root, p, q) {
  const small = p < q ? p : q;
  const big = p <= q ? q : p;

  let node = root;
  while (node) {
    if (node.val > big) node = node.left;
    else if (node.val < small) node = node.right;
    else return node;
  }
  return null;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const data = [6,2,8,0,4,7,9,null,null,3,5];

const genBSTree = (data, i = 0) => {
  if (i >= data.length || data[i] === null) return null;

  const node = new TreeNode(data[i]);
  node.left = genBSTree(data, 2 * i + 1);
  node.right = genBSTree(data, 2 * i + 2);

  return node;
}

const testTree = genBSTree(data);

console.log(lowestCommonAncestor(testTree, 2, 4))