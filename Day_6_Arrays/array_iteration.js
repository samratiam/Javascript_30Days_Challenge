let sample = [5, 6, 7, 8, 10];

for (let index = 0; index < sample.length; index++) {
	const element = sample[index];
	console.log(`Element ${index + 1} = ${element}`);
}

console.log("Show array using foreach: ");
sample.forEach(element => {
	console.log(element);
});