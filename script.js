var request = require('superagent');
request.get('http://api.reimaginebanking.com/atms?key=e37a0183d9b8d2e386401e45ec9dab74').end(function(res){
    statusGet(res.status);
    resGet(res.body); //do something
});


function statusGet(status){
	console.log(status);
}


function resGet(response){
	console.log(response);
}