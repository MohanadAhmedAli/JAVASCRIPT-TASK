let amount = +prompt("Enter amount");

alert("amount = " + amount);
console.log("amount = " + amount);
document.write("amount = " + amount+ '<br>');

let applyservice = amount + (amount * (2/100));

console.log("amount after service = " + applyservice);
document.write("amount after service = " + applyservice+ '<br>');
alert("amount after service = " + applyservice);

let rechargevat = amount * (14/100);

console.log("VAT = " + rechargevat);
document.write("VAT = " + rechargevat+ '<br>');
alert("VAT = " + rechargevat);


let finallyPriceforrecharge=  rechargevat + applyservice  ;

console.log("Finally price = " + finallyPriceforrecharge);
document.write("Finally price = " + finallyPriceforrecharge + '<br>');
alert("Finally price = " + finallyPriceforrecharge);