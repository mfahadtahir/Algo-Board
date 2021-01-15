export default function MatrixChainOrder(matrixArray, i) {
  let dp = Array(10).fill(Array(10).fill(-1)),
    j = matrixArray.length - 1;
  if (i == j) return 0;
  // console.log("first step passed");
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
  console.log(dp);
  return dp[i][j];
}
