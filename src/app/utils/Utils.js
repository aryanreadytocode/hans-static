/**
 * Calculates discount percentage
 * @param {number} mrp - Original price (MRP)
 * @param {number} price - Selling price
 * @returns {number} - Discount percentage (rounded down)
 */
export default function getDiscountPercentage(mrp, price) {
  console.log(`Calculating discount percentage for MRP: ${mrp}, Price: ${price}`);
  if (!mrp || !price || mrp <= 0 || price < 0 || price > mrp) {
    return 0;
  }

  const discount = ((mrp - price) / mrp) * 100;
  return Math.floor(discount); // round down
}
