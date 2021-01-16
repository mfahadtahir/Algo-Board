/**
 * Dynamic programming approach to find Knapsack.
 * Time Complexity: O(N*W).
 *
 * @param {number[]} bucketSize
 * @param {number[]} weights
 * @param {number[]} profits
 * @param {number} n
 * @return {number}
 */
const knapsack = (bucketSize, weights, profits, n) => {
  let K = Array(n + 1).fill(Array(bucketSize + 1).fill(0));
  // Build table K[][] in bottom up manner
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= bucketSize; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (weights[i - 1] <= w)
        K[i][w] = Math.max(profits[i - 1] + K[i - 1][w - weights[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }
  console.log(K);
  return K[n][bucketSize];
};

export default knapsack;
