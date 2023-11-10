//simple function

function sum (a,b){
    console.log(a+b);
}
sum(2,5)
//output = 7


//curried fuction
function sumCurried (a){
    return function (b){
        console.log(a+b);
    }
}
let addTwoNumbers = sumCurried(2);
addTwoNumbers(4);
//output = 6
//curried function is used when we have to pass the more than one or two parameters to the fuction