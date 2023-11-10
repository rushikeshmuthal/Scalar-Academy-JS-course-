//promise

let mypromise = new Promise(function(resolve,reject){
    let a = 9
    let b = 10
    setTimeout(function(){
        if (a === b){
            resolve("Values are equal")
        }
        else{
            reject("values not equal")
        }
    },2000)
})

//then -> for handling resolve state
mypromise
.then((result)=>{
    console.log(`Resolved: ${result}`)
})
//catch -> for handling reject state
.catch((error) => {
    console.log(`Rejected: ${error}`);
})