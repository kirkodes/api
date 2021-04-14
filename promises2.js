// fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json)) // .then handle results

// async function slowResults(){
//     await fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true') //asynchronous
//         .then(res => res.json())
//         .then(json => console.log(json))
//     console.log('this is a message!')
// }

// slowResults();

/*
Async returns a promise
Await works with anything that returns a promise

await can only be used in conjunction with async

if the later code depends upon an earlier fetch result, then async and await can help you out quite a bit

Async and await both identify functions and expressions, respectively that return promises. Await, additionally, allows async code to be run as if it happens sequentially, guaranteeing that the await body of the code finishes before running later code.
*/

async function slowResults(){
    await fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true') //asynchronous
        .then(res => res.json())
        .then(json => {json.lolProperty = 'this is a random property'; return json;})
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResults();