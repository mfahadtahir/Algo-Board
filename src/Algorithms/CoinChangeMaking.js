/**
 * @param {number[]} arry
 * @param {number} lengthOfNums
 * @param {number} cents
 * @return {number}
 */
const CoinChangeMaking = (arry, lengthOfNums, cents) => {
  // If cents is 0 then there is 1 solution
  // (do not include any coin)
  if (cents === 0) return 1;

  // If cents is less than 0 then no
  // solution exists
  if (cents < 0) return 0;

  // If there are no coins and cents
  // is greater than 0, then no
  // solution exist
  if (lengthOfNums <= 0 && cents >= 1) return 0;

  // count is sum of solutions (i)
  // including S[m-1] (ii) excluding S[m-1]
  return (
    CoinChangeMaking(arry, lengthOfNums - 1, cents) +
    CoinChangeMaking(arry, lengthOfNums, cents - arry[lengthOfNums - 1])
  );
};
export default CoinChangeMaking;
