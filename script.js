
var database = [
	{
		username : "anish",
		password :"hello"
	},
	{
		username : "soni",
		password : "hello"
	},
	{
		username : "ram",
		password : "what",
	}
];

var newsFeed = [
	{
		username :"anish",
		timeline : "what a great day"
	},
	{
		username :"ram",
		timeline : "javascript first use"
	},
	{
		username :"anish123",
		timeline : "what the hell"
	},
];

var userNamePrompt = prompt("enter the username ");
var passwordPrompt = prompt("enter the password");


signIn(userNamePrompt, passwordPrompt);

function isUserValid(username,password){
	for(var i = 0 ; i<database.length ; i++){
		if(username === database[i].username && password === database[i].password){
			return true;
		}
	}
	return false;	
}


function signIn(username, password){
		if(isUserValid(username,password)){
			console.log(newsFeed);
		}
	
	else{
		alert("sorry wrong username and password");
		}

}

