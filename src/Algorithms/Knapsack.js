import knapsack from "knapsack-js";
/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number} bucketSize
 * @param {Object[]} Items
 * @return {Object[]}
 */
export default Knapsack = (bucketSize, Items) => {
  return knapsack.resolve(Items, bucketSize);
};
