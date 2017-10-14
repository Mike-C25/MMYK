var request = require('superagent');




request.get('http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
	console.log(res.status, res.body);
    statusGet(res.status);
    resGet(res.body); //do something
});


function statusGet(status){
	console.log(typeof(status) );
}


function resGet(response){
	console.log(response);
}