//01) Greet function

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

//02) Gross Price Function
function calcGrossPrice(netPrice, taxRate) {
  return (netPrice * (1 + taxRate)).toFixed(1);
}

// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//03) Add Positive Function
function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
