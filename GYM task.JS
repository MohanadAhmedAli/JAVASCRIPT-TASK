let finallyPrice = 0;


let priceformonth = 350;
console.log( 'priceformonth: = ' + priceformonth);
document.write('priceformonth: = ' + priceformonth+"<br>");

let numberOfMonths = +prompt("Enter the number of months you want to subscribe for gym: ");
console.log( 'numberOfMonths: = ' + numberOfMonths);
document.write('numberOfMonths: = ' + numberOfMonths+"<br>");

let totalPrice = priceformonth * numberOfMonths;
console.log( 'totalPrice: = ' + totalPrice);
document.write('totalPrice: = ' + totalPrice+"<br>");
discount = 0;

console.log( 'numberOfMonths: = ' + numberOfMonths);
if (numberOfMonths >= 6) { discount= totalPrice*(10/100);}else if (numberOfMonths >= 12) { discount= totalPrice*(15/100);} else { document.write('you do not have a discount.'); }
finallyPrice = totalPrice - discount;
console.log( 'discount: = ' + discount);
document.write('discount: = ' + discount+"<br>");
let  personaltraining = confirm("Do you want personal training for 200 EGP ?");

if ( personaltraining == true) {finallyPrice = finallyPrice + 200; }



let vat = (finallyPrice * (14/100 )).toFixed(2);
console.log( 'vat: = ' + vat);
document.write('vat: = ' + vat+"<br>");
let finallyPrices = (finallyPrice + Number(vat)).toFixed(2);
console.log('finallyPrices: = ' + finallyPrices);
document.write('finallyPrices: = ' + finallyPrices + "<br>");
