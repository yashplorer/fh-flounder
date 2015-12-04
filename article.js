(function runs() {
	console.log("let's do this");
	getText(readArticle, "content.txt");
})();

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
	r.auth = "By " + (arr[2]).toUpperCase();
	r.date = arr[3];

	r.content = "<p>";
	for(i in arr){
		if(i > 3) r.content += (arr[i] + "</p><p>");
	}
	r.content += "</p>"
	

	document.getElementById("section").innerHTML = r.section;
	document.getElementById("title").innerHTML = r.title;
	document.getElementById("auth").innerHTML = r.auth;
	document.getElementById("date").innerHTML = r.date;
	document.getElementById("content").innerHTML = r.content;
}