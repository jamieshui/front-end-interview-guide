/**
 * 解法一：DFS
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * - 深度优先遍历所有节点。
 *   拷贝所有的节点，存储起来。
 *   将拷贝的节点按照原图的连接方法进行连接。
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    if (!node) return;
    const visited = new Map();
    const dfs = (n) => {
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne);
            }
            nCopy.neighbors.push(visited.get(ne));
        })
    };
    dfs(node);
    return visited.get(node);
};