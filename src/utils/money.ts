/**
 * Format number into currency
 *
 * @param value
 * @param currencyKey NGN, USD, EUR GBP
 * @returns
 */

const money = (value: number = 0, currencyKey: 'USD' = 'USD') => {
    return Intl.NumberFormat(`en-${currencyKey.substring(0, 2)}`, {
        style: 'currency',
        currency: currencyKey,
    }).format(value);
};

export default money;
