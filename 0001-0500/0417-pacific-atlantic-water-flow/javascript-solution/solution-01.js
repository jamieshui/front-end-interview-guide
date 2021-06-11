/**
 * 解法一：DFS
 * 
 * 时间复杂度：O(m * n) 空间复杂度：O(m * n)
 * 
 * - 构建两个矩阵，分别记录能流到两个大洋的坐标。
 *   从海岸线逆流而上深度优先遍历图，过程中填充上述矩阵。
 *   遍历两个矩阵，找出能流到两个大洋的坐标。
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    if (!heights || !heights[0]) return [];
    const m = heights.length;
    const n = heights[0].length;
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
    
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
                // 保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 防止死循环
                !flow[nr][nc] &&
                // 保证逆流而上
                heights[nr][nc] >= heights[r][c]
           ) {
               dfs(nr, nc, flow);
           }
        });
    };

    // 沿着海岸线逆流而上
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }

    // 收集能流到两个大洋里的坐标
    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};
