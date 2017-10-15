var request = require('superagent');

accountKey = "59e23357a73e4942cdafe22d";
//http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74

request.get('http://api.reimaginebanking.com/accounts/59e23357a73e4942cdafe22d/deposits?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){

 	var ret = res.body;

	console.log(ret);
	// console.log(res.status, res.body);
    // statusGet(res.status);
    resGet(ret); //do something
	// console.log(ret);

});

function resGet(resId){

	var balArr = [];

	for (var i = 0; i < resId.length; i++) {
			balArr[i] = resId[i].amount;
		}

	console.log(balArr);

}