var request = require('superagent');

accountKey = "59e23357a73e4942cdafe22d";
//http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74

request.get('http://api.reimaginebanking.com/accounts/59e23357a73e4942cdafe22d/deposits?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
	// console.log(res.status, res.body);
 	// var ret = res.body[0]._id;
 	var ret2 = res.body;
    // statusGet(res.status);
    // resGet(ret, ret2); //do something
	// console.log(ret);
	console.log(ret2);
});


function statusGet(status){
	console.log(typeof(status) );
}


function resGet(resId, resId2){
	console.log(resId+" , "+resId2);
	console.log("resID: "+resId);
	request.get('http://api.reimaginebanking.com/accounts/'+resId+'/deposits?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
		console.log(JSON.stringify(res.body,null,2));
	})
}
