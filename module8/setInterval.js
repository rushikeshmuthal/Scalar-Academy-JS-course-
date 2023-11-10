//setInterval is also an asynchronous function which will run its callback function 
//repeatedly after given time interval

function cb (){
    console.log('this is callback function');
}

let interval = setInterval(cb, 2000)

setTimeout(function (){
    //clearInterval is used to stop the setInterval
    clearInterval(interval);
},8000)
//output - cb function will run after each 2 seconds, and after 8 seconds it will be stopped by clearInterval
