(function runs() {
	console.log("let's do this");
	generateNav();
	printArticle();
})();
var sections = [
	"World",
	"U.S.",
	"Sports",
	"Arts & Entertainment",
	"Lifestyle"
];
function generateNav(){
	//document.getElementById("nav-div").innerHTML = {}
}

function printArticle(){
	var txt = '';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		var out = readArticle(xmlhttp.response);

		document.getElementById("section").innerHTML = out.section;
		document.getElementById("title").innerHTML = out.title;
		document.getElementById("auth").innerHTML = out.auth;
		document.getElementById("date").innerHTML = out.date;
		document.getElementById("content").innerHTML = out.content;

	};
	xmlhttp.open("GET","content.txt", true);
	xmlhttp.send();
}

function readArticle(inp){
	var r = {
		"section":"",
		"title":"",
		"auth":"",
		"date":"",
		"content":"",
		"sources":""
	}
	arr = inp.split('\n');
	r.section = (arr[0]).toUpperCase();
	r.title = toTitleCase(arr[1]);
	r.auth = "By" + (arr[2]).toUpperCase();
	r.date = arr[3];

	r.content = "<p>";
	for(i in arr){
		if(i > 3) r.content += (arr[i] + "</p><p>");
	}
	r.content += "</p>"
	return r;
}

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}