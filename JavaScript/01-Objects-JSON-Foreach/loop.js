/* Loop thru the keys */

var personJSON = {
    "name": "Sumit",
    "id": 10,
    "height": 5.7
};

// Loop thru the keys
for (var key in personJSON) {
    console.log(key, personJSON[key]);
}

//Refer only current property hasOwnProperty() parent property not refer
for (var key in personJSON) {
    if (personJSON.hasOwnProperty(key)) {
        console.log(key, personJSON[key]);
    }
}