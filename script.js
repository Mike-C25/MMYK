var request = require('superagent');
var userAccounts;
var userTempID;

//accounts calls
request.get('http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res) {
    // console.log(res);
    statusGet(res.status);
    resGet(res.body); //do something
});


function statusGet(status) {
    console.log(status);
}


function resGet(response) {
	console.log(response);
	console.log("\n");
    userAccounts = response;

    // for(users in userAccounts){

    // }
    if (userAccounts[0]) {
        // console.log(userAccounts[0]._id);
        userTempID = userAccounts[0]._id;
        getBranches();

    }
}


//get Branches info

function getBranches() {
	var url = `http://api.reimaginebanking.com/branches?key=e37a0183d9b8d2e386401e45ec9dab74`;
	console.log(url);
    request.get(url).then(function(res) {
    	console.log(res.body[0]);
        // statusGet(res.status);
        // resGet(res.body); //do something
    });
}




// request.get('')