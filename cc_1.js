//Step 1
const bill = 275; 
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20; //used ternary operator
const total = bill + tip;

//Step 2
console.log("The bill was $" + bill + ", the tip was $" + tip + ", and the total value $" + total + "."); //printed output 

//Step 3
const testBill = 100;
const calcTip = (testBill) => (testBill >= 50 && testBill <= 300) ? testBill * 0.15 : testBill * 0.20; //calcTip function
const testTip = calcTip(testBill);

console.log("For a bill of $" + testBill + ", the tip is $" + testTip + ".") //printed output 