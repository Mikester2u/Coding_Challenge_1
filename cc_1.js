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

console.log("For a bill of $" + testBill + ", the tip is $" + testTip + "."); //printed output 

//Step 4 
const bills1 = [275, 40, 430];
const bills2 = [125, 555, 44];

const tips1 = bills1.map(calcTip);
const tips2 = bills2.map(calcTip);

const totals1 = bills1.map((bill, index) => bill + tips1[index]);
const totals2 = bills2.map((bill, index) => bill + tips2[index]);

console.log("Data Set 1:");
bills1.forEach((bill, index) => {
    console.log("The bill is $" + bill + ", the tip is $" + tips1[index] + " and the total is $" + totals1[index] +
        ".");
});

console.log("Data Set 2:");
bills2.forEach((bill, index) => {
    console.log("the bill is $" + bill + ", the tip is $" + tips2[index] + " and the total is $" + totals2[index] + ".");
});