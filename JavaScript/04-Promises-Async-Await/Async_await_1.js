function findsum(num1,num2){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            var total=num1 + num2;
            resolve(total);
        },2000);
    });
}

//Used to set of async functions sequentially
async function getsum(){

    try
    {
        var sum=await findsum(5,10);
        console.log(sum);
    }
    catch(err){
       console.log("Error:" , err);
    }
    
} 

getsum();
console.log("Awaiting Result");



