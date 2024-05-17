const bill = 275; //example
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
const total = bill + tip;

console.log("The bill was $" + bill + ", the tip was $" + tip + ", and the total value $" + total + ".");