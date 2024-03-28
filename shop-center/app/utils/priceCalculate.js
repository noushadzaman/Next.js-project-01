export default function calculatePrice(price, discount) {
  const deductPrice = (price * discount) / 100;
  const discountedPrice = (price - deductPrice).toFixed(2);
  return discountedPrice;
}
