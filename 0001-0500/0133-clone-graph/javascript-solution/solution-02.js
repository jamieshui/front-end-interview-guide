/**
 * 解法二：BFS
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * - 广度优先遍历所有节点。
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
    visited.set(node, new Node(node.val));
    const queue = [node];
    while (queue.length) {
        const n = queue.shift();
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                queue.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        })
    }
    return visited.get(node);
};