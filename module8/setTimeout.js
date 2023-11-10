// setTimeout is an asynchronous function
//it is used to run callback function after given time interval for once.

function callback(){
    console.log('this is callback function');
}

setTimeout(callback, 3000)// 3000ms - 3 seconds

//output - callback function will run after 3 seconds for once