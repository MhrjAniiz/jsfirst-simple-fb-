
var database = [
	{
		username : "anish",
		password :"hello"
	},
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


function signIn(username, password){
	if(username === database[0].username && password === database[0].password){
		console.log(newsFeed);
	}
	else{
		alert("sorry wrong username and password")
	}
}