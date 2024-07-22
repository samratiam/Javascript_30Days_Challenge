let outerFunc = function(innerFunc, repeatTimes)
{
	for (let i = 0; i <repeatTimes ; i++) {
		innerFunc();
	}
}

let innerFunc = function()
{
	console.log("This is within Inner function");
}

outerFunc(innerFunc,5);