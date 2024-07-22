let checkIfSpecificCharIsPresent = (word, character) => {
	let isCharPresent = false;
	for (let i = 0; i < String(word).length; i++) {
		if (word[i] === character) {
			isCharPresent = true;
			break;
		}
	}
	return isCharPresent;
};

if (checkIfSpecificCharIsPresent('Li*ght', '*')) {
	console.log("* is present");
}
else {
	console.log("* isnot present");
}

