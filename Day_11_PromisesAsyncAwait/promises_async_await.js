//Task 1 Promise Creation
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task 1");
		resolve();
	}, 2000)
});

promise1
	.then(() => {
		console.log("Promise consumed 1");
	})

//Task 2
const promise2 = new Promise((resolve, reject) => {
	setTimeout(
		() => {
			let error = true;
			if (!error) {
				resolve();
			}
			else {
				reject();
			}
		}, 2000);
});
promise2.then(() => {
	console.log("Promise 2 consumed");
})
	.catch(() => {
		console.log("Something went wrong 2");
	})

//Chaining Promises
const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		const user = { userName: "Samrat", password: "1234" };
		console.log("Async Task 3");
		resolve(user);
	}, 2000);

})

promise3
	.then((user) => {
		console.log(user);
		return user.userName
	})
	.then((userName) => {
		console.log(userName);
	})
	.catch((err) => {
		console.log("Someething went wrong 3");
	});


//Using Async/Await
const promise4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let error = false;
		if(!error){
			resolve({userName:"Hitesh", email:"hitesh@example.com"});
		}
		else{
			reject("Error 4: Something went wrong");
		}
	},2000);
})
async function getAsyncData(){
	try {
		const response = await promise4;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
	
} 
getAsyncData();

//Fetch Data from an API
const data = fetch('https://jsonplaceholder.typicode.com/users')
