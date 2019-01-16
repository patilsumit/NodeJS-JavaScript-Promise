function func1(){
    return 1;
}

var res1 = func1();
console.log(res1);

async function func2(){
    return 2;
}

//Get result of the async function

// var result=func2();
// console.log(result)

async function getResult(){  //this function is another async function getting result
    var result= await func2();
    console.log(result);
}

getResult();
//------1st way -----
// func2().then((result) => {
//     console.log(result)
// })