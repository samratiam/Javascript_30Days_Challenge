let num1 = -20;
let num2 = -40;
let num3 = 0;

if (num1 > num2 && num1 > num3) {
	console.log(`${num1} is the largest`);
}
else if (num2 > num1 && num2 > num3) {
	console.log(`${num2} is the largest`);
}
else {
	console.log(`${num3} is the largest`);
}