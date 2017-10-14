var request = require('superagent');

$(document).ready(function() {

    function getUserInfo() {
        request
	        .get('http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74')
	        .then(function(res) {
	            // console.log(res);
	            console.log(res.status, res.body);
	        });
    }

    getUserInfo();

    // var cardsContainer = $('#cards');
    // var card = $(callback)




});