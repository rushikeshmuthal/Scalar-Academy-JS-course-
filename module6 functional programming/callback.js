// callback function
// callback functions are the functions which are passed as an argument to another function

// function printFirstname (firstName, cb){
//     console.log("The first name is " + firstName);
//     cb('Adam')
// }

// function printLastname (Lastname){
//     console.log("The last name is " + Lastname)
// }

// printFirstname("Steave", printLastname)

// callback functions in arrow functions

const callback=(fname)=> {
  return fname;
}

const mainfunc = (cb,lname)=> {
  const result=cb('adam');
  console.log(`my name is ${result +" "+ lname} `);
}

mainfunc(callback,'jobs')