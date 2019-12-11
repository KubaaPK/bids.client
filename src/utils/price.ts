/**
 * Formats price returned by API which looks like '10.00'
 * to tuple with main amount and pennies.
 * @param {string} price Price to be tupled to main part and pennies.
 * @returns {[string, string]} tuple
 */
const tupledMainAndPennies = (price: string): [string, string] => {
  const splittedPrice: string[] = price.split('.');
  return [splittedPrice[0], splittedPrice[1]];
};

const calulatePriceWithShipping = (
  price: string,
  shippingRatePrice: string
): string => {
  return (Number.parseFloat(price) + Number.parseFloat(shippingRatePrice))
    .toFixed(2)
    .replace('.', ',');
};

export { tupledMainAndPennies, calulatePriceWithShipping };
