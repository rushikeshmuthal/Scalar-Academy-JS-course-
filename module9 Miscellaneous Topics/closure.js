// closure means a nested function ( function inside another function) will always have 
//access to the variables and objects of it's outer function's scope / lexical scope

// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
//  closures are created every time a function is created, at function creation time.

function Fname() {
    let n = "steve"
    function displayname() {
        console.log(`name -> ${n}`);

        let age = 23
        function displayage() {
            console.log(`name -> ${n} and age -> ${age}`);
        }
        return displayage()
    }
    return displayname()
}

Fname()
// output
// name -> steve
// name -> steve and age -> 23
