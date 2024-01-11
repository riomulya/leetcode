// Maximum Difference Between Node and Ancestor

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function maxAncestorDiff(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    function dfs(node: TreeNode | null, maxAncestor: number, minAncestor: number): number {
        if (!node) {
            return maxAncestor - minAncestor;
        }

        maxAncestor = Math.max(maxAncestor, node.val);
        minAncestor = Math.min(minAncestor, node.val);

        const leftDiff = dfs(node.left, maxAncestor, minAncestor);
        const rightDiff = dfs(node.right, maxAncestor, minAncestor);

        return Math.max(leftDiff, rightDiff);
    }

    return dfs(root, root.val, root.val);
}
// Test case
const root = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))));
const result = maxAncestorDiff(root);
console.log(result);  // Expected output: 7
