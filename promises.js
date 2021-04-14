// Application Programming Interface (APIs)
// display data from an outside form
// promises are a way for us handle asynchronous code
// asynchronous code does not necessarily read from top to bottom like the rest of js stuff we've done so far

// asynchonicity and time out

// setTimeout(() => console.log('this is a test of timeouts'), 1000);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (true) {
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
}) // new is a keyword // simulation of a data fetch

promise
    .then(success => console.log(success))
    .catch(err => console.log(err)); //err = "failure"

console.log('this code is after our promise and .then chain!');

function playFunc(){
    return 5;
}

console.log(playFunc());