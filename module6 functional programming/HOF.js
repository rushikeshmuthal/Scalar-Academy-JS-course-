//Higher order functions

//map
// map function will loop through your array and performs specific operation on each item of that array
// map always returns a new array as a result

//ex - find square of each number in the array
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(function (number) {
//     return number * number;
// }
// )
// console.log(squares); //[1, 4, 9, 16]

//ex - transactions

// const transactions = [1000,2000,4000,3000,-978,3200,-4000]
// const inrtoDollar = 80;

// const result = transactions.map((transaction)=> {
//     return Number(transaction)/inrtoDollar;
// })

// console.log(result);

//find
// find will return the first occurance of specified condition

// const transactions = [1000,2000,4000,3000,-978,3200,-4000]
// const firstwithdrawl = transactions.find((transaction)=> {
//     return transaction < 0;
// })
// console.log("first withdrawl is: " +firstwithdrawl);


//findIndex
// findIndex will return the index of first occurance of the spedified condition

// const firstwithdrawlIndex = transactions.findIndex((transaction)=> {
//     return transaction < 0;
// })
// console.log("index of first withdrawl is: "+firstwithdrawlIndex);

//some
//condition check : to get true of false based on the condition
//it returns true even if 1 element in array satisfies the condition

// const transactions = [1000,2000,4000,3000,-978,3]
// const hasNegativeValue = transactions.some((transaction)=>{
//     return transaction<0;
// })
// console.log(hasNegativeValue);
//every
// it checks for all elements and returns true only when every single element satisfies the condition

// const transactions = [1000,2000,4000,3000,978,3]
// const hasPositiveValues = transactions.every((transaction)=>{
//     return transaction>=0;
// })
// console.log(hasPositiveValues);

//filter
// filter creates a new array with all values that pass the test implemented by the provided function
// const transactions = [1000,2000,-4000,3000,-978,3]
// const positiveTransactions = transactions.filter((transaction) =>{
//     return transaction >= 0;
// })
// console.log(positiveTransactions);

//reduce
// reduce executes a reducer function (that you provide) on each value of the array, resulting in a single output value

// //ex - find the sum of all elements of the array
// let nums = [1,2,3,4,5,6]

// let result = nums.reduce((acc,n)=>{
//     let updatedSum = acc + n
//     return updatedSum
// },0)
// console.log(result);

//ex- find the product of the elements of array with each other
// let nums = [1,2,3,4,5,6]
// let result = nums.reduce((acc,n, index)=>{
//     let updatedProduct = acc * n
//     console.log("index "+ index);
//     return updatedProduct
// },1 )//acc - 1

// console.log(result); // output -720

