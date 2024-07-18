console.log("From 1 to 10: ");
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

console.log("From 10 to 1: ");
let j = 10;
while (j > 0) {
	console.log(j);
	j--;
}

let k = 1;
console.log("From 1 to 5: ");
do {
	console.log(k);
	k++;
} while (k <= 5)

console.log("From 1 to 10 Skipping 5: ");
for (i = 1; i <= 10; i++) {
	if (i == 5) {
		continue;
	}
	console.log(i);
}

console.log("From 1 to 10 Stop when 7: ");
for (i = 1; i <= 10; i++) {
	if (i == 7) {
		break;
	}
	console.log(i);
}