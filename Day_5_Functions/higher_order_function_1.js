let multiplyBy5 = function(value){
	let num4 = value * 5;
	return num4;
}

let add10 = function(value){
	return value + 10;
}

let finalFunc = function(func1, func2,value){
		let result1 = func1(value);
		return func2(result1);
}

console.log("Final result:",finalFunc(multiplyBy5,add10,5))