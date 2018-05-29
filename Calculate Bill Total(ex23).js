function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  var billTax = preTaxAndTipAmount * .095;
  var billTip = preTaxAndTipAmount * .15;
  var tipAndTaxTotal = billTax + billTip;
  
  return preTaxAndTipAmount + tipAndTaxTotal;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
