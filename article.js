(function runs() {
	console.log("let's do this");
	getText(readArticle, "content.txt");
	getText(readSources, "src.txt")
})();

function readArticle(inp){
	var r = {
		"section":"",
		"title":"",
		"auth":"",
		"date":"",
		"content":""
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

function readSources(inp){
	if(!((document.getElementById('sources').innerHTML).includes("01.jpg")))
		document.getElementById('sources').innerHTML += "<img src='01.jpg' width='700' onerror='imgError(this)'/>"

	if(inp.length === 0) return;
	arr = inp.split('\n');
	var r = ""; 
	for(a in arr){
		r += '<p>'
		r += makeLinks(arr[a]);
		r += '</p>'
	}

	if (!((document.getElementById('sources').innerHTML).includes('<p>')))
		document.getElementById('sources').innerHTML += r;
}

function makeLinks(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}