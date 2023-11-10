// console.log(this);
//output - {}
// in browser mode 
//output - window object

// function myfn (){
//     console.log(this);
// }
// myfn ()

//output - Global object
// in browser mode 
//output - window object


// let myobj ={
//     name :"rushi",
//     age: 25,
//     myfn : function (){
//         console.log(this);
//     }

// }
// myobj.myfn();

//ouput - { name: 'rushi', age: 25, myfn: [Function: myfn] }
// in browser mode 
//ouput - { name: 'rushi', age: 25, myfn: [Function: myfn] }


// let myobj2 = {
//     name : "rushi",
//     age: 23,
//     myfn2 : function (){
//         function myfn3 (){
//             console.log(this);
//         }
//         myfn3();

//     }
// }
// myobj2.myfn2();

//outout - Global Object
// in browser mode 
//output - window object
