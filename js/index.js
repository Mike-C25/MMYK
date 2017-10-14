// var request = require('superagent');

$(document).ready(function() {

    // function getUserInfo() {
    //     request
    //         .get('http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74')
    //         .then(function(res) {
    //             // console.log(res);
    //             console.log(res.status, res.body);
    //         });
    // }

    $.ajax({
        url: 'https://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74',
        success: function(results) {
            console.log(results);
        }
    });

    getUserInfo();

    // var cardsContainer = $('#cards');
    // var card = $(callback)




});