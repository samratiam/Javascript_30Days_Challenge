//Task 1
function errorFunc1(){
	try{
		let err = true;
		if(err)
		{
			throw new Error("Something went wrong on func 1");
		}
		else{
			console.log("No error occur here on func 1");
		}
	}
	catch(error)
	{
		console.log(error);
	}
}

errorFunc1();

function divide(num1, num2)
{
	try {
		let result = num1 / num2; 
		if(num2 == 0)
		{
			throw new Error("Divide by zero exception");
		}
		console.log(result);
	} catch (error) {
		console.log(error)
	}
	finally{
		console.log("Finally divide operation completed..")
	}
}
divide(5,0);

fetch("https://thisdomaindoesnotexist12345.com")
.then((data)=>{
	console.log(data);
})
.catch((err)=>{
	console.log("Error in fetch api using Promise:",err);
})

//Graceful Error handling in Fetch
async function asyncTask()
{
	try{
		let data = await fetch("https://thisdomaindoesnotexist1234.com");
		// let response = await data.json();
		console.log(data);
	}
	catch(error){
		console.log("Error message in fetch api using async await",error);
	}
}
asyncTask();