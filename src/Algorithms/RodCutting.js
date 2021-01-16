/**
 * @param {number[]} price
 * @param {number} rodLength
 * @return {number}
 */
/* Returns the best obtainable price for a rod of length n and 
   price[] as prices of different pieces */
const RodCudding = (price, rodLength) => {
  if (rodLength <= 0 || !rodLength) return 0;
  // console.log(rodLength);
  let max_val = 0;

  // Recursively cut the rod in different pieces and compare different
  // configurations
  for (let i = 0; i < rodLength; i++)
    max_val = Math.max(max_val, price[i] + RodCudding(price, rodLength - i - 1));
  return max_val;
};

export default RodCudding;
