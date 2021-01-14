function RodCutting(prices, length) {
  const max = [0]; //len 0 as price 0
  for (let i = 1; i <= length; i++) {
    const ps = prices.slice(0, i);
    const all = ps.map((p, l) => p + max[i - l - 1]);
    max[i] = Math.max(...all);
  }
  return max[length];
}
