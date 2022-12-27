const formatCurrency = function( currencySymbol, decimalSeparator ) {  
  return function (amount) {
    let amountWithDecimal = amount / 100;
    amountWithDecimal = String(amountWithDecimal).replace('.', decimalSeparator);

    return `${currencySymbol} ${amountWithDecimal}`;
  }
}
const getUS = formatCurrency( '$', '.' );
const getUK = formatCurrency( '£', '.' );
console.log(getUS(1901))
console.log(getUK(2499))