/*
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopbooks((books) => {
      console.log('Top books: ', books);
      sendEmail(customer.email, books, () => {
        console.log('Email sent...')
      });
    });
  }
});
*/

function getCustomer(id) {
    return new Promise(function (resolve, reject) {
        // Code to execute
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John Doe',
                isGold: true,
                email: 'email'
            });
        }, 1000);
    });
}
/*
getCustomer(1).
    then(function (result) {
        console.log("Got Customer: ", result);
        getTopbooks().then(function (result) {
            console.log("Got books", result);
        })
});
*/
getCustomer(1)
    .then(function (result) {
        console.log("Got Customer: ", result);
        return getTopbooks();
    })
    .then(function (result) {
        console.log("Books: ", result);
        return sendEmail("email", result);
    })
    .then(() => {
        console.log("Successfully sent email");
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

function getTopbooks() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            //resolve(['book1', 'book2']);
            reject(new Error("unable to get books"));
        }, 1000);
    }); //End of promise

    return promise;
}

function sendEmail(email, books) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Sending email...");
            resolve();
        }, 1000);
    });
}

