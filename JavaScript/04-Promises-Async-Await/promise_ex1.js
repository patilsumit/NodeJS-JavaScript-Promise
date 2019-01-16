//Create a promise
let promise = new Promise(function(resolve, reject) {
    // setTimeout(() => resolve("done!"), 2000);
    // setTimeout(() => reject(new Error("Something went bad")), 2000); //this stack error
     setTimeout(() => reject(("Something went bad")), 2000); //this not stack error

    });

//console.log("Output: ", {name: "Mubeen"});

// Consume the promise/get the result
promise.then(
    function(result) {
    console.log("Success: ", result);
    },
    function(error) {
        console.log("Error: ", error);
    }
);
