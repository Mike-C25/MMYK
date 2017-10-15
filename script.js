//modules
 var request = require('superagent');

//globals
// var infoTemp;

/*
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
*/

/*
function branches() {
	var url = `http://api.reimaginebanking.com/branches?key=e37a0183d9b8d2e386401e45ec9dab74`;
	console.log(url);
    request.get(url).then(function(res) {
    	console.log(res.body[0]);
        // statusGet(res.status);
        // resGet(res.body); //do something
    });
}
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~           XXX            ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~XXXXXXXXXXXXXX            ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~           XXX            ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~           XXX            ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// creation of URLs for calls
function accCall(id,type){
	return 'http://api.reimaginebanking.com/accounts/'+id+'/'+type+'?key=e37a0183d9b8d2e386401e45ec9dab74'
}

function then(id,queue,types,info){
	if (queue.length != 0){
		// console.log(info)
		callInterface[queue.shift()](id,queue,types,info);
	} else {
		console.log(info);
	}
}

function balance(id,types,info){
	console.log(info);
	var currT;
	var currI;
	for (i in types){
		if (types[i] == "account"){

		}
	}
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                          ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                          ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                          ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                          ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Different calls
var callInterface = {
	account: function(id,queue=[],types=[],info=[]){
		request.get('http://api.reimaginebanking.com/accounts/'+id+'?key=e37a0183d9b8d2e386401e45ec9dab74').then(function(res){
			// console.log("bills");
			types.push("account");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},
	bills: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"bills")).then(function(res){
			// console.log("bills");
			types.push("bills");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},

	deposits: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"deposits")).then(function(res){
			// console.log("deposits");
			types.push("deposits");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},

	loans: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"loans")).then(function(res){
			// console.log(res.status, res.body, res.header);
			types.push("loans");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},
	purchases: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"purchases")).then(function(res){
			// console.log(res.status, res.body, res.header);
			types.push("purchases");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},
	transfers: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"transfers")).then(function(res){
			// console.log(res.status, res.body, res.header);
			types.push("transfers");
			info.push(res.body);
			then(id,queue,types,info);
		});
	},
	withdrawals: function(id,queue=[],types=[],info=[]){
		request.get(accCall(id,"withdrawals")).then(function(res){
			// console.log(res.status, res.body, res.header);
			types.push("withdrawals");
			info.push(res.body);
			then(id,queue,types,info);
		});
	}

}

//accounts();
// console.log(getDate());
// callInterface['account']('59e23357a73e4942cdafe22e')
callInterface.bills("59e23357a73e4942cdafe22d",["deposits","loans","purchases","transfers","withdrawals"]);
callInterface.account("59e23357a73e4942cdafe22d");


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~XXXX          XXXX        ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   XXXX          XXXX     ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      XXXX          XXXX  ~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~          XXXX        XXXX~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// balance(types,info)
/*
balance('aaa',["bills","deposits","loans","purchases","transfers","withdrawals"],
	[{
	_id: "bills",
    status: "pending",
    payee: "string",
    nickname: "string",
    creation_date: "2017-10-14",
    payment_date: "2017-10-14",
    recurring_date: 0,
    upcoming_payment_date: "2017-10-14",
    account_id: "string"
	}
	,{
	_id: "deposits",
    type: "p2p",
    transaction_date: "2017-10-14",
    status: "pending",
    payee_id: "string",
    medium: "balance",
    amount: 0.01,
    description: "string"
	},
	{
	_id: "loans",
    account_id: "string",
    type: "home",
    creation_date: "2017-10-14",
    status: "pending",
    credit_score: 687,
    monthly_payment: 25,
    amount: 100,
    description: "string"
	},
	{
	_id: "purchases",
    type: "merchant",
    merchant_id: "string",
    payer_id: "string",
    purchase_date: "2017-10-14",
    amount: 0.01,
    status: "pending",
    medium: "balance",
    description: "string"
	},
	{
	_id: "transfers",
    type: "p2p",
    transaction_date: "2017-10-14",
    status: "pending",
    medium: "balance",
    payer_id: "string",
    payee_id: "string",
    amount: 0.01,
    description: "string"
	},
	{
	_id: "withdrawals",
    type: "p2p",
    transaction_date: "2017-10-14",
    status: "pending",
    payer_id: "string",
    medium: "balance",
    amount: 0.01,
    description: "string"
	}
	]);
*/