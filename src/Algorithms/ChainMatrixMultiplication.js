export default function MatrixChainOrder(matrixArray, i = 1) {
  let dp = Array(100).fill(Array(100)),
    j = matrixArray.length - 1;
  if (i == j) return 0;

  if (dp[i][j] != -1) return dp[i][j];

  dp[i][j] = Infinity;
  for (let k = i; k < j; k++) {
    dp[i][j] = Math.min(
      dp[i][j],
      MatrixChainOrder(matrixArray, i, k) +
        MatrixChainOrder(matrixArray, k + 1, j) +
        matrixArray[i - 1] * matrixArray[k] * matrixArray[j]
    );
  }
  return dp[i][j];
}
