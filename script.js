var request = require('superagent');
var userAccounts;
var userTempID;

function accounts(type=""){
	if (type===""){	
		request.get('http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
			console.log(res.status, res.body);

		});
	} else {
		request.get('http://api.reimaginebanking.com/accounts?type='+type+'&key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
			console.log(res.status, res.body);

		});
	}
}




accounts()



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

