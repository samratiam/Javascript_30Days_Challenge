## Day 1 Javascript Challenge
### Variables in JavaScript
- Variables can be assigned using **var, let and const**
- **var** can be redeclared with **same name** 
- The values initialized using var and let can be reassigned. But the values assigned using const cannot be re-assigned. It will throw error with error message  ` TypeError: Assignment to constant variable. `


### DataTypes in JavaScript
- Datatypes can be **number, string, boolean, object,** etc.
- Example of object: `const obj1 = {firstname: "John", roll:20}`.
- Example of array: `var sampleArray =[1, "Ram",true]`
- You can get the datatype of the variable using `typeof(variable_name)` function. 
- In case of array, if we try to get the datatype of the variable using `typeof(sampleArray)` function. It will return `object` as a datatype. In Javascript, array are the special kind of objects. Because of this, you can have arrays of different datatypes as shown above.
