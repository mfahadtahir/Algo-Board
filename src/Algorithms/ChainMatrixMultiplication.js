/**
 * Dynamic programming approach to find Chain Matrix Order.
 * Time Complexity: O(N*W).
 *
 * @param {number[]} matrixArray
 * @param {number} n
 * @return {number}
 */

export default function ChainMatrixOrder(matrixArray, n) {
  /* For simplicity of the program, one 
    extra row and one extra column are 
    allocated in m[][]. 0th row and 0th 
    column of m[][] are not used */
  let m = Array(n).fill(Array(n).fill(0));

  let i, j, k, L, q;

  /* m[i, j] = Minimum number of scalar 
    multiplications needed to compute the 
    matrix A[i]A[i+1]...A[j] = A[i..j] where 
    dimension of A[i] is p[i-1] x p[i] */

  // L is chain length.
  for (L = 2; L < n; L++) {
    for (i = 1; i < n - L + 1; i++) {
      j = i + L - 1;
      m[i][j] = Number.POSITIVE_INFINITY;
      for (k = i; k <= j - 1; k++) {
        // q = cost/scalar multiplications
        q = m[i][k] + m[k + 1][j] + matrixArray[i - 1] * matrixArray[k] * matrixArray[j];
        if (q < m[i][j]) m[i][j] = q;
      }
    }
  }
  console.log(m);
  return m[1][n - 1];
}
