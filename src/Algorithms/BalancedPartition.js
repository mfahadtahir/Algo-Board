// A Dynamic Programming based
// Returns true if arr[] can be partitioned in two subsets of equal sum, otherwise false

export default function findPartiion(arr) {
  // console.log(arr);
  // Calculate sum of all elements
  let sum = arr.reduce((total, num) => total + num, 0);

  // check if total output isn't even we can't divide
  if (sum % 2 !== 0) return false;

  let part = Array(sum / 2 + 1).fill(Array(arr.length + 1));
  // bool part[sum / 2 + 1][n + 1];

  // initialize leftmost column,
  part.map((row) => (row[0] = false));
  // console.log("something", part);

  // initialize top row as true
  part[0] = Array(arr.length + 1).fill(true);

  // Fill the partition table in bottom up manner
  for (let i = 1; i <= sum / 2; i++) {
    for (let j = 1; j <= arr.length; j++) {
      part[i][j] = part[i][j - 1];
      if (i >= arr[j - 1]) part[i][j] = part[i][j] || part[i - arr[j - 1]][j - 1];
    }
  }

  // uncomment this part to print table
  // for (i = 0; i <= sum / 2; i++) {
  //   for (j = 0; j <= arr.length; j++) console.log(part[i][j]);
  // }
  console.log(part);
  return part[sum / 2][arr.length];
}
