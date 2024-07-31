//Task 1 Promise Creation
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task 1");
		resolve({post:"Test",comment:"This is a test"});
	}, 2000)
});

promise1
	.then((userPost) => {
		console.log(userPost);
		console.log("Promise consumed 1");
	})

//Task 2
const promise2 = new Promise((resolve, reject) => {
	setTimeout(
		() => {
			let error = false;
			if (!error) {
				resolve({title:"The Art of Living","author":"Sam"});
			}
			else {
				reject();
			}
		}, 2000);
});
promise2.then((book) => {
	console.log(book);
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
const promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;
		if (!error) {
			resolve({ userName: "Hitesh", email: "hitesh@example.com" });
		}
		else {
			reject("Error 4: Something went wrong");
		}
	}, 2000);
})
async function getAsyncData() {
	try {
		const response = await promise4;
		console.log(response);
	} catch (error) {
		console.log(error);
	}

}
getAsyncData();

//Fetch Data from an API
//Fetch execute in the whole program since it is a high priority task in priority queue ahead of any other operations
fetch('https://jsonplaceholder.typicode.com/users')
	.then((data) => {
		return data.json();
	})
	.then((response) => {
		console.log("Response using fetch and Promise:", response);
	})
	.catch((error) => {
		console.log(error);
	});

async function getAsynAwaitResult() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	// data.json() returns Promise
	const response = await data.json();
	console.log("Response using Fetch and async await:", response);
}

getAsynAwaitResult();

console.log("Output using Promise.all:");
//Promise.all takes an iterable of promises as input and returns a single promises, The returned promise fullfills when all of the input's promises fulfill 
//and rejects when any of them is rejected
Promise.all([promise1, promise2, promise3])
	.then((values) => {
		console.log("From promise all resolve:",values);
	})
	.catch((err)=>
	{
		console.log("From promise reject:",err);
	});

const promise6 = new Promise((resolve,reject)=>{
	setTimeout(resolve,500,'test1');
})
const promise7 = new Promise((resolve,reject)=>{
	setTimeout(resolve,100,'test2');
})

//Give 'test2' as output since timeout is less and occurs even before fetch() api if fetch api takes time more than 100 millisecond
Promise.race([promise6, promise7])
.then((value)=>{
	console.log("Promise race result:",value);
})