
function getCustomer(id) {
    //    let promise= new Promise((resolve,reject)=>{
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John Doe',
                isGold: true,
                email: 'email'
            });
        }, 1000);
    });

    // return promise;
}


function getTopbooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['book1', 'book2']);
        }, 1000);
    });

}

function sendEmail(email, books) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });

}
getCustomer(1)
    .then(function (customer) {
        console.log("Customers:", customer);
        return getTopbooks()
       .then(function(books){
           console.log("Books:",books);
           return sendEmail("sumit@gmail.com",books)
           .then(()=>{
            console.log("Email sent.....");
           })
           .catch((error) =>{
             console.log("Error:", error);
           });
       });
    });

