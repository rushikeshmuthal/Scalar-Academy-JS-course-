//promices chain
function placeorder(drink){
    return new Promise((resolve,reject)=>{
        if(drink == 'coffee'){
            resolve('order for coffee received')
        }
        else{
            reject('other orders are rejected')
        }
    })
}

function processedOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(order + ' is served')
    })
}
// // placeorder('coffee').then(processedOrder).then(console.log)

// placeorder('coffee').then(result => {
//     console.log(result);
//     let orderisProcessed = processedOrder(result)
//     return orderisProcessed
// }).then(function(orderprocessed){
//     console.log(orderprocessed)
// }).catch(function(error){
//     console.log(error);
// })


// output - order for coffee received
//          order is being processed
//          order for coffee received is served

//now by using async await

async function serverorder(){
    try {
        let orderplaced  =await placeorder('coffee')
        console.log(orderplaced);
        let orderprocessed =await processedOrder(orderplaced)
        console.log(orderprocessed);
    } catch (error) {
        console.log(error);
        
    }
}
serverorder()
