const fs = require("fs")


// //reading asynchronous data parallely
// //the callback functions in every readfile function will run in random order

// console.log('this is first line');

// //reading file1 data asynchronously
// fs.readFile('./file1.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('file 1 data -> ' + data);
//     }
// })

// //reading file 2 data asyncronously
// fs.readFile('./file2.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('file 2 data -> ' + data);
//     }
// })
// //reading file 3 data asyncronously
// fs.readFile('./file3.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('file 3 data -> ' + data);
//     }
// })



// console.log('this is last line');



//reading asynchronous data serially
//the callback functions in every readfile function will run in specified order,
//it means first file 1 data will be read, then file 2 data, then file 3 data like this

console.log('this is first line');

//reading file1 data asynchronously
fs.readFile('./file1.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('file 1 data -> ' + data);


        //reading file 2 data asyncronously
        fs.readFile('./file2.txt', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('file 2 data -> ' + data);


                //reading file 3 data asyncronously
                fs.readFile('./file3.txt', function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('file 3 data -> ' + data);
                    }
                })

            }
        })
    }
})





console.log('this is last line');