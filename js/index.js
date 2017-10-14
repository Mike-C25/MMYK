// var request = require('superagent');

$(document).ready(function() {

    //GET User Info
    function getUserInfo() {
        $.ajax({
            url: 'http://api.reimaginebanking.com/accounts?key=e37a0183d9b8d2e386401e45ec9dab74',
            success: function(results) {
                console.log(results);
                //get customer ID
                if (results) {
                    queryCard(results[0].customer_id);
                } else {
                    console.log('no accounts!');
                }
            }
        });
    }

    //create cards
    function queryCard(cID) {
        url = 'http://api.reimaginebanking.com/customers/' + cID + '/accounts?key=e37a0183d9b8d2e386401e45ec9dab74';
        $.ajax({
            url: url,
            success: function(results) {
                if (results) {
                    for (a in results) {
                        //Create Card
                        console.log(results[a]);
                        var cardsContainer = $('#cards');
                        var card = $('<div>').addClass('card');
                        console.log(card);
                        var html = '<p id="accID">' + results[a].nickname + ": " + results[a]._id + '</p>' +
                        		   '<p class="rewards">' + 'Rewards #: ' + results[a].rewards+ '</p>' + 
                        		   '<h2 class="balance">' + 'Balance: ' + convertWithCommas(results[a].balance) + '</h2>' +
                        		   '<p class="type">' + 'Type: ' + results[a].type + '</p>';

                       	console.log(html);

                      	card.append(html);
                      	cardsContainer.append(card);
                        // var id = $('<p>').addClass('id').text(`${results[a].nickname}: ${results[a]._id}`);
                        // var rewards = $('<p>').addClass('rewards').text(`${results[a].rewards}`);
                        // var balance = $('<h2>').addClass('balance').text(convertWithCommas(results[a].balance));
                        // var type = $('<p>').addClass('type').text(results[a].type);
                    }
                } else {
                    console.log('err');
                }
            }
        });
    }


    function convertWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    getUserInfo();

    // var cardsContainer = $('#cards');
    // var card = $(callback)


    // {
    //     _id: '59e23357a73e4942cdafe22e',
    //     type: 'Checking',
    //     nickname: 'Bernie\'s Account',
    //     rewards: 19561,
    //     balance: 47686,
    //     customer_id: '59e23355a73e4942cdafe229'
    // }]

});